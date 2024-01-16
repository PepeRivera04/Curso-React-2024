// -------------------- IMPORTS --------------------------------
// import "./App.css";
// import Contador from "./components/UseState/Contador";
// import ContadorDoble from "./components/UseState/ContadorDoble";
// import ContadorDobleBest from "./components/UseState/ContadorDobleBest";
// import DarkLightMode from "./components/UseState/DarkLightMode";
// import React from "react"; Si se quita esta linea no pasa nada debido a la versión de React

import GitHubUsers from "./components/UseEffect/GithubUserCardApi/GitHubUsers";

// import ComponenteProps from "./components/Props/ComponenteProps";

// import RegistrarFormulario from "./components/UseState/RegistrarFormulario";
// import ToDoList from "./components/UseState/ToDoList";
// import UseEffectBasic from "./components/UseEffect/UseEffectBasic";
// import ResizeListener from "./components/UseEffect/ResizeListener";

// --------------- DECLARACIÓN DE VARIABLES GLOBALES -----------------------

const App = () => {
  return (
    <>
      <h1>Ejemplos básicos de React</h1>
      <hr />
      {/* <RegistrarFormulario></RegistrarFormulario> */}
      {/* <ToDoList></ToDoList> */}
      {/* <ComponenteProps></ComponenteProps> */}
      {/* <UseEffectBasic></UseEffectBasic> */}
      {/* <ResizeListener></ResizeListener> */}
      <GitHubUsers />
    </>
  );
};

export default App;
