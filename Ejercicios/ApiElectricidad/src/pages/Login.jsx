import React, { useContext, useState } from "react";
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { allUsers, setIsLogged, setUser } = useContext(Context);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function checkLogin(username, password) {
    allUsers.forEach((user) => {
      if (
        user.login.username === username &&
        user.login.password === password
      ) {
        setUser(user);
        setIsLogged(true);
        navigate("/precioluz");
      }
    });
  }

  return (
    <form className="flex flex-col justify-center items-center bg-gray-200 ">
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
