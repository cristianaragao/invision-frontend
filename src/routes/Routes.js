import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SigIn from '../components/signin';
import SignUp from '../components/signup';
import Home from '../components/home';
import NotFound from '../components/notfound';

import PrivateRoute from './PrivateRoute';

const Routes = () => {

    return(
        <BrowserRouter>
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