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
  isGameStarted: false,
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
    },
    setMode: (
      state: GameState,
      action: {
        type: string;
        payload: 'local' | 'bot';
      }
    ) => {
      state.mode = action.payload;
      if (action.payload === 'bot') {
        state.user2.name = 'Bot';
      }
    },
    startGame: (state: GameState) => {
      state.isGameStarted = true;
    },
    endGame: (state: GameState) => {
      state.isGameStarted = false;
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

export const { incrementX, incrementO, incrementDraw, clearState, setMode, startGame, endGame, renameUser } =
  gameSlice.actions;
export default gameSlice.reducer;
