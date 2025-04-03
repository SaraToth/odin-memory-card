/**
 * Creates a pokemon card that renders on board component page
 * @module card
 * @returns {HTMLElement} Div - pokemon UI card with pokemon name, id and image 
 */

import './Card.css'

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