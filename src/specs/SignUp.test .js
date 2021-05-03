import React from 'react';
import userEvent from '@testing-library/user-event'
import {render, screen} from '@testing-library/react';

import SignUp from './../pages/SignUp/index';

const user = {
    name: 'Cristian Aragão',
    email: 'user@email.com',
    password: '123456',
};

test('Fill in Full Name field.', () => {
    render(<SignUp />)
    const inputFullName = screen.getByPlaceholderText("Full Name")
    userEvent.type(inputFullName, user.name)
    expect(inputFullName.value).toEqual(user.name)
})

test('Fill in Password field.', () => {
    render(<SignUp />)
    const inputEmail = screen.getByPlaceholderText("Users name or Email")
    userEvent.type(inputEmail, user.email)
    expect(inputEmail.value).toEqual(user.email)
})

test('Fill in Password field.', () => {
    render(<SignUp />)
    const inputPassword = screen.getByPlaceholderText("Password")
    userEvent.type(inputPassword, user.password)
    expect(inputPassword.value).toEqual(user.password)
})