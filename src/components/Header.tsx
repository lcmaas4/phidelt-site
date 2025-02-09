import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isHidden ? 'hidden' : ''}>
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
            <Link className="header-link" to="/impact">
              Our Impact
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
