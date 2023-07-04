import { useEffect, useState } from "react";

const Status = ({ currentMove, xIsNext, winner }) => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (currentMove === 0) setStatus("Start game");
    else if (currentMove === 9 || winner) setStatus("Game Over");
    else setStatus((xIsNext ? "X" : "O") + " Turn");
  }, [currentMove, winner, xIsNext]);

  return <p>{status}</p>;
};

export default Status;
