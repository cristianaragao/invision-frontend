import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';

import SigIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

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