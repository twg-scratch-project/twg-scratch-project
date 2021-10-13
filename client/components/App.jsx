import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Main from "./Main.jsx";
import Login from "./Login.jsx";

import {AuthProvider} from "../context/authContext.jsx"

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

    console.log("reg deets ", regDetails);
  }
  //for reg component: firstName={regObj.regInfo.firstName} userEmail={regObj.regInfo.email} lastName={regObj.regInfo.lastName} password={regObj.regInfo.password} onChange={regSubmit}
  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
          
            <Route path="/main">
              <Main />
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
    </AuthProvider>
  );
}

export default App;
