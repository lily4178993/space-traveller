import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rockets from '../components/Rockets';

const mockStore = configureStore([]);

describe('Rockets Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rockets: [
        {
          id: 1,
          rocket_name: 'Falcon 1',
          description: 'Description of Falcon 1',
          reserved: false,
          flickr_images: ['image_url'],
        },
        {
          id: 2,
          rocket_name: 'Falcon 9',
          description: 'Description of Falcon 9',
          reserved: false,
          flickr_images: ['image_url'],
        },
      ],
    });
  });

  it('should render rocket cards', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const rocketCards = getAllByTestId('rocket-card');
    expect(rocketCards).toHaveLength(2);
  });
});
