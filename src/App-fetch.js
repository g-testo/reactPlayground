import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
    let [pokemonList, setPokemonList] = useState([]);
    // Update often, onRender
    // Lifecycle
    useEffect(() => {
        // onload
        fetch("https://pokemon-backend-dfea.onrender.com/api/pokemon")
            .then((res) => res.json())
            .then((pokemonData) => {
                setPokemonList(pokemonData);
            });
    }, []);

    let handleDivOnclick = () => {
        console.log("Pokemon Clicked");
    };

    let pokemonElToDisplay = pokemonList.map((pokemon) => {
        return (
            <div key={pokemon.name} onClick={handleDivOnclick}>
                <img width="75" src={pokemon.official_artwork_default} alt={pokemon.name} />
                <p>{pokemon.name}</p>
            </div>
        );
    });

    return <div className="App">{pokemonElToDisplay}</div>;
}

export default App;
