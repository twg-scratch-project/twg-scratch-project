//onclick functions to be established here and passed as props??
//page for individual user registration

import React from 'react';
import style from '../index.css';

function Registration(props) {
    return (
      <div>
        <h1>Travel Planner Registration</h1>
        <div className='document'>
          <form>
            <div>
              <h2>Travel Planner Registration</h2>
              <label for="firstname">First Name: </label>
              <input type="text" name="firstname" placeholder="First Name"></input><br/>
              <label for="lastname">Last Name: </label>
              <input type="text" name="lastname" placeholder="Last Name"></input><br/>
              <label for="lastname">Email: </label>
              <input type="text" email="email" placeholder="Email"></input>
            </div>
  
          </form>
        </div>
      </div>
    
    )
  }

  export default Registration;