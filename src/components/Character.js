import React from "react";

const Character = ({ character }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={character.imageUrl} alt={character.image} />
        </div>
        <div className="card-back">
          <h1> {character.fullName} </h1>
          <h1>{character.title} </h1>
          <strong> {character.family}</strong>
        </div>
      </div>
    </div>
  );
};

export default Character;
