import React, { useEffect, useState } from "react";
import LoginContext from "./LoginContext";
import { fetchProduct } from "../services/fetchProduct";

const URL = "https://dummyjson.com/products";

const LoginProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    const response = await fetch(URL);
    const data = await response.json();
  }, [])
  

  return (
    <LoginContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
