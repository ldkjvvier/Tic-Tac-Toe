export type BoardType = (string | null)[];
export type Mode = 'local' | 'bot';

export interface User {
  name: string;
  victories: number;
}

export interface GameState {
  user1: User;
  user2: User;
  draw: number;
  mode: Mode;
  isGameStarted: boolean;
}
