import React, { useState, useEffect } from "react";
import Login from "./Login.jsx";
import JournalForm from "./Main.jsx";

import Registration from "./Registration.jsx";

import MapBox from "./MapBox.jsx"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  //assign useState with its val
  //make a copy of this arr when updating since invoking with replace it?
  // const [isLoggedIn, setLoginStatus] = useState(false);
  // const [travelers, updateTravelers] = useState([]);
  // //create a sextion to tag friends

  const [isLoggedIn, setLoginStatus] = useState(false);
  const [travelers, updateTravelers] = useState([]);

  function regSubmit(regObj) {
    //stores users reg info
    storeRegInfo(regObj);

    console.log("reg deets ", regDetails);
  }
  //for reg component: firstName={regObj.regInfo.firstName} userEmail={regObj.regInfo.email} lastName={regObj.regInfo.lastName} password={regObj.regInfo.password} onChange={regSubmit}
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Registration">
            <Registration onChange={regSubmit} />
          </Route>
          <Route path="/Main">
            <Main />
          </Route>
          {/* Tester route made by c */}
          <Route path="/Playgrounds">
            <MapBox />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/TripDetails">
            <TripDetails/>
          </Route>
          <Route>
            404 Here
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
