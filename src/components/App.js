import React from "react";
import pokemons from "../data/data.json";
import PokeList from "./PokeList";
import "../stylesheets/App.css";

const App = () => {
  return (
    <>
      <PokeList pokemons={pokemons}></PokeList>
    </>
  );
};

export default App;
