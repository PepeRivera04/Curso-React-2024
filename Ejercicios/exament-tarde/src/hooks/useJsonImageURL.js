import { useEffect, useState } from "react";

const useJsonImageURL = (inputValue) => {
  const [imagenes, setImagenes] = useState([]);
  const [favoritas, setFavoritas] = useState([]);
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchDatos = async () => {
      const response = await fetch(inputValue);
      const data = await response.json();
      setDatos(data.results);
    };
    fetchDatos();
  }, [inputValue]);

  return [ imagenes, favoritas, datos, setImagenes, setFavoritas ];
};

export default useJsonImageURL;
