import { configureStore } from '@reduxjs/toolkit';
import backgroundReducer from '../features/background/backgroundSlice';
import weatherReducer from '../features/weather/weatherSlice';
import quoteReducer from '../features/quote/quoteSlice';
import goalsReducer from '../features/goals/goalsSlice';

export const store = configureStore({
  reducer: {
   background: backgroundReducer,
   weather: weatherReducer,
   quote: quoteReducer,
   goals: goalsReducer,
  },
});
