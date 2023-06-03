import React from "react";
import './GameScoreBoard.scss'

function GameScoreBoard({ gameScores, xSelected, gameStatus }) {

    const { xGameScore, oGameScore } = gameScores;
    return (
        <div>
            <div className="game-scoreboard">
                <span className={`game-score__x ${!xSelected}`}>Player X - {xGameScore}</span>
                <span className={`game-score__o ${xSelected}`}>Player O - {oGameScore}</span>

            </div>
            <div className="game-status">
                <hr style={{ width: "224px"}} />
                <span>{gameStatus.message}</span>
            </div>
        </div>
    )
}

export default GameScoreBoard;