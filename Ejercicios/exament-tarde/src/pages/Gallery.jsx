import React from "react";
import Galeria from "../components/Galeria";
import { useExamenContext } from "../context/ExamenContext";

const Gallery = () => {
  const { imagenes, favoritas } = useExamenContext();
  console.log("en galeria");
  return <Galeria imagenes={imagenes} favoritas={favoritas}></Galeria>;
};

export default Gallery;
