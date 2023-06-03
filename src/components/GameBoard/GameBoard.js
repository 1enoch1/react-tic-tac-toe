import { React, useState } from 'react';
import './GameBoard.scss';
import GameSquare from '../GameSquare/GameSquare';
import GameScoreBoard from '../GameScoreBoard/GameScoreBoard';
import GameResetButton from '../GameResetButton/GameResetButton';

function GameBoard() {
    const [xSelected, setXSelected] = useState(true);
    const [gameSquares, setGameSquares] = useState(Array(9).fill(""));
    const [gameScores, setGameScores] = useState({ xGameScore: 0, oGameScore: 0 });
    const [gameStatus, setGameStatus] = useState({ message: "Player X's turn" });

    function clickHandler(i) {
        if (decideWinner(gameSquares) || gameSquares[i]) {
            return;
        }

        const updatedSquares = gameSquares.slice();
        if (xSelected) {
            updatedSquares[i] = "X";
        } else {
            updatedSquares[i] = "O";
        }

        setGameSquares(updatedSquares);

        // calculatest the winner 
        const winner = decideWinner(updatedSquares);
        if (winner) {
            if (winner === "X") {
                let { xGameScore } = gameScores;
                xGameScore += 1;
                setGameScores({ ...gameScores, xGameScore });
            } else {
                let { oGameScore } = gameScores;
                oGameScore += 1;
                setGameScores({ ...gameScores, oGameScore });
            }

            setGameStatus({ message: "Winner: " + winner });
        } else {
            setGameStatus({
                message: `Player ${(xSelected ? "X" : "O")}'s turn`
            });
        }

        setXSelected(!xSelected);

    };

    // resets the live status of the game
    function resetGameBoard() {
        setGameSquares(Array(9).fill(""));
    }

    return (
        <div className="board-container">
            <div style={{ marginBottom: "20px" }}>
                <h4>React Tic-Tac-Toe</h4>
            </div>
            <div>
                <GameScoreBoard gameScores={gameScores} gameStatus={gameStatus} />
            </div>
            <div style={{ marginBottom: "20px" }}>
                <GameResetButton resetGameBoard={resetGameBoard} />
            </div>
            <div className="board-container__board-row">
                <GameSquare value={gameSquares[0]} onClickSquare={() => clickHandler(0)} />
                <GameSquare value={gameSquares[1]} onClickSquare={() => clickHandler(1)} />
                <GameSquare value={gameSquares[2]} onClickSquare={() => clickHandler(2)} />
            </div>
            <div className="board-container__board-row">
                <GameSquare value={gameSquares[3]} onClickSquare={() => clickHandler(3)} />
                <GameSquare value={gameSquares[4]} onClickSquare={() => clickHandler(4)} />
                <GameSquare value={gameSquares[5]} onClickSquare={() => clickHandler(5)} />
            </div>
            <div className="board-container__board-row">
                <GameSquare value={gameSquares[6]} onClickSquare={() => clickHandler(6)} />
                <GameSquare value={gameSquares[7]} onClickSquare={() => clickHandler(7)} />
                <GameSquare value={gameSquares[8]} onClickSquare={() => clickHandler(8)} />
            </div>
        </div>
    );

    function decideWinner(gameSquares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (gameSquares[a] && gameSquares[a] === gameSquares[b] && gameSquares[a] === gameSquares[c]) {
                return gameSquares[a];
            }
        }
        return null;
    }

}

export default GameBoard;