//onclick functions to be established here and passed as props??
//planning page for trip

import React, { useEffect, useLayoutEffect, useState } from 'react';
// import logo from '../images/journalLogo.png';
import TripDetail from './TripDetail.jsx'
import AddTrip from './AddTrip.jsx'
import Map from './Map.jsx'

function Main (props) {  
  const defaultTrip =  {
    locationName : 'No trips available! Click the Add Trip button to get started.',
    coordinates : {latitude: 40.7128, longitude: -74.0060},
    startDate : 'No start date selected',
    endDate : 'No end date selected',
    description : 'This is where the description goes.', // in production these could be empty string, values included here for testing
    default: 'this is the default trip object' // to conditionally render no markers if default
  }
  const [upcomingTrips, setUpcomingTrips] = useState([]);
  const [pastTrips, setPastTrips] = useState([]);
  const [upcomingOrPast, setUpcomingOrPast] = useState('upcoming');
  const [tripDetailOrAddTrip, setTripDetailOrAddTrip] = useState('tripDetail'); // to conditionally render either TripDetail or AddTrip component
  const [curSelectedTrip, setCurSelectedTrip] = useState(defaultTrip);
  const [isLoading, setIsLoading] = useState(true);

  console.log('curSelectedTrip', curSelectedTrip)
  
  let renderTripDetailOrAddTrip;
  let listToDisplay;

  



  useEffect(() => {
    // GET all trips from DB corresponding to current user
    fetch("/api/gettrips/6160bc7c7768777ca716ee68")
    .then(res => {return res.json()})
    .then(response => {
      // determine default selected trip:
      if (response.pastTrips) { 
        setPastTrips(response.pastTrips);
      }
      if (response.upcomingTrips) {
        setUpcomingTrips(response.upcomingTrips);
        const firstUpcomingTrip = response.upcomingTrips[0];
        setCurSelectedTrip(firstUpcomingTrip);
      } 
      setIsLoading(false);
    });
  }, []);
  
  // determine whether to display markers for upcoming or past trips
  listToDisplay = upcomingOrPast === 'upcoming' ? upcomingTrips : pastTrips;
  // determine whether to render AddTrip or TripDetails component:
  renderTripDetailOrAddTrip = tripDetailOrAddTrip === 'tripDetail' ? <TripDetail curSelectedTrip={curSelectedTrip}/> : <AddTrip/>;
    
  return (
    <div>
      {/* {props.userName}, you're on your way to: <br/> */}
      {isLoading && <div>loading</div>}
      { !isLoading && 
      <>
      <div>                                                   
        <button type='button' onClick={() => {if(upcomingOrPast === 'past') {setCurSelectedTrip(upcomingTrips[0] ? upcomingTrips[0] : []); setUpcomingOrPast('upcoming')}; setTripDetailOrAddTrip('tripDetail')}}> See Upcoming Trips</button>
        <button type='button' onClick={() => {if(upcomingOrPast === 'upcoming') {setCurSelectedTrip(pastTrips[0] ? pastTrips[0] : []); setUpcomingOrPast('past')}; setTripDetailOrAddTrip('tripDetail')}}> See Past Trips</button>
        <button type='button' onClick={() => setTripDetailOrAddTrip('addTrip')}> Add A Trip</button>


      <Map 
        listToDisplay={listToDisplay} 
        upcomingOrPast={upcomingOrPast}
        setCurSelectedTrip={setCurSelectedTrip} 
        tripDetailOrAddTrip={tripDetailOrAddTrip} 
        defaultTrip={defaultTrip}
        />
      </div>
      {renderTripDetailOrAddTrip}
      <div>
        {/* <button class='SubmitButton' onClick={handleSubmission}>Edit An Entry</button> {/**currently handleSubmission is not set up to edit or delete  */}
        {/* <button class='SubmitButton' onClick={handleSubmission}>Delete An Entry </button> */}
        {/* <label for='html'></label><br/> */}
      </div>
      </>}
    </div>
  )

}

  export default Main;