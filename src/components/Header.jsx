/** Contains all Header content
 * @module Header
 * @returns {HTMLElement} Header div containing all Header content
 */

import Scoreboard from "./Scoreboard"

export default function Header({bestScore, setBestScore}) {
    return (
        <header>
            <h1>Pokemon! (This is a header)</h1>
            <Scoreboard bestScore={bestScore} setBestScore={setBestScore}/>
        </header>
    )
}