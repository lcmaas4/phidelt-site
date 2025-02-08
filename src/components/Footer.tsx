import React from 'react';
import './Footer.css';

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
            <a href="https://phideltatheta.org/">GHQ</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </nav>
      <p className="copy-text">
        &copy; 2025 Phi Delta Theta Massachusetts Epsilon Chapter
      </p>
      <p className="god">
        Special thanks to Louie Maas #276, Iron Phi #2082, Upsilon class,
        Northeastern c/o 2025
      </p>
    </footer>
  );
};

export default Footer;
