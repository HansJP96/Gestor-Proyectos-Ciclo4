import { gql } from '@apollo/client'

export const ACTUALIZAR_ESTADO_USUARIO = gql`
    mutation CambiarEstadoUsuario($_id: ID!, $estado: enum_EstadoRegistro!) {
    cambiarEstadoUsuario(_id: $_id, estado: $estado) {
        _id
        estado
        }
    }

`
export const REGISTRAR_USUARIO = gql`
    mutation RegistrarUsuario(
        $primerNombre: String!
        $segundoNombre: String
        $primerApellido: String!
        $segundoApellido: String!
        $correo: String!
        $identificacion: String!
        $contrasena: String!
        $rol: enum_Roles!
    )   {
        registrarUsuario(
            primerNombre: $primerNombre
            segundoNombre: $segundoNombre
            primerApellido: $primerApellido
            segundoApellido: $segundoApellido
            correo: $correo
            identificacion: $identificacion
            contrasena: $contrasena
            rol: $rol
        ) {
            token
            errorAuth
        }
    }

`