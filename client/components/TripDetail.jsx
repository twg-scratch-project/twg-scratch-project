
import React, { useState, useEffect } from "react"; 
// import logo from '../images/journalLogo';


function TripDetail({curSelectedTrip}) { // props = current selected trip object
  // const [tripCoordinates, updateCoordinates] = useState('');
  //const handleSubmission = e => {};
  return (
    <div className="allEntries"> {/*instead of rendering all entries, make it render only the entry corresponding to currently selected pin on map */}  
      <div className="cell" className='divScroll'>
      {curSelectedTrip.locationName} 
      </div>
  </div>
  )
  
}
export default TripDetail;