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
  medium: (board: BoardType[]) => {
    // Check if the bot can win
    for (const combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;
      if (board[a] === TurnsValue.O && board[b] === TurnsValue.O && board[c] === null) {
        return c; // Win on this move
      }
      if (board[a] === TurnsValue.O && board[c] === TurnsValue.O && board[b] === null) {
        return b; // Win on this move
      }
      if (board[b] === TurnsValue.O && board[c] === TurnsValue.O && board[a] === null) {
        return a; // Win on this move
      }
    }

    // Check if the opponent can win and block them
    for (const combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;
      if (board[a] === TurnsValue.X && board[b] === TurnsValue.X && board[c] === null) {
        return c; // Block opponent
      }
      if (board[a] === TurnsValue.X && board[c] === TurnsValue.X && board[b] === null) {
        return b; // Block opponent
      }
      if (board[b] === TurnsValue.X && board[c] === TurnsValue.X && board[a] === null) {
        return a; // Block opponent
      }
    }

    // If no winning or blocking move, choose a random empty square
    const emptySquares = board.map((square, index) => (square === null ? index : -1)).filter((index) => index !== -1);
    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    return emptySquares[randomIndex];
  },
  hard: () => {
    return 0;
  }
};
