/* eslint-disable no-unused-vars */
import { useState } from "react";

const isLoggedIn = true;

const Bienvenido = () => {
  const [logged, setLogged] = useState(isLoggedIn);

  return (
    <>
      <p>{logged ? "Bienvenido" : "Porfavor inicia sesión"}</p>
    </>
  );
};

export default Bienvenido;
