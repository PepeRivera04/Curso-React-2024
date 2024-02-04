import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import PrecioLuz from "./pages/PrecioLuz";
import ProtectedRoute from "./utils/ProtectedRoute";
import ContextProvider from "./context/ContextProvider";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [
        {
          element: (
            <ProtectedRoute
              isLogged={false}
              redirectPath="/login"
            ></ProtectedRoute>
          ),
          children: [
            {
              path: "/",
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

  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
