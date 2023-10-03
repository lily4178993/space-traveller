import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/planet.png';

const Header = () => (
  <header>
    <div className="logo-container">
      <img src={logo} alt="logo" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <nav>
      <ul>
        <li><Link to="/rockets">Rockets</Link></li>
        <li><Link to="/missions">Missions</Link></li>
        <li><Link to="/profile">My Profile</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
