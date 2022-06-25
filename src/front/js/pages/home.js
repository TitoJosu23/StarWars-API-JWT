import React, { useContext } from "react";
import "../../styles/home.css";
import { PlanetCards } from "../component/PlanetCards.js";
import { CharacterCards } from "../component/CharacterCards.js";
import { Context } from "../store/appContext.js";

export const Home = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container-fluid p-0 pb-4 m-0">
      <h1 className="mx-0 px-4 pb-2 pt-4 headers">Characters</h1>
      <div
        className="d-flex flex-row mx-auto"
        style={{ width: "90%", overflow: "auto" }}
      >
        {store.characters.map((c, i) => (
          <CharacterCards
            data={c}
            uid={store.characters[i].uid}
            favStatus={store.characters[i].isFavorite}
            name={store.characters[i].name}
            gender={store.characters[i].gender}
            hair_color={store.characters[i].hair_color}
            eye_color={store.characters[i].eye_color}
            img="https://via.placeholder.com/400x200"
            details={store.characters[i].details}
            key={i}
          />
        ))}
      </div>
      <h1 className="mx-0 px-4 pb-2 pt-4 headers">Planets</h1>
      <div
        className="d-flex flex-row mx-auto mb-4"
        style={{ width: "90%", overflow: "auto" }}
      >
        {store.planets.map((c, i) => (
          <PlanetCards
            data={c}
            uid={store.planets[i].uid}
            favStatus={store.planets[i].isFavorite}
            name={store.planets[i].name}
            climate={store.planets[i].climate}
            population={store.planets[i].population}
            details={store.planets[i].details}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};
