import { useParams } from "react-router-dom";

const ProductosDetails = () => {
  const parametros = useParams();

  return (
    <>
      <div>
        Estoy en ProductosDetails del producto:{" "}
        <strong>{parametros.productId}</strong>
      </div>
    </>
  );
};

export default ProductosDetails;
