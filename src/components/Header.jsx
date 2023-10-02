import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/planet.png';

const Header = () => (
  <header>
    <img src={logo} alt="logo" />
    <nav>
      <ul>
        <li><Link to="/missions">Missions</Link></li>
        <li><Link to="/rockets">Rockets</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
