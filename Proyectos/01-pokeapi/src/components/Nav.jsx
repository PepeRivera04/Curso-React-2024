// import React from 'react'
import logo from "../assets/SVG_Logo_Pokemon.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-around items-center mt-4">
      <img className="max-w-[250px]" src={logo} alt="" />
      <Link
        className=" font-bold text-2xl bg-blue-100 text-black p-2 rounded-lg"
        to="/"
      >
        Home
      </Link>
      <Link
        className=" font-bold text-2xl bg-blue-100 text-black p-2 rounded-lg"
        to="/about"
      >
        About
      </Link>
    </nav>
  );
};

export default Nav;
