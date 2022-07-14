import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'

render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);

reportWebVitals();
