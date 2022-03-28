import React from "react";

import Character from "./Character";
const CharacterGrid = ({ isLoading, character }) => {
  return isLoading ? (
    <h1> Loading.. </h1>
  ) : (
    <section className="cards">
      {character.map((char) => {
        return <Character character={char} />;
      })}
    </section>
  );
};

export default CharacterGrid;
