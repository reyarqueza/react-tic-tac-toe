import React, {useState} from 'react';
import Square from './Square';
import _times from 'lodash.times';

export default function Board() {
  const [squares, setSquares] = useState([...Array(9)].map(item => ''));
  const [turn, toggleTurn] = useState('X');

  function handleClick(index) {
    let updatedSquares = [...squares];

    updatedSquares[index] = turn;
    toggleTurn(turn === 'X' ? 'O' : 'X');
    setSquares(updatedSquares);
  }

  return (
    <>
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
