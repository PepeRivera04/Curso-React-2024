import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const RouteMovieLayout = () => {
  return (
    <>
      <Header></Header>
      <main>
        {/* Aqui van los hijos */}
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default RouteMovieLayout;
