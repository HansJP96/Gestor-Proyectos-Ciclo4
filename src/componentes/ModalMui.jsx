import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ModalMui = ({ abrir, cerrar, datos }) => {

    const handleClose = () => {
        cerrar(false)
    };

    const confirmar = async () => {
        await datos.completarInscripcion.inscribirse({
            variables: {
                ...datos.completarInscripcion.variablesInscripcion
            }
        })
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
            <DialogTitle>{"Desea inscribirse a este proyecto?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    <strong>Nombre del Proyecto: </strong>{datos.proyecto}
                    <br />
                    <strong>Lider del Proyecto: </strong>{datos.lider.primerNombre} {datos.lider.primerApellido}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={confirmar}>Confirmar</Button>
            </DialogActions>
        </Dialog>
    );
}

export default ModalMui