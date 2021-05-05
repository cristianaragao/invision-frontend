import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SigIn from '../page/signin';
import SignUp from '../page/signup';
import Home from '../page/home';
import NotFound from '../page/notfound';

import PrivateRoute from './PrivateRoute';

const URL_BASE = "invision-frontend/page";

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