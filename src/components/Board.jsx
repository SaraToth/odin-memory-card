import "../styles/Board.css"
import { useState } from "react";
import { useEffect } from "react";
import Header from "./Header";
import Card from "./Card";
import Modal from "./Modal";
import Footer from "./Footer";
import { POKEMON_NAMES } from "../utils/constants";

/**
 * Board Component - handles all gameboard rendering
 * 
 * @typedef {import ("../utils/types").PokemonObject}
 * 
 * @returns {JSX.Element} The rendered board component
 */
export default function Board() {

    // Stores PokemonData fetched from API
    const [pokemonData, setPokemonData] = useState([]);

    // Keeps track of player's best score
    const [bestScore, setBestScore] = useState(0);

    // Keeps track of which pokemon cards were clicked in the current game
    const [clickedPokemon, setClickedPokemon] = useState([]);

    // Keeps track of current game score
    const [currentScore, setCurrentScore] = useState(0);

    const [isModalOn, setIsModalon] = useState(false);

    useEffect(() => {
        /**
         * Fetches pokemon data from API
         * 
         * @param {string} pokemonName Pokemon name provided by POKEMON_NAMES constant
         * @returns {PokemonObject} Object containing pokemon data
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
         * Maps over POKEMON_NAMES array to fetch PokemonData from the API
         */
        async function fetchAllPokemon() {
            const results = await Promise.all(POKEMON_NAMES.map(pokemon => fetchPokemonData(pokemon)));
            setPokemonData(results);
            }
        
        fetchAllPokemon();
    }, []);

    /**
     * Handles pokemon card clicks
     * 
     * @param {React.MouseEvent<HTMLDivElement>} e Pokemon Card div
     */
    const handleClick = (e) => {
        const pokemonCard = e.target.closest(".card"); // Target the pokemon card div
        const pokeName = pokemonCard.id // Pokemon name as it is written in constants module
        handleCurrentScore(pokeName);
        randomizeCards();
    }

    /**
     * Increments game score or ends game
     * 
     * @param {string} pokeName Pokemon name provided by pokemon card click event
     */
    const handleCurrentScore = (pokeName) => {

        // If card was not clicked before, score increases and cards shuffle
        if (!clickedPokemon.includes(pokeName)) {
            setClickedPokemon((prevClicks)=> [...prevClicks, pokeName]);
            setCurrentScore((prevScore) => prevScore + 1);
        }

        // If card was previously clicked game ends
        if (clickedPokemon.includes(pokeName)) {
            handleBestScore();
            setIsModalon(true);
        }
    }

    /**
     * Resets game and displays game over modal
     */
    const resetGame = () => {
        setClickedPokemon([]);
        setCurrentScore(0);
    }

    /**
     * Updates bestScore when the player beats their personal record
     */
    const handleBestScore = () => {
        if (currentScore > bestScore) {
            setBestScore(currentScore);
        }
    }

    /**
     * Shuffles pokemon cards 
     */
    const randomizeCards = () => {
        const arr = pokemonData
        for (let i= arr.length -1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        setPokemonData(arr);
    }

    /**
     * Button click event handler that closes modal
     */
    const closeModal = () => {
        if(isModalOn) {
            resetGame();
            setIsModalon(false);
        }
    }

    return (
        <>
            <Header bestScore={bestScore} currentScore={currentScore}/>
            <div className="grid-parent">
                {pokemonData && pokemonData.map((pokemon)=> 
                    <Card key={pokemon.pokeId} pokemonObject={pokemon} onClick={handleClick} />
                )}
            </div>
            {isModalOn && <Modal currentScore={currentScore} bestScore={bestScore} onClick={closeModal} />}
            <Footer />
        </> 
    )
}
