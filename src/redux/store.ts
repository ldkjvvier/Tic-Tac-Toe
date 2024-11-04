import { configureStore } from '@reduxjs/toolkit';
import localGameReducer from './localGameSlice';
import botGameReducer from './botGameSlice';
export const store = configureStore({
  reducer: {
    localGame: localGameReducer,
    botGame: botGameReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
