/**
 * Crear un custom hook que se le pase una key y un value iniciales y me permita generar un custom hook llamado useLocalStorage
 * para guardar datos dentro de esa clave. El estado inicial será el valor pasado por parámetro, siempre y cuando no exista la clave en
 * el local Storage, si ya existe la clave el valor inicial sera el valor almacenado en esa clave
 */

import { useState } from "react";

const useLocalStorage = (key, initialvalue) => {
  const [datosLS, setDatosLS] = useState(() => {
    const valorLS = localStorage.getItem(key);
    return valorLS ? JSON.parse(valorLS) : initialvalue;
  });

  const setLS = (value) => {
    setDatosLS(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [datosLS, setLS];
};

export default useLocalStorage;
