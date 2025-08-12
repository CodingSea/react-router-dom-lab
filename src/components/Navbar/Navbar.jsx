import { Link } from "react-router";
import Home from "../../Home";
import MailboxList from "../MailboxList/MailboxList";
import MailboxForm from "../MailboxForm/MailboxForm";

function Navbar()
{
    return (
        <>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/mailboxes" >Mailboxes</Link></li>
                <li><Link to="/new-mailbox" >New Mailbox</Link></li>
            </ul>
        </>
    )
}

export default Navbar;