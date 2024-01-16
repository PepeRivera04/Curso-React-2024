/* eslint-disable no-unused-vars */
import { useState } from "react";

const nombres = ["Juan", "María", "Carlos", "Laura", "Pedro"];

const UsoDeListas = () => {
  const [names, setNames] = useState(nombres);

  return (
    <>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsoDeListas;
