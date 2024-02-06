import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <Nav></Nav>
      <main className="sm:h-[100%] md:h-[100%] lg:h-screen">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default RootLayout;
