import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPost } from "../services/fetchPost";

const URL = import.meta.env.VITE_URL_POSTS;

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPost(URL, setPosts);
  }, []);

  return (
    <>
      <div className="bg-gray-200 p-8">
        <h1 className="text-2xl font-bold mb-4">Lista de posts</h1>
        <ul className="list-disc pl-4">
          {posts.length > 0 ? (
            posts.map((el) => (
              <li className="mb-2" key={el.id}>
                <Link
                  to={`/post/${el.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Enlace a post {el.id}
                </Link>
              </li>
            ))
          ) : (
            <li className="text-red-500">No hay posts disponibles</li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Home;
