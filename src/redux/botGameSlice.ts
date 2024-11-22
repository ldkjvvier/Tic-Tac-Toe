import { GameState, Difficulty } from '@/models/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: GameState = {
  user1: {
    name: 'Player 1',
    victories: 0
  },
  user2: {
    name: 'Bot',
    victories: 0
  },
  mode: 'bot',
  difficulty: 'easy',
  winner: null,
  draw: 0
};

export const gameSlice = createSlice({
  name: 'botGame',
  initialState,
  reducers: {
    incrementX: (state: GameState) => {
      state.user1.victories += 1;
      state.winner = state.user1.name;
    },
    incrementO: (state: GameState) => {
      state.user2.victories += 1;
      state.winner = state.user2.name;
    },
    incrementDraw: (state: GameState) => {
      state.draw += 1;
    },
    clearState: (state: GameState) => {
      state.user1.victories = 0;
      state.user2.victories = 0;
      state.draw = 0;
      state.winner = null;
    },
    setDifficulty: (state: GameState, action: PayloadAction<Difficulty>) => {
      if (state.mode === 'bot') {
        state.difficulty = action.payload; // Aseguramos que estamos en modo bot
      }
    }
  }
});

export const { incrementX, incrementO, incrementDraw, clearState, setDifficulty } = gameSlice.actions;
export default gameSlice.reducer;
