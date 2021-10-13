import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Main from "./Main.jsx";
import Login from "./Login.jsx";

import {AuthProvider} from "../context/authContext.jsx"

function App() {
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
