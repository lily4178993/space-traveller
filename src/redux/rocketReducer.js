const initialState = [];

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ROCKETS':
      return action.payload;

    case 'RESERVE_ROCKET': {
      const reserveRocketId = action.payload;
      return state.map((rocket) => (rocket.id === reserveRocketId
        ? { ...rocket, reserved: true }
        : rocket));
    }

    case 'CANCEL_RESERVATION': {
      const cancelRocketId = action.payload;
      return state.map((rocket) => (rocket.id === cancelRocketId
        ? { ...rocket, reserved: false }
        : rocket));
    }

    default:
      return state;
  }
};

export default rocketReducer;
