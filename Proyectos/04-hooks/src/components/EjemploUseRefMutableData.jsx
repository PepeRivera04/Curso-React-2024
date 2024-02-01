import { useRef } from "react";

const EjemploUseRefMutableData = () => {
  const dataRef = useRef({ value: "Valor Inicial" });

  function handlerUpdate() {
    dataRef.current.value = "Actualizando";
  }

  return (
    <>
      <div>{dataRef.current.value}</div>
      <button onClick={handlerUpdate}>Actualizar</button>
    </>
  );
};

export default EjemploUseRefMutableData;
