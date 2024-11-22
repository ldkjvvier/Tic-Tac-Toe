import { TurnsValue } from '@/utils';
import { Action, Dispatch } from '@reduxjs/toolkit';

export type BoardType = string | null;
export type Mode = 'local' | 'bot' | null;
export type Difficulty = 'easy' | 'medium' | 'hard';
export type Turns = (typeof TurnsValue)[keyof typeof TurnsValue];

export interface UpdateBoardParams {
  index: number;
  board: BoardType[];
  setBoard: (board: BoardType[]) => void;
  turn: Turns;
  setTurn: React.Dispatch<React.SetStateAction<Turns>>;
  winner: string | null;
}

export interface RestartGameParams {
  setBoard: (value: React.SetStateAction<BoardType[]>) => void;
  setTurn: (value: React.SetStateAction<Turns>) => void;
  setIsGameFinish: (value: React.SetStateAction<boolean>) => void;
  TurnsValue: typeof TurnsValue;
}

export interface restartScoreBoardParams extends RestartGameParams {
  dispatch: Dispatch;
  clearState: () => Action;
}
export interface DifficultyConfig {
  easy: (board: BoardType[]) => number; // Función para dificultad fácil
  medium: (board: BoardType[]) => number; // Función para dificultad media
  hard: (board: BoardType[]) => number; // Función para dificultad difícil
}

export interface User {
  name: string;
  victories: number;
}

interface BaseGameState {
  user1: User;
  user2: User;
  draw: number;
  mode: Mode;
  winner: string | null;
}

export interface LocalGameState extends BaseGameState {
  mode: 'local';
}

export interface BotGameState extends BaseGameState {
  mode: 'bot';
  difficulty: Difficulty;
}

export type GameState = LocalGameState | BotGameState;
