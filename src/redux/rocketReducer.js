const initialState = {
  rockets: [],
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ROCKETS':
      return { ...state, rockets: action.payload };
    case 'RESERVE_ROCKET': {
      const { payload: rocketId } = action;
      const updatedRockets = state.rockets.map((rocket) => (rocket.id === rocketId
        ? { ...rocket, reserved: true }
        : rocket
      ));
      return { ...state, rockets: updatedRockets };
    }

    case 'CANCEL_RESERVATION': {
      const { payload: canceledRocketId } = action;
      const canceledRockets = state.rockets.map((rocket) => (rocket.id === canceledRocketId
        ? { ...rocket, reserved: false }
        : rocket
      ));
      return { ...state, rockets: canceledRockets };
    }

    default:
      return state;
  }
};

export default rocketReducer;
