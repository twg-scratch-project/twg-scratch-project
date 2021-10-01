//onclick functions to be established here and passed as props??
//planning page for trip

import React from 'react';
import style from '../index.css';

function MyTripJournal (props) {
    //'my itinerary': Day1, Day2, etc
    return (
      <div>
        [props.userName], you're on your way to: <br/>
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

  export default MyTripJournal;