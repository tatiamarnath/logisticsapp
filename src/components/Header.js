import React from 'react';
import logo from '../assets/logo.png';
import '../style/Header.css';

const Header = () => (
  <header className="header">
    <img src={logo} alt="Logistics UK" />
  </header>
);

export default Header;
