//import React, { useState } from "react";
//import axios from "axios";
//import Swal from "sweetalert2";

const CrearUsuario = () => {
  //   let { id } = useParams();

  // const [iden, setIden] = useState("");
  // const [name, setName] = useState("");
  // const [rol, setRol] = useState("");
  // const [mail, setMail] = useState("");
  // const [pass, setPass] = useState([]);

  /*
  const guardar = async () => {
    const options = {
      method: "POST",
      url: `https://thawing-crag-36588.herokuapp.com/Usuarios`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        Nombre: nombre,
        Rol: rol,
        Estado: estado,
        UserName: userName,
      },
    };
    console.log(options);
    await axios
      .request(options)
      .then(function (response) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Usuario Creado con exito",
          showConfirmButton: false,
          timer: 1500,
        }).then((x) => {});
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  */

  return (
    <div className="flex-row items-center justify-center overflow-hidden min-h-screen min-w-full px-5 py-10 lg:px-20 bg-gray-900">
      <div className="flex-col flex items-center justify-center w-full text-green-400 text-3xl ">
        Registro
      </div>
      <div className="flex-col w-full ">
        <form className="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-4 mb-3 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2 ">
          <div className="relative pt-4">
            <label
              htmlFor="name"
              className="text-base leading-7 text-blueGray-500"
            >
              Correo Electronico              
            </label>
            <input
              required
              //value={mail}
              // onChange={(x) => {
              //   setMail(x.target.value);
              // }}
              type="text"
              id="mail"
              name="mail"
              placeholder=""
              className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
          <div className="relative pt-4">
            <label
              htmlFor="name"
              className="text-base leading-7 text-blueGray-500"
            >
              Contraseña              
            </label>
            <input
              required
              //value={pass}
              // onChange={(x) => {
              //   setPass(x.target.value);
              // }}
              type="password"
              id="pass"
              name="pass"
              placeholder=""
              className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
          <div className="relative pt-4">
            <label
              htmlFor="name"
              className="text-base leading-7 text-blueGray-500 text-center"
            >
              Identificacion
            </label>
            <input
              required
              //value={iden}
              // onChange={(x) => {
              //   setIden(x.target.value);
              // }}
              type="text"
              id="cc"
              name="cc"
              placeholder=""
              className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
          <div className="relative pt-4">
            <label
              htmlFor="name"
              className="text-base leading-7 text-blueGray-500 text-center"
            >
              Nombre Completo              
            </label>
            <input
              required
              //value={name}
              // onChange={(x) => {
              //   setName(x.target.value);
              // }}
              type="text"
              id="name"
              name="name"
              placeholder=""
              className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
          <div className="relative pt-4">
            <label
              htmlFor="name"
              className="text-base leading-7 text-blueGray-500 text-center"
            >
              Rol
              </label>
            <input
              required
              //value={rol}
              // onChange={(x) => {
              //   setRol(x.target.value);
              // }}
              type="text"
              id="rol"
              name="rol"
              placeholder=""
              className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
          <div className="flex items-center w-full pt-4 mb-4">
            <input
              type="button"
              // onClick={(x) => {
              //   guardar();
              // }}
              className="w-full py-3 text-base text-white transition duration-500 ease-in-out transform bg-green-400  rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-green-900 "
              value={"Crear Usuario"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrearUsuario;
