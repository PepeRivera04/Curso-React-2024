import { useState } from "react";
import AddProductForm from "../components/AddProductForm";
import ShowProductTable from "../components/ShowProductTable";

const HomePage = () => {
  const [, setForceUpdate] = useState();

  const actualizarProductos = () => {
    setForceUpdate({});
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold my-8">
        CRUD de Productos con Firebase
      </h1>

      <AddProductForm
        actualizarProductos={actualizarProductos}
      ></AddProductForm>
      <ShowProductTable
        actualizarProductos={actualizarProductos}
      ></ShowProductTable>
    </div>
  );
};

export default HomePage;
