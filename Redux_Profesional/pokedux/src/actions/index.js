import { getPokemons } from "../api/getPokemons";
import { SET_POKEMONS, SET_ERROR, CLEAR_ERROR } from "./types";
import axios from "axios";

export const setPokemon = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const clearError = (payload) => ({
  type: CLEAR_ERROR,
  payload,
});

export const getPokemonWithDetails = () => (dispatch) => {
  getPokemons()
    .then((res) => {
      const pokemonList = res.results;
      return Promise.all(pokemonList.map((pokemon) => axios.get(pokemon.url)));
    })
    .then((pokemonsResponse) => {
      const pokemonsData = pokemonsResponse.map((response) => response.data);
      dispatch(setPokemon(pokemonsData));
    });
};
