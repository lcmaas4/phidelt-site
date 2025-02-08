import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer>
      <a href="/" className="main-logo-footer-wrapper">
        <img
          className="main-logo-footer"
          src="white logo.png"
          alt="Website Logo"
        />
      </a>
      <nav className="footer-nav">
        <ul>
          <li>
            <Link
              className="footer-nav-link"
              to="https://phideltatheta.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GHQ
            </Link>
          </li>
          <li>
            <Link className="footer-nav-link" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <p className="copy-text">
        &copy; 2025 Phi Delta Theta Massachusetts Epsilon Chapter
      </p>
      <p className="god">
        Special thanks to Louie Maas #276, Iron Phi #2082, '25
      </p>
    </footer>
  );
};

export default Footer;
