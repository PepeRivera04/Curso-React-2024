import { createContext, useContext, useState } from "react";
import useJsonImageURL from "../hooks/useJsonImageURL";

const ExamenContext = createContext();

export const ExamenProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [coleccion, setColeccion] = useState([]);
  const [imagenes, favoritas, datos, setImagenes, setFavoritas] =
    useJsonImageURL(inputValue);

  return (
    <ExamenContext.Provider
      value={{
        inputValue,
        setInputValue,
        imagenes,
        favoritas,
        datos,
        setImagenes,
        setFavoritas,
        coleccion,
        setColeccion,
      }}
    >
      {children}
    </ExamenContext.Provider>
  );
};

export const useExamenContext = () => {
  return useContext(ExamenContext);
};
