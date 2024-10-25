import { Square } from './Square';
import { useEffect, useState } from 'react';
import { Turns, WINNING_COMBINATIONS } from '@/utils/constants';
import { ScoreBoard } from './ScoreBoard';
import { BoardType } from '@/models/types';
import { incrementO, incrementX, incrementDraw, clearState } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
import { Circle, Cross } from './icons';
export const Board = () => {
  const dispatch = useDispatch();
  const [turn, setTurn] = useState(Turns.X);
  const [board, setBoard] = useState<BoardType>(Array(9).fill(null));
  const [winner, setWinner] = useState<string | null>(null);
  const [isGameFinish, setIsGameFinish] = useState(false);

  const checkWinner = (newBoard: BoardType): string | null => {
    /* Si retorna null no hay ganador */
    for (const [a, b, c] of WINNING_COMBINATIONS) {
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a];
      }
    }
    return null;
  };
  const DispatchWinner = (winner: string | null) => {
    if (winner === 'X') {
      dispatch(incrementX());
      setIsGameFinish(true);
    }
    if (winner === 'O') {
      dispatch(incrementO());
      setIsGameFinish(true);
    }
  };
  const updateBoard = (index: number): void => {
    /* Si ya está ocupada la posicion no se aplica */
    if (board[index] !== null || winner) return;
    /* Actualiza el tablero con el turno */
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    /* Cambia de turno */
    const newTurn = turn === Turns.X ? Turns.O : Turns.X;
    setTurn(newTurn);
  };

  useEffect(() => {
    /* Revisa si hay un ganador */
    const newWinner = checkWinner(board);
    setWinner(newWinner);

    /* Si hay empate lo guarda en la scoreboard */
    if (board.every((square) => square !== null)) {
      dispatch(incrementDraw());
      setIsGameFinish(true);
    }
    /* Guarda el ganador en la scoreBoard */
    if (newWinner) {
      DispatchWinner(newWinner);
    }
  }, [board]);

  return (
    <>
      <section className="flex justify-center">
        <div className="grid grid-cols-3 grid-rows-3">
          {board.map((_, index) => (
            <Square key={index} index={index} updateBoard={updateBoard}>
              <span className="p-3 md:p-6">
                {board[index] === Turns.X && <Cross />}
                {board[index] === Turns.O && <Circle />}
              </span>
            </Square>
          ))}
        </div>
      </section>
      <ScoreBoard>
        {isGameFinish && (
          <button
            className="bg-black fixed h-screen w-screen top-0 left-0 bg-opacity-30"
            onClick={() => {
              setBoard(Array(9).fill(null));
              setTurn(Turns.X);
              setWinner(null);
              setIsGameFinish(false);
            }}
          />
        )}

        <button
          className="border transition hover:bg-gray-950 z-50 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            dispatch(clearState());
            setBoard(Array(9).fill(null));
            setTurn(Turns.X);
            setWinner(null);
            setIsGameFinish(false);
          }}
        >
          Reiniciar ScoreBoard
        </button>
      </ScoreBoard>
    </>
  );
};
