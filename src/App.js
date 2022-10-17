import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import PrintAllEmailsController from "./ReviewFiles/PrintAllEmails";

//TODO View all of my email messages (subject line + sender)
//TODO View one of my email messages with all of its details
//TODO Send an email
//TODO Search for a specific email by subject

function App() {
    //Use State -----------------
    const [emails, setEmails] = useState([])


    //Use Effect -----------------
    useEffect(() =>{
        getAllEmails()
    }, [])//Dependent Don't Forget About this*****


    //Custom Methods --------------


    function getAllEmails()
    {
        fetch("http://localhost:3001/emails")
            .then(response => {
                return response.json()
            })
            .then( (responseInJSON) => {
                setEmails(responseInJSON);
            })
    }


    //MAIN Start --------------
  return (
    <div className="App">
      <h1>Mock Gmail</h1>
        <PrintAllEmailsController allEmails={emails}/>
    </div>
  );
}

export default App;
