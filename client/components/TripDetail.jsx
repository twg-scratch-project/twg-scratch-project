
import React, { useState, useEffect } from "react"; 
// import logo from '../images/journalLogo';


function TripDetail({curSelectedTrip}) { // props = current selected trip object
  // const [tripCoordinates, updateCoordinates] = useState('');
  //const handleSubmission = e => {};
  
  // SELECT DEFAULT VALUES WHEN NO TRIP IS PRESENT
  const defaultTrip =  {
    locationName : 'No trips available! Click the Add Trip button to get started.',
    coordinates : {latitude: 40.7128, longitude: -74.0060},
    startDate : 'No start date selected',
    endDate : 'No end date selected',
    description : 'This is where the description goes.' // in production these could be empty string, values included here for testing
  }
  const trip = curSelectedTrip.startDate ? curSelectedTrip : defaultTrip; // check to see if curSelectedTrip isn't empty object
  const { locationName, coordinates, startDate, endDate, description} = trip;

  
  return (
    <div className="allEntries"> {/*instead of rendering all entries, make it render only the entry corresponding to currently selected pin on map */}  
      <div className="cell" className='divScroll'>
      {locationName} 
      </div>
  </div>
  )
  
}
export default TripDetail;