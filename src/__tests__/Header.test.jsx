import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

describe('Header Component', () => {
  it('renders the logo and title', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );

    // Expect the logo image to be present
    const logoImage = screen.getByAltText("Space Travelers' Hub Logo");
    expect(logoImage).toBeInTheDocument();

    // Expect the title to be present
    const title = screen.getByText("Space Travelers' Hub");
    expect(title).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );

    // Expect the "Rockets" link to be present with the correct href
    const rocketsLink = screen.getByText('Rockets');
    expect(rocketsLink).toBeInTheDocument();
    expect(rocketsLink).toHaveAttribute('href', '/');

    // Expect the "Missions" link to be present with the correct href
    const missionsLink = screen.getByText('Missions');
    expect(missionsLink).toBeInTheDocument();
    expect(missionsLink).toHaveAttribute('href', '/missions');

    // Expect the "My Profile" link to be present with the correct href
    const profileLink = screen.getByText('My Profile');
    expect(profileLink).toBeInTheDocument();
    expect(profileLink).toHaveAttribute('href', '/profile');
  });
});
