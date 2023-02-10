import React from 'react';
import './index.css';
import {render} from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import store from './redux/redux-store'
import {Provider} from 'react-redux';

console.log(store)
render(
    <Router>
        {/*<Provider store={store}>
            <App/>
        </Provider>*/}
        <App />
    </Router>,
    document.getElementById('root')
);

