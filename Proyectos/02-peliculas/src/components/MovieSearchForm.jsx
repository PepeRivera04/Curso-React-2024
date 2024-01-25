import { useState } from "react";
import useDataApi from "../hooks/useDataApi";
import MovieCard from "./MovieCard";

const apiKey = import.meta.env.VITE_API_TOKEN;

const MovieSearchForm = () => {
  const apiEndoPoint = `https://api.themoviedb.org/3/discover/movie?&language=es-es&sort_by=popularity.desc&api_key=${apiKey}`;

  const { data, loading, error } = useDataApi(apiEndoPoint);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovie, setFilteredMovie] = useState([]);

  function handlerSearch(e) {
    e.preventDefault();
    const searchTerm = e.target.value.toLowerCase();
    setSearchQuery(searchTerm);

    if (searchTerm.trim() === "") {
      setFilteredMovie([]);
    } else {
      const filteredResults = data?.results.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm)
      );
      setFilteredMovie(filteredResults || []);
    }
  }

  function handlerDelete() {
    setSearchQuery("");
    setFilteredMovie([]);
  }

  return (
    <div className="flex flex-col items-center justify-center my-4">
      <form
        action=""
        className="w-1/2 bg-gray-800 p-4 rounded-lg flex items-center"
        onSubmit={handlerSearch}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={handlerSearch}
          placeholder="Buscar película"
          className="w-full py-2 px-4 bg-gray-700 text-white rounded-md focus:outline-none"
        />
        <button
          type="submit"
          className=" ml-2 bg-sky-800 text-white py-2 px-4 rounded-md hoaver:bg-sky-600 focus:outline-none"
        >
          Buscar
        </button>

        {searchQuery && (
          <button
            type="submit"
            className=" ml-2 bg-red-800 text-white py-2 px-4 rounded-md hoaver:bg-sky-600 focus:outline-none"
            onClick={handlerDelete}
          >
            Borrar
          </button>
        )}
      </form>

      <div className="w-full gap-[2rem] grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] p-10">
        {loading && <h1>Spinner</h1>}
        {error && <h1>Esto es un error</h1>}
        {filteredMovie.map((movie) => (
          <MovieCard key={movie.id} pelicula={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default MovieSearchForm;
