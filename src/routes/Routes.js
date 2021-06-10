import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SigIn from '../signin';
import SignUp from '../signup';
import Home from '../home';
import NotFound from '../notfound';

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