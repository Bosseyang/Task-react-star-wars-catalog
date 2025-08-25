import { useEffect, useState } from "react";
import "../css/index.css";
import { CharacterInfo } from "./CharacterInfo";
import { CharacterList } from "./CharacterList";
import { Hero } from "./Hero";
import { fetchCharacters } from "../api";
import type { ICharacter } from "../types";

export const App = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  useEffect(() => {
    fetchCharacters().then((data) => setCharacters(data))
  })
  return (
    <>
      <Hero />
      <main id="main-content">
        <CharacterList characters={characters}/>
        <CharacterInfo />
      </main>
    </>
  );
};
