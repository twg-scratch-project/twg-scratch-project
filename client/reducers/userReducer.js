import * as types from '../actions/actionTypes';

const initialState = {
  name: '',
  email: '' 
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_USER: {
      console.log('reducer: setting user ', action.payload);
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default userReducer;