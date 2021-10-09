
// function TripDetail(props) {
//   const [tripList, updateTripList] = useState('');
//   const [tripCoordinates, updateCoordinates] = useState('');
//   const handleSubmission = e => {};
//   return (
//     <div className="allEntries"> {/*instead of rendering all entries, make it render only the entry corresponding to currently selected pin on map */}  
//       <div className="cell" className='divScroll'>
//         <input type={submit}></input>
//       </div><br/>
//   </div>
//   )
// }
import { useState, useEffect } from "react";
import React from 'react';
import style from '../index.css';
import { Grid, TextField, Button, Paper } from '@material-ui/core';
//import logo from '../images/journalLogo';
// const cardStyling = {
//   bgcolor: 'grey',
//   boxShadow: 1,
//   borderRadius: 0,
//   p: 15,
//   minWidth: 100,
// }

// import { makeStyles } from '@mui/styles';
//for mui styles import..

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// });

function TripForm() {
    const [] = useState('');
    const [tripList, updateTripList] = useState('');
    //const [tripCoordinates, updateCoordinates] = useState('');
    // const classes = useStyles(); --- to use once mui styles properly imported
    return (
      <Paper elevation={5} style={{margin:"50px"}}>
        <Grid container direction="column" alignItems="center" justify="center" minHeight="100vh" spacing="5" background-color="grey">
      {/*instead of rendering all entries, make it render only the entry corresponding to currently selected pin on map */}  
          {/* className='divScroll'> */}
      <Grid item>
        Trip Entry 
          <TextField variant="outlined" minHeight="9em" fullWidth style={{ marginBottom:"2em" }}>
            Trip Detail 
          </TextField>
             {/* </Card> */} 
             <Button variant="contained" size="large">Add An Entry</Button>
             {/* {tripList === null? "create a trip": <input></input>} */}
      </Grid>
     
    </Grid>
      </Paper>
    
    )
}

export default TripForm;
  