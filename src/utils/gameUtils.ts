import { UpdateBoardParams, Difficulty, BoardType, RestartGameParams, restartScoreBoardParams } from '@/models/types';
import { BotDifficulties, TurnsValue, WINNING_COMBINATIONS } from './constants';
export const updateBoard = ({ index, board, setBoard, turn, setTurn, winner }: UpdateBoardParams): void => {
  if (board[index] !== null || winner) return; // Verificar si la posición está ocupada o si ya hay un ganador

  const newBoard = [...board];
  newBoard[index] = turn;
  setBoard(newBoard);

  const newTurn = turn === TurnsValue.X ? TurnsValue.O : TurnsValue.X;
  setTurn(newTurn);
};

export const selectBotMove = (difficulty: Difficulty, newBoard: BoardType[]): number => {
  return BotDifficulties[difficulty](newBoard);
};

export const checkWinner = (newBoard: BoardType[]): BoardType => {
  /* Si retorna null no hay ganador */
  for (const [a, b, c] of WINNING_COMBINATIONS) {
    if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
      return newBoard[a];
    }
  }
  return null;
};

export const restartGame = ({ setBoard, setTurn, clearWinner, setIsGameFinish, TurnsValue }: RestartGameParams) => {
  setBoard(Array(9).fill(null));
  setTurn(TurnsValue.X);
  clearWinner();
  setIsGameFinish(false);
};

export const restartScoreBoard = ({
  dispatch,
  setBoard,
  setTurn,
  clearWinner,
  setIsGameFinish,
  TurnsValue,
  clearState
}: restartScoreBoardParams) => {
  dispatch(clearState());
  setBoard(Array(9).fill(null));
  setTurn(TurnsValue.X);
  dispatch(clearWinner());
  setIsGameFinish(false);
};
