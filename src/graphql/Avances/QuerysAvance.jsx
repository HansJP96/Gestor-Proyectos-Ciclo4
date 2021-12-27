import { gql } from "@apollo/client";

export const LISTAR_AVANCES = gql`
    query ListarAvances($avancesLider: String) {
        listarAvances(avancesLider: $avancesLider) {
            _id
            proyectoId {
                _id
                nombreProyecto
            }
            estudianteId {
                primerNombre
                primerApellido
            }
            fechaAvance
            descripcion
            observaciones
        }
    }
`