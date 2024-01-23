import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Productos from "./router-dom/Productos";
import RootLayout from "./router-dom/RootLayout";
import HomePage from "./router-dom/HomePage";
import ErrorPage from "./router-dom/ErrorPage";
import ProductosDetails from "./router-dom/ProductosDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/productos", element: <Productos /> },
        { path: "/productos/:productId", element: <ProductosDetails /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
