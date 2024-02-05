import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="h-screen">
      <Nav></Nav>
      <main className="h-[100%]">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
