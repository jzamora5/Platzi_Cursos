import React, { useEffect } from "react";
import { useDispatch, useSelect } from "react-redux";
// import { connect } from "react-redux";
import Searcher from "../../components/Searcher";
import PokemonList from "../../components/PokemonList";
import "./styles.css";
import { getPokemons } from "../../api/getPokemons";
import { setPokemon } from "../../actions/index";
import { useSelector } from "react-redux";
import axios from "axios";

// const mapStateToProps = (state) => ({
//   list: state.list,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setPokemons: (value) => dispatch(setPokemon(value)),
// });

function Home() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);

  useEffect(() => {
    getPokemons()
      .then((res) => {
        const pokemonList = res.results;
        return Promise.all(
          pokemonList.map((pokemon) => axios.get(pokemon.url))
        );
      })
      .then((pokemonsResponse) => {
        const pokemonsData = pokemonsResponse.map((response) => response.data);
        dispatch(setPokemon(pokemonsData));
      });
  }, []);

  return (
    <div className="Home">
      <Searcher />
      <PokemonList pokemons={list} />
    </div>
  );
}

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
