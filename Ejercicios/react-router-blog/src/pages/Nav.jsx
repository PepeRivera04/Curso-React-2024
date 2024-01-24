import { Link } from "react-router-dom";

const URL = import.meta.env.VITE_URL_POSTS;

const Nav = () => {
  return (
    <>
      <div className="bg-blue-400 text-center p-5 text-2xl font-mono flex justify-evenly">
        <Link className="hover:text-3xl" to="/">
          Home
        </Link>
        <Link className="hover:text-3xl" to={URL}>
          API Posts
        </Link>
      </div>
    </>
  );
};

export default Nav;
