import "./Modal.css"

export default function Modal({currentScore, bestScore, onClick}) {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-title">
                    <h2>Game Over</h2>
                    <button className="close" onClick={onClick}>X</button>
                </div>
                <p><b>Your Score: </b> {currentScore}</p>
                <p><b>Your Best Score: </b> {bestScore}</p>
            </div>
        </div>
    )
}