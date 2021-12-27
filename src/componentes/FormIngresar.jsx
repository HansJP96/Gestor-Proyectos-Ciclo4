import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { LOGUEO_USUARIO } from '../graphql/Auth/Mutations'
import { useAuth } from '../hooks/authContext'

const FormIngresar = () => {

    const [formulario, setFomulario] = useState({})
    const { guardarToken } = useAuth()

    const [login, { data, loading, error }] = useMutation(LOGUEO_USUARIO)

    const navigate = useNavigate()

    const guardarCampos = (campo, valor) => {
        setFomulario({
            ...formulario,
            [campo]: valor ? valor : undefined
        })
    }

    const cargarAcceso = async (e) => {
        e.preventDefault()
        login({
            variables: {
                ...formulario
            }
        })
    }

    useEffect(() => {
        if (data?.loginUsuario.Token) {
            guardarToken(data.loginUsuario.Token)
            //navigate("/sesion")
        }
    }, [data, navigate, guardarToken])
    
    
    if (loading) return <h1>Cargando...</h1>
    //if (error) return <h1>ERRRORRR {error.message}</h1>

    return (
        <>
            <div className="flex h-screen justify-center items-center ">
                <form className=" flex p-4 flex-col space-y-4 text-center bg-yellow-600" onSubmit={cargarAcceso} >
                    <input
                        required
                        placeholder="Correo"
                        type="email"
                        onChange={(e) => guardarCampos("Correo", e.target.value)}></input>
                    <input
                        required
                        placeholder="Contrasena"
                        type="password"
                        onChange={(e) => guardarCampos("Contrasena", e.target.value)}></input>
                    <button className="border-2" type="submit"  >ingresar</button>
                </form>
            </div>
        </>
    )
}

export default FormIngresar

//{data?.loginUsuario.Error && <h1>Te equivocsaste</h1>}