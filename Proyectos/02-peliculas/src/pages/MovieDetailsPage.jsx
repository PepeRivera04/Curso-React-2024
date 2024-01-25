import { useParams } from "react-router-dom";
import useDataApi from "../hooks/useDataApi";

const apiKey = import.meta.env.VITE_API_TOKEN;

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const apiEndPoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=es`;
  const { data } = useDataApi(apiEndPoint);

  const { poster_path, title, overview, release_date, runtime } = data || {};

  return (
    <>
      <div className="flex p-6">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt=""
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
      </div>
    </>
  );
};

export default MovieDetailsPage;
