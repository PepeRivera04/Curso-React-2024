import { Navigate, Outlet } from "react-router-dom";
import { useAuthProduct } from "../context/authContextProduct";

const ProtectedRoute = ({ redirectPath }) => {
  const { userFirebase } = useAuthProduct();

  const isActive = !!userFirebase;

  if (!isActive) {
    return <Navigate to={redirectPath} replace></Navigate>;
  }

  return <Outlet />;
};

export default ProtectedRoute;
