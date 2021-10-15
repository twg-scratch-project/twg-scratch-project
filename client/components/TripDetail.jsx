
import React, { useState, useEffect } from "react"; 
// import logo from '../images/journalLogo';


function TripDetail({curSelectedTrip}) { // props = current selected trip object
  // const [tripCoordinates, updateCoordinates] = useState('');
  //const handleSubmission = e => {};
  
  // SELECT DEFAULT VALUES WHEN NO TRIP IS PRESENT


  const { locationName, coordinates, startDate, endDate, description} = curSelectedTrip;


  return (
    <div className="allEntries"> {/*instead of rendering all entries, make it render only the entry corresponding to currently selected pin on map */}  
      <div className="cell" className='divScroll'>
      {locationName} 
      </div>
  </div>
  )
  
}
export default TripDetail;