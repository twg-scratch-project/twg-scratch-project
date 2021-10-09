//import logo from './images/journalLogo.png';
import React, {useState, useEffect, useCallback} from 'react';
import {useHistory} from 'react-router-dom';

function Login(props) {

  const loginUser = (username, password) => {
    fetch("/api/auth", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("Data received: ", data);
      dispatch({
        type: types.SET_CURRENT_USER,
        payload: {
          name: data.data.user.name,
          email: data.data.user.email,
          id: data.data.user._id,
        },
      });
    })
    .catch((e) => console.log(e));

  };

    const [password, setPassword] = useState('');
    const [name, setUserName] = useState('');
    const [loginFail, setLoginFail] = useState(false);

    const history = useHistory();

    return (
      // <img src={{logo}} width="200" height="200"></img>
    <div> 
      login page</div>
    )
  }
  //conditionally render this component based on user selection?
  function Registration(props) {

    const [password, setUserPassword] = useState('');
    const [fullname, setfirstName] = useState('');
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
              fullname,
              email,
              password
              })
      })
      .then(response => response.json())
      .then( data => console.log(data))
      .catch(() => console.log('fetch error has occurred'))
  }
      return (
        <div>
          <h1> <a href='http://localhost:8080/Login'> <img src={logo} alt='Travel Planner logo'/> </a> </h1>
          <div className="document"> 
            <form action="" method="post">
              <div>
                <h2>Travel Planner Registration</h2>
                <p>
                  <label for="name"></label>
                  <input type="text" value={fullname} onChange={e => setfirstName(e.target.value)} placeholder="First Name"></input><br/>
                </p>
                  <label for="email"></label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"></input>
                <p>
                  <label for="password"> </label>
                  <input type="password" required password={password} onChange={e => setUserPassword(e.target.value)} placeholder="Password"></input><br/>
                </p>
                <p>
                  <label for="mobile"> </label>
                  <input type="phone" required mobile={mobile} onChange={e => setMobile(e.target.value)} placeholder="Mobile"></input><br/>
                </p>
                <button className="SubmitButton" onClick={submitFunc}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      
      )
    }
  export default Login;