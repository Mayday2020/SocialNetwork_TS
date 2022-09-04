import React from 'react';
import './index.css';
import {render} from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import store from './redux/redux-store'
import { Provider } from 'react-redux';

export const rerenderEntireTree = () => {
    console.log('rerenderEntireTree')
    render(
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>,
        document.getElementById('root')
    );
}

store.subscribe(rerenderEntireTree)
rerenderEntireTree()
