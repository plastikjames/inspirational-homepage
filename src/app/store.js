import { combineReducers, configureStore } from '@reduxjs/toolkit';
import backgroundReducer from '../features/background/backgroundSlice';
import weatherReducer from '../features/weather/weatherSlice';
import quoteReducer from '../features/quote/quoteSlice';
import goalsReducer from '../features/goals/goalsSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: storage,
}

const rootReducer = combineReducers({
  background: backgroundReducer,
  weather: weatherReducer,
  quote: quoteReducer,
  goals: goalsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)