import React from 'react';
import './index.css';
import {render} from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import store from './redux/redux-store'



export const rerenderEntireTree = () => {
    console.log('rerenderEntireTree')
    render(
        <Router>
            <App store={store} dispatch={store.dispatch.bind(store)}/>
        </Router>,
        document.getElementById('root')
    );
}

store.subscribe(rerenderEntireTree)
rerenderEntireTree()
