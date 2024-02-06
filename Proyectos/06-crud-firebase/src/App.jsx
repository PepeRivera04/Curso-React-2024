import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import EditProductPage from "./pages/EditProductPage";
import PaymentPage from "./pages/PaymentPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage></HomePage>,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/login",
      element: <LoginPage></LoginPage>,
    },
    {
      path: "/productos/:idproducto",
      element: <EditProductPage></EditProductPage>,
    },
    {
      path: "/payment",
      element: <PaymentPage></PaymentPage>,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
