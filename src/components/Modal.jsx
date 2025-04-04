import "../styles/Modal.css"

/**
 * Modal Component
 * 
 * @typedef {object} ModalProps
 * @property {number} bestScore The player's best score so far
 * @property {number} currentScore The current score in the ongoing game
 * @property {() => void} onClick Event handler for button clicks
 * 
 * @param {ModalProps} props
 * @returns {JSX.Element} The rendered modal component
 */
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