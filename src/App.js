import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import PrintAllEmailsController from "./ReviewFiles/PrintAllEmails";
import PrintSingleEmail from "./ReviewFiles/PrintSingleEmail";
import printSingleEmail from "./ReviewFiles/PrintSingleEmail";



//TODO View all of my email messages (subject line + sender)
//TODO View one of my email messages with all of its details
//TODO Send an email
//TODO Search for a specific email by subject

function App() {
    //Use State -----------------
    const [emails, setEmails] = useState([])
    const [singleEmail,setSingleEmail] = useState({})

    //Use Effect -----------------
    useEffect(() =>{
       // getAllEmails()
    }, [])//Dependent Don't Forget About this*****


    //Custom Methods --------------


    function getAllEmails(e)
    {
        fetch("http://localhost:3001/emails")
            .then(response => {
                return response.json()
            })
            .then( (responseInJSON) => {
                setEmails(responseInJSON);
            })
    }
    function getSingleEmail( id)
    {
        fetch(`http://localhost:3001/emails/${id}`)
            .then(response => {
                return response.json()
            })
            .then( (responseInJSON) => {
                setSingleEmail(responseInJSON);
            })

    }



    //MAIN Start --------------
  return (
    <div className="App">
      <h1>Mock Gmail</h1>

            <button type={"submit"} onClick={() => getAllEmails(1)}>Get Sender & Subject</button>

            <button type={"submit"} onClick={() => getSingleEmail(5)}>Get Single Email & Subject</button>
             <p>{singleEmail.id}</p>
        <p>{singleEmail.sender}</p>
        <p>{singleEmail.message}</p>
        <PrintAllEmailsController allEmails={emails}/>
    </div>
  );
}

export default App;
