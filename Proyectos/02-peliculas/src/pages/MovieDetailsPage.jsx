import { Link, useParams } from "react-router-dom";
import useDataApi from "../hooks/useDataApi";

const apiKey = import.meta.env.VITE_API_TOKEN;

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const apiEndPoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=es`;
  const { data } = useDataApi(apiEndPoint);

  // console.log(data);

  const {
    poster_path,
    title,
    overview,
    release_date,
    genres,
    tagline,
    backdrop_path,
  } = data || {};

  return (
    <>
      <div className="flex mx-auto flex-col w-3/6 items-center">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="mx-auto my-10 shadow-gray-700 shadow-xl rounded-xl hover:shadow-2xl hover:bg-black transition-all duration-500 ease-out"
        />
        <img
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={title}
          className="mx-auto my-10 shadow-gray-700 shadow-xl rounded-xl hover:shadow-2xl hover:bg-black transition-all duration-500 ease-out"
        />
      </div>

      <div className="bg-gray-800 p-4 text-white max-w-md mx-auto rounded-xl shadow overflow-hidden md:max-w-2xl m-5 hover:shadow-2xl hover:bg-black transition-all duration-500 ease-in-out">
        <div className="md:flex flex-col">
          <div className="uppercase tracking-wide text-2xl text-indigo-500 font-semibold">
            {title}
          </div>
          <p className="block mt-5 text-lg leading-tight font-medium text-white">
            {tagline}
          </p>
          <p className="block mt-5 text-lg leading-tight font-medium text-white">
            {release_date}
          </p>
          <p className="block mt-5 text-lg leading-tight font-medium text-white">
            {}
          </p>
          <p className="mt-20">{overview}</p>
        </div>
      </div>
      {/* <div className="flex p-6 justify-evenly">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="border-2 border-black "
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className="p-4 text-center">{overview}</p>
          <h3>
            <strong>Fecha de estreno:</strong> {release_date}
          </h3>
          <h3>
            <strong>Duración :</strong> {runtime} m
          </h3>
        </div>
      </div> */}
    </>
  );
};

export default MovieDetailsPage;
