import React, { useState, useEffect } from "react"; 
import { Grid, TextField, Button, Paper } from '@material-ui/core';
//import logo from '../images/journalLogo';
import MapBox from './MapBox.jsx';
//import logo from '../images/journalLogo';  
          


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
      <Grid container direction="column" alignItems="center" justify="center" minHeight="100vh" spacing="5"> 
       <div > {/* input field to add new journal entry. neeeds to be combined with input fields for date & trip duration. */}
      </div>
       <div>
       {/* <div className="cell"> */}
             
             <Grid item>
               <span >Where Do You Want to Go?</span> <br />
             {/* <input
               type="text"
               onChange={(e) => setTrip(e.target.value)}
             /> */}
             <TextField>

             </TextField>
             </Grid>
             <br />
             <Grid item>
             <label htmlFor="">When Are You Leaving?</label><br/>
             <br />
             <input type="date" />
             </Grid>
             <br />
             {/* <button onClick={createTrip}>Create My Trip!</button> */}
             <Button onClick={createTrip} variant="contained" size="small">Create My Trip!</Button>
             <br />
             <br />
       {/* </div> */}
      </div>
      </Grid> 
    </Paper>
    
  )
}        
            
export default AddTrip;