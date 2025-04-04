import "../styles/Header.css"

/** Component that renders header and scoreboard
 * @typedef {object} HeaderProps
 * @property {number} bestScore The player's best score so far
 * @property {number} currentScore The current score in the ongoing game
 * 
 * @param {HeaderProps} props
 * @returns {JSX.Element} The rendered Header Component
 */

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