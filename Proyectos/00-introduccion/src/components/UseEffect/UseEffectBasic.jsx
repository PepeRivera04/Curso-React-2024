import { useEffect, useState } from "react";

const UseEffectBasic = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function handlerClick() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 2);
    setCount((prev) => prev + 3);
  }

  function handlerClick2() {
    setCount2(count2 + 1);
  }

  //   useEffect(() => {
  //     // Primera variante sin dependencias
  //     // Se ejecuta cuando se renderiza el componente y cuando se modifica cualquier estado.
  //     // Esta variante es MUY peligrosa. (Siempre que se pueda esta variante no se usa)
  //     console.log("Estoy en la primera variante de useEffect");
  //   });

  //   useEffect(() => {
  //     // Segunda variante
  //     // Solo se ejecuta una única vez, y es cuando se monta el componente, porque el array de dependencias esta vacío.
  //     console.log("Estoy en la segunda variante de useEffect");
  //   }, []);

  useEffect(() => {
    // Tercera variante
    // Se ejecuta cuando se monta el componente y si en el array de dependencias coloco aquel estado que quiero que cuando se modifique dispare este useEffect
    console.log("Estoy en la tercera variante de useEffect");
  }, [count]);

  //   useEffect(() => {});

  return (
    <div className="flex justify-center items-center bg-cyan-200 h-screen">
      <h1 className="text-xl font-bold"> Contador: {count}</h1>
      <button
        type="submit"
        className="mt-4 p-2 bg-slate-800 text-white rounded-md"
        onClick={handlerClick}
      >
        Aumentar
      </button>
      <h1 className="text-xl font-bold"> Contador: {count2}</h1>
      <button
        type="submit"
        className="mt-4 p-2 bg-slate-800 text-white rounded-md"
        onClick={handlerClick2}
      >
        Aumentar
      </button>
    </div>
  );
};

export default UseEffectBasic;
