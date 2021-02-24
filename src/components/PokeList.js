import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/App.css";

class PokeList extends React.Component {
  render() {
    const item = this.props.pokemons.map((pokemonItem) => {
      console.log(pokemonItem.name);
      return (
        <li className="pokemonList" key={pokemonItem.id}>
          <Pokemon pokemon={pokemonItem} />
        </li>
      );
    });
    return (
      <div className="container">
        <h1 className="listTitle">Mi lista de pokemon</h1>
        <ul className="myList">{item}</ul>
      </div>
    );
  }
}
export default PokeList;
