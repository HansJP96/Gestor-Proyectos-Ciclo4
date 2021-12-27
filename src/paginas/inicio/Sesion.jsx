import React from 'react'
import { useUsuario } from '../../hooks/usuarioContext'
import { ReactComponent as Logo } from '../../imagenes/svg_modificado.svg'
import { ReactComponent as Prohibido } from '../../imagenes/forbidden.svg'

const Sesion = () => {
    const { dataUsuario } = useUsuario()
    
    return (
        <div className='flex flex-col min-h-screen min-w-full items-center p-10 space-y-5 bg-gray-900' >
            <h1 className='font-bold text-5xl text-green-300' >Bienvenido</h1>
            <h2 className='font-bold text-3xl text-green-300' >{dataUsuario.primerNombre} {dataUsuario.primerApellido}</h2>
            {dataUsuario.estado === "AUTORIZADO" && < Logo className='w-6/12' ></Logo>}
            {dataUsuario.estado !== "AUTORIZADO" &&
                <>
                    < Prohibido className='w-1/5' ></Prohibido>
                    <h2 className='font-bold text-3xl text-green-300' >
                        Ops! No tienes acceso a la plataforma
                    </h2>
                    <label className='text-green-300 text-2xl' >
                        Tu estado es:
                    </label>
                    <strong className={dataUsuario.estado === "PENDIENTE" ? "text-yellow-500" : "text-red-600"} >
                        {dataUsuario.estado}
                    </strong>
                </>
            }
        </div >
    )
}

export default Sesion
