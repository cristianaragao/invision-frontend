import React from "react";

/* Authenticator */
import { AuthService } from "./../routes/AuthService";

/* ROUTER DOM */
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {

    console.log("auth: ", AuthService.logged);

    return(
        <Route
            render={ (propers) => {

                if(AuthService.logged) propers.user = AuthService.user;

                console.log("auth: ", AuthService.logged);

                return AuthService.logged ? <Component {...propers} /> : <Redirect to="/signin" />;

            }}
            {...rest}
        />
    )
};

export default PrivateRoute;