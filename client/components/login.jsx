import logo from '../images/journalLogo.png';
import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Login(props) {
  
    return (
    <div>
        <h1> <img src={logo} alt='Travel Planner logo'/> Travel Journal</h1>
    </div>
    
    )
  }
  

  export default Login;