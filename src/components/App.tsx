import "../css/index.css";
import { CharacterInfo } from "./CharacterInfo";
import { CharactersList } from "./CharactersList";
import { Hero } from "./Hero";

export const App = () => {
  return (
    <>
      <Hero></Hero>
      <main id="main-content">
        <CharactersList />
        <CharacterInfo />
      </main>
    </>
  );
};
