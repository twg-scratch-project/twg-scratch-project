import React, { useState, useEffect, useContext } from "react";
import Main from "./Main.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import { AuthContext } from "../context/authContext.jsx";



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const {isAuth, toggleIsAuth} = useContext(AuthContext);
  useEffect(() => {
    (
      async() => {
        try{
          const response = await fetch('auth/verify');
          const data = await response.json();
          console.log('data', data)
        
          if (!isAuth) {
            if(data.isAuth) {toggleIsAuth()}
          }
          if(isAuth) {
            if(!data.isAuth) {toggleIsAuth()}
          }
        }
        catch (err) {
          console.log(err)
        }
        finally {setIsLoading(false)}
      }
    )()
  }, []
  )

  return (
      <Router>
        {isLoading && <div>Loading</div>}
        {!isLoading && 
        <div>
          <Switch>
            <Route path="/main">
              <Main />
            </Route>  
            <Route exact path="/">
              {isAuth === false && 
              <LandingPage /> }
              {isAuth === true && <Main />}
            </Route>
            <Route>
              {/* 404 Here */}
            </Route>
          </Switch>
        </div>
}
      </Router>
  );
}

export default App;
