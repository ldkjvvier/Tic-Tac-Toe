import { useEffect, useState } from 'react';
import { TurnsValue, checkWinner } from '@/utils';
import { BoardType, Turns } from '@/models/types';
import { incrementO, incrementX, incrementDraw, clearState } from '../redux/localGameSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { CommonBoard } from './commonBoard';
export const LocalGameBoard = () => {
  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.localGame);
  const [turn, setTurn] = useState<Turns>(TurnsValue.X);
  const [board, setBoard] = useState<BoardType[]>(Array(9).fill(null));
  const [winner, setWinner] = useState<string | null>(null);
  const [isGameFinish, setIsGameFinish] = useState(false);
  const DispatchWinner = (winner: string | null) => {
    if (winner === 'X') {
      dispatch(incrementX());
    }
    if (winner === 'O') {
      dispatch(incrementO());
    }
    setIsGameFinish(true);
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TurnsValue.X);
    setWinner(null);
    setIsGameFinish(false);
  };
  const restartScoreBoard = () => {
    dispatch(clearState());
    setBoard(Array(9).fill(null));
    setTurn(TurnsValue.X);
    setWinner(null);
    setIsGameFinish(false);
  };
  const updateBoard = (index: number): void => {
    if (board[index] !== null || winner) return; // Verificar si la posición está ocupada o si ya hay un ganador

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TurnsValue.X ? TurnsValue.O : TurnsValue.X;
    setTurn(newTurn);
  };

  useEffect(() => {
    /* Revisa si hay un ganador */
    const newWinner = checkWinner(board);
    setWinner(newWinner);

    /* Guarda el ganador en la scoreBoard */
    if (newWinner) {
      DispatchWinner(newWinner);
      return;
    }

    /* Si hay empate lo guarda en la scoreboard */
    if (board.every((square) => square !== null)) {
      dispatch(incrementDraw());
      setIsGameFinish(true);
    }
  }, [board]);
  return (
    <CommonBoard
      onUpdateBoard={updateBoard}
      onRestart={restartGame}
      onRestartScoreBoard={restartScoreBoard}
      board={board}
      turn={turn}
      gameState={gameState}
      isGameFinish={isGameFinish}
    />
  );
};
