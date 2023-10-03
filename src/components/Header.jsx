import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

/**
 * Represents the header component of the website.
 * @returns {JSX.Element} The JSX representation of the Header component.
 */
const Header = () => (
  <header>
    <img src={logo} alt="logo" />
    <nav>
      <ul>
        <li><NavLink to="/missions" activeClassName="active">Missions</NavLink></li>
        <li><NavLink to="/rockets" activeClassName="active">Rockets</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
