
import React, { useState, useEffect } from "react"; 
import logo from '../images/journalLogo';
import {useState} from "react";  

function TripDetail(props) {
  const [tripList, updateTripList] = useState('');
  const [tripCoordinates, updateCoordinates] = useState('');
  const handleSubmission = e => {};
  return (
    <div className="allEntries"> {/*instead of rendering all entries, make it render only the entry corresponding to currently selected pin on map */}  
      <div className="cell" className='divScroll'>
        <input type={submit}></input>
      </div><br/>
  </div>
  )
  
}
  