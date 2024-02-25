import React from "react";
import { useAuthProduct } from "../context/authContextProduct";
import { signOutGoogle } from "../firebase/productosApi";

const SignOutButton = () => {
  const { signOutFirebase } = useAuthProduct();

  const handlerSignOut = async () => {
    try {
      const cerradoCorrecto = await signOutGoogle();
      if (cerradoCorrecto) {
        signOutFirebase();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={handlerSignOut}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
    >
      Cerrar Sesion
    </button>
  );
};

export default SignOutButton;
