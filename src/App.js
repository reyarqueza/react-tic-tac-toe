import React, {useState} from 'react';
import Square from './Square';
import _times from 'lodash.times';
import calculateWinner from './utils/calculate-winner';

export default function Board() {
  const [squares, setSquares] = useState([...Array(9)].map(item => ''));
  const [turn, toggleTurn] = useState('X');
  const winner = calculateWinner(squares);

  function handleClick(index) {
    let updatedSquares = [...squares];

    if (updatedSquares[index] || winner) {
      return;
    }

    updatedSquares[index] = turn;
    toggleTurn(turn === 'X' ? 'O' : 'X');
    setSquares(updatedSquares);
  }

  return (
    <>
      {winner &&
        <h1>{winner} has won!</h1>
      }
      {squares.map((square, index) => (index % 3 === 0) &&
        <div key={index} className="board-row">
          {_times(3, i =>
            <Square
              key={index+i}
              onSquareClick={() => {
                handleClick(index+i);
              }}
              value={squares[index+i]}
            />
          )}
        </div>
      )}
    </>
  )
}
