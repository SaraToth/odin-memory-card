/** 
 * @module board 
 * Board component acts as a parent and manages all other components
 */

import "./Board.css"
import { useState } from "react";
import { useEffect } from "react";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import { POKEMON_NAMES } from "../utils/constants";

export default function Board() {

    const [pokemonData, setPokemonData] = useState([]); // Pokemon filterd API data
    const [bestScore, setBestScore] = useState(0); // Tracks the best score
    const [clickedPokemon, setClickedPokemon] = useState([]); // Tracks what cards were clicked
    const [currentScore, setCurrentScore] = useState(0);

    /**
     * API fetch call that updates pokemonData state with filtered API data
     */
    useEffect(() => {
        /**
         * Helper async function to fetch relevant pokemon data from API
         * @param {String} pokemonName 
         * @returns {Object} Pokemon object with properties: name id and imgUrl for that pokemon
         */
        async function fetchPokemonData(pokemonName) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            const pokemonData = await response.json();

            return {
                name: pokemonName,
                pokeId: pokemonData.id,
                imgUrl: pokemonData.sprites.other["official-artwork"].front_default,
            }
        }

        /**
         * Fetches all filtered pokemon data from API and updates component state with results.
         */
        async function fetchAllPokemon() {
            const results = await Promise.all(POKEMON_NAMES.map(pokemon => fetchPokemonData(pokemon)));
            setPokemonData(results);
            }
        
        fetchAllPokemon();
    }, []);

    const handleClick = (e) => {
        const pokemonCard = e.target.closest(".card"); // Access the entire pokemon card
        const pokeName = pokemonCard.id // Pokemon name as it is written in constants module
        handleCurrentScore(pokeName);
        randomizeCards();
    }

    const handleCurrentScore = (pokeName) => {
        // Updates clickedPokemon and currentScore when cards are clicked for the first time
        if (!clickedPokemon.includes(pokeName)) {
            setClickedPokemon((prevClicks)=> [...prevClicks, pokeName]);
            setCurrentScore(currentScore + 1);
        }

        if (clickedPokemon.includes(pokeName)) {
            handleBestScore();
            resetGame();
        }
    }

    const resetGame = () => {
        setClickedPokemon([]);
        setCurrentScore(0);
    }

    const handleBestScore = () => {
        if (currentScore > bestScore) {
            setBestScore(currentScore);
        }
    }

    const randomizeCards = () => {
        const arr = pokemonData
        for (let i= arr.length -1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        setPokemonData(arr);
    }

    return (
        <>
            <Header bestScore={bestScore} currentScore={currentScore}/>
            <div className="grid-parent">
                {pokemonData && pokemonData.map((pokemon)=> 
                    <Card key={pokemon.pokeId} pokemonObject={pokemon} onClick={handleClick} />
                )}
            </div>
            <Footer />
        </> 
    )
}
