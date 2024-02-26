import { Outlet } from "react-router-dom";
import Home from "./Home";

const RoutePage = () => {
  return (
    <>
      <Home></Home>
      <Outlet></Outlet>
    </>
  );
};

export default RoutePage;
