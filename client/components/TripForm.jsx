
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

import React from 'react';
import style from '../index.css';
import { useState, useEffect } from "react";
//import logo from '../images/journalLogo';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import MapBox from './MapBox.jsx';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import {Button, CardHeader} from '@mui/material';

const cardStyling = {
  bgcolor: 'background.paper',
  boxShadow: 1,
  borderRadius: 0,
  p: 15,
  minWidth: 100,
}

function TripForm() {
    const [] = useState('');
    const [tripList, updateTripList] = useState('');
    //const [tripCoordinates, updateCoordinates] = useState('');
    return (
    <div> 
    {/*instead of rendering all entries, make it render only the entry corresponding to currently selected pin on map */}  
        {/* <div className="cell" className='divScroll'> */}
            <MapBox/>
            Trip Detail 
              <Card sx={cardStyling}>
                  Trip Entry
             </Card>
             <Button variant="outlined">Add A Trip</Button>
             {/* {tripList === null? "create a trip": <input></input>} */}
        <br/>
    </div>
    )
}

export default TripForm;
  