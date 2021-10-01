import React, {useState, useEffect, useCallback} from 'react';
import * as actions from '../actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
//research importing an img file for logo!
//import '../TP_Logo/TravelPlanner_Logo/TravelPlanner_Logo.png';


function Login(props) {
    const [password, setPassword] = useState('');
    const [name, setUserName] = useState('');

    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const loginUser = useCallback((username, password) => dispatch(
        actions.loginUser(username, password)
    ), [dispatch]);

    // const userNameEntry = (event) => {
    //     console.log(setUserName(event.target.value));
    // }

    // function userPassEntry (event) {
    //     //add validation/if event is not a string...
    //     props.onChange(event.target.value);
    //     console.log('password ', props.onChange(event => event.target.value))
    // }
    // function userNameEntry (event) {
    //     //add validation/if event is not a string...
    //     props.onChange(event.target.value);
    //     console.log('password ', event.target.value)
    // }

    //invoked with forms request to server
    const myFunc = (e) => {
        e.preventDefault();
        console.log('name and pass redux', name, password)
        //dispatch(actions.loginUser(name, password));
        loginUser(username, password);
        console.log('test', user);
        console.log(props);
    }
    return (
    <div>
        <h1>Welcome to Your Travel Planner {user.email}</h1>
        {/* travel planner logo */}
        <img src=''/>
        <div className='loginMain'>
            {/* /* //needs to be a fetch request */}
            <form  method='POST'> 
                <div className='userInput'>
                    <h3>Travel Journal {props.user.name}</h3>
                    <label for='html'></label><br/>
                    <input type='text' value={name} onChange={e => setUserName(e.target.value)} placeholder='Enter User Name'/><br/>
                    <label for='pass'></label><br/> 
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} 
                    placeholder='Enter Password'/><br/>
                        <p><button className='SubmitButton' onClick={myFunc}>Submit</button></p>
                        <div className='loginSubHeading'>
                            <button style={{border:'none', fontSize:'10px'}}>Forgot password? 
                            </button><br/>
                            <button style={{border:'none', fontSize:'10px'}}>Register</button>
                        </div>
                </div> 
            </form>
        </div>
    </div>
    
    )
  }
  

  export default Login;