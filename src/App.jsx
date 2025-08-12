import { Route, BrowserRouter as Router, Routes } from "react-router";
import Home from "./Home";
import Navbar from "./components/Navbar/Navbar";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import { useState } from "react";

const App = () =>
{
  const [mailboxes, setMailboxes] = useState([{ _id: 1, boxSize: 'Small', boxOwner: 'Alex' }, { _id: 2, boxSize: 'Large', boxOwner: 'Ahmed' }]);

  function addBox(selectedSize, owner)
  {
    event.preventDefault();

    const newMailbox = 
    {
      _id: mailboxes.length + 1,
      boxSize: selectedSize,
      boxOwner: owner
    }

    const copyMailboxes = [...mailboxes, newMailbox];
    setMailboxes(copyMailboxes);
  }

  return (
    <Router>
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />}>Mailboxes</Route>
          <Route path="/new-mailbox" element={<MailboxForm mailboxes={mailboxes} addBox={addBox} />}>New Mailbox</Route>
          <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        </Routes>
      </>
    </Router>
  )
};

export default App;