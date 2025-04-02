/** Contains all Header content
 * @module Header
 * @returns {HTMLElement} Header div containing all Header content
 */

import "./Header.css"
import Scoreboard from "./Scoreboard"

export default function Header({bestScore, setBestScore}) {
    return (
        <header>
            <h1>Pokemon! (This is a header)</h1>
            <div><Scoreboard bestScore={bestScore} setBestScore={setBestScore}/></div>
        </header>
    )
}