import { gql } from '@apollo/client'

export const LOGUEO_USUARIO = gql`
    mutation LoginUsuario($correo: String!, $contrasena: String!)
    {
        loginUsuario(correo: $correo, contrasena: $contrasena) {
            token
            errorAuth
        }
    }

`

