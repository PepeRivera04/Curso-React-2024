import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import PrecioLuz from "./pages/PrecioLuz";
import ProtectedRoute from "./utils/ProtectedRoute";
import Login from "./pages/Login";
import { useContext } from "react";
import Context from "./context/Context";

function App() {
  const { isLogged } = useContext(Context);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [
        {
          element: (
            <ProtectedRoute
              isLogged={isLogged}
              redirectPath="/login"
            ></ProtectedRoute>
          ),
          children: [
            {
              index: true,
              element: <Navigate to="/precioluz" replace></Navigate>,
            },
            {
              path: "/precioluz",
              element: <PrecioLuz></PrecioLuz>,
            },
          ],
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
