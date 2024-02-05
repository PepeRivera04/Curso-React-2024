import Logo from "/logo.svg";
import Context from "../context/Context";
import { useContext } from "react";

const Nav = () => {
  const { user, setIsLogged, setUser } = useContext(Context);

  function handlerClick() {
    setUser({});
    setIsLogged(false);
  }

  return (
    <div className="flex justify-around bg-slate-900 p-6 text-white items-center">
      <img className="w-16" src={Logo} alt="React Logo" />
      <h1 className="text-2xl font-mono">Api Consumo Electricidad</h1>
      <div className="flex items-center font-mono">
        <h2>
          {user.firstname} {user.lastname}
        </h2>
        <button
          onClick={handlerClick}
          className="bg-slate-500 rounded-md p-2 m-2"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Nav;
