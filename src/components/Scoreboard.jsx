export default function Scoreboard({bestScore, setBestScore, currentScore}) {

    return(
        <div className="scoreboard">
            <p>Current Score: {currentScore}</p>
            <p>Best Score: {bestScore}</p>
        </div>
    )
}