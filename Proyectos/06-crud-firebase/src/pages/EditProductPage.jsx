import { useEffect, useState } from "react";
import EditProductForm from "../components/EditProductForm";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../firebase/productosApi";

const EditProductPage = () => {
  const { idproducto } = useParams();
  const [producto, setProducto] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(idproducto);
        if (productData) {
          setProducto(productData);
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, []);

  if (producto === null) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="w-5/6 mx-auto mt-10">
      {/* {JSON.stringify(producto)} */}
      <EditProductForm initialData={producto}></EditProductForm>
    </div>
  );
};

export default EditProductPage;
