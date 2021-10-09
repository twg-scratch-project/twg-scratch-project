import React, { useState, useEffect } from "react";
import Login from "./Login.jsx";
import Main from "./Main.jsx";
import MapBox from "./MapBox.jsx"
import AddTrip from "./AddTrip.jsx";
import Map from "./Map.jsx";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TripForm from "./TripForm.jsx";
import TripDetail from "./TripDetail.jsx";

function App() {

  const [isLoggedIn, setLoginStatus] = useState(false);
  const [travelers, updateTravelers] = useState([]);

  function regSubmit(regObj) {
    //stores users reg info
    //storeRegInfo(regObj);
    console.log("reg deets ", regDetails);
  }
  //for reg component: firstName={regObj.regInfo.firstName} userEmail={regObj.regInfo.email} lastName={regObj.regInfo.lastName} password={regObj.regInfo.password} onChange={regSubmit}
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Login">
            <Login onChange={regSubmit} />
          </Route>
          <Route path="/Main">
            <Main />
          </Route>
          {/* Tester route made by c */}
          <Route path="/TripForm">
            <TripForm/>
          </Route>
          <Route path="/TripDetail">
            <TripDetail/>
          </Route>
          <Route path="/AddTrip">
            <AddTrip/>
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/Playgrounds">
            <MapBox />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route>
            {/* 404 Here */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
