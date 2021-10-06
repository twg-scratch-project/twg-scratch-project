//page for individual user profile details
import React from "react";
import style from "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import logo from "../images/journalLogo.png";
import { useHistory } from "react-router-dom";
//import { name } from "./Login.jsx";

function UserProfile(props) {
  //to set dynamic dates
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const loginUser = useCallback(
    (username, password) => dispatch(actions.loginUser(username, password)),
    [dispatch]
  );

  //useState hooks
  const [trip, setTrip] = useState("");
  const [number, setNumber] = useState(null);
  // const date = useSelector((state) => state.date);

  const createTrip = (e) => {
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

  //onClick Button Fx

  //onSubmit Fx

  return (
    <div className="container">
      <h1>
        {" "}
        <a href="http://localhost:8080/Login">
          {" "}
          <img src={logo} alt="Travel Planner logo" />{" "}
        </a>{" "}
        Travel Journal{" "}
      </h1>

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

      <h1> Profile</h1>
    </div>
    // import {useDispatch, useSelector} from 'react-redux';

    // function UserProfile(props) {
    //   const user = useSelector((state) => state.user);

    //     return (
    //       <div className='container'>
    //          <h1>Hello {user.name}</h1>

    //       </div>
  );
}

export default UserProfile;
