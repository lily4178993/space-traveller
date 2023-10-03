const initialState = {
  rockets: [
    {
      id: 1,
      name: 'Falcon 1',
      description: 'Description of Falcon 1',
      reserved: false,
    },
    {
      id: 2,
      name: 'Falcon 2',
      description: 'Description of Falcon 2',
      reserved: false,
    },
  ],
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESERVE_ROCKET': {
      const { payload: rocketId } = action;
      const updatedRockets = state.rockets.map((rocket) => (
        rocket.id === rocketId ? { ...rocket, reserved: true } : rocket
      ));
      return { ...state, rockets: updatedRockets };
    }

    case 'CANCEL_RESERVATION': {
      const { payload: canceledRocketId } = action;
      const canceledRockets = state.rockets.map((rocket) => (
        rocket.id === canceledRocketId ? { ...rocket, reserved: false } : rocket
      ));
      return { ...state, rockets: canceledRockets };
    }

    default:
      return state;
  }
};

export default rocketReducer;
