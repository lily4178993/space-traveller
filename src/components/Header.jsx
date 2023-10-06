import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

const Header = () => (
  <header>
    <div className="logo-container">
      <img src={logo} alt="Space Travelers' Hub Logo" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active-link">
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink to="/missions" activeClassName="active-link">
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="active-link">
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
