import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

const URL = "https://pokeapi.co/api/v2/pokemon?limit=100";

function App() {
  const [pokemons, setPokemons] = useState([]);

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
          results.map(async (pokemon, index) => {
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
      } catch (e) {
        console.error(e);
      }
    };

    // Ejecuto la función y la guardo en
    setPokemons(fetchData());
    // console.log(fetchData());
  }, []);

  return (
    <>
      <h1>{JSON.stringify(pokemons)}</h1>
    </>
  );
}

export default App;
