import { useEffect, useState } from "react";
import { addProducto, getProductos } from "../firebase/productosApi";
import Swal from "sweetalert2";
import { useExamenContext } from "../context/ExamenContext";
import { useNavigate } from "react-router-dom";

const Home = ({ isBuscado, setIsBuscado }) => {
  const navigate = useNavigate();
  const {
    inputValue,
    setInputValue,
    imagenes,
    favoritas,
    datos,
    setImagenes,
    setFavoritas,
    coleccion,
    setColeccion,
  } = useExamenContext();

  const fetchBusquedas = async () => {
    const busquedas = await getProductos();
    setColeccion(busquedas);
  };

  const handleClickBuscar = async (e) => {
    e.preventDefault();
    if (coleccion.some((el) => el.URL === inputValue)) {
      const coleccionConcreta = coleccion.find((el) => el.URL === inputValue);
      setImagenes(coleccionConcreta.imagenes);
      setFavoritas(coleccionConcreta.favoritas);
      navigate("/gallery");
    } else {
      console.log(false);
      const objeto = {
        URL: inputValue,
        imagenes: datos.map((el) => el.image),
        favoritas: Array(datos.length).fill(false),
      };
      console.log(objeto);
      await addProducto(objeto);
    }
  };

  useEffect(() => {
    console.log(imagenes);
    console.log(favoritas);
  }, [imagenes, favoritas]);

  useEffect(() => {
    fetchBusquedas();
  }, [inputValue]);

  return (
    <div>
      <h1 className="text-2xl">Formulario de busqueda</h1>
      <form className="m-2">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          className="p-2 mx-2 border border-black rounded"
          type="text"
          placeholder="Search"
        />
        <button
          onClick={(e) => handleClickBuscar(e)}
          className="bg-blue-500 p-2 rounded"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Home;
