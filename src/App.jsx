import "./App.css";
import { useState } from "react";
import { Turns, WINNING_COMBINATIONS } from "./constants/constants";
import PropTypes from "prop-types";

export const App = () => {
  const [turn, setTurn] = useState(Turns.X);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const checkWinner = (newBoard) => {
    /* Si retorna null no hay ganador */
    for (let i in WINNING_COMBINATIONS) {
      const [a, b, c] = WINNING_COMBINATIONS[i];
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        console.log("Hay ganador");
        return board[a];
      }
    }
    return null;
  };


  const updateBoard = (index) => {
    /* Si ya hay un ganador no se aplica */
    if (winner) return;

    /* Si ya está ocupada la posicion no se aplica */
    if (board[index] !== null) return;
    /* Actualiza el tablero con el turno */
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    /* Cambia de turno */
    const newTurn = turn === Turns.X ? Turns.O : Turns.X;
    setTurn(newTurn);
    /* Revisa si hay un ganador */
    setWinner(checkWinner(newBoard));
    if (newBoard.every((square) => square !== null)) {
      setWinner("Nadie");
    }
  };




  return (
    <>
      <main>
        <div className="board">
          <h1>Tic Tac Toe</h1>
          {(winner && <h2 className="winner">El ganador es {winner}</h2>)}
          <section className="game">
            {board.map((_, index) => (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
                board={board}
                winner={winner}
                setWinner={setWinner}
                checkWinner={checkWinner}
              >
                <span>{board[index]}</span>
              </Square>
            ))}
          </section>
        </div>
      </main>
    </>
  );
};

export const Square = ({ children, updateBoard, index }) => {

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div className="square" onClick={handleClick}>
      {children}
    </div>
  );
};


Square.propTypes = {
  children: PropTypes.element.isRequired,
  updateBoard: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};



