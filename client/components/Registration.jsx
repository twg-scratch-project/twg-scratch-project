//onclick functions to be established here and passed as props??
//page for individual user registration

import React from 'react';
import style from '../index.css';

function Registration(props) {
  //needs to be coded with props and functionality 

  const regSubmit = () => {
    const regDetails = {
        'first name': userName,
        'password': password,
        'email': email
    }
    console.log('reg deets ',regDetails)
  }
    return (
      <div>
        <h1>Travel Planner Registration</h1>
        <div className="document">
          <form action="/localhost:3000/users/login" method="post">
            <div>
              <h2>Travel Planner Registration</h2>
              <p>
                <label for="firstname"></label>
                <input type="text" name="firstname" placeholder="First Name"></input><br/>
              </p>
              <p>
              <label for="lastname"> </label>
              <input type="text" name="lastname" placeholder="Last Name"></input><br/>
              </p>
              <label for="lastname"></label>
              <input type="email" email="email" placeholder="Email"></input>
              <p></p>
              <button className="SubmitButton" onClick={regSubmit}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    
    )
  }

  export default Registration;