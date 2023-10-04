const initialState = [];

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ROCKETS':
      return action.payload;

    case 'RESERVE_ROCKET': {
      const { id, title } = action.payload;
      return state.map((rocket) => (rocket.id === id
        ? { ...rocket, reserved: true, title } : rocket));
    }

    case 'CANCEL_RESERVATION': {
      const cancelRocketId = action.payload;
      return state.map((rocket) => (rocket.id === cancelRocketId
        ? { ...rocket, reserved: false, title: null } : rocket));
    }

    default:
      return state;
  }
};

export default rocketReducer;
