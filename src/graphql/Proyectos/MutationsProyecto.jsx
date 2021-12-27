import { gql } from "@apollo/client";

export const ACTUALIZAR_ESTADO_PROYECTO = gql`
    mutation CambiarEstadoProyecto(
        $_id: ID!
        $estado: enum_EstadoProyecto!
        $fase: enum_FaseProyecto!
    ) {
        cambiarEstadoProyecto(_id: $_id, estado: $estado, fase: $fase) { 
            _id
            estado
            fase
        }
    }

`
export const ACTUALIZAR_FASE_PROYECTO = gql`
    mutation CambiarFaseProyecto($_id: ID!, $fase: enum_FaseProyecto!) {
        cambiarFaseProyecto(_id: $_id, fase: $fase) {
            _id
            estado
            fase
            fechaTerminacion
        }
    }
`

