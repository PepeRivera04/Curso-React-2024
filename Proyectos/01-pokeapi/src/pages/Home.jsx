import { useEffect } from "react";
import { useState } from "react";

import Card from "../components/Card";
import Buscador from "../components/Buscador";
import Modal from "../components/Modal";
import { fetchData } from "../api/pokeFetcher";

const URL = import.meta.env.VITE_URL_POKEAPI;

function Home() {
  // Hooks
  const [pokemons, setPokemons] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  // Funciones
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handlerOpenModal = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handlerCloseModal = () => {
    setSelectedPokemon(null);
  };

  const handlerKeyDown = (e) => {
    if (e.key === "Escape") {
      setBusqueda("");
    }
  };

  useEffect(() => {
    fetchData(setPokemons);
  }, []);

  return (
    <>
      <Buscador
        onChange={(e) => setBusqueda(e.target.value)}
        onKeyDown={handlerKeyDown}
        busqueda={busqueda}
      ></Buscador>
      <div
        className={`gap-[2rem] grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] p-10 ${
          selectedPokemon ? "blur-xl" : ""
        }`}
      >
        {busqueda === ""
          ? pokemons.map((pokemon) => (
              <Card
                key={pokemon.id}
                imgPokemon={pokemon.img}
                name={pokemon.name}
                stats={pokemon.stats}
                openModal={() => handlerOpenModal(pokemon)}
              ></Card>
            ))
          : filteredPokemons.map((pokemon) => (
              <Card
                key={pokemon.id}
                imgPokemon={pokemon.img}
                name={pokemon.name}
                stats={pokemon.stats}
                openModal={() => handlerOpenModal(pokemon)}
              ></Card>
            ))}
      </div>
      {!selectedPokemon ? (
        ""
      ) : (
        <Modal
          isOpen={!!selectedPokemon}
          imgPokemon={selectedPokemon?.img}
          name={selectedPokemon?.name}
          stats={selectedPokemon?.stats}
          closeModal={handlerCloseModal}
        ></Modal>
      )}
    </>
  );
}
export default Home;
