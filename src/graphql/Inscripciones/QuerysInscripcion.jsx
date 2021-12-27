import { gql } from "@apollo/client";


export const LISTAR_INSCRIPCIONES = gql`
   query ListarInscripciones($inscripcionesLider: String) {
        listarInscripciones(inscripcionesLider: $inscripcionesLider) {
            _id
            proyectoId {
                _id
                nombreProyecto
                liderId {
                    _id
                }
            }
            estudianteId {
                primerNombre
                primerApellido
            }
            fechaIngreso
            fechaEgreso
            estado
        }
    }

`