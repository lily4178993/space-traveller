/* eslint-disable import/no-extraneous-dependencies */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionReducer from './missions/missionsSlice';
import rocketReducer from './rocketReducer';

/**
 * Configure and create a Redux store.
 *
 * @param {Partial<Store>} preloadedState - The initial state of the store.
 * @returns {Store} The configured Redux store.
 */
const store = configureStore({
  reducer: {
    missions: missionReducer,
    rockets: rocketReducer,
  },
  middleware: [...getDefaultMiddleware(), logger],
});

export default store;
