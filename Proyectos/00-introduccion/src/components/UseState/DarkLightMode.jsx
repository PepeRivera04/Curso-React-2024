import { useState } from "react";
import "./DarkLightMode.css";

function DarkLightMode() {
  const [DarkLightMode, setDarkLightMode] = useState(false);

  function toggleTheme() {
    setDarkLightMode(!DarkLightMode);
  }

  return (
    <>
      <div className={`default ${DarkLightMode ? "light" : "dark"} `}>
        <h1>Cambio de color de tema</h1>
        <button onClick={toggleTheme}>
          {DarkLightMode ? "Modo Oscuro" : "Modo Claro"}
        </button>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati,
          illum facere? Impedit commodi doloremque dicta fugiat enim, molestias
          adipisci animi distinctio vitae facere. Quia nihil ab ipsa, vitae
          iusto quaerat!
        </p>
      </div>
    </>
  );
}

export default DarkLightMode;
