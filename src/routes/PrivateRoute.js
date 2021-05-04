import React from 'react';

/* Authenticator */
import { AuthService } from './../routes/AuthService';

/* ROUTER DOM */
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {

    return(
        <Route
            render={ (propers) => {

                if(AuthService.logged) propers.user = AuthService.user;

                return AuthService.logged ? <Component {...propers} /> : <Redirect to='/signin' />;

            }}
            {...rest}
        />
    )
};

export default PrivateRoute;