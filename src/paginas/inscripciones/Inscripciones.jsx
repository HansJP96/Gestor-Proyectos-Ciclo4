import React, { useState } from "react";
import { ToastMui } from "../../componentes/ToastMui";
import { useMutation, useQuery } from "@apollo/client"
import { LISTAR_INSCRIPCIONES } from "../../graphql/Inscripciones/QuerysInscripcion";
import { CAMBIAR_ESTADO_INSCRIPCION } from "../../graphql/Inscripciones/MutationsInscripcion";
import { useUsuario } from "../../hooks/usuarioContext";
import AuthRol from "../../componentes/AuthRol";

const Inscripiones = () => {
  const { dataUsuario } = useUsuario()
  
  const { data, loading } = useQuery(LISTAR_INSCRIPCIONES,
    {
      variables: {
        inscripcionesLider: dataUsuario._id
      },
      fetchPolicy: "cache-and-network"
    }
  )

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

        <div className="flex items-center justify-center mb-3 text-green-300 mt-9 font-semibold">
          <h1 className="text-4xl">Inscripciones</h1>
        </div>
        <div className="flex items-center">
          <div className="overflow-auto lg:overflow-visible h-full w-full items-center">
            <div className="flex w-full justify-center items-center ">
              {loading ? <h1 className="text-white">Cargando...</h1> :
                <Tabla inscripciones={data.listarInscripciones} />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tabla = ({ inscripciones }) => {

  const [actualizarEstado, { data, error }] = useMutation(CAMBIAR_ESTADO_INSCRIPCION)

  return (
    <>
      <div className="absolute" >
        {error && <ToastMui info="error" />}
        {data && <ToastMui info="success" />}
      </div>
      <table className="table text-gray-400 border-separate space-y-6 text-sm">
        <thead className="bg-gray-800 text-gray-100">
          <tr>
            <th className="p-3 items-center justify-center ">Proyecto</th>
            <AuthRol listaRoles={["LIDER"]} >
              <th className="p-3 items-center justify-center ">Estudiante</th>
            </AuthRol>
            <th className="p-3 items-center justify-center ">Fecha Ingreso</th>
            <th className="p-3 items-center justify-center ">Fecha Egreso</th>
            <th className="p-3 items-center justify-center ">estado</th>
          </tr>
        </thead>
        {inscripciones &&
          inscripciones.map((inscripcion, index) => {
            return (
              <CuerpoTabla
                key={index}
                _id={inscripcion._id}
                proyecto={inscripcion.proyectoId.nombreProyecto}
                nombreEstudiante={inscripcion.estudianteId}
                fechaIngreso={inscripcion.fechaIngreso}
                fechaEgreso={inscripcion.fechaEgreso}
                estado={inscripcion.estado}
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

const CuerpoTabla = ({ _id, proyecto, nombreEstudiante, fechaIngreso, fechaEgreso, estado, actualizarEstado }) => {

  const { dataUsuario } = useUsuario()

  const [modificarEstado, setModificarEstado] = useState(false)

  const [estadoSeleccionado, setEstadoSeleccionado] = useState(estado)

  const elementoEditado = (valor) => {
    setModificarEstado(true)
    setEstadoSeleccionado(valor)
  }

  const reiniciarEstado = (id) => {
    document.getElementById(id).value = estado
    setEstadoSeleccionado(estado)
  }

  const ejecutarCambio = (informacion) => {
    actualizarEstado({
      variables: { ...informacion },
      optimisticResponse: true,
      update: (cache) => {

        const inscripcionesListadas = cache.readQuery({
          query: LISTAR_INSCRIPCIONES,
          variables: {
            inscripcionesLider: dataUsuario._id
          }
        });
        const nuevoEstadoInscripcion = inscripcionesListadas.listarInscripciones.map(inscripcion => {
          if (inscripcion._id === informacion._id) {
            return { ...inscripcion, estado: inscripcion.estado };
          } else {
            return inscripcion;
          }
        });
        cache.writeQuery({
          query: LISTAR_INSCRIPCIONES,
          data: { listarInscripciones: nuevoEstadoInscripcion }
        });
      }
    })
  };

  return (
    <>
      <tbody>
        <tr className="bg-gray-800 text-gray-100 ">
          <td className="p-3 justify-center items-center text-center">
            {proyecto}
          </td>
          <AuthRol listaRoles={["LIDER"]} >
            <td className="p-3 justify-center items-center text-center">
              {nombreEstudiante.primerNombre} {nombreEstudiante.primerApellido}
            </td>
          </AuthRol>
          <td className="p-3 justify-center items-center text-center">
            {fechaIngreso}
          </td>
          <td className="p-3 justify-center items-center text-center ">
            {fechaEgreso}
          </td>
          <AuthRol listaRoles={["ESTUDIANTE"]} >
            <td className="p-3 justify-center items-center text-center ">
              {estado}
            </td>
          </AuthRol>
          <AuthRol listaRoles={["LIDER"]} >
            <td className="relative p-3 justify-center items-center font-bold space-x-2 ">
              <select id={_id} className="flex  bg-transparent w-40 focus:bg-gray-700 border border-green-300 rounded-md"
                defaultValue={estado}
                onChange={(e) => elementoEditado(e.target.value)}>
                <option className="bg-gray-800 text-center" value={"ACEPTADA"} >ACEPTADA</option>
                <option className="bg-gray-800 text-center" value={"PENDIENTE"}>PENDIENTE</option>
                <option className="bg-gray-800 text-center" value={"RECHAZADA"}>RECHAZADA</option>
              </select>
              {estadoSeleccionado !== estado ? modificarEstado &&
                <div className="absolute space-x-5 bottom-3 -right-1/3">
                  <button
                    title="Confirmar"
                    onClick={() => ejecutarCambio({ _id: _id, estado: estadoSeleccionado })}>
                    <i className="fas fa-check fa-lg text-green-500" ></i>
                  </button>
                  <button
                    title="Cancelar"
                    onClick={() => reiniciarEstado(_id)} >
                    <i className="fas fa-times fa-lg text-red-700" ></i>
                  </button>
                </div>
                : null}
            </td >
          </AuthRol>
        </tr >
      </tbody>
    </>
  );

};


export default Inscripiones;