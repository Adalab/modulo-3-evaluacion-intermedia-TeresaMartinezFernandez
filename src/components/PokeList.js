import React from "react";
import "../stylesheets/App.css";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  const itemPokemon = props.pokemons.map((pokemon) => {
    return (
      <li className="pokemonList" key={pokemon.id}>
        <Pokemon pokemon={pokemon} />
      </li>
    );
  });
  return (
    <div className="container">
      <h1 className="listTitle">Mi Lista de Pokemon</h1>
      <ul className="myList">{itemPokemon}</ul>;
    </div>
  );
};

export default PokeList;
