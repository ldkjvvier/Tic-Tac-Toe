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
  mode: 'local',
  winner: null,
  draw: 0
};

export const gameSlice = createSlice({
  name: 'localGame',
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
    renameUser: (
      state: GameState,
      action: {
        type: string;
        payload: { user: 'user1' | 'user2'; name: string };
      }
    ) => {
      state[action.payload.user].name = action.payload.name;
    }
  }
});

export const { incrementX, incrementO, incrementDraw, clearState, renameUser } = gameSlice.actions;
export default gameSlice.reducer;
