import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetalleUsuario = () => {
  let { id } = useParams();

  const [estado, setEstado] = useState("");
  const [nombre, setNombre] = useState("");
  const [rol, setRol] = useState("");
  const [userName, setUserName] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [usuario, setUsuario] = useState([]);


  return (
    <div className="flex-row items-center justify-center min-h-screen min-w-full px-5 py-12 lg:px-20 bg-gray-900">
      <div className="flex-col w-full text-green-400 text-3xl ">
        Usuario: {usuario.Nombre}
      </div>
      <div className="flex-col w-full ">
        <form className="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2 ">
          <div className="relative pt-4">
            <label
              htmlFor="name"
              className="text-base leading-7 text-blueGray-500"
            >
              Usuario
            </label>
            <input
              required
              value={usuario._id}
              disabled
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
              className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
          <div className="relative pt-4">
            <label
              htmlFor="name"
              className="text-base leading-7 text-blueGray-500"
            >
              Nombre
            </label>
            <input
              required
              value={nombre}
              onChange={(x) => {
                setNombre(x.target.value);
              }}
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
              className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
          <div className="relative pt-4">
            <label
              htmlFor="name"
              className="text-base leading-7 text-blueGray-500 text-center"
            >
              Nombre de usuario
            </label>
            <input
              required
              value={userName}
              onChange={(x) => {
                setUserName(x.target.value);
              }}
              type="text"
              id="desc"
              name="desc"
              placeholder="Descripcion"
              className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
          <div className="relative pt-4">
            <label
              htmlFor="name"
              className="text-base leading-7 text-blueGray-500 m-4"
            >
              Rol
            </label>
            <input
              required
              value={rol}
              onChange={(x) => {
                setRol(x.target.value);
              }}
              type="text"
              id="inventario"
              name="Inventario"
              placeholder="Cantidad de items disponibles"
              className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
          <div className="relative pt-4">
            <label
              htmlFor="name"
              className="text-base leading-7 text-blueGray-500 m-4"
            >
              Estado
            </label>
            <input
              required
              value={estado}
              onChange={(x) => {
                setEstado(x.target.value);
              }}
              type="text"
              id="inventario"
              name="Inventario"
              placeholder="Cantidad de items disponibles"
              className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
          <div className="flex items-center w-full pt-4 mb-4">
            <input
              type="button"
              className="w-full py-3 text-base text-white transition duration-500 ease-in-out transform bg-green-400  rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-green-900 "
              value={"Actualizar Usuario"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetalleUsuario;
