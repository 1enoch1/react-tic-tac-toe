import React from "react";
import './GameResetButton.scss'

function GameResetButton({ resetGameBoard }) {
    return (
        <button className="reset-button" onClick={resetGameBoard}>Reset</button>
    );
}

export default GameResetButton;