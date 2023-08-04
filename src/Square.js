import React, {useState} from 'react';

export default function Square({
  index,
  value,
  setSquares,
  squares,
  turn,
  toggleTurn
}) {
  function handleClick() {
    let updatedSquares = [...squares];

    updatedSquares[index] = turn;
    toggleTurn(turn === 'X' ? 'O' : 'X');
    setSquares(updatedSquares);
  }

  return (
    <button className="square" onClick={handleClick}>{value}</button>
  )
}
