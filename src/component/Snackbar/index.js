import { Alert, Snackbar } from '@mui/material';
import React from 'react'

const SnackbarComponent = ({ open, handleClose, title }) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                {title}
            </Alert>
        </Snackbar>
    );
};
export default SnackbarComponent