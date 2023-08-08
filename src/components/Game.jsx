import React, {useState} from 'react';
import Board from './Board';

export default function Game() {
  const initialTurn = 'X';
  const initialSquares = [...Array(9)].map(item => '');
  const [squares, setSquares] = useState([...initialSquares]);
  const [turn, toggleTurn] = useState(initialTurn);
  const [history, setHistory] = useState([[...initialSquares]]);
  const [turnHistory, setTurnHistory] = useState([]);

  function timeTravel(move, i) {
    setSquares(move);
    toggleTurn(turnHistory[i])
  }

  return (
    <>
      {turn &&
        <h2>Player {turn}'s turn:</h2>
      }
      <div className="game">
        <div className="game-board">
          <Board
            squares={squares}
            setSquares={setSquares}
            turn={turn}
            toggleTurn={toggleTurn}
            history={history}
            setHistory={setHistory}
            turnHistory={turnHistory}
            setTurnHistory={setTurnHistory}
          />
        </div>
        <div className="game-info">
          <ol>
            {history.map((move, index) => (
              <li key={index}>
                <button onClick={
                  () => timeTravel(move, index)}>Go to {
                    index === 0
                      ? <span>game start</span>
                      : <span>move #{index}</span>
                  }
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
