import './App.css';
import React, { Fragment } from 'react';

import Routes from './routes/Routes';

import { Notifier } from './common/Notifier';

import { AuthService } from './routes/AuthService';

function App() {

    AuthService.signOut();

    return (
        <Fragment>
            <Notifier/>
            <Routes/>
        </Fragment>
    );
    
}

export default App;


