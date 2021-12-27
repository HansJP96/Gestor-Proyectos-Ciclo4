import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Acceso from './paginas/autorizacion/Acceso';
import Registro from './paginas/autorizacion/Registro';
import Presentacion from './paginas/inicio/Presentacion';
import Sesion from './paginas/inicio/Sesion';
import Privado from './paginas/rutas/Privado';
import Publico from './paginas/rutas/Publico';
import { AuthContext } from './hooks/authContext';
import { UsuarioContext } from './hooks/usuarioContext';
import jwtDecode from 'jwt-decode';
import Avances from './paginas/avances/Avances';
import Proyectos from './paginas/proyectos/Proyectos';
import Usuarios from './paginas/usuarios/Usuarios';
import DetalleUsuario from './paginas/usuarios/Detalle-Usuario';
import Inscripiones from './paginas/inscripciones/Inscripciones';
import { ApolloProvider } from '@apollo/client';
import ClienteApollo from './graphql/ClienteApollo';

function App() {

  const [dataUsuario, setDataUsuario] = useState({})
  const [token, setToken] = useState(null)

  const guardarToken = (token) => {
    if (token) {
      localStorage.setItem("Token", JSON.stringify(token))
      setToken(token)
    } else {
      console.log("noooo")
      localStorage.removeItem("Token")
      setToken(null)
    }
  }

  useEffect(() => {
    let tokenAlmacenado = localStorage.getItem("Token")
    if (tokenAlmacenado) {
      setToken(tokenAlmacenado)
    } 
  }, [setToken])

  useEffect(() => {
    if (token) {
      let info_usuario = jwtDecode(token)
      setDataUsuario({ ...info_usuario })
    }
  }, [token, setDataUsuario])

  return (
    <AuthContext.Provider value={{ token, setToken, guardarToken }} >
      <UsuarioContext.Provider value={{ dataUsuario, setDataUsuario }}>
        <ApolloProvider client={ClienteApollo} >
          <BrowserRouter>
            <Routes>
              <Route path="sesion" element={<Privado />} >
                <Route index element={<Sesion />} />
                <Route path="usuarios" element={<Usuarios />} />
                <Route path="proyectos" element={<Proyectos />} />
                <Route path="inscripciones" element={<Inscripiones />} />
                <Route path="avances" element={<Avances />} />
                <Route path="perfil/:id" element={<DetalleUsuario />} />
                <Route path="avances/:id" element={<DetalleUsuario />} />
              </Route>
              <Route path="/" element={<Publico />}>
                <Route index element={<Presentacion />} />
                <Route path="ingresar" element={<Acceso />} />
                <Route path="registrar" element={<Registro />} />
                <Route path="detalle" element={<DetalleUsuario />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ApolloProvider>
      </UsuarioContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
