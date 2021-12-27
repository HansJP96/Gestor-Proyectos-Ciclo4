import { gql } from "@apollo/client";

export const INSCRIPCION_A_PROYECTO = gql`
    mutation CrearInscripcion($proyectoId: String!, $estudianteId: String!) {
        crearInscripcion(proyectoId: $proyectoId, estudianteId: $estudianteId) {
            _id
        }
    }
  
`
export const CAMBIAR_ESTADO_INSCRIPCION = gql`
    mutation ModificarEstadoInscripcion($_id: ID!, $estado: enum_EstadoInscripcion!) {
        modificarEstadoInscripcion(_id: $_id, estado: $estado) {
            _id
            estado
            fechaIngreso
        }
    }
`