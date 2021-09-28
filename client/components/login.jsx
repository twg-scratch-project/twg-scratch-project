import React from 'react';
//research importing an img file for logo
//import '../TP_Logo/TravelPlanner_Logo/TravelPlanner_Logo.png';

function Login(props) {
    return (
    <div >
        <h1>Welcome to Your Travel Planner</h1>
        <span></span>
        <img src=''/>
        <div className='loginMain'>
            <form type='text'> 
                <div className='userInput'>
                    <h4>Travel Planner</h4>
                    <label for='userName'>User Name:</label><br/>
                    <input type='text'></input><br/>
                    {/* <button className='button'></button><br/> */}
                    <label for='userPass'>User Pass:</label><br/> 
                    <input type='text'></input><br/>
                    <p><button className='SubmitButton'>Submit</button></p>
                        <div className='loginSubHeading'>
                            <button style={{borderWidth:'0px'}}>Forgot password? </button><br/>
                            <button style={{borderWidth:'0px'}}>Register</button>
                        </div>
                </div> 
                {/* <div className='loginSubHeading'>
                    <span>Forgot password?</span>
                    <span>Register</span>
                </div> */}
            </form>
        </div>
    </div>
    
    )
  }
  

  export default Login;