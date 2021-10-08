
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
import { useState, useEffect } from "react";
//import logo from '../images/journalLogo';
import Card from '@mui/material/Card';
import MapBox from './MapBox.jsx';
import CardActions from '@mui/material/CardActions';
import {Button} from '@mui/material';

const cardStyling = {
  bgcolor: 'background.paper',
  boxShadow: 1,
  borderRadius: 0,
  p: 20,
  minWidth: 300,
}

function TripDetail() {
    const [] = useState('');
    return (
    <div className="allEntries"> {/*instead of rendering all entries, make it render only the entry corresponding to currently selected pin on map */}  
        {/* <div className="cell" className='divScroll'> */}
            <MapBox/>
            Trip Detail 
            <Card variant="outlined"
            sx={cardStyling}
            ></Card>
            <Button>Button</Button>
        {/* </div> */}
        <br/>
    </div>
    )
}

export default TripDetail;
  