import React from 'react';
import {render} from 'react-dom';
import App from './components/App.jsx';
import store from './store';
import { Provider } from 'react-redux';


render(
    <Provider store={store}>
         <App/>
        {/* <h1>React Hello World</h1> */}
    </Provider>,

    document.getElementById('app')
);