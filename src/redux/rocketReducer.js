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
    case 'RESERVE_ROCKET':
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id === action.payload) {
            return { ...rocket, reserved: true };
          }
          return rocket;
        }),
      };
    case 'CANCEL_RESERVATION':
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id === action.payload) {
            return { ...rocket, reserved: false };
          }
          return rocket;
        }),
      };
    default:
      return state;
  }
};

export default rocketReducer;
