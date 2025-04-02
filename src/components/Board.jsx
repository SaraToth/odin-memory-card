/** 
 * @module board 
 * Board component acts as a parent and manages all other components
 */

import { useState } from "react";
import { useEffect } from "react";
import Header from "./Header";
import Card from "./Card";

export default function Board() {

    const [pokemonData, setPokemonData] = useState([]);

    /**
     * API fetch call that updates pokemonData state with filtered API data
     */
    useEffect(() => {
        // 12 Pokemon chosen for gameplay
        const pokemonNames = ["pikachu", "squirtle", "bulbasaur", 
            "charmander", "vulpix", "jigglypuff", 
            "staryu", "onix", "piplup", 
            "togepi", "eevee", "shaymin-land"]; 
        
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
            const results = await Promise.all(pokemonNames.map(pokemon => fetchPokemonData(pokemon)));
            setPokemonData(results);
            }
        
        fetchAllPokemon();
    }, []);
    
    console.log(pokemonData); // Test to confirm that useEffect sets state correctly.

    return (
        <div>
            <Header />
            <div className="grid-parent">
                {pokemonData && pokemonData.map((pokemon)=> 
                    <div key={pokemon.pokeId}><Card pokemonObject={pokemon} /></div>
                )}
            </div>
        </div> 
    )
}
