/** Contains all Header content
 * @module Header
 * @returns {HTMLElement} Header div containing all Header content
 */

import "./Header.css"

export default function Header({bestScore, currentScore}) {
    return (
        <header>
            <div>
                <h1>Pokemon Memory Game</h1>
                <p>Get points by clicking on an image but don't click on any more than once!</p>
            </div>
            <div className="scoreboard">
                <p>Current Score: {currentScore}</p>
                <p>Best Score: {bestScore}</p>
            </div>
        </header>
    )
}