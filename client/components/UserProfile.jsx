//onclick functions to be established here and passed as props??
//page for individual user profile details

import React from 'react';
import style from '../index.css';
import {name} from './Login.jsx';

function UserProfile(props) {
 console.log(console.log('props ', props.name))
    return (
      <div className='container'>
         <h1>{props.name} Profile</h1>
      </div>
    )
  }

  export default UserProfile;