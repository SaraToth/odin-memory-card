/** Contains all Header content
 * @module Header
 * @returns {HTMLElement} Header div containing all Header content
 */

import "./Header.css"
import Scoreboard from "./Scoreboard"

export default function Header({bestScore, setBestScore, currentScore}) {
    return (
        <header>
            <div>
                <h1>Pokemon Memory Game</h1>
                <p>Get points by clicking on an image but don't click on any more than once!</p>
            </div>
            <div><Scoreboard bestScore={bestScore} setBestScore={setBestScore} currentScore = {currentScore}/></div>
        </header>
    )
}