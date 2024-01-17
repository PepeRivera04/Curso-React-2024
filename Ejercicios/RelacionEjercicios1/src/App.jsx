import "./App.css";
import ConditionalRenderAdvanced from "./components/ConditionalRenderAdvanced";
// import ConditionalRender from "./components/ConditionalRender";
// import ToggleVisibility from "./components/ToggleVisibility";
// import UserList from "./components/UserList";
// import EstilosEnJSX from "./components/EstilosEnJSX";
// import UsoAvanzadoDeProps from "./components/UsoAvanzadoDeProps";
// import UsoDeComponentes from "./components/UsoDeComponentes";
// import UsoDeEventos from "./components/UsoDeEventos";
// import Bienvenido from "./components/Bienvenido
// import UsoDeListas from "./components/UsoDeListas";

function App() {
  const userList = ["Juan", "Pedro"];

  return (
    <>
      <ConditionalRenderAdvanced
        isLoggedIn={true}
        userRole="normal"
      ></ConditionalRenderAdvanced>
    </>
  );
}

export default App;
