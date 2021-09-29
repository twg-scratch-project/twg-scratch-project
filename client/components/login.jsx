import React, {useState, useEffect} from 'react';
//research importing an img file for logo!
//import '../TP_Logo/TravelPlanner_Logo/TravelPlanner_Logo.png';


function Login(props) {
    // const [password, setPassword] = useState('');

    // const userNameEntry = (event) => {
    //     console.log(setUserName(event.target.value));
    // }

    function userPassEntry (event) {
        props.onChange(event.target.value);
        console.log('password ', event.target.value)
    }

    function userNameEntry (event) {
        props.onChange(event.target.value);
        console.log('password ', event.target.value)
    }

    //login button function
    const submitLogin = () => {
        const userDetails = {
            'user name': userName,
            'user password': password
        }
        console.log('userdeets ',userDetails)
    }

    return (
    <div >
        <h1>Welcome to Your Travel Planner</h1>
        <span></span>
        <img src=''/>
        <div className='loginMain'>
            {/* //do a need an action prop here and a page? */}
            <form type='text'> 
                <div className='userInput'>
                    <h3>Travel Planner</h3>
                    <label for='html'></label><br/>
                    <input type='text' userName={props.userName} onChange={userNameEntry} placeholder='Enter User Name'/><br/>
                    <label for='pass'></label><br/> 
                    <input type='text' id='pass' password={props.password} onChange={userPassEntry} placeholder='Enter Password'/><br/>
                        <p><button className='SubmitButton' onClick={submitLogin}>Submit</button></p>
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