import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import PrintAllEmailsController from "./ReviewFiles/PrintAllEmails";
import PrintSingleEmail from "./ReviewFiles/PrintSingleEmail";
import printSingleEmail from "./ReviewFiles/PrintSingleEmail";
import {TextField} from "@mui/material";
import {Button} from "@mui/material";
import Box from '@mui/material/Box';
import SendEmail from "./ReviewFiles/SendEmail";


//TODO View all of my email messages (subject line + sender)
//TODO View one of my email messages with all of its details
//TODO Send an email
//TODO Search for a specific email by subject

function App() {
    //Use State -----------------
    const [emails, setEmails] = useState([])
    const [singleEmail, setSingleEmail] = useState("")

    //Use Effect -----------------
    useEffect(() => {
        // getAllEmails()
    }, [])//Dependent Don't Forget About this*****


    //Custom Methods --------------


    function getAllEmails(e) {
        fetch("http://localhost:3001/emails")
            .then(response => {
                return response.json()
            })
            .then((responseInJSON) => {
                setEmails(responseInJSON);
            })
    }

    function getSingleEmail(id) {
        fetch(`http://localhost:3001/emails/${id}`)
            .then(response => {
                return response.json()
            })
            .then((responseInJSON) => {
                setSingleEmail(responseInJSON);
            })

    }


    //MAIN Start --------------
    return (
        <div className="App">
            {/*Title*/}
            {document.title = "Emails Feels"};
            <h1 className={"one"}>Mock Gmail</h1>


            {/*Print ALL Email Logic*/}
            <Button type={"submit"} variant="contained" onClick={() => getAllEmails(1)}>Get ALL Sender & Subject</Button><br/><br/><br/>
            <PrintAllEmailsController allEmails={emails}/>
            {/*Print Single Email Logic*/}

            {/*Print Single Email Logic*/}
            <PrintSingleEmail/>
            {/*Print Single Email Logic*/}

            {/*Send Email Logic*/}
           <SendEmail></SendEmail>

        </div>
    );
}

export default App;


