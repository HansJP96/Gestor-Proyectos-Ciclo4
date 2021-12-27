import { forwardRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ModalAcceso = ({ abrir, cerrar }) => {

    const handleClose = () => {
        cerrar(false)
    };

    return (
        <Dialog
            open={abrir}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle className="text-center" >{"Error de Autenticacion"}</DialogTitle>
            <DialogContent className="text-center" >
                <DialogContentText id="alert-dialog-slide-description">
                    Usuario o Contraseña incorrectas
                </DialogContentText>
                <DialogContentText id="alert-dialog-slide-description">
                    Si no posee una cuenta en la plataforma, debe crearla.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
            </DialogActions>
        </Dialog>
    );
}

export default ModalAcceso