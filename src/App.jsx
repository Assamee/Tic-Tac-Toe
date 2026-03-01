import { useState } from 'react';

function Square({ value, onSquareClick, winner }) {
    let css = "square"
    if (winner) {
        // Made a new CSS class called 'greenSquare'
        css = "greenSquare";
    }

  return (
    <button className={css} onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    // if truthy ("X" or "O") return (don't do anything if we've already placed a value there)
    // Also do nothing if a winner has already been determined
    if (calculateWinner(squares).player || squares[i]) {
      return;
    }
    // ===== Decide who's turn it is next =====

    // .slice() is used to create a copy (instead of passing by reference)
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares, i);
  }

  // ===== Display the next player, or the winner at the end =====
  const winner = calculateWinner(squares);
  let status;
  if (winner?.player === "Draw") {
    status = "Game ended in a Draw!";
  } else if (winner?.player) {
    status = "Winner: " + winner.player;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  const winningCombination = winner.line; // = [a, b, c], where a,b,c are the indexes

  const html = [];
  const rows = 3;
  const columns = 3;
  for (let i=0; i < rows; i++) {
    const currentRowArray = [];
    
    for (let j=0; j < columns; j++) {
        const squareIndex = (i * columns) + j;

        let isWinningSquare = false;
        if (winningCombination.includes(squareIndex)) {
            isWinningSquare = true
        };
        currentRowArray.push(<Square key={squareIndex}  winner={isWinningSquare} winningCombination={winningCombination} value={squares[squareIndex]} onSquareClick={() => handleClick(squareIndex)} />);
    }
    html.push(<div className="board-row" key={i}>{currentRowArray}</div>);
  }

  return (
    <>
      <div className="status">{status}</div>
      {html}
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([ { squares: Array(9).fill(null), location: null } ]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true);
  const xIsNext = (currentMove % 2) === 0;
  const currentSquares = history[currentMove].squares;


  function handlePlay(nextSquares, i) {
    const nextHistory = [...history.slice(0, currentMove + 1), { squares: nextSquares, location: i }];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  // .map() always provides the current item as the first parameter (squares), and the index as the second (move)
  const moves = history.map((step, move) => {
    const x = Math.floor(step.location / 3);
    const y = step.location % 3;

    let description;
    if (move > 0) {
      description = `Go to move # ${move} (${x}, ${y})`;
    } else {
      description = `Go to game start`;
    }

    description = ((move === currentMove) ? "You are at move #" + currentMove : description);

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

    function handleIsAscending() {
        setIsAscending(!isAscending);
    }
    const reversedMoves = [...moves].reverse();

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <button onClick={() => handleIsAscending()}>Sort Moves into {isAscending ? "Desc" : "Asc"} order</button>
        <ol reversed={!isAscending}>
            {isAscending ? moves : reversedMoves}
        </ol>
      </div>
    </div>
  );
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if ((squares[a]) && (squares[a] === squares[b]) && (squares[a] === squares[c])) {
        return { player: squares[a], line: [a, b, c]};
    }
  }
    if (!squares.includes(null)) {
        return {player: "Draw", line: []}
    }

  return {player: null, line: []};
}