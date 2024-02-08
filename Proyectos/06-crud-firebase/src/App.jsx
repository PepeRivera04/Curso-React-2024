import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoutePage from "./pages/RoutePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import EditProductPage from "./pages/EditProductPage";
import PaymentPage from "./pages/PaymentPage";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RoutePage></RoutePage>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          element: (
            <ProtectedRoute
              isActive={true}
              redirectPath="/login"
            ></ProtectedRoute>
          ),
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

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
