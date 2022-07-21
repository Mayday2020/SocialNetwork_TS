import React from 'react';
import './index.css';
import {state, subscribe} from "./redux/state";
import {render} from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import {addPost, StateType, updateNewPostText} from "./redux/state";



export const rerenderEntireTree = (state: StateType) => {
    console.log('rerenderEntireTree')
    render(
        <Router>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </Router>,
        document.getElementById('root')
    );
}

subscribe(() => rerenderEntireTree(state))
rerenderEntireTree(state)
