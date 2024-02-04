import Logo from "/logo.svg";
import Context from "../context/Context";
import { useContext } from "react";

const Nav = () => {
  const { user } = useContext(Context);

  return (
    <div className="flex justify-around bg-slate-600 p-6">
      <img className="w-16" src={Logo} alt="React Logo" />
      <div className="flex items-center">
        <h2 className="text-white">
          {user.name} {user.lastname}
        </h2>
        <button className="bg-blue-200 rounded-md p-2 m-2">
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Nav;
