export default function Scoreboard({bestScore, currentScore}) {

    return(
        <div className="scoreboard">
            <p>Current Score: {currentScore}</p>
            <p>Best Score: {bestScore}</p>
        </div>
    )
}