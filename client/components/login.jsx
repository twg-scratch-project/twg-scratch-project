import React, {useState, useEffect} from 'react';
import logo from '../images/journalLogo.png';


function Login(props) {
    const [password, setPassword] = useState('');
    const [name, setUserName] = useState('');
    
    //invoked with forms request to server
    const myFunc = (e) => {
        e.preventDefault();
        console.log('name and pass ', name, password)
        fetch('/users/verifyUser', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(
                {
                name: name,
                password: password
                })
        })
        .then(response => response.json())
        .then( data => console.log(data))
        .catch(() => console.log('fetch error has occurred'))
    }
    return (
    <div>
        <h1> <img src={logo} alt='Travel Planner logo'/> Your Travel Journal</h1>
        
        {/* travel planner logo */}
        <div className='loginMain'>
            {/* /* //needs to be a fetch request */}
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