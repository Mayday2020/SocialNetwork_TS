import React from 'react'
import {render, screen} from '@testing-library/react';
import App from './App';

let initialState = {
    profilePage: {
        postsData: [{id: 666, message: 'test-post', likes: 69}]
    },
    messagesPage: {
        dialogsData: [{id: 333, name: 'Test-name'}],
        messagesData: [{id: 111, message: 'Test-message'}]
    }
}
let addTestPost = (testPost: string) => {
    return
}
test('renders learn react link', () => {
    render( <App state={initialState} addPost={addTestPost} /> );
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
