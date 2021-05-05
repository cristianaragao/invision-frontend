import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SigIn from '../components/SignIn/index';
import SignUp from '../components/SignUp/index';
import Home from '../components/Home/index';
import NotFound from '../components/NotFound/index';

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