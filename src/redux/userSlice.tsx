import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Xwinner: 0,
  Owinner: 0,
  draw: 0
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    incrementX: (state) => {
      state.Xwinner += 1;
    },
    incrementO: (state) => {
      state.Owinner += 1;
    },
    incrementDraw: (state) => {
      state.draw += 1;
    },
    clearState: (state) => {
      state.Xwinner = 0;
      state.Owinner = 0;
      state.draw = 0;
    }
  }
});

export const { incrementX, incrementO, incrementDraw, clearState } = userSlice.actions;
export default userSlice.reducer;
