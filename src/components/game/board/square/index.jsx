const Square = ({ value, onSquareClick }) => {
  return (
    <td onClick={onSquareClick}>
      <p>{value}</p>
    </td>
  );
};

export default Square;
