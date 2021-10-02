import * as types from './actionTypes';

export const loginUser = (username, password) => {
  return (dispatch) => {
    console.log('logging in action', JSON.stringify({
      email: username,
      password: password
    }));
    fetch('/api/auth', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: username,
        password: password
      })
    }).then(response => response.json())
    .then(data => dispatch({
      type: types.SET_CURRENT_USER,
      payload: {
        name: data.name,
        email: data.email,
        id: data._id
      }
    })).
    catch(e => console.log(e));
  };
};