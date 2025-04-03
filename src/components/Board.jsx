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
    
    console.log(pokemonData); // Test to confirm that useEffect sets state correctly.

    const handleClick = (e) => {
        console.log(e.target.closest(".card")); // Returns the parent div
    }

    return (
        <>
            <Header bestScore={bestScore} setBestScore={setBestScore}/>
            <div className="grid-parent">
                {pokemonData && pokemonData.map((pokemon)=> 
                    <Card key={pokemon.pokeId} pokemonObject={pokemon} onClick={handleClick} />
                )}
            </div>
            <Footer />
        </> 
    )
}
