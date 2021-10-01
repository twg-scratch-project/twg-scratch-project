import React, {useState, useEffect} from 'react';
//research importing an img file for logo!
//import '../TP_Logo/TravelPlanner_Logo/TravelPlanner_Logo.png';


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
        <h1>Your Travel Journal</h1>
        {/* travel planner logo */}
        <img src=''/>
        <div className='loginMain'>
            {/* /* //needs to be a fetch request */}
            <form  method='POST'> 
                <div className='userInput'>
                    <h3>Travel Journal</h3>
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