import {forwardRef, useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ModalAvance = ({ abrir, cerrar, datos, usuarioId, funcionCrear }) => {

    const [seleccionProyecto, setSeleccionProyecto] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const handleClose = () => {
        setSeleccionProyecto("")
        setDescripcion("")
        cerrar()
    };


    const agregarAvance = () => {
        funcionCrear({
            variables: {
                proyectoId: seleccionProyecto,
                estudianteId: usuarioId,
                descripcion: descripcion
            }
        })
        setSeleccionProyecto("")
        setDescripcion("")
        cerrar()
    }

    /* if (datos) {
        mostrar = datos.map((cadaAvance, index) => {
            //let ver_duplicados = acumulador.filter((avance, index) => acumulador.indexOf(avance.proyectoId._id) === index)
            if (acumulador.includes(cadaAvance.proyectoId._id)) {
                return null
            } else {
                acumulador.push(cadaAvance.proyectoId._id)
                return (<MenuItem
                    key={index}
                    value={cadaAvance.proyectoId._id} >
                    {cadaAvance.proyectoId.nombreProyecto}
                </MenuItem>
                )
            }
        })
    } */


    return (
        <Dialog
            open={abrir}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Agregar nuevo Avance"}</DialogTitle>
            <DialogContent>
                <Box sx={{ minWidth: 500 }} className='p-5' >
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Proyecto</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Proyecto"
                            required
                            value={seleccionProyecto}
                            onChange={(e) => setSeleccionProyecto(e.target.value)}
                        >
                            {
                                datos.map((cadaInscripcion, index) => {
                                    if (cadaInscripcion.estado === "PENDIENTE" || cadaInscripcion.estado === "RECHAZADA") {
                                        return null
                                    }
                                    return (
                                        <MenuItem
                                            key={index}
                                            value={cadaInscripcion.proyectoId._id} >
                                            {cadaInscripcion.proyectoId.nombreProyecto}
                                        </MenuItem>
                                    )
                                }
                                )
                            }
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 500 }} >
                    <TextField
                        fullWidth
                        id="outlined-multiline-static"
                        label="descripcion"
                        multiline
                        rows={3}
                        disabled={seleccionProyecto.length > 0 ? false : true}
                        required
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={agregarAvance}>Confirmar</Button>
            </DialogActions>
        </Dialog>
    );
}

export default ModalAvance