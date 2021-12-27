import React from 'react'
import { useUsuario } from '../hooks/usuarioContext'

const AuthRol = ({ listaRoles, children }) => {
    const { dataUsuario } = useUsuario()

    if (listaRoles.includes(dataUsuario.rol))
        return <>{children}</>

    return <></>
}


export default AuthRol
