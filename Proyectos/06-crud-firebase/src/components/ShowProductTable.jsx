import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { deleteProducto, getProductos } from "../firebase/productosApi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ShowProductTable = ({ actualizarProductos }) => {
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]);

  const fetchDataProducts = async () => {
    try {
      const productosDatos = await getProductos();
      setProductos(productosDatos);
    } catch (err) {
      console.error("Error fetching productos : " + err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      const response = await Swal.fire({
        icon: "warning",
        title: "¿Estas seguro?",
        text: "Esta accion no se puede revertir",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminarlo",
      });
      if (response.isConfirmed) {
        await deleteProducto(id);
        actualizarProductos();
      }
    } catch (error) {
      console.error("Error al eliminar producto: ", error);
    }
  };

  useEffect(() => {
    fetchDataProducts();
  }, [actualizarProductos]);

  return (
    <div className="w-3/4 mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4">Lista de productos</h2>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <table className="min-w-full bg-white border border-gray-300 p-2 mb-8 text-center">
            <thead className="bg-gray-500 text-white">
              <tr>
                <th className="py-2 px-4 border border-b border-gray-300">
                  ID
                </th>
                <th className="py-2 px-4 border border-b border-gray-300">
                  Nombre Producto
                </th>
                <th className="py-2 px-4 border border-b border-gray-300">
                  Stock
                </th>
                <th className="py-2 px-4 border border-b border-gray-300">
                  Descripción
                </th>
                <th className="py-2 px-4 border border-b border-gray-300">
                  Imagen
                </th>
                <th className="py-2 px-4 border border-b border-gray-300">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="border border-collapse">
              {productos.map((producto) => (
                <tr key={producto.id}>
                  <td className="py-2 px-4 border border-b border-gray-300">
                    {producto.id}
                  </td>
                  <td className="py-2 px-4 border border-b border-gray-300">
                    {producto.Nombre}
                  </td>
                  <td className="py-2 px-4 border border-b border-gray-300">
                    {producto.Stock}
                  </td>
                  <td className="py-2 px-4 border border-b border-gray-300">
                    {producto.Descripcion}
                  </td>
                  <td className="py-2 px-4 border border-b border-gray-300">
                    <img
                      className="w-24"
                      src={producto.url}
                      alt="imgProducto"
                    />
                  </td>
                  <td className="py-2 px-4 border border-b border-gray-300 ">
                    <Link to={`/productos/${producto.id}`}>
                      <button className="p-2 bg-green-200 rounded-md mx-2">
                        Editar
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDeleteProduct(producto.id)}
                      className="p-2 bg-red-200 rounded-md mt-2"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ShowProductTable;
