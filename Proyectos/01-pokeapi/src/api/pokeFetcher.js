const URL = import.meta.env.VITE_URL_POKEAPI;

export const fetchData = async (setPokemons) => {
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
        };
        return datos;
      })
    );

    setPokemons(pokemonData);
  } catch (e) {
    console.error(e);
  }
};
