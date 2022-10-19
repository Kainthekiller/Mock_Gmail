import  {useState} from "react";
import {TextField} from "@mui/material";
import {Button} from "@mui/material";
import Box from "@mui/material/Box";

function PrintSingleEmail(props)
{
    //Use State
    const [singleEmail, setSingleEmail] = useState("")

    //Use Effect

    //Custom Method
    function getSingleEmail(id) {
        fetch(`http://localhost:3001/emails/${id}`)
            .then(response => {
                return response.json()
            })
            .then((responseInJSON) => {
                setSingleEmail(responseInJSON);
            })

    }

    //Main Logic
    return(
        <>
            <TextField id="outlined-basic" label="Search By ID" variant="outlined"
                       onChange={event => {
                           setSingleEmail(event.target.value)
                       }}
            />
                       <Box component="span" sx={{ m: 2, border: '2px dashed grey' }}>
                       <Button type={"submit"} variant="contained" onClick={() => getSingleEmail(singleEmail)}>Get Single Email & Subject</Button>
                       </Box>
                <p>{singleEmail.id}</p>
            <p>{singleEmail.sender}</p>
            <p>{singleEmail.message}</p>

        </>
    )

}


export default PrintSingleEmail
