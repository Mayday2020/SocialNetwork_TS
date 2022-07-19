import {render} from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import {addPost, StateType, updateNewPostText} from "./redux/state";
import React from "react";



export const rerenderEntireTree = (state: StateType) => {
    render(
        <Router>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </Router>,
        document.getElementById('root')
    );
}