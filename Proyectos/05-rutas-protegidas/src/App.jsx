import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import RoutePage from "./pages/RoutePage";
import Error from "./pages/Error";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RoutePage></RoutePage>,
      errorElement: <Error></Error>,
      children: [
        {
          element: (
            <ProtectedRoute
              isActive={false}
              redirectPath="/login"
            ></ProtectedRoute>
          ),
          children: [
            {
              index: true,
              element: <Home></Home>,
            },
            {
              path: "/about",
              element: <About></About>,
            },
          ],
        },
        {
          path: "login",
          element: <Login></Login>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
