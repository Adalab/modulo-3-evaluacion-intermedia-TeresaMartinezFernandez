import React from "react";
import "../stylesheets/App.css";

const Pokemon = (props) => {
  const itemTypes = props.pokemon.types.map((type, i) => {
    return (
      <li key={i} className="typesList">
        {type}
      </li>
    );
  });
  return (
    <article className="cardPokemon">
      <img
        src={props.pokemon.url}
        alt={props.pokemon.name}
        title="imagen de pokemon"
      ></img>
      <h2 className="namePokemon">{props.pokemon.name}</h2>
      <ul className="propertyList">{itemTypes}</ul>
    </article>
  );
};
export default Pokemon;
