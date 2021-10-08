//onclick functions to be established here and passed as props??
//planning page for trip

import React, { useEffect, useState } from 'react';
import logo from '../images/journalLogo.png';
import MapBox from './MapBox.jsx';
import TripDetail from './TripDetail.jsx';

function Main (props) {
    //'my itinerary': Day1, Day2, etc
    const [totalDays, updateDays] = useState('');
    const [location, locationSetter] = useState('');
    const [journalEntry, journalUpdater] = useState('');

    const [tripDetailOrAddTrip, setTripDetailOrAddTrip] = useState('tripDetail'); // to conditionally render either TripDetail or AddTrip component
    // const [deleter, entryDeleter] = useState('');
    // const [editor, entryEditor] = useState('');
    const DEFAULT_TRIP_ID = '6158907b4a83388f7dc89df9'; // make default trip dynamic to reflect the next soonest trip?
    let renderTripDetailOrAddTrip;

    const handleSubmission = (e) => {
      e.preventDefault();
      console.log('submitted', journalEntry);
      // add new journal entry to DB
      fetch(`/api/trips/${DEFAULT_TRIP_ID}/comments`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          body: journalEntry,
          date: Date.now()
        })
      }).then(response => response.json())
      .then(data => console.log("added"));
    };

    useEffect(() => {
      fetch(`/api/trips/${DEFAULT_TRIP_ID}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())
      .then(data => {
        const commentData = data.data.trip.comments;

        for (let i = 0; i < commentData.length; i++) {
          comments.push(<p>{commentData[i].body}</p>);
        }
        
        setCommentList(comments);
      });

      // determine whether to render AddTrip or TripDetails component:
      renderTripDetailOrAddTrip = tripDetailOrAddTrip === 'tripDetail' ? <TripDetail /> : <AddTrip />;

    }, []);
    //function that makes a get request to trip journal endpoint
    //send back note data which we'll render on page
      //with map with editing and deleting ability
      
    return (
      <div>
        {/* {props.userName}, you're on your way to: <br/> */}
        <a href='http://localhost:8080/Login'> <img src={logo} alt='Travel Planner logo'/> </a> <h2>My Trip Journal...</h2>

        {/* <Map /> */}
        <MapBox />
        {renderTripDetailOrAddTrip}
        <button id='addTripButton' onClick={() => {}}>Add a Trip</button>
        
        <div>
          {/* <button class='SubmitButton' onClick={handleSubmission}>Edit An Entry</button> {/**currently handleSubmission is not set up to edit or delete  */}
          {/* <button class='SubmitButton' onClick={handleSubmission}>Delete An Entry </button> */}
          {/* <label for='html'></label><br/> */}
        </div>
      </div>
    
    )

  }

  export default Main;