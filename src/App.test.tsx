import React from 'react'
import {render, screen} from '@testing-library/react';
import App from './App';

let initialProps = {
    postsData: [{id: 666, message: 'test-post', likes: 69}],
    dialogsData: [{id: 333, name: 'Test-name'}],
    messagesData: [{id: 111, message: 'Test-message'}]
}

test('renders learn react link', () => {
    render(<App postsData={initialProps.postsData}
                dialogsData={initialProps.dialogsData}
                messageData={initialProps.messagesData}
    />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
