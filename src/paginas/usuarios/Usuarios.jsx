import { useState, useRef } from "react";
import { ToastMui } from "../../componentes/ToastMui";
import { useMutation, useQuery } from "@apollo/client"
import { LISTAR_USUARIOS } from "../../graphql/Usuarios/QuerysUsuario";
import { ACTUALIZAR_ESTADO_USUARIO } from "../../graphql/Usuarios/MutationsUsuario";
import AuthRol from "../../componentes/AuthRol";

const Usuarios = () => {
  
  const { data, loading } = useQuery(LISTAR_USUARIOS)
  /*
  const aplicarFiltro = (filtro) => {
    var filtered = _(usuarios).filter((u) => {
      return (
        u._id.toLowerCase().includes(filtro.toLowerCase()) ||
        u.userName.toLowerCase().includes(filtro.toLowerCase())
      );
    });

    setUsuarios(filtered);
  };
  
  const limpiarFiltro = () => {
    ObtenerUsuarios();
  };
  */
  return (

    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
        rel="stylesheet"
      />
      <div className="flex-row items-center justify-center min-h-screen min-w-full px-5 py-12 lg:px-20 bg-gray-900">
        {/*<div className="">
          <div
            class="flex items-center max-w-md mx-auto bg-white rounded-full "
            x-data="{ search: '' }"
          >
            <div class="w-full">
              <input
                onChange={(x) => {
                  aplicarFiltro(x.target.value);
                  if (x.target.value.length === 0) {
                    limpiarFiltro();
                  }
                }}
                type="search"
                class="w-full px-4 py-1 text-gray-900 rounded-full focus:outline-none"
                placeholder="Search"
                x-model="search"
              />
            </div>
            <div>
              <button
                type="submit"
                class="bg-green-300 flex items-center justify-center w-12 h-12 text-gray-100 rounded-full"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>*/}

        <div className="flex text-green-300 mt-9 font-semibold justify-center">
          <h1 className="text-5xl">Usuarios</h1>
        </div>
        {/* <Link to="/newuser">
          <button className="mt-5 mx-32 p-2 pl-5 pr-5 bg-green-300 text-gray-800 hover:bg-green-800 hover:text-gray-200 text-lg rounded-lg focus:border-4 border-blue-300">
            Agregar Usuario
          </button>
        </Link> */}
        <div className="flex items-center">
          <div className="overflow-auto lg:overflow-visible h-full w-full items-center">
            <div className="flex w-full justify-center items-center  ">
              {loading ? <h1 className="text-white">Cargando...</h1> :
                <Tabla usuarios={data.listarUsuarios} />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tabla = ({ usuarios }) => {

  const [actualizarEstado, { data, error }] = useMutation(ACTUALIZAR_ESTADO_USUARIO)

  return (
    <>
      <div className="absolute" >
        {error && <ToastMui info="error" />}
        {data && <ToastMui info="success" />}
      </div>
      <table className="table text-gray-400 border-separate space-y-6 text-sm">
        <thead className="bg-gray-800 text-gray-100">
          <tr>
            <th className="p-3 items-center justify-center">Identificacion</th>
            <th className="p-3 items-center justify-center ">Nombre</th>
            <th className="p-3 items-center justify-center ">Correo</th>
            <th className="p-3 items-center justify-center ">Rol</th>
            <th className="p-3 items-center justify-center">Estado</th>
          </tr>
        </thead>
        {usuarios &&
          usuarios.map((usuario, index) => {
            return (
              <CuerpoTabla
                key={index}
                _id={usuario._id}
                identificacion={usuario.identificacion}
                nombre={usuario.primerNombre}
                apellido={usuario.primerApellido}
                correo={usuario.correo}
                rol={usuario.rol}
                estado={usuario.estado}
                actualizarEstado={actualizarEstado}
              />
            )
          }
          )
        }
      </table>
    </>
  )
}

const CuerpoTabla = ({ _id, identificacion, nombre, apellido, correo, rol, estado, actualizarEstado }) => {

  const [modificarEstado, setModificarEstado] = useState(false)

  const [estadoSeleccionado, setEstadoSeleccionado] = useState(estado)
  const elementoSelect = useRef(null)

  const elementoEditado = (valor) => {
    setModificarEstado(true)
    //let elemento = document.getElementById(id)
    //setEstadoSeleccionado(document.getElementById(id).options[elemento.selectedIndex].value)
    setEstadoSeleccionado(valor)
  }

  const reiniciarEstado = (id) => {
    //document.getElementById(id).value = estado
    elementoSelect.current.value = estado
    setEstadoSeleccionado(estado)
  }

  const actualizarCache = (cache, informacion)=>{
      const usuariosListados = cache.readQuery({ query: LISTAR_USUARIOS });
      const nuevoEstado = usuariosListados.listarUsuarios.map(usuario => {
        if (usuario._id === informacion._id) {
          return { ...usuario, estado: usuario.estado };
        } else {
          return usuario;
        }
      });
      cache.writeQuery({
        query: LISTAR_USUARIOS,
        data: { listarUsuarios: nuevoEstado }
      });
    }

  const ejecutarCambio = (informacion) => {
    actualizarEstado({
      variables: { ...informacion },
      optimisticResponse: true,
      update: (cache)=>{
        actualizarCache(cache, informacion)
      }
    })
  };

  return (
    <>
      <tbody>
        <tr className="bg-gray-800 text-gray-100 ">
          <td className="p-3 justify-center items-center text-center">
            {identificacion}
          </td>
          <td className="p-3 justify-center items-center text-center">
            {nombre} {apellido}
          </td>
          <td className="p-3 justify-center items-center text-center">
            {correo}
          </td>
          <td className="p-3 justify-center items-center text-center ">
            {rol}
          </td>
          <td className="relative p-3 justify-center items-center font-bold space-x-2 ">
            <select ref={elementoSelect} className="flex  bg-transparent w-40 focus:bg-gray-700 border border-green-300 rounded-md"
              defaultValue={estado}
              onChange={(e) => elementoEditado(e.target.value)}>
              <option className="bg-gray-800 text-center" value={"AUTORIZADO"} >AUTORIZADO</option>
              <option className="bg-gray-800 text-center" value={"PENDIENTE"}>PENDIENTE</option>
              <AuthRol listaRoles={["ADMINISTRADOR"]} >
                <option className="bg-gray-800 text-center" value={"NO_AUTORIZADO"}>NO AUTORIZADO</option>
              </AuthRol>
            </select>
            {estadoSeleccionado !== estado ? modificarEstado &&
              <div className="absolute space-x-5 bottom-3 -right-1/3">
                <button
                  title="Confirmar"
                  onClick={() => ejecutarCambio({ _id: _id, estado: estadoSeleccionado })}>
                  <i className="fas fa-check fa-lg text-green-500"></i>
                </button>
                <button //cambie el i (parece que se puede)
                  title="Cancelar"
                  onClick={() => reiniciarEstado(_id)} >
                    <i className="fas fa-times fa-lg text-red-700"></i>
                </button>
              </div>
              : null}
          </td >
        </tr >
      </tbody>
    </>
  );

};



export default Usuarios;
