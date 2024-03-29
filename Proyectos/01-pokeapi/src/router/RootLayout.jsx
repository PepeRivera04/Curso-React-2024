// import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <Nav></Nav>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default RootLayout;
