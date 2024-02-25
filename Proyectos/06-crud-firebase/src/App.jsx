import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoutePage from "./pages/RoutePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import EditProductPage from "./pages/EditProductPage";
import PaymentPage from "./pages/PaymentPage";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import { AuthProvider } from "./context/authContextProduct";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RoutePage></RoutePage>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          element: <ProtectedRoute redirectPath="/login"></ProtectedRoute>,
          children: [
            { index: true, element: <HomePage></HomePage> },
            {
              path: "/productos/:idproducto",
              element: <EditProductPage></EditProductPage>,
            },
            { path: "/payment", element: <PaymentPage></PaymentPage> },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage></LoginPage>,
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
}

export default App;
