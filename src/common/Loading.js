import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Dialog, CircularProgress } from "@material-ui/core";

import "./style.css";

let showLoadingFunction;

const Styles = makeStyles(() => ({
    background: {
        color: "#FFF",
        marginRight: "20px"
    },

    font: {
        margin: "auto",
        color: "#FFF",
        fontSize: "30px",
    }
}));

export function Loading(props) {

    const classes = Styles();

    const [open, setOpen] = useState(false);

    useEffect(() => {
        showLoadingFunction = (boolean) => {
            setOpen(boolean);
        };
    });

    return (
        <div>
        <Dialog open={open} className={classes.div}>
            <CircularProgress className={classes.background}/>
            <h1 className={classes.font}>Please wait...</h1>
        </Dialog>
        </div>
    );
}

export function showLoading(show) {
    showLoadingFunction(show);
}