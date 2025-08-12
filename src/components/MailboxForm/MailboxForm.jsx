import { useState } from "react";

function MailboxForm({ addBox })
{
    const [newMailbox, setNewMailbox] = useState({});

    function handleChange(event)
    {
        setNewMailbox({...newMailbox, [event.target.name]: event.target.value});
    }

    return (
        <form id="root" onSubmit={ () => addBox(newMailbox) }>
            <label htmlFor="boxOwner">Enter a Boxholder:</label>
            <input name="boxOwner" type="text" placeholder="Boxholder name" onChange={handleChange}></input>

            <label htmlFor="boxSize">Select a Box Size:</label>
            <select name="boxSize" onChange={handleChange}>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
            </select>

            <button type="submit">Submit</button>
        </form>
    )
}

export default MailboxForm;