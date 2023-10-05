import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import MyProfile from '../components/MyProfile';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('MyProfile Component', () => {
  beforeEach(() => {
    useSelector.mockReset();
  });

  it('should render My Missions and My Rockets sections', () => {
    useSelector.mockReturnValue({ missions: [], rockets: [] });

    const { getByText } = render(
      <Router>
        <MyProfile />
      </Router>,
    );

    const myMissionsTitle = getByText(/My Missions/i);
    const myRocketsTitle = getByText(/My Rockets/i);

    expect(myMissionsTitle).toBeInTheDocument();
    expect(myRocketsTitle).toBeInTheDocument();
  });
});
