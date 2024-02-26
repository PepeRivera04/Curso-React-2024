import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuthProduct } from "../context/authContextProduct";
import { addFactura } from "../firebase/productosApi";

const PaymentPage = () => {
  const { userFirebase } = useAuthProduct();

  const location = useLocation();
  const navigate = useNavigate();

  const stockTotal = location.state.stockTotal;
  const IVA = 1.21;
  const precioBase = 3.75;
  const totalPagar = stockTotal * IVA * precioBase;

  const factura = {
    cliente: userFirebase.displayName,
    stockTotal,
    totalPagar: totalPagar.toFixed(2),
  };

  const handlerGoBack = () => {
    navigate(-1);
  };

  const handlerClickPay = async () => {
    const newFactura = await addFactura(factura);
    Swal.fire({
      icon: "success",
      title: "Pago Correcto!",
      text: `El total a pagar es : ${totalPagar.toFixed(2)} €`,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-4 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Resumen del pago</h2>
        <div>
          <span>Total del Stock: </span>
          <span>{stockTotal}</span>
        </div>
        <div>
          <span>Total a pagar: </span>
          <span>{totalPagar.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handlerClickPay}
            className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Pagar
          </button>
          <button
            onClick={handlerGoBack}
            className="bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
