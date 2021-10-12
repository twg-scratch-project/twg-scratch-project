import React, { useState, useEffect } from "react";
import Login from "./Login.jsx";
import Main from "./Main.jsx";
import Test from "./test.jsx";
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

    console.log("reg deets ", regDetails);
  }
  //for reg component: firstName={regObj.regInfo.firstName} userEmail={regObj.regInfo.email} lastName={regObj.regInfo.lastName} password={regObj.regInfo.password} onChange={regSubmit}
  return (
    <Router>
        <Switch>
          <Route path="/Main">
            <Main />
          </Route>
          <Route exact path="/">
          <Test/>
          </Route>
          {/* <Route exact path="/test">
            <Test/>
          </Route> */}
        </Switch>
    </Router>
  );
}

export default App;
