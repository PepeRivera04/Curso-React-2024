import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Buscador from "./components/Buscador";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

const URL = import.meta.env.VITE_URL_POKEAPI;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handlerOpenModal = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handlerCloseModal = () => {
    setSelectedPokemon(null);
  };

  useEffect(() => {
    // Acceso a la api de pokeapi.co
    // Creo la función o la importo de un helper

    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Error al traer la informacion de los pokemon");
        }
        const data = await response.json();
        const results = data.results;

        const pokemonData = await Promise.all(
          results.map(async (pokemon) => {
            const resp = await fetch(pokemon.url);
            const pokemonDetails = await resp.json();
            const datos = {
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              img: pokemonDetails.sprites.other.dream_world.front_default || "",
              stats:
                pokemonDetails.stats.reduce(
                  (acc, stat) => acc + stat.base_stat,
                  0
                ) / pokemonDetails.stats.length,
              //  0-33 --> 1 , 33- 66 --> 2, 66 --> ... ; oro,plata,bronce
            };
            return datos;
          })
        );

        // setear pokemonData en un estado que gaurde los pokemon
        // setLoading
        setPokemons(pokemonData);
      } catch (e) {
        console.error(e);
      }
    };

    // Ejecuto la función
    fetchData();
  }, []);

  return (
    <>
      <Nav></Nav>
      <Buscador onChange={(e) => setBusqueda(e.target.value)}></Buscador>
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
      <Footer></Footer>
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

export default App;
