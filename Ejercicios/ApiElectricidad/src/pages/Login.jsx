import React, { useContext } from "react";
import Context from "../context/Context";

const Login = () => {
  const { allUsers, setIsLogged, isLogged } = useContext(Context);

  function checkLogin(username, password) {
    allUsers.map((user) => {
      if (user.login.username === username) {
        if (user.login.password === password) {
          setIsLogged(!isLogged);
        }
      }
    });
  }

  return (
    <form
      className="flex flex-col justify-center items-center bg-gray-200 "
      action=""
    >
      <label htmlFor="">Userame :</label>
      <br />
      <input id="username" type="text" placeholder="username" />
      <br />
      <label htmlFor="">Password :</label>
      <br />
      <input id="password" type="password" placeholder="password" />
      <br />
      <button
        onClick={() => checkLogin()}
        className="bg-gray-400 p-2 rounded-md"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
