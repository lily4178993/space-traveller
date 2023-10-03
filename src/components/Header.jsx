import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/planet.png';

/**
 * Represents the header component of the website.
 * @returns {JSX.Element} The JSX representation of the Header component.
 */
const Header = () => (
  <header>
    <div className="logo-container">
      <img src={logo} alt="logo" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <nav>
      <ul>
        <li><NavLink to="/rockets" activeClassName="active">Rockets</NavLink></li>
        <li><NavLink to="/missions" activeClassName="active">Missions</NavLink></li>
        <li><Link to="/profile">My Profile</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
