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
    .then(data => {

      console.log('Data received: ', data);
      dispatch({
      type: types.SET_CURRENT_USER,
      payload: {
        name: data.data.user.name,
        email: data.data.user.email,
        id: data.data.user._id
      }
      });

  }).
    catch(e => console.log(e));
  };
};