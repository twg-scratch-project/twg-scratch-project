import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';
import styles from './index.css';


ReactDOM.render(
        <Provider store={store}>
            {/* <h1>React Hello World</h1> */}
            <App/>
        </Provider>,
        document.getElementById('app')
);