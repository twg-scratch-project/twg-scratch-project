//onclick functions to be established here and passed as props??
//page for individual user registration
import { useState } from 'react';
import React from 'react';
import style from '../index.css';

function Registration(props) {
  //needs to be coded with props and functionality 
  // function regSubmit (e) {
  //   props.onChange(e.target.value)
  //   // e.preventDefault()
  //   console.log('reg deets ',regDetails)
  // }

  
  const [password, setUserPassword] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const submitFunc = (e) => {
    e.preventDefault();
    console.log('name and pass ', firstName, lastName, mobile, password)
    fetch('/users/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(
            {
            firstname: firstName,
            lastname: lastName,
            password: password
            })
    })
    .then(response => response.json())
    .then( data => console.log(data))
    .catch(() => console.log('fetch error has occurred'))
}
    return (
      <div>
        <h1>Travel Planner Registration</h1>
        <div className="document"> 
          <form action="" method="post">
            <div>
              <h2>Travel Planner Registration</h2>
              <p>
                <label for="firstname"></label>
                <input type="text" value={firstName} onChange={e => setfirstName(e.target.value)} placeholder="First Name"></input><br/>
              </p>
              <p>
                <label for="lastname"> </label>
                <input type="text" required value={lastName} onChange={e => setlastName(e.target.value)} placeholder="Last Name"></input><br/>
              </p>
                <label for="email"></label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"></input>
                <p>
                <label for="mobile"> </label>
                <input type="phone" required value={mobile} onChange={e => setMobile(e.target.value)} placeholder="Mobile"></input><br/>
              </p>
              <p>
                <label for="password"> </label>
                <input type="password" required password={password} onChange={e => setUserPassword(e.target.value)} placeholder="Password"></input><br/>
              </p>
              <button className="SubmitButton" onClick={submitFunc}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    
    )
  }

  export default Registration;