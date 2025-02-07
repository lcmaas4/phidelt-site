import React from 'react';
import './Header.css'; // ✅ Import the CSS file

const Header: React.FC = () => {
  return (
    <header>
      <a href="/" className="main-logo-wrapper">
        <img className="main-logo" src="white logo.png" alt="Website Logo" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/brothers">Our Brothers</a>
          </li>
          <li>
            <a href="/philanthropy">Philanthropy</a>
          </li>
          <li>
            <a href="/rush">Rush</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
