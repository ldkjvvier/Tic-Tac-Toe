import { useEffect, useState } from 'react';
import { checkWinner, TurnsValue, updateBoard, restartGame, restartScoreBoard } from '@/utils';
import { BoardType, Difficulty, Turns as TurnsType } from '@/models/types';
import { incrementO, incrementX, incrementDraw, clearState } from '../redux/botGameSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { CommonBoard } from './commonBoard';
import { selectBotMove } from '@/utils';

interface BotGameBoardProps {
  difficulty: Difficulty;
}
export const BotGameBoard = ({ difficulty }: BotGameBoardProps) => {
  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.botGame);
  const [turn, setTurn] = useState<TurnsType>(TurnsValue.X);
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
    console.log('ACTUALIZANDO TABLERO');
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

    if (turn === TurnsValue.O && !isGameFinish) {
      // Solo se ejecuta el movimiento del bot después de que se haya cambiado el turno
      setTimeout(() => {
        handleUpdateBoard(selectBotMove(difficulty, board));
      }, 500);
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
      blockTurn={turn === TurnsValue.O}
    />
  );
};
