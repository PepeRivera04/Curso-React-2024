import React from "react";
import Componente2 from "./Componente2";
import { useContext } from "react";
import ComponenteContext from "../context/ComponenteContext";

const Componente1 = () => {
  const { appState } = useContext(ComponenteContext);

  return (
    <div>
      <h1>Componente 1</h1>
      <h4>Contador : {appState.contador}</h4>
      <Componente2></Componente2>
    </div>
  );
};

export default Componente1;
