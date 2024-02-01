import { useRef } from "react";
import { useState } from "react";

const EjemploUseRefForm = () => {
  const [nombre, setNombre] = useState();

  const inputRef = useRef(null);

  function handlerFocus() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div>
      <label htmlFor="nombre">Nombre usuario: </label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        ref={inputRef}
      />
      <button onClick={handlerFocus}>Enfocar aquí</button>
    </div>
  );
};

export default EjemploUseRefForm;
