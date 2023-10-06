import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Mission from '../components/Mission';

const mockStore = configureStore([]);

describe('Mission Component', () => {
  let store;

  // Mock the Redux actions
  const mockFetchMissions = {
    type: 'missions/fetchMissions/pending',
  };

  const mockJoinMission = {
    type: 'missions/joinMission',
    payload: 1,
  };

  const mockLeaveMission = {
    type: 'missions/leaveMission',
    payload: 2,
  };

  // Mock Store
  beforeEach(() => {
    store = mockStore({
      missions: {
        missions: [
          {
            mission_id: 1,
            mission_name: 'Mission 1',
            description: 'Description of Mission 1',
            reserved: false,
          },
          {
            mission_id: 2,
            mission_name: 'Mission 2',
            description: 'Description of Mission 2',
            reserved: true,
          },
        ],
      },
    });

    // Mock the async action creator
    store.dispatch = jest.fn().mockReturnValue(Promise.resolve());

    // Mock Redux actions
    store.dispatch(mockFetchMissions);
    store.dispatch(mockJoinMission);
    store.dispatch(mockLeaveMission);
  });

  it('should render mission data', () => {
    const { getByText, getAllByTestId } = render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );

    // Check if mission names are rendered
    expect(getByText('Mission 1')).toBeInTheDocument();
    expect(getByText('Mission 2')).toBeInTheDocument();

    // Check if mission descriptions are rendered
    expect(getByText('Description of Mission 1')).toBeInTheDocument();
    expect(getByText('Description of Mission 2')).toBeInTheDocument();

    // Check if "Join Mission" and "Leave Mission" buttons are rendered
    const joinButtons = getAllByTestId('join-mission-button');
    const leaveButtons = getAllByTestId('leave-mission-button');

    expect(joinButtons).toHaveLength(1);
    expect(leaveButtons).toHaveLength(1);
  });
});
