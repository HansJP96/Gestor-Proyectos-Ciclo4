import { gql } from "@apollo/client";

export const CREAR_AVANCE = gql`
    mutation CrearAvance(
        $proyectoId: String!
        $estudianteId: String!
        $descripcion: String!
        ) {
        crearAvance(
            proyectoId: $proyectoId
            estudianteId: $estudianteId
            descripcion: $descripcion
        ) {
            _id
            Fecha_Avance
            descripcion
            observaciones
        }
    }
`