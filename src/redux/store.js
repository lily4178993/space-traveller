import { configureStore } from '@reduxjs/toolkit';
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
});

export default store;
