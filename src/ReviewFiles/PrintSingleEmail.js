import  {useState} from "react";



function PrintSingleEmail(props)
{
    //Use State
    const [searchItem, setSearchItem] = useState("");

    //Custom Method
    // const getSearchItems = () => {
    //     fetch(`http://localhost:3001/search?query=${searchItem}`)
    //         .then(res => res.json())
    //         .then((data) => {
    //             props.allEmails(data);
    //         })
    // }



    //Main Return

    return (
        <>
            {/*<h1>Print Single Email Logic Area</h1>*/}
            {/*<input*/}
            {/*type={"text"}*/}
            {/*placeholder={"Type In an Id To Search For"}*/}
            {/*value={searchItem}*/}
            {/*onChange={(event) => {setSearchItem(event.target.value)}}*/}
            {/*/>*/}
            {/*<button onClick={getSearchItems}>Submit</button>*/}
        </>
    )


}


export default PrintSingleEmail
