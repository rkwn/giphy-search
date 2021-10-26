import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/search" className="navbar-link">
        Search
      </NavLink>
      <NavLink to="/saved" className="navbar-link">
        Saved
      </NavLink>
    </nav>
  );
};

export default NavBar;
