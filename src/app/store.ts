/* eslint-disable max-len */
import { configureStore } from '@reduxjs/toolkit';
import usernameReducer from '../features/username/usernameSlice';
import localStorageMiddleware from './localStorageMiddleware';

const savedState = localStorage.getItem('username');
const preloadedState = savedState ? JSON.parse(savedState) : '';

export const store = configureStore({
  reducer: {
    username: usernameReducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
