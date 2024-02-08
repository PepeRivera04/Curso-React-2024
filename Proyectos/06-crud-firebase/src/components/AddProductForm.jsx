import React, { useEffect, useState } from "react";
import { addProducto } from "../firebase/productosApi";
import Swal from "sweetalert2";

const AddProductForm = ({ actualizarProductos }) => {
  const [nombre, setNombre] = useState("");
  const [stock, setStock] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [url, setUrl] = useState("");

  const handlerSubmit = async (e) => {
    e.preventDefault();
    // Tengo que llamar a una función que me añada los datos del formulario.
    try {
      const newProduct = await addProducto({
        Nombre: nombre,
        Stock: stock,
        Descripcion: descripcion,
        url,
      });
      console.log("Producto añadido con id : " + newProduct);
      //   Ventana indicando si todo ok
      Swal.fire({
        icon: "success",
        title: "¡Insercion correcta!",
        text: "Datos del producto insertados correctamente",
      });

      // Seteamos todo a sus valores iniciales
      setNombre("");
      setStock(0);
      setDescripcion("");
      setUrl("");
      actualizarProductos();
    } catch (err) {
      console.error("Error al añadir un producto : " + err);
      throw err;
    }
  };

  return (
    <div className="w-1/2 mx-auto mt-8">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        action=""
        onSubmit={handlerSubmit}
      >
        <h2 className="text-3xl font-semibold mb-4">Añadir nuevo producto</h2>

        {/* Nombre */}
        <div className="mb-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nombre"
          >
            Nombre del producto
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500"
            type="text"
            id="nombre"
            placeholder="Nombre del producto"
            value={nombre}
            required
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        {/* Stock */}
        <div className="mb-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="stock"
          >
            Stock
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500"
            type="number"
            id="stock"
            placeholder="Stock del producto"
            value={stock}
            required
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        {/* Descripción */}
        <div className="mb-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="descripcion"
          >
            Descripcion del producto
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500"
            id="descripcion"
            value={descripcion}
            required
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        {/* URL */}
        <div className="mb-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="url"
          >
            Imagen del producto
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500"
            type="text"
            id="nombre"
            placeholder="Nombre del producto"
            value={url}
            required
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700">
            Añadir Producto
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
