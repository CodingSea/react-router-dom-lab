import { useParams } from "react-router";

function MailboxDetails({ mailboxes })
{
    const params = useParams();
    const selectedMailbox = mailboxes.find(x => x._id === Number(params.id));

    return (
        <>
            <h1>{`Mailbox ${Number(params.id)}`}</h1>
            <h2>Details</h2>
            <p>Boxholder: {selectedMailbox.boxOwner}</p>
            <p>Box Size: {selectedMailbox.boxSize}</p>
        </>
    )
}

export default MailboxDetails;