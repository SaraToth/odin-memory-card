import "../styles/Card.css"

/**
 * Pokemon Card Component
 * 
 * @typedef {Object} PokemonObject
 * @property {string} name The name of the pokemon
 * @property {number} pokeId The pokedex id of the pokemon
 * @property {string} imgUrl The URL of the pokemon's image
 * 
 * @typedef {Object} CardProps
 * @property {PokemonObject} pokemonObject Object containing pokemon data
 * @property {() => void} onClick Handler function for card div clicks
 * 
 * @param {CardProps} props
 * @returns {JSX.Element} The rendered pokemon card
 */

export default function Card({pokemonObject, onClick}) {
    const name = pokemonObject.name;
    let capitalName = name.charAt(0).toUpperCase() + name.slice(1); // Capitalize first letter of names

    // Removes excess info tacked onto pokemon name from the API data
    if (name.includes("-")) {
        const index = name.indexOf("-");
        capitalName = name.charAt(0).toUpperCase() + name.substring(1, index);
    }

    return (
        <div className="card" id={pokemonObject.name} onClick={onClick}>
            <div className='card-title'>
                <h2>{capitalName}</h2>
                <p>#{pokemonObject.pokeId}</p>
            </div>
            <img className="pokeImg" src={pokemonObject.imgUrl} />
        </div>
    )
}