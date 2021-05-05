import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SigIn from '../invision/SignIn';
import SignUp from '../invision/SignUp';
import Home from '../invision/Home';
import NotFound from '../invision/NotFound';

import PrivateRoute from './PrivateRoute';

export const URL_BASE = "/invision";

const Routes = () => {

    return(
        <BrowserRouter basename={URL_BASE}>
            <Switch>
                <PrivateRoute exact path="/home" component={Home} />

                <Route exact path="/signin" component={SigIn} />
                <Route exact path="/signup" component={SignUp} /> 

                <Route exact component={NotFound} /> 

            </Switch>
        </BrowserRouter>
    );
};


export default (Routes);