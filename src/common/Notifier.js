import React, { useEffect, useState } from 'react';

/* MATERIAL UI/CORE/ */
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

let openSnackbarFn;

export function Notifier(){

    const [message, setMessage] = useState({
        open: false,
        text: 'Olá',
        type: 'success',
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
            text: '',
            type: 'error',
        });
	};

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    return(
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            autoHideDuration={3000}
            open={open}
            onClose={handleClose}
            key={vertical + horizontal}
        >
            <Alert onClose={handleClose} severity={type}>
                {text}
            </Alert>
        </Snackbar>
    )

}

export function openSnackbar({ msg, tp }) {
	openSnackbarFn({ msg: msg, tp: tp });
}