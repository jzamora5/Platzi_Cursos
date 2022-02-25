import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { connect } from "react-redux";
import Searcher from "../../components/Searcher";
import PokemonList from "../../components/PokemonList";
import "./styles.css";
import { getPokemonWithDetails } from "../../actions/index";
import { useSelector } from "react-redux";

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
    dispatch(getPokemonWithDetails());
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
