import { TurnsValue } from '@/utils';
export type BoardType = string | null;
export type Mode = 'local' | 'bot' | null;
export type Difficulty = 'easy' | 'medium' | 'hard';
export type Turns = (typeof TurnsValue)[keyof typeof TurnsValue];
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
}

interface LocalGameState extends BaseGameState {
  mode: 'local';
}

export interface BotGameState extends BaseGameState {
  mode: 'bot';
  difficulty: Difficulty;
}

export type GameState = LocalGameState | BotGameState;
