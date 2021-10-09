
//May be able to delete PTD component and place all in JournalForm component

import React from 'react';
import logo from '../images/journalLogo.png';

function PersonalTripDetails(props) {
    //'my itinerary': Day1, Day2, etc
    return (
      <div>
        [props.userName], you're on your way to: <br/>
        <a href='http://localhost:8080/Login'> <img src={logo} alt='Travel Planner logo'/> </a>
         <p><h3>[location]</h3></p>
        {/* {stored User Name} */}
        <div className="itinerary">
          {/* map displaying dynamic trip dates */}
            <div className="cell">Day One:</div>
            <div className="cell">Day Two:</div>
            <div className="cell">Day Three:</div>
            <div className="cell">Day Four:</div>
            <div className="cell">Day Five:</div>
            <div className="cell">Day Six:</div>
            <div className="cell">Day Seven:</div>
            <div className="cell">Day Eight:</div>
            <div className="cell">Day Nine:</div>
        </div>
      </div>
    
    )
  }

  export default PersonalTripDetails;