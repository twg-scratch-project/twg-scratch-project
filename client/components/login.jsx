import React from 'react';

function Login(props) {
    return (
    <div className='loginMain'>
         <p class='loginHeading'>Welcome to Your Travel Planner</p>
        <div>
            <form type='text'> 
                <div class='userInput'>
                    <label for='userName'>User Name:</label><br/>
                    <input type='text'></input><br/>
                    <button class='button'></button><br/>
                    <label for='userPass'>User Pass:</label><br/>
                    <input type='text'></input><br/>
                    <button class='button'></button>
                </div>
                <div class='loginSubHeading'>
                    <p>Forgot password?</p>
                    <p>Register</p>
                </div>
            </form>
        </div>
    </div>
    
    )
  }
  

  export default Login;