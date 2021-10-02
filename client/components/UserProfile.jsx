//page for individual user profile details
import React from 'react';
import style from '../index.css';
import {useDispatch, useSelector} from 'react-redux';
import logo from '../images/journalLogo.png';


function UserProfile(props) {
  const user = useSelector((state) => state.user);
  //to set dynamic dates
  const date = useSelector((state) => state.date);
    return (
      <div className='container'>
       <h1> <a href='http://localhost:8080/Login'> <img src={logo} alt='Travel Planner logo'/> </a>  {user.name}'s Travel Journal </h1>
        <form>
          <div class='itinerary'>
            <div>
              <p>
                <textarea className='cell'>
               Entry Date: 
              </textarea>
              </p>
            </div>
        </div>
        </form>
      </div>
    )
  }

  export default UserProfile;