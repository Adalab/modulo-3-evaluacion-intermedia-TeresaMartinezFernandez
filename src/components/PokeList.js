import React from "react";
import Pokemon from "./Pokemon";
class PokeList extends React.Component {
  render() {
    const item = this.props.pokemons.map((pokemonItem) => {
      console.log(pokemonItem.name);
      return (
        
      );
    });
    return (
     
    );
  }
}
export default PokeList;
