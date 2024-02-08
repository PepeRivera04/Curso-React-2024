import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RoutePage = () => {
  return (
    <>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default RoutePage;
