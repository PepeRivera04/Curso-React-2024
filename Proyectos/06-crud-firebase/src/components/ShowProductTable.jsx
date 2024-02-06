import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { getProductos } from "../firebase/productosApi";

const ShowProductTable = () => {
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

  useEffect(() => {
    fetchDataProducts();
  }, []);

  return (
    <div className="w-3/4 mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4">Lista de productos</h2>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-500 text-white">
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Nombre Producto</th>
                <th className="py-2 px-4 border-b">Stock</th>
                <th className="py-2 px-4 border-b">Descripción</th>
                <th className="py-2 px-4 border-b">Imágen</th>
                <th className="py-2 px-4 border-b">Acciones</th>
              </tr>
            </thead>
            <tbody className="">
              {
                // Realizar el map de los productos para pintar las celdas
              }
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ShowProductTable;
