import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className="bg-blue-400 text-xl my-10">
      <nav>
        <ul className="flex text-center justify-evenly">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
