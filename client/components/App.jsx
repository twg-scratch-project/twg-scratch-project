import React, { useState, useEffect } from "react";
import Login from "./Login.jsx";
import Main from "./Main.jsx";
import Test from "./LandingPage.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";


function App() {
  //assign useState with its val
  //make a copy of this arr when updating since invoking with replace it?
  // const [isLoggedIn, setLoginStatus] = useState(false);
  // const [travelers, updateTravelers] = useState([]);
  // //create a sextion to tag friends

  const [isLoggedIn, setLoginStatus] = useState(false);
  const [travelers, updateTravelers] = useState([]);

  //for reg component: firstName={regObj.regInfo.firstName} userEmail={regObj.regInfo.email} lastName={regObj.regInfo.lastName} password={regObj.regInfo.password} onChange={regSubmit}
  return (
    <Router>
        <Switch>
          <Route path="/Main">
            <Main />
          </Route>
          <Route exact path="/">
          <LandingPage/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
