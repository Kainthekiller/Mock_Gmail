import React from "react";
import {useState} from "react";


function SendEmail(props)
{
    //Use State
    const [senderText, setSenderText] = useState("");
    const [recipientText, setRecipientText] = useState("");
    const [subjectText, setSubjectText] = useState("");
    const [messageText, setMessageText] = useState("");


    //Use Effect


    //Custom Method
    function sendEmail(e)
    {
        const requestOptions =
            {
                method: "POST",
                headers: ({"Content-Type": "application/json"}),
                body: JSON.stringify(
                    {
                      sender: senderText,
                        recipient: recipientText,
                        subject: subjectText,
                        message: messageText
                    }
                )
            }
        e.preventDefault() // Dont Refresh the page
        fetch("http://localhost:3001/send",requestOptions)
            .then((responseNonJSON) =>{
                if (!responseNonJSON)
                {
                    throw new Error("Bad Input Brah")
                }
                return responseNonJSON;
            })
            .then(() =>{
                setSenderText("");
                setMessageText("");
                setRecipientText("");
                setSubjectText("");
            })
            .catch((e) =>{
                console.error(e);
            });


    }



    //Main

    return (
        <>
            <form onSubmit={(e) => {
                sendEmail(e)
            }}>
                <input placeholder="Sender Email:" value={senderText} onChange={(e) => {
                    setSenderText(e.target.value)
                }}/>
                <input placeholder="Recipient" value={recipientText} onChange={(e) => {
                    setRecipientText(e.target.value)
                }}/>
                <input placeholder="Subject" value={subjectText} onChange={(e) => {
                    setSubjectText(e.target.value)
                }}/>
                <input placeholder="Message" value={messageText} onChange={(e) => {
                    setMessageText(e.target.value)
                }}/>
                <button type="submit">Submit</button>
            </form>

        </>
    )
}


export default SendEmail