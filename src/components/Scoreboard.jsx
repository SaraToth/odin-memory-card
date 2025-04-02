export default function Scoreboard({bestScore, setBestScore}) {

    return(
        <div className="scoreboard">
            <p>Current Score: 0</p>
            <p>Best Score: {bestScore}</p>
        </div>
    )
}