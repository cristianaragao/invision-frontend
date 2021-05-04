/* REACT AND LIBRARIES */
import React from 'react';
import { useHistory } from 'react-router-dom';

import { openSnackbar } from './../../common/Notifier';

/* MATERIAL UI/CORE/ */
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

/* Authenticator */
import { AuthService } from './../../routes/AuthService';

const useStyles = makeStyles(() => ({

    root: {
      flexGrow: '1',
    },

    header: {
        backgroundColor: '#A9C5BA',
        color: '#000'
    },

    menuButton: {
      marginRight: '20px',
    },

    title: {
      flexGrow: '1'
    },

    h1: {
      textAlign: 'center',
      marginTop: '35vh',
      fontSize: '50px',
      color: '#707070',
    },
    
    h1_1: {
      textAlign: 'center',
      marginTop: '45vh',
      fontSize: '30px',
      color: '#707070',
    }

}));

const Home = (propers) => {
    const classes = useStyles();

    const history = useHistory();

    const user = propers.user;

    const handleLogout = async () => {

        openSnackbar({ msg: 'Logged out!', tp: 'success'});

        history.replace('/signin');
        
        AuthService.signOut();
        
    };

    return (
        <div className={classes.root}>
            <AppBar className={classes.header} position="static">
                <Toolbar>

                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                      <MenuIcon />
                  </IconButton>

                  <Typography variant="h6" className={classes.title}>
                      {user.name}
                  </Typography>

                  <Button onClick={handleLogout} color="inherit">Log out</Button>

                </Toolbar>

            </AppBar>

            <h1 className={window.innerWidth > 1300 ? classes.h1 : classes.h1_1}><b>Logged in as {user.email}</b></h1>

        </div>
    );
}

export default Home;