import React from 'react';
import './NavBar.css';
import logo from './assets/insta.png'; 
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
    </nav>
  );
};

export default NavBar;
