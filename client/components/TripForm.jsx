
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
import { Grid, TextField, Button, Paper, Card, CardContent } from '@material-ui/core';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import logo from '../images/journalLogo.png';

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


function TripForm(props) {
    const [tripList, updateTripList] = useState('');
    // const [journalEntry, journalUpdater] = useState('');
    const entryDate = `${new Date().getMonth()+1}/${new Date().getDay()}/${new Date().getFullYear()}`;
    //const [tripCoordinates, updateCoordinates] = useState('');
    // const classes = useStyles(); --- to use once mui styles properly imported
    const journalFunction = (e) => props.journalUpdater(() => 
    {
      console.log(e.target.value)
      return e.target.value
    });

    return (
      <Paper elevation={5} style={{margin:"50px", height:"75%"}}>
        <img src={logo} alt="logo" width="200" height="300"/>
        <Card style={{marginTop:"100px", padding:"50px", height:"75%"}}>
          <CardContent>
            <CardHeader
            title="Trip Journal"
            />
            <Grid container direction="column" justifyContent="center" spacing="5" >
                {/*instead of rendering all entries, make it render only the entry corresponding to currently selected pin on map */}  
                {/* className='divScroll'> */}
              <Grid item>
                {/* Field used to entry journal entries */}
                <TextField minHeight="9em" fullWidth style={{ marginBottom:"2em", width:"75%", textAlign:"center"}}
                multiline
                minRows={2}
                rowsMax={15}
                value={props.journalEntry}
                onChange={journalFunction}
                />
                <br/>
                <Button variant="contained" style={{ marginBottom:"2em"}} color="primary" size="large">Add An Entry</Button>
                  {/* {tripList === null? "create a trip": <input></input>} */}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Paper>
    )
}

export default TripForm;
  