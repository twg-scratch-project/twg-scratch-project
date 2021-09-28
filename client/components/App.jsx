// import React, { Component } from "react"
//onclick functions to be established here and passed as props??

import React, {useState, useEffect} from 'react';
import style from '../index.css';
import Login from './login.jsx';

function App() {
  //onCLick function in state here as well?
  //decl state variable by init and passing updating function 
  //assign useState with its val
  //make a copy of this arr when updating since invoking with replace it?
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [isLoggedIn, setLoginStatus] = useState(false);
  const [travelers, updateTravelers] = useState([]);

  function userPassEntry (pass) {
        setPassword(pass)
        console.log('user password ', setPassword(pass));
    }
  
  function userNameEntry (name) {
      setUserName(name)
      console.log('user password ', setUserName(pass));
  }

    return (
      <div>
        <Login password={password} onChange={userPassEntry} userName={userName}onChange={userNameEntry}/>
      </div>
    )
  }

  export default App;