import React from 'react'
import {render, screen} from '@testing-library/react';
import App from './App';
import store from "./redux/store";

let initialState = {
    profilePage: {
        postsData: [{id: 666, message: 'test-post', likes: 69}],
        newPostText: 'test'
    },
    messagesPage: {
        dialogsData: [{id: 333, name: 'Test-name'}],
        messagesData: [{id: 111, message: 'Test-message'}]
    }
}

test('renders learn react link', () => {
    render( <App store={store} dispatch={store.dispatch}/> );
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
