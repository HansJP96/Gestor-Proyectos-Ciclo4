import { gql } from '@apollo/client'

export const LISTAR_USUARIOS = gql`
    query ListarUsuarios {
    listarUsuarios {
        _id
        primerNombre
        primerApellido
        correo
        identificacion
        rol
        estado
        }
    }
`