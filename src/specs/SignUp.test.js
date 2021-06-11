import React from "react";

import {render} from "@testing-library/react";

import SignUp from "../components/signup";


test("Rendering Name field correctly.", () => {
    const { queryByLabelText, queryAllByPlaceholderText} = render(<SignUp />)
    
    expect(queryByLabelText("Full Name")).toBeTruthy()
    expect(queryAllByPlaceholderText("Cristian Aragão")).toBeTruthy()

})

test("Rendering Email field correctly.", () => {
    const { queryByLabelText, queryAllByPlaceholderText} = render(<SignUp />)
    
    expect(queryByLabelText("Users name or Email")).toBeTruthy()
    expect(queryAllByPlaceholderText("Ex: username@gmail.com")).toBeTruthy()

})

test("Rendering Password field correctly.", () => {
    const { queryByLabelText, queryAllByPlaceholderText} = render(<SignUp />)
    
    expect(queryByLabelText("Password")).toBeTruthy()
    expect(queryAllByPlaceholderText("Ex: username123")).toBeTruthy()

})