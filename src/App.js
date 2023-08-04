import React, {useState} from 'react';
import Square from './Square';
import _times from 'lodash.times';

export default function Board() {
  const [squares, setSquares] = useState([...Array(9)].map(item => ''));
  const [turn, toggleTurn] = useState('X');

  return (
    <>
      {squares.map((square, index) => (index % 3 === 0) &&
        <div key={index} className="board-row">
          {_times(3, i =>
            <Square
              index={index+i}
              value={squares[index+i]}
              setSquares={setSquares}
              squares={squares}
              turn={turn}
              toggleTurn={toggleTurn}
            />
          )}
        </div>
      )}
    </>
  )
}
