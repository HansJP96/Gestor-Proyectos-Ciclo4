import React from "react";
import { NavLink } from "react-router-dom";
import AuthRol from "../componentes/AuthRol";
import { useAuth } from "../hooks/authContext";
import { useUsuario } from "../hooks/usuarioContext";
import cohete from "../imagenes/cohete_nombre.png"

const Sidebar = ({ children, activarRefrescar }) => {
  const { guardarToken } = useAuth()
  const { dataUsuario } = useUsuario()


  const cerrarSesion = () => {
    activarRefrescar(false)
    guardarToken(false)
    //navigate("/", { replace: true })
    window.location.href = "/"
  }

  return (
    <>
      <div className="flex w-full h-full">
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        />
        <div className="fixed flex flex-col md:flex-row flex-nowrap h-full">
          <div className="min-h-screen flex flex-col bg-gray-700">
            <div className="flex flex-col py-2 w-56  rounded-r-3xl overflow-hidden">
              <div className="w-36 h-36 flex self-center">
                <img src={cohete}></img>
              </div>
              <ul className="flex flex-col py-4">
                {
                  dataUsuario.estado === "AUTORIZADO" &&
                  <>
                    <AuthRol listaRoles={["ADMINISTRADOR", "LIDER"]} >
                      <li>
                        <NavLink

                          to="usuarios"
                          //onClick={refrescar}
                          className={({ isActive })=>
                          !isActive ?  
                          "flex flex-row items-center h-12 transform  transition-transform ease-in duration-200 text-blue-100 hover:translate-x-2 hover:text-blue-300"
                          :
                          "flex flex-row items-center h-12 transform translate-x-2 transition-transform ease-in text-blue-500 font-semibold"
                        }
                        >
                          <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                            <i className="fas fa-users"></i>
                          </span>
                          <span className="text-lg font-large">Usuarios</span>
                        </NavLink>
                      </li>
                    </AuthRol>
                    <li>
                      <NavLink
                        to="proyectos"
                        //onClick={refrescar}
                        
                        className={({ isActive })=>
                        !isActive ?  
                        "flex flex-row items-center h-12 transform  transition-transform ease-in duration-200 text-blue-100 hover:translate-x-2 hover:text-blue-300"
                        :
                        "flex flex-row items-center h-12 transform translate-x-2 transition-transform ease-in text-blue-500 font-semibold"
                      }
                      >
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                          <i className="fas fa-project-diagram"></i>
                        </span>
                        <span className="text-lg font-large">Proyectos</span>
                      </NavLink>
                    </li>
                    <AuthRol listaRoles={["ESTUDIANTE", "LIDER"]} >
                      <li>
                        <NavLink
                          to="inscripciones"
                          //onClick={refrescar}
                          className={({ isActive })=>
                          !isActive ?  
                          "flex flex-row items-center h-12 transform  transition-transform ease-in duration-200 text-blue-100 hover:translate-x-2 hover:text-blue-300"
                          :
                          "flex flex-row items-center h-12 transform translate-x-2 transition-transform ease-in text-blue-500 font-semibold"
                        }
                        >
                          <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                            <i className="fas fa-pencil-alt"></i>
                          </span>
                          <span className="text-lg font-large">Inscripciones</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="avances"
                          //onClick={refrescar}
                          className={({ isActive })=>
                          !isActive ?  
                          "flex flex-row items-center h-12 transform  transition-transform ease-in duration-200 text-blue-100 hover:translate-x-2 hover:text-blue-300"
                          :
                          "flex flex-row items-center h-12 transform translate-x-2 transition-transform ease-in text-blue-500 font-semibold"
                        }
                        >
                          <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                            <i className="fas fa-book-reader"></i>
                          </span>
                          <span className="text-lg font-large">Avances</span>
                        </NavLink>
                      </li>
                    </AuthRol>
                  </>
                }
                <li>
                  <button
                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-red-200 hover:text-red-500"
                    onClick={cerrarSesion}
                  >
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                      <i className="fas fa-power-off"></i>
                    </span>
                    <span className="text-lg font-large">Cerrar Sesion</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex  w-full flex-col items-stretch justify-start">
          {children}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
