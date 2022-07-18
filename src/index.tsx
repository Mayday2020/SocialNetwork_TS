import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'
import {state} from './redux/state'
import {addPost} from './redux/state'

render(
    <Router>
        <App state={state} addPost={addPost}/>
    </Router>,
    document.getElementById('root')
);

reportWebVitals();
