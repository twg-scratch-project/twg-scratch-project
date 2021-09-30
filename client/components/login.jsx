import React, {useState, useEffect} from 'react';
//research importing an img file for logo!
//import '../TP_Logo/TravelPlanner_Logo/TravelPlanner_Logo.png';


function Login(props) {
    // const [password, setPassword] = useState('');

    // const userNameEntry = (event) => {
    //     console.log(setUserName(event.target.value));
    // }

    function userPassEntry (event) {
        //add validation/if event is not a string...
        props.onChangePass(event.target.value);
        console.log('password ', event.target.value)
    }

    function userNameEntry (event) {
        //add validation/if event is not a string...
        props.onChangeUser(event.target.value);
        console.log('password ', event.target.value)
    }

    //login button function
    // const submitLogin = () => {
    //     const userDetails = {
    //         'user name': userName,
    //         'user password': password
    //     }
    //     console.log('userdeets ',userDetails)
    // }
    //func for submit?
    //onClick={submitLogin}
    //invoked with forms request to server
    const myFunc = (e) => {
        e.preventDefault();
        fetch('/users/verifyUser', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(
                {
                name: props.name,
                password: props.password
                })
        })
        .then(response => {console.log('fetch response ', response)})
        .then()
    }

    return (
    <div >
        <h1>Welcome to Your Travel Planner</h1>
        <span></span>
        {/* travel planner logo */}
        <img src=''/>
        <div className='loginMain'>
            {/* /* //needs to be a fetch request */}
            <form  method='POST'> 
                <div className='userInput'>
                    <h3>Travel Planner</h3>
                    <label for='html'></label><br/>
                    <input type='text' value={props.name} onChange={props.onChangeUser} placeholder='Enter User Name'/><br/>
                    <label for='pass'></label><br/> 
                    <input type='password' id='pass' value={props.password} onChange={props.onChangePass} placeholder='Enter Password'/><br/>
                        <p><button className='SubmitButton' onClick={myFunc} >Submit</button></p>
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