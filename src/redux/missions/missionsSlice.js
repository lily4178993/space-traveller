import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

/**
 * The URL of the SpaceX missions API.
 * @constant {string}
 */
const MISSION_API_URL = 'https://api.spacexdata.com/v3/missions';

/**
 * An asynchronous Redux thunk action creator to fetch missions from the SpaceX API.
 *
 * @type {AsyncThunk<*, *, {}>}
 */
const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get(MISSION_API_URL);
  return response.data;
});

/**
 * The initial state for the missions slice of the Redux store.
 * @type {Object}
 * @property {Array} missions - The list of missions.
 * @property {boolean} isLoading - Indicates if missions are currently being loaded.
 * @property {string} isError - Stores error messages, if any.
 */
const initialState = {
  missions: [],
  isLoading: false,
  isError: '',
};

/**
 * A Redux slice for missions management.
 * @type {Slice}
 */
const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        if (state.isLoading === false) {
          state.isLoading = true;
        }
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        if (state.isLoading === true) {
          state.isLoading = false;
          state.missions = action.payload;
        }
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        if (state.isLoading === true) {
          state.isLoading = false;
          state.missions = [];
          state.isError = action.error.message;
        }
      });
  },
});

/**
 * Export the fetchMissions async action creator.
 * @type {AsyncThunk<*, *, {}>}
 */
export { fetchMissions };

/**
 * Export the missions reducer.
 * @type {Reducer<Object>}
 */
export default missionsSlice.reducer;
