import { useExamenContext } from "../context/ExamenContext";
import { editProduct } from "../firebase/productosApi";

const Galeria = ({ imagenes, favoritas }) => {
  const { coleccion } = useExamenContext();

  console.log(coleccion.imagenes);

  const handleDoubleClick = (e, index) => {
    favoritas[index] = !favoritas[index];
    editProduct(coleccion.id, coleccion);
  };

  return (
    <div>
      <h1 className="text-2xl">Galeria</h1>
      <div className="flex flex-wrap">
        {imagenes.map((imagen, index) => (
          <div key={index} className="m-2">
            <img
              onDoubleClick={(e) => handleDoubleClick(e, index)}
              className="h-40 w-40 object-cover"
              src={imagen}
              alt="imagen"
            ></img>
            <h2>
              {favoritas[index] ? "Quitar de favoritos" : "Agregar a favoritos"}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;
