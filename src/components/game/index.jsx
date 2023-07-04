import { useState } from "react";
import Status from "./status";
import Board from "./board";
import StatusModal from "./status-modal";
// import History from "./history";
import "./style.scss";
import calculateWinner from "../../utils/calculateWinner";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const winner = calculateWinner(currentSquares);

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  return (
    <div className="game">
      <div className="game-header">
        <Status currentMove={currentMove} xIsNext={xIsNext} winner={winner} />
      </div>
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        <StatusModal
          currentMove={currentMove}
          winner={winner}
          onClick={() => jumpTo(0)}
        />
      </div>
      <div className="game-footer">
        <button onClick={() => jumpTo(0)}>Restart game</button>
      </div>
      {/*
       <div className="game-history">
        <History history={history} jumpTo={jumpTo} />
      </div> 
      */}
    </div>
  );
};

export default Game;
