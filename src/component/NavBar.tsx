import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/search"
        className="navbar-link"
        activeStyle={{ borderBottom: '3px solid #758582' }}
      >
        Search
      </NavLink>
      <NavLink
        to="/saved"
        className="navbar-link"
        activeStyle={{ borderBottom: '3px solid #758582' }}
      >
        Saved
      </NavLink>
    </nav>
  );
};

export default NavBar;
