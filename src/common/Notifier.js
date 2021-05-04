import React, { useEffect, useState } from "react";

/* MATERIAL UI/CORE/ */
import Snackbar from "@material-ui/core/Snackbar";

import {
    Alert,
    AlertIcon
  } from "@chakra-ui/react";

import { CloseButton } from "@chakra-ui/react";

let openSnackbarFn;

export function Notifier(){

    const [message, setMessage] = useState({
        open: false,
        text: "Olá",
        type: "success",
        vertical: "vertical",
        horizontal: "horizontal"
    });
    
    const { text, vertical, horizontal, open, type } = message;

    useEffect(() => {
        openSnackbarFn = ({ msg, tp }) => {
			setMessage({
                open: true,
                text: msg,
                type: tp,
            });
		};
    });

    const handleClose = () => {
		setMessage({
            open: false,
            text: text,
            type: type,
        });
	};

    return(
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            autoHideDuration={3000}
            open={open}
            onClose={handleClose}
            key={vertical + horizontal}
        >
            <Alert status={type}>
                <AlertIcon />
                <p style={{ marginTop: "4px", fontSize: "16px", fontFamily: "Muli" }}><b>{text}</b></p>
                <CloseButton onClick={handleClose}/>
            </Alert>
        </Snackbar>
    )

}

export function openSnackbar({ msg, tp }) {
	openSnackbarFn({ msg: msg, tp: tp });
}