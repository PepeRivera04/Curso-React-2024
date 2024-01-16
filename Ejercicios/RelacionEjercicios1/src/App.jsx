import "./App.css";
// import EstilosEnJSX from "./components/EstilosEnJSX";
import UsoAvanzadoDeProps from "./components/UsoAvanzadoDeProps";
// import UsoDeComponentes from "./components/UsoDeComponentes";
// import UsoDeEventos from "./components/UsoDeEventos";
// import Bienvenido from "./components/Bienvenido
// import UsoDeListas from "./components/UsoDeListas";

function App() {
  function onClick() {
    console.log("Se ha clicado el botón");
  }

  return (
    <>
      <UsoAvanzadoDeProps
        text="Clícame"
        backgroundColor="blue"
        color="white"
        onClick={onClick}
      />
    </>
  );
}

export default App;
