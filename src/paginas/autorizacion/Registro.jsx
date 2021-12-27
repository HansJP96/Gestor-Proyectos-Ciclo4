import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CargaComponente from '../../componentes/CargaComponente'
import { REGISTRAR_USUARIO } from '../../graphql/Usuarios/MutationsUsuario'

const Registro = () => {
    const [registro, { data, loading, error }] = useMutation(REGISTRAR_USUARIO)

    return (
        <div className="flex-row items-center justify-center overflow-hidden min-h-screen min-w-full px-5 py-10 lg:px-20 bg-gray-900">
            {(!data && !error) &&
                <FormularioInscripcion
                    registro={registro}
                    mutacion={{ loading }} >
                </FormularioInscripcion>
            }
            {
                error && <ErrorInscripcion />
            }
            {
                data && <InscripcionExitosa />
            }
        </div>
    )
}

const FormularioInscripcion = ({ registro, mutacion }) => {
    const [formulario, setFormulario] = useState({})

    const { loading } = mutacion

    const guardarCampos = (campo, valor) => {
        setFormulario({
            ...formulario, [campo]: valor ? valor : undefined
        })
    }

    const cargarRegistro = (e) => {
        e.preventDefault()
        registro({
            variables: {
                ...formulario
            }
        })
    }

    return (
        <>
            <div className="flex-col flex items-center justify-center w-full text-green-400 text-3xl ">
                <strong>¡ Bienvenido !</strong>
                Formulario de Inscripcion
            </div>
            <div className="flex-col w-full ">
                <form className="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-4 mb-3 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2 "
                    onSubmit={cargarRegistro}
                >
                    <div className='grid grid-cols-2 gap-5'>
                        <div className="relative pt-4">
                            <label
                                htmlFor="name"
                                className="text-base leading-7 text-blueGray-500 text-center"
                            >
                                Primer Nombre <span className='text-red-500' >*</span>
                            </label>
                            <input
                                required
                                type="text"
                                name="primerNombre"
                                onChange={(e) => guardarCampos(e.target.name, e.target.value)}
                                className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                            />
                        </div>
                        <div className="relative pt-4">
                            <label
                                htmlFor="name"
                                className="text-base leading-7 text-blueGray-500 text-center"
                            >
                                Segundo Nombre
                            </label>
                            <input
                                type="text"
                                name="segundoNombre"
                                onChange={(e) => guardarCampos(e.target.name, e.target.value)}
                                className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                            />
                        </div>
                        <div className="relative pt-4">
                            <label
                                htmlFor="name"
                                className="text-base leading-7 text-blueGray-500 text-center"
                            >
                                Primer Apellido <span className='text-red-500' >*</span>
                            </label>
                            <input
                                required
                                type="text"
                                name="primerApellido"
                                onChange={(e) => guardarCampos(e.target.name, e.target.value)}
                                className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                            />
                        </div>
                        <div className="relative pt-4">
                            <label
                                htmlFor="name"
                                className="text-base leading-7 text-blueGray-500 text-center"
                            >
                                Segundo Apellido <span className='text-red-500' >*</span>
                            </label>
                            <input
                                required
                                type="text"
                                name="segundoApellido"
                                onChange={(e) => guardarCampos(e.target.name, e.target.value)}
                                className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                            />
                        </div>
                    </div>
                    <div className="relative pt-4">
                        <label
                            htmlFor="name"
                            className="text-base leading-7 text-blueGray-500"
                        >
                            Correo Electronico <span className='text-red-500' >*</span>
                        </label>
                        <input
                            required
                            type="email"
                            name="correo"
                            onChange={(e) => guardarCampos(e.target.name, e.target.value)}
                            className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                        />
                    </div>
                    <div className="relative pt-4">
                        <label
                            htmlFor="name"
                            className="text-base leading-7 text-blueGray-500"
                        >
                            Contraseña <span className='text-red-500' >*</span>
                        </label>
                        <input
                            required
                            type="password"
                            name="contrasena"
                            onChange={(e) => guardarCampos(e.target.name, e.target.value)}
                            className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                        />
                    </div>
                    <div className="relative pt-4">
                        <label
                            htmlFor="name"
                            className="text-base leading-7 text-blueGray-500 text-center"
                        >
                            Identificacion <span className='text-red-500' >*</span>
                        </label>
                        <input
                            required
                            type=""
                            name="identificacion"
                            onChange={(e) => guardarCampos(e.target.name, e.target.value)}
                            className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                        />
                    </div>
                    <div className="relative pt-4">
                        <label
                            htmlFor="name"
                            className="text-base leading-7 text-blueGray-500 text-center"
                        >
                            Rol <span className='text-red-500' >*</span>
                        </label>
                        <select
                            required
                            name="rol"
                            defaultValue={"Seleccione una opcion"}
                            onChange={(e) => guardarCampos(e.target.name, e.target.value)}
                            className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                        >
                            <option disabled value={"Seleccione una opcion"} >Seleccione una opcion</option>
                            <option value={"ESTUDIANTE"} >Estudiante</option>
                            <option value={"LIDER"}>Lider</option>
                            <option value={"ADMINISTRADOR"} >Administrador</option>
                        </select>
                    </div>
                    <div className="flex justify-center items-center w-full pt-4 mb-4">
                        {loading ? <CargaComponente /> :
                            <button
                                type="submit"
                                className="w-full py-3 text-base text-white transition duration-500 ease-in-out transform bg-green-400  rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-green-900 "
                            >
                                Registrarse
                            </button>
                        }
                    </div>
                </form>
            </div>
        </>
    )
}
const InscripcionExitosa = () => {
    return (
        <div className="flex flex-col items-center space-y-5 w-full p-10 px-8 pt-6 mx-auto my-4 mb-3 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2 ">
            <h1 className='text-3xl text-green-700'>¡ Su registro ha sido exitoso !</h1>
            <Link
                to={"/ingresar"}
                className="w-60 py-3 text-base text-center text-white transition duration-500 ease-in-out transform bg-green-400  rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-green-900"
            >
                Ingresar
            </Link>
        </div>
    )
}

const ErrorInscripcion = () => {
    return (
        <div className="flex flex-col items-center space-y-5 w-full p-10 px-8 pt-6 mx-auto my-4 mb-3 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2 ">
            <h1 className='text-3xl text-red-700'>¡ Ha ocurrido un error con su registro !</h1>
        </div>
    )
}

export default Registro
