import Nav from "../pages/Nav";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
    </>
  );
};

export default RootLayout;
