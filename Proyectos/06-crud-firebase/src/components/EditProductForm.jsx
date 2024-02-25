import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editProduct } from "../firebase/productosApi";
import Swal from "sweetalert2";

const EditProductForm = ({ initialData }) => {
  const [formData, setFormData] = useState(initialData);
  const navigate = useNavigate();

  const handlerChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      await editProduct(initialData.id, formData);
      Swal.fire({
        icon: "success",
        title: "Actualizacion Correcta!",
        text: "Los datos se han actualizado correctamente",
      });
    } catch (error) {
      console.error(error);
    } finally {
      navigate("/");
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
            name="Nombre"
            placeholder="Nombre del producto"
            value={formData.Nombre}
            required
            onChange={(e) => handlerChange(e)}
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
            name="Stock"
            placeholder="Stock del producto"
            value={formData.Stock}
            required
            onChange={handlerChange}
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
            name="Descripcion"
            value={formData.Descripcion}
            required
            onChange={handlerChange}
          />
        </div>

        <div className="mb-4">
          <span className="text-gray-700 block mb-2 ">
            Vista previa de la imagen
          </span>
          <img className="w-full h-auto rounded" src={formData.url} alt="" />
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
            name="nombre"
            placeholder="Nombre del producto"
            value={formData.url}
            required
            onChange={handlerChange}
          />
        </div>

        <div className="flex items-center justify-between mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700">
            Actualizar Producto
          </button>
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-400 hover:bg-gray-800 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700"
          >
            Volver
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProductForm;
