import React, { useContext, useEffect, useState } from "react";
import Context from "../context/Context";

const Login = ({ isLogged, setIsLogged }) => {
  const { allUsers } = useContext(Context);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("isLogged en Login después de setIsLogged:", isLogged);
  }, [isLogged]);

  function checkLogin(username, password) {
    allUsers.forEach((user) => {
      if (user.login.username === username) {
        console.log("Nombre bien");
        if (user.login.password === password) {
          console.log("password bien");
          setIsLogged(true);
          console.log("isLogged después de setIsLogged(true):", isLogged);
          alert("Login correcto!");
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
      <input
        id="username"
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label htmlFor="">Password :</label>
      <br />
      <input
        id="password"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button
        onClick={() => checkLogin(username, password)}
        className="bg-gray-400 p-2 rounded-md"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
