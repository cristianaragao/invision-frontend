import React from 'react';
import userEvent from '@testing-library/user-event'
import {render, screen} from '@testing-library/react';

import SignIn from './../pages/SignIn/index';

const user = {
    name: 'Cristian Aragão',
    email: 'user@email.com',
    password: '123456',
};

test('Preenche campo Email.', () => {
    render(<SignIn />)
    const inputEmail = screen.getByPlaceholderText("Users name or Email")
    userEvent.type(inputEmail, user.email)
    expect(inputEmail.value).toEqual(user.email)
})

test('Preenche campo Senha.', () => {
    render(<SignIn />)
    const inputPassword = screen.getByPlaceholderText("Password")
    userEvent.type(inputPassword, user.email)
    expect(inputPassword.value).toEqual(user.email)
})