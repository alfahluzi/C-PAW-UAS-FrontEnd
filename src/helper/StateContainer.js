import create from "zustand";

const StateContainer = create((set) => ({
  pokemons: [],
  addPokemons: (pokemon) =>
    set((state) => ({
      pokemons: [
        {
          name: pokemon.name,
          image: pokemon.image,
          introduction: pokemon.introduction,
        },
        ...state.pokemons,
      ],
    })),
  removePokemon: (name) =>
    set((state) => ({
      pokemons: state.pokemons.filter((pokemon) => pokemon.name !== name),
    })),
}));
export default StateStore;
