import { Link } from "react-router";
import Home from "../../Home";
import MailboxList from "../MailboxList/MailboxList";
import MailboxForm from "../MailboxForm/MailboxForm";

function Navbar()
{
    return (
        <>
            <Link to="/" >Home</Link>
            <Link to="/mailboxes" >Mailboxes</Link>
            <Link to="/new-mailbox" >New Mailbox</Link>
        </>
    )
}

export default Navbar;