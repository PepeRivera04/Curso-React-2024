import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Error from "./pages/Error";
import ProtectedRoute from "./utils/ProtectedRoute";
import RoutePage from "./pages/RoutePage";
import { useState } from "react";
import { ExamenProvider } from "./context/ExamenContext";

function App() {
  const [isBuscado, setIsBuscado] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RoutePage></RoutePage>,
      errorElement: <Error></Error>,
      children: [
        {
          element: (
            <ProtectedRoute
              isActive={true}
              redirectPath="/home"
            ></ProtectedRoute>
          ),
          children: [
            {
              path: "/gallery",
              element: <Gallery></Gallery>,
            },
          ],
        },
        {
          path: "/home",
          element: (
            <Home isBuscado={isBuscado} setIsBuscado={setIsBuscado}></Home>
          ),
        },
      ],
    },
  ]);

  return (
    <ExamenProvider>
      <RouterProvider router={router}></RouterProvider>
    </ExamenProvider>
  );
}

export default App;
