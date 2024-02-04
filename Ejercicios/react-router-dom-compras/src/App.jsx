import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext, useState } from "react";
import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductoDetail from "./pages/ProductoDetail";
import ProtectedRoute from "./utils/ProtectedRoute";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LoginContext from "./context/LoginContext";

function App() {
  const { isLogged } = useContext(LoginContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      errorElement: <ErrorPage></ErrorPage>,
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
              path: "/",
              element: <Home></Home>,
            },
            {
              path: "/cart",
              element: <Cart></Cart>,
            },
          ],
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/productos/:productoId",
          element: <ProductoDetail></ProductoDetail>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
