import { Link } from "react-router-dom";

const Productos = () => {
  return (
    <>
      <div>Estoy en Productos</div>
      <ul>
        <li>
          <Link to="/productos/producto-1">Producto 1</Link>
        </li>
        <li>
          <Link to="/productos/producto-2">Producto 2</Link>
        </li>
        <li>
          <Link to="/productos/producto-3">Producto 3</Link>
        </li>
      </ul>
      <Link to="/">Volver al home</Link>
    </>
  );
};

export default Productos;
