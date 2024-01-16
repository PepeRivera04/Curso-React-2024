import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const RegistrarFormulario = () => {
  // Estados
  const [formdata, setFormdata] = useState(initialState);
  // Hooks

  // Funciones
  function handlerSubmit(e) {
    e.preventDefault();
    console.log(formdata);
    setFormdata(initialState);
  }

  function handlerChange(e) {
    e.preventDefault();
    // console.log(e.target);
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-slate-200 shadow-md rounded-md">
      <h1 className="text-2xl mb-4 font-bold text-center">
        Formulario de registro
      </h1>
      <form onSubmit={handlerSubmit}>
        <div className="max-w-md mx-auto mt-4 p-6 bg-slate-300 shadow-md rounded-md">
          <label className="mx-4 text-2xl mb-4">
            Nombre :
            <input
              type="text"
              name="name"
              value={formdata.name}
              className="flex-1 mt-4 mr-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
              onChange={handlerChange}
            />
          </label>
        </div>
        <div className="max-w-md mx-auto mt-4 p-6 bg-slate-300 shadow-md rounded-md">
          <label className="mx-4 text-2xl">
            Email :
            <input
              type="email"
              name="email"
              value={formdata.email}
              className="flex-1 mt-4 mr-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
              onChange={handlerChange}
            />
          </label>
        </div>
        <div className="max-w-md mx-auto mt-4 mb-8 p-6 bg-slate-300 shadow-md rounded-md">
          <label className="mx-4 text-2xl">
            Password :
            <input
              type="password"
              name="password"
              value={formdata.password}
              className="flex-1 mt-4 mr-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
              onChange={handlerChange}
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-800"
        >
          Registrar Usuario
        </button>
      </form>
    </div>
  );
};

export default RegistrarFormulario;
