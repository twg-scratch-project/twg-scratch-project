import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import logo from '../images/journalLogo';
import Card from '@material-ui/core';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

function TripDetail() {
    const [] = useState('');
    return (
    <div className="allEntries"> {/*instead of rendering all entries, make it render only the entry corresponding to currently selected pin on map */}  
        <div className="cell" className='divScroll'>
            Prev Entries: 
            <Card varient='outlined'>{Card}</Card>
            <Button></Button>
        </div><br/>
    </div>
    )
  
}

export default TripDetails;