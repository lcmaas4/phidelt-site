import React from 'react';
import './Header.css';
import { FaInstagram } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header>
      <a href="/" className="main-logo-wrapper">
        <img className="main-logo" src="white logo.png" alt="Website Logo" />
      </a>
      <nav>
        <ul>
          <li>
            <a
              href="https://www.instagram.com/phideltneu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
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
          <li>
            <a href="/notion">Notion</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
