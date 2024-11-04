import { BoardType, DifficultyConfig } from '@/models/types';
export const TurnsValue = {
  X: 'X',
  O: 'O'
} as const;

export const WINNING_COMBINATIONS = [
  [0, 1, 2], // 1st row
  [3, 4, 5], // 2nd row
  [6, 7, 8], // 3rd row
  [0, 3, 6], // 1st column
  [1, 4, 7], // 2nd column
  [2, 5, 8], // 3rd column
  [0, 4, 8], // 1st diagonal
  [2, 4, 6] // 2nd diagonal
];

export const BotDifficulties: DifficultyConfig = {
  easy: (board: BoardType[]) => {
    const emptySquares = board.map((square, index) => (square === null ? index : -1)).filter((index) => index !== -1);

    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    return emptySquares[randomIndex];
  },
  medium: () => {
    return 0;
  },
  hard: () => {
    return 0;
  }
};
