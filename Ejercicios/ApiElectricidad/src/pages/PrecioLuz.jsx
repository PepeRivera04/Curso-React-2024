import React, { useContext } from "react";
import Context from "../context/Context";

const PrecioLuz = () => {
  const { preciosLuz } = useContext(Context);

  console.log(preciosLuz);

  return <div>PrecioLuz</div>;
};

export default PrecioLuz;
