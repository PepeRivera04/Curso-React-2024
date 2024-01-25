import MovieCard from "../components/MovieCard";
import MovieSearchForm from "../components/MovieSearchForm";
import useDataApi from "../hooks/useDataApi";

const apiKey = import.meta.env.VITE_API_TOKEN;

// cambiar el número del final del parámetro "page" para hacer paginación
const apiEndPoint = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es&page=1`;

const Home = () => {
  const { data } = useDataApi(apiEndPoint);

  const movies =
    data && data.results && Array.isArray(data.results) ? data.results : [];

  return (
    <>
      <MovieSearchForm></MovieSearchForm>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">↓ Peliculas Recomendadas Hoy ↓</h1>
        <div className="w-full gap-[2rem] grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] p-10">
          {movies.map((movie) => (
            <MovieCard key={movie.id} pelicula={movie}></MovieCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
