import React, { useState, useEffect } from "react"; 
// import logo from '../images/journalLogo';
          
function addTrip(props, setAllTrips) {
  const [tripName, setTripName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [notes, setNotes] = useState("");
  // const [newTrip, setNewTrip] = useState({});
  const [number, setNumber] = useState(null);
  // const date = useSelector((state) => state.date);

  // const [deleter, entryDeleter] = useState('');
  // const [editor, entryEditor] = useState('');

  let renderTripDetailOrAddTrip;

  const handleSubmission = (e) => { // moved from Main
    e.preventDefault();
    console.log('submitted', newTrip);
    // add new journal entry to DB
    fetch(`/api/addTrip`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        trip: newTrip,
        date: e.timeStamp
      })
    }).then(response => response.json())
    .then(response => {
      setAllTrips(response); // update list of all trips in state. should trigger a re-invokation of useLayoutEffect in Main & rerender Map markers
    });
  };


  return (
    // <form> 
    //   <div className="currentEntry"> {/* input field to add new journal entry. neeeds to be combined with input fields for date & trip duration. */}
    //         <textarea className="cell" value={notes} onChange={e => props.setNotes(e.target.value)}>
    //           New Entry
    //         </textarea><br/>
    //         <button class='SubmitButton' onClick={handleSubmission}>Submit Entry </button> {/*on submission, also include lat&long values in body */}
    //         <br/>
    //     </div>

    //     <div class="itinerary">
    //     <div>
    //       <p>
    //         <form>
    //           <label for="">Where Do You Want to Go?</label>

    //           <input
    //             type="text"
    //             className="cell"
    //             onChange={(e) => setTripName(e.target.value)}
    //           />
    //           <br />
    //           <br />
    //           <label htmlFor="">When Are You Leaving?</label>
    //           <br />
    //           <br />
    //           <label for=""> When are you returning?</label>
    //           <input
    //             type="number"
    //             formMethod="post"
    //             value={number}
    //             onChange={(e) => startDate(e.target.value)}
    //           />
    //           <br />
    //           <br />
    //           <input type="date" />
    //           <br />
    //           <br />
    //           <button onClick={handleSubmission}>Lets Go!</button>
    //         </form>
    //       </p>
    //     </div>
    //   </div>


    // </form> 
    <div>Hello this is the AddTrip component, thanks</div>
  )
  
}        
            
export default addTrip;