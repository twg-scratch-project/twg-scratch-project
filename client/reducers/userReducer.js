import * as types from '../actions/actionTypes';

const initialState = {
  name: '',
  email: '' 
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_USER: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default userReducer;