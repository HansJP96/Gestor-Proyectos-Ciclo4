import { gql } from "@apollo/client";


export const LISTAR_PROYECTOS = gql`
    query ListarProyectos($filtro: String) {
        listarProyectos(filtro: $filtro) {
            _id
            nombreProyecto
            liderId {
                primerNombre
                primerApellido
            }
            estado
            fase
            inscripciones {
                estudianteId {
                    _id
                }
            }
        }
    }
`
