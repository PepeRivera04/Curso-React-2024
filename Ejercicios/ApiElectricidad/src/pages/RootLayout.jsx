import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const RootLayout = () => {
  return (
    <>
      <Nav></Nav>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default RootLayout;
