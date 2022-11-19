import { configureStore } from '@reduxjs/toolkit';
import backgroundReducer from '../features/background/backgroundSlice';

export const store = configureStore({
  reducer: {
   background: backgroundReducer,
  },
});
