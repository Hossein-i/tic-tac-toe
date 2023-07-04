import calculateWinner from "../../../utils/calculateWinner";
import Square from "./square";

const Board = ({ xIsNext, squares, onPlay }) => {
  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) return;

    const nextSquares = squares.slice();
    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");

    onPlay(nextSquares);
  };

  return (
    <table>
      <tr>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </tr>
      <tr>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </tr>
      <tr>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </tr>
    </table>
  );
};

export default Board;
