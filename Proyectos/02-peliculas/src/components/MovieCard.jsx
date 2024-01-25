import { Link } from "react-router-dom";

const MovieCard = ({ pelicula }) => {
  return (
    <>
      <div className="flex  items-center bg-slate-800 rounded-md text-white">
        <Link to={`peliculas/${pelicula.id}`} className="h-full w-52">
          <img
            src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
            alt="movie_poster"
            className="h-full rounded-l-md"
          />
        </Link>
        <div className="flex flex-1 flex-col justify-center items-center text-center p-4">
          <h1 className="font-bold text-xl">{pelicula.title}</h1>
          <h3>{pelicula.release_date}</h3>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
