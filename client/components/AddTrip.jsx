import React, { useState, useEffect } from "react"; 
import logo from '../images/journalLogo';
import {useState} from "react";   
          
function addTrip(props) {
  const [trip, setTrip] = useState("");
  const [number, setNumber] = useState(null);
  // const date = useSelector((state) => state.date);

  const createTrip = (e) => { // REFACTOR
    e.preventDefault();

    fetch("/api/trips/createTrip", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ trip, number }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch(() => console.log("fetch error has occurred"));
  };

  return (
    <form> 
      <div className="currentEntry"> {/* input field to add new journal entry. neeeds to be combined with input fields for date & trip duration. */}
            <textarea className="cell" value={props.journalEntry} onChange={e => props.journalUpdater(e.target.value)}>
              New Entry
            </textarea><br/>
            <button class='SubmitButton' onClick={handleSubmission}>Submit Entry </button> {/*on submission, also include lat&long values in body */}
            <br/>
        </div>

        <div class="itinerary">
        <div>
          <p>
            <form>
              <label for="">Where Do You Want to Go?</label>

              <input
                type="text"
                className="cell"
                onChange={(e) => setTrip(e.target.value)}
              />
              <br />
              <br />
              <label for=""> How Many Days Will You be Away?</label>
              <input
                type="number"
                formMethod="post"
                value={number}
                onChange={(e) => numberSetter(e.target.value)}
              />
              <br />
              <br />
              <label htmlFor="">When Are You Leaving?</label>
              <br />
              <br />
              <input type="date" />
              <br />
              <br />
              <button onClick={createTrip}>Lets Go!</button>
            </form>
          </p>
        </div>
      </div>


    </form> 
  )
  
}        
            
export default addTrip;