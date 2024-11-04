import { Square } from './Square';
import { useEffect, useState } from 'react';
import { Turns, checkWinner } from '@/utils';
import { ScoreBoard } from './ScoreBoard';
import { BoardType } from '@/models/types';
import { incrementO, incrementX, incrementDraw, clearState } from '../redux/localGameSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Circle, Cross } from './icons';
import { RootState } from '@/redux/store';
export const Board = () => {
  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.localGame);
  const [turn, setTurn] = useState(Turns.X);
  const [board, setBoard] = useState<BoardType[]>(Array(9).fill(null));
  const [winner, setWinner] = useState<string | null>(null);
  const [isGameFinish, setIsGameFinish] = useState(false);
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

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(Turns.X);
    setWinner(null);
    setIsGameFinish(false);
  };
  const restartScoreBoard = () => {
    dispatch(clearState());
    setBoard(Array(9).fill(null));
    setTurn(Turns.X);
    setWinner(null);
    setIsGameFinish(false);
  };
  const updateBoard = (index: number): void => {
    if (board[index] !== null || winner) return; // Verificar si la posición está ocupada o si ya hay un ganador

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

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
      <ScoreBoard state={gameState}>
        {isGameFinish && (
          <button className="bg-black fixed h-screen w-screen top-0 left-0 bg-opacity-30" onClick={restartGame} />
        )}

        <button
          className="border transition hover:bg-gray-950 z-50 text-white font-bold py-2 px-4 rounded"
          onClick={restartScoreBoard}
        >
          Reiniciar ScoreBoard
        </button>
      </ScoreBoard>
    </>
  );
};
