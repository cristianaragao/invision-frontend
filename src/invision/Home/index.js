/* REACT AND LIBRARIES */
import React from "react";
import { useHistory } from "react-router-dom";

import { openSnackbar } from "./../../common/Notifier";

/* MATERIAL UI/CORE/ */
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

/* Authenticator */
import { AuthService } from "./../../routes/AuthService";

import "./style.css";

const useStyles = {

    root: {
      flexGrow: "1",
    },

    header: {
        color: "#000"
    },

    menuButton: {
      marginRight: "20px",
    },

    title: {
      flexGrow: "1"
    },

    h1: {
      textAlign: "center",
      marginTop: "35vh",
      fontSize: "50px",
      color: "#707070",
    },
    
    h1_1: {
      textAlign: "center",
      marginTop: "45vh",
      fontSize: "30px",
      color: "#707070",
    }

};

const Home = (propers) => {
    const classes = useStyles;

    const history = useHistory();

    const user = propers.user;

    console.log("entrou na home");

    const handleLogout = async () => {

        openSnackbar({ msg: "Logged out!", tp: "success"});
        
        AuthService.signOut();
        
        history.push("/signin");
        
    };

    return (
        <div className={classes.root}>
            <AppBar style={classes.header} position="static">
                <Toolbar>

                  <IconButton edge="start" style={classes.menuButton} color="inherit" aria-label="menu">
                      <MenuIcon />
                  </IconButton>

                  <Typography variant="h6" style={classes.title}>
                      {user.name}
                  </Typography>

                  <Button onClick={handleLogout} color="inherit">Log out</Button>

                </Toolbar>

            </AppBar>

            <h1 style={window.innerWidth > 1300 ? classes.h1 : classes.h1_1}><b>Logged in as {user.email}</b></h1>

        </div>
    );
}

export default Home;