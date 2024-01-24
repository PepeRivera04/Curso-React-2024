import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./routes/RootLayout";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>
      children : [
        {path:"/", element:<Home></Home>} ,
        {path:"/:postId", element:<Post></Post>}
      ]
    },
  ]);

  return <></>;
}

export default App;
