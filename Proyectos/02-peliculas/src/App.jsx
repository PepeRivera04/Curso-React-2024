import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import RootMovieLayout from "./pages/RootMovieLayout";
import ErrorMoviePage from "./pages/ErrorMoviePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import Home from "./pages/Home";
import AcercaDe from "./pages/AcercaDe";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootMovieLayout />,
      // loader:() => {
      // Esto se ejecuta instantes antes de empezar a renderizar, y acepta asincronía.
      // },
      errorElement: <ErrorMoviePage />,
      children: [
        { index: true, element: <Home /> },
        { path: "peliculas/:movieId", element: <MovieDetailsPage /> },
      ],
    },
    { path: "/acerca-de", element: <AcercaDe></AcercaDe> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
