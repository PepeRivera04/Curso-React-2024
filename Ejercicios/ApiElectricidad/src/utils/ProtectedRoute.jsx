import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isLogged, redirectPath }) => {
  if (!isLogged) {
    return <Navigate to={redirectPath} replace></Navigate>;
  }

  return <Outlet></Outlet>;
};

export default ProtectedRoute;
