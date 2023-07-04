import { useEffect, useState } from "react";

const StatusModal = ({ currentMove, winner, onClick }) => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (winner) setStatus(winner + " Winner!");
    else if (currentMove === 9 && !winner) setStatus("XO DRAW!");
    else setStatus(null);
  }, [currentMove, winner]);

  return (
    <div className={`status-modal ${status && "show"}`} onClick={onClick}>
      {status}
    </div>
  );
};

export default StatusModal;
