
// //import config store was not creating store
// import { configureStore } from "@reduxjs/toolkit";

import { createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers/index';

const store = createStore(reducer, composeWithDevTools());

export default store;
