import React, { useState, useEffect } from "react"; 
import { Grid, TextField, Button, Paper } from '@material-ui/core';
//import logo from '../images/journalLogo';  
// import Map from "./Map.jsx";
          

function AddTrip(props) {
  // const [trip, setTrip] = useState("");
  // const [number, setNumber] = useState(null);
  // const date = useSelector((state) => state.date);

  const createTrip = (e) => { // REFACTOR
    e.preventDefault();

    fetch("/api/trips/createTrip", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ trip, number }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch(() => console.log("fetch error has occurred"));
  };
  // onClick={handleSubmission} onclick needed
  
  return (
    <Paper elevation={10} style={{margin:"50px"}}>

      <Grid container direction="column" alignItems="center" justifyContent="center" minHeight="100vh" spacing={5}> 
       {/* input field to add new journal entry. neeeds to be combined with input fields for date & trip duration. */}
       {/* <div className="cell"> */}
            {/* <Grid item> <Map/> </Grid> */}
             <Grid item>

               <span></span> <br />
             {/* <input
               type="text"
               onChange={(e) => setTrip(e.target.value)}
             /> */}
  
             </Grid>
             <Button onClick={createTrip} variant="contained" size="small">Create My Trip!</Button>
             <br />
             <br />
      </Grid> 
    </Paper>
  )
}        
            
export default AddTrip;