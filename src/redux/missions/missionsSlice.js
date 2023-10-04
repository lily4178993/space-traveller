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
 * @type {AsyncThunk<Array, void, {}>}
 */
const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get(MISSION_API_URL);
  return response.data;
});

/**
 * The initial state for the missions slice of the Redux store.
 * @typedef {Object} MissionsState
 * @property {Array} missions - The list of missions.
 * @property {boolean} isLoading - Indicates if missions are currently being loaded.
 * @property {string} isError - Stores error messages, if any.
 */

/**
 * Initial state for the missions slice.
 * @type {MissionsState}
 */
const initialState = {
  missions: [],
  missionsJoined: [],
  isLoading: false,
  isError: '',
};

/**
 * A Redux slice for missions management.
 * @type {Slice<MissionsState>}
 */
const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    /**
     * Reducer to mark a mission as reserved.
     * @param {MissionsState} state - The current missions state.
     * @param {Object} action - The action object.
     * @param {number} action.payload - The ID of the mission to join.
     */
    joinMission: (state, action) => {
      const missionId = action.payload;
      state.missions = state.missions.map((mission) => (mission.mission_id === missionId
        ? { ...mission, reserved: true }
        : mission));
    },
    /**
     * Reducer to mark a mission as not reserved.
     * @param {MissionsState} state - The current missions state.
     * @param {Object} action - The action object.
     * @param {number} action.payload - The ID of the mission to leave.
     */
    leaveMission: (state, action) => {
      const missionId = action.payload;
      state.missions = state.missions.map((mission) => (mission.mission_id === missionId
        ? { ...mission, reserved: false }
        : mission));
    },
  },
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
          state.missionsJoined.push(state.missions.filter((mission) => mission.reserved));
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
 * @type {AsyncThunk<Array, void, {}>}
 */
export { fetchMissions };

/**
 * Export the missions reducer and action creators.
 * @type {Slice<MissionsState>}
 */
export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
