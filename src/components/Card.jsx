/**
 * Creates a pokemon card that renders on board component page
 * @module card
 * @returns {HTMLElement} Div - pokemon UI card with pokemon name, id and image 
 */

export default function Card({pokemonObject}) {
    return (
        <div className="card">
            <div>
                <h2>{pokemonObject.name}</h2>
                <p>{pokemonObject.pokeId}</p>
            </div>
            <img className="pokeImg" src={pokemonObject.imgUrl} />
        </div>
    )
}