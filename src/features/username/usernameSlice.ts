import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UsernameState {
  value: string,
}

const initialState = '';

export const usernameSlice = createSlice({
  name: 'username',
  initialState,
  reducers: {
    setUsername: (_, action: PayloadAction<string>) => action.payload,
  },
});

export const { setUsername } = usernameSlice.actions;

export default usernameSlice.reducer;
