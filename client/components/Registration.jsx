//onclick functions to be established here and passed as props??
//page for individual user registration

import React from 'react';
import style from '../index.css';

function Registration(props) {
  //needs to be coded with props and functionality 
  function regSubmit (e) {
    props.onChange(e.target.value)
    // e.preventDefault()
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
                <input type="text" firstName={props.firstName} onChange={regSubmit} placeholder="First Name"></input><br/>
              </p>
              <p>
              <label for="lastname"> </label>
              <input type="text" required lastName={props.lastName} placeholder="Last Name"></input><br/>
              </p>
              <label for="email"></label>
              <input type="email" userEmail={props.email} placeholder="Email"></input>
              <p></p>
              <button className="SubmitButton" >Submit</button>
            </div>
          </form>
        </div>
      </div>
    
    )
  }

  export default Registration;