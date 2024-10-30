export type BoardType = (string | null)[];

export interface User {
  name: string;
  victories: number;
}

export interface GameState {
  user1: User;
  user2: User;
  draw: number;
}
