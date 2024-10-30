import { GameState } from '@/models/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: GameState = {
  user1: {
    name: 'undefined',
    victories: 0
  },
  user2: {
    name: 'undefined',
    victories: 0
  },
  draw: 0
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    incrementX: (state: GameState) => {
      state.user1.victories += 1;
    },
    incrementO: (state: GameState) => {
      state.user2.victories += 1;
    },
    incrementDraw: (state: GameState) => {
      state.draw += 1;
    },
    clearState: (state: GameState) => {
      state.user1.victories = 0;
      state.user2.victories = 0;
      state.draw = 0;
    }
  }
});

export const { incrementX, incrementO, incrementDraw, clearState } = gameSlice.actions;
export default gameSlice.reducer;
