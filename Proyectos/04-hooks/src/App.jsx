import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EjemploUseRefInput from "./components/EjemploUseRefInput";
import EjemploUseRefForm from "./components/EjemploUseRefForm";
import { useRef } from "react";
import { useEffect } from "react";
import EjemploUseRefMutableData from "./components/EjemploUseRefMutableData";
import InicioApp from "./components/useContext/InicioApp";

function App() {
  const [count, setCount] = useState(0);

  const buttonRef = useRef(null);

  function handlerClickBtn() {
    setCount((count) => count + 1);
    buttonRef.current.style.background = "red";
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handlerClickBtn} ref={buttonRef}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <hr />
      <h2>Uso useRef</h2>
      <EjemploUseRefInput></EjemploUseRefInput>
      <hr />
      <EjemploUseRefForm></EjemploUseRefForm>
      <hr />
      <EjemploUseRefMutableData></EjemploUseRefMutableData>
      <hr />
      <h2>Uso useContext</h2>
      <InicioApp></InicioApp>
    </>
  );
}

export default App;
