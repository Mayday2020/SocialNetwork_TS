import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'


export type PostDataType = {
    id: number
    message: string
    likes: number
}
export type DialogDataType = {
    id: number
    name: string
}
export type MessageDataType = {
    id: number
    message: string
}

let postsData: PostDataType[] = [
    {id: 1, message: 'That\'s MyPost', likes: 2},
    {id: 2, message: 'Hello!!', likes: 3},
    {id: 3, message: 'Tinkoff!', likes: 89},
    {id: 4, message: 'Zzz...', likes: 5},
]

let dialogsData: DialogDataType[] = [
    {id: 1, name: 'Dmitriy'},
    {id: 2, name: 'Vladislav'},
    {id: 3, name: 'Willy'},
    {id: 4, name: 'Billy'},
]
let messagesData: MessageDataType[] = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Where are u from?'},
    {id: 4, message: 'Nice case bro!'},
]

render(
    <Router>
        <App postsData={postsData} dialogsData={dialogsData} messageData={messagesData}/>
    </Router>,
    document.getElementById('root')
);

reportWebVitals();
