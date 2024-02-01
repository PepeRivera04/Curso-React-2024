import { useEffect } from "react";
import { useRef } from "react";

const EjemploUseRefInput = () => {
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const inputRef = useRef(null);

  return (
    <div>
      <label>Nombre: </label>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default EjemploUseRefInput;
