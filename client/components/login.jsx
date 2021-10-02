import logo from '../images/journalLogo.png';
import React, {useState, useEffect, useCallback} from 'react';
import * as actions from '../actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Login(props) {
    const [password, setPassword] = useState('');
    const [name, setUserName] = useState('');

    const history = useHistory();
    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const loginUser = useCallback((username, password) => dispatch(
        actions.loginUser(username, password)
    ), [dispatch]);


    //invoked with forms request to server
    const myFunc = (e) => {
        e.preventDefault();
        //console.log('name and pass redux', name, password)
        //dispatch(actions.loginUser(name, password));
        loginUser(name, password);
        history.push('/JournalForm');
    }
    return (
    <div>
        <h1> <img src={logo} alt='Travel Planner logo'/> {user.name ? user.name : ''} Travel Journal</h1>

        <div className='loginMain'>
            <form method='POST'> 
                <div >
                    <h3>Travel Journal Login</h3>
                    <label for='html'></label><br/>
                    <input class='loginInput' type='text' value={name} onChange={e => setUserName(e.target.value)} placeholder='Enter User Name'/><br/>
                    <label for='pass'></label><br/> 
                    <input class='loginInput' type='password' value={password} onChange={e => setPassword(e.target.value)} 
                    placeholder='Enter Password'/><br/>
                        <p><button className='SubmitButton' onClick={myFunc}>Login</button></p>
                        <div className='loginSubHeading'>
                            <button style={{border:'none', backgroundColor:'none', fontSize:'10px'}}>Forgot password? 
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