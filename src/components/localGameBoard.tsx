import { useEffect, useState } from 'react';
import { TurnsValue, checkWinner, updateBoard, restartGame, restartScoreBoard } from '@/utils';
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
  const [isGameFinish, setIsGameFinish] = useState(false);
  const DispatchWinner = (winner: string | null) => {
    if (winner === 'X') {
      dispatch(incrementX());
    }
    if (winner === 'O') {
      dispatch(incrementO());
    }
  };
  const handleRestartScoreBoard = () => {
    restartScoreBoard({
      dispatch,
      setBoard,
      setTurn,
      setIsGameFinish,
      TurnsValue,
      clearState
    });
  };
  const handleUpdateBoard = (index: number) => {
    updateBoard({ index, board, setBoard, turn, setTurn, isGameFinish });
  };
  const handleRestartGame = () => {
    restartGame({
      setBoard,
      setTurn,
      setIsGameFinish,
      TurnsValue
    });
  };
  useEffect(() => {
    /* Revisa si hay un ganador */
    const newWinner = checkWinner(board);

    /* Guarda el ganador en la scoreBoard */
    if (newWinner) {
      DispatchWinner(newWinner);
      setIsGameFinish(true);
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
      onUpdateBoard={(index) => handleUpdateBoard(index)}
      onRestart={handleRestartGame}
      onRestartScoreBoard={handleRestartScoreBoard}
      board={board}
      turn={turn}
      gameState={gameState}
      isGameFinish={isGameFinish}
    />
  );
};
