import "./styles.css";

import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CharacterGrid from "./components/CharacterGrid";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // axios returns a promise
    const fetchCharac = async () => {
      const res = await axios(`https://thronesapi.com/api/v2/Characters`);
      setCharacters(res.data);
      setIsLoading(false);
    };
    fetchCharac();
  }, []);

  return (
    <div className="App">
      <Header />
      <CharacterGrid isLoading={isLoading} character={characters} />
    </div>
  );
}
