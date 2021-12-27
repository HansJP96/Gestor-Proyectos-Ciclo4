import React, { forwardRef, useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import Slide from '@mui/material/Slide'
import Stack from '@mui/material/Stack'

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
  }

export const ToastMui = ({ info }) => {
    // success - error
    const [abrir, setAbrir] = useState(true);


    const cerrarToast = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAbrir(false);
    };


    return (
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar
                    open={abrir}
                    autoHideDuration={1200}
                    onClose={cerrarToast}
                    TransitionComponent={TransitionUp}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }} >
                    <Alert severity={info} sx={{ width: "100%" }} onClose={cerrarToast} >
                        {info === "success" && "Operacion realizada con exito"}
                        {info === "error" && "Ha ocurrido un error"}
                    </Alert>
                </Snackbar>
            </Stack>
    )
}

/* export const ToastError = () => {

    const [abrir, setAbrir] = useState(true);

    const cerrarToast = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAbrir(false);
    };

    return (
        <Slide direction='up' >
            <Snackbar
                open={true}
                autoHideDuration={3500}
                onClose={cerrarToast}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }} >
                <Alert severity='error' sx={{ width: "100%" }} >
                    Ha ocurrido un error
                </Alert>
            </Snackbar>
        </Slide>
    )
}

 */