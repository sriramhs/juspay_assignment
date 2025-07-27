import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface UIState {
  leftOpen: boolean;
  rightOpen: boolean;
  mode: 'light' | 'dark';
}

const initialState: UIState = {
  leftOpen: true,
  rightOpen: true,
   mode: 'light',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleLeft(state) {
      state.leftOpen = !state.leftOpen;
    },
    toggleRight(state) {
      state.rightOpen = !state.rightOpen;
    },
    setLeft(state, action: PayloadAction<boolean>) {
      state.leftOpen = action.payload;
    },
    setRight(state, action: PayloadAction<boolean>) {
      state.rightOpen = action.payload;
    },
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { toggleLeft, toggleRight, setLeft, setRight ,toggleTheme,setTheme} = uiSlice.actions;
export default uiSlice.reducer;
