//onclick functions to be established here and passed as props??
//page for individual user profile details

import React from 'react';
import style from '../index.css';
import {useDispatch, useSelector} from 'react-redux';



function UserProfile(props) {
  const user = useSelector((state) => state.user);

    return (
      <div className='container'>
         <h1>Hello {user.name}</h1>
         
        
      </div>
    
    )
  }

  export default UserProfile;