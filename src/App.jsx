import { Route, BrowserRouter as Router, Routes } from "react-router";
import Home from "./Home";
import Navbar from "./components/Navbar/Navbar";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import { useState } from "react";

const App = () =>
{
  

  return (
    <Router>
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/mailboxes" element={<MailboxList />}>Mailboxes</Route>
          <Route path="/new-mailbox" element={<MailboxForm />}>New Mailbox</Route>
          <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />} />
        </Routes>
      </>
    </Router>
  )
};

export default App;