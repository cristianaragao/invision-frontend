import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

import { AuthService } from './../../routes/AuthService';

const style = {
    background: {
        height: '100vh',
        backgroundColor: '#A9C5BA',
    },

    div: {
        height: '100vh',
        display: 'flex',

        width: '50%',
        margin: '0 auto',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    divError: {
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    h1: {
        textAlign: 'right',
        color: '#000',
        font: 'normal normal 900 35px/48px Muli',
    },

    h2: {
        margin: 'auto 0',
        color: '#FFF',
        fontSize: '40px',
    },

    icon: {
        margin: 'auto 0 auto 2%',
        color: '#FFF',
        fontSize: '70px',
    }
}

export default function Home() {

    const history = useHistory();

    useEffect(() => {
        const timer = setTimeout(() => {

            console.log('AuthService: ', AuthService);

            if(AuthService.logged) history.push('/home');
            else history.push('/signin');
            
        }, 2000);
        return () => clearTimeout(timer);
    });

    return (
        <div style={style.background}>
            <div style={style.div}>
                <h1 style={style.h1}>Invision</h1>

                <div style={style.divError}>
                    <h2 style={style.h2}><b>Error 404 - Not Found Page</b></h2>
                    <ErrorOutlineIcon style={style.icon}/>
                </div>
                
            </div>
        </div>
    );
}
