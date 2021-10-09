import React, { useState, useEffect } from "react";
import Main from "./components/Main.jsx";
import Map from "./components/Map.jsx";
import LandingPage from "./components/LandingPage.jsx";
import TripForm from "./components/TripForm.jsx";//for testing only
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

function App() {

  const [email, setUserEmail] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route exact path="/">
          <LandingPage/>
          </Route>
          <Route path="/tripform">
            <TripForm/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
