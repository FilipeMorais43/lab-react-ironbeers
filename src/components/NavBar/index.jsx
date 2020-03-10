import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <figure>
          <img src="/images/house.png" alt="home icon" />
        </figure>
      </Link>
    </nav>
  );
};

export default NavBar;
