import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';

import SignIn from './../pages/SignIn/index';

test('Rendering Email field correctly.', () => {
    const { queryByLabelText, queryAllByPlaceholderText} = render(<SignIn />)
    
    expect(queryByLabelText("Users name or Email")).toBeTruthy()
    expect(queryAllByPlaceholderText("Ex: username@gmail.com")).toBeTruthy()

})

test('Rendering Password field correctly.', () => {
    const { queryByLabelText, queryAllByPlaceholderText} = render(<SignIn />)
    
    expect(queryByLabelText("Password")).toBeTruthy()
    expect(queryAllByPlaceholderText("Ex: username123")).toBeTruthy()

})
