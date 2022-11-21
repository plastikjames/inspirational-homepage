import { configureStore } from '@reduxjs/toolkit';
import backgroundReducer from '../features/background/backgroundSlice';
import weatherReducer from '../features/weather/weatherSlice';

export const store = configureStore({
  reducer: {
   background: backgroundReducer,
   weather: weatherReducer,
  },
});
