import { useState } from "react";

const initialState = 0;
const Contador = () => {
  // Declaración de los hooks
  const [counter, setCounter] = useState(initialState);

  // Declaración de funciones
  function handlerClickIncrementar() {
    setCounter(counter + 1);
    // Así es como se debería de hacer para asegurarnos teaer siempre el útlimo valor de la bariable estado.
    // setCounter((prevCounter) => prevCounter + 1);
  }

  //   Tiene que ser un valor que se pase como parametro
  function handlerClickDecrementar(n) {
    setCounter(counter - n);
  }

  return (
    <>
      <h1>Ejemplo de contador en React</h1>
      <h2>El contador vale : {counter}</h2>
      <button onClick={handlerClickIncrementar}>Incrementar contador</button>
      <button onClick={() => handlerClickDecrementar(2)}>
        Decrementar contador
      </button>
    </>
  );
};

export default Contador;
