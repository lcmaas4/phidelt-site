import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header>
      <a href="/" className="main-logo-wrapper">
        <img className="main-logo" src="white logo.png" alt="Website Logo" />
      </a>
      <nav className="header-nav">
        <ul>
          <li>
            <Link
              className="header-link"
              to="https://www.instagram.com/phideltneu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/brothers">
              Our Brothers
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/philanthropy">
              Philanthropy
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/rush">
              Rush
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/notion">
              Notion
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
