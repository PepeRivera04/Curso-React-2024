import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Lista de blogs</h1>
      <ul>
        <li>
          <Link to="/post/post-1">Enlace a post 1</Link>
        </li>
        <li>
          <Link to="/post/post-2">Enlace a post 2</Link>
        </li>
        <li>
          <Link to="/post/post-3">Enlace a post 3</Link>
        </li>
        <li>
          <Link to="/post/post-4">Enlace a post 4</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
