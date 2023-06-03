import React from "react";
import './GameSquare.scss';

function GameSquare({ value, onClickSquare }) {
    const selectedSquareStyle = value === "X" ? "game-square__x" : "game-square__o";
    return (
        <div className="game-square">
            <button className={`game-square__button ${selectedSquareStyle}`}
                onClick={onClickSquare}>{value}</button>
        </div>
    )
};

export default GameSquare;