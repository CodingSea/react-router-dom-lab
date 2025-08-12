import { Link } from "react-router";

function MailboxList({ mailboxes })
{

    return (
        <>
            <h1>Mailbox List</h1>

            <ul>
                {
                    mailboxes.map((box) => 
                    {
                        return (
                            <>
                                <Link to={`/mailboxes/${box._id}`}>Mailbox { box._id } </Link>
                            </>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default MailboxList;