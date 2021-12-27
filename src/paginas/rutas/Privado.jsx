import { useLazyQuery, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { useIdleTimer } from 'react-idle-timer'
import { REFRESCAR_TOKEN } from '../../graphql/Auth/QueriesAuth'
import { useAuth } from '../../hooks/authContext'
import Sidebar from '../../layouts/Sidebar'

const Privado = () => {

    const { guardarToken } = useAuth()

    const [refrescarToken, { loading, data }] = useLazyQuery(REFRESCAR_TOKEN)
    const [activarRefrescar, setActivarRefrescar] = useState(true)

    const navigate = useNavigate()

    /* useEffect(() => {
        if (activarRefrescar){
            refrescar()
        }

    }, [activarRefrescar, refrescar])
 */
    /* useEffect(() => {
        if (activarRefrescar) {
            refrescar()
            console.log(1)
        }

    }, [activarRefrescar, refrescar]) */

    useEffect(() => {

        if (data && activarRefrescar) {
            if (data.refrescarTokenUsuario.token) {
                guardarToken(data.refrescarTokenUsuario.token)
            } else {
                guardarToken(null)
                navigate("/ingresar", { replace: true })
            }

        }

    }, [data, guardarToken, navigate])


    if (loading) return <h1>Cargando...</h1>

    return (
        <ActividadUsuario
            manejoToken={
                {
                    refrescarToken: refrescarToken,
                    activarRefrescar: activarRefrescar,
                    setActivarRefrescar: setActivarRefrescar
                }
            }
        >
            <Sidebar activarRefrescar={setActivarRefrescar} >
                <div className='ml-56'>
                    <Outlet />
                </div>
            </Sidebar>
        </ActividadUsuario>
    )
}

const ActividadUsuario = ({ manejoToken, children }) => {

    const { guardarToken } = useAuth()
    const navigate = useNavigate()

    const usuarioInactivo = (event) => {
        manejoToken.setActivarRefrescar(false)
        guardarToken(false)
        navigate("/", { replace: true })
    }

    const accionesUsuario =  (event) => {
        if (manejoToken.activarRefrescar) {
            manejoToken.refrescarToken()
        }
    }

    useIdleTimer({
        timeout: 1000 * 60 * 3,
        onIdle: usuarioInactivo,
        onAction: accionesUsuario,
        debounce: 750

    })
    return (children)
}

export default Privado
