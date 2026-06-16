'use client';
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';

const Header: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const getThreshold = () => {
      const height = getComputedStyle(document.documentElement)
        .getPropertyValue('--header-height')
        .trim();
      
      if (height.endsWith('vh')) {
        return (parseFloat(height) * window.innerHeight) / 100;
      }
      return parseInt(height, 10) || 80;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = getThreshold();
      
      if (currentScrollY < threshold) {
        setIsHidden(false);
      } else {
        setIsHidden(currentScrollY > lastScrollY);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${isHidden ? styles.hidden : ''}`}>
        <Link href="/" className={styles.logoWrapper}>
          <Image
            src="/white logo no letters.png"
            alt="Phi Delta Theta"
            width={160}
            height={64}
            className={styles.logo}
            priority
            style={{ width: 'auto' }}
          />
        </Link>

        {/* Hamburger - only visible when menu is closed */}
        {!isMenuOpen && (
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu size={32} />
          </button>
        )}

        {/* Desktop Nav */}
        <nav className={`${styles.nav} ${styles.desktopOnly}`}>
          <Link
            className={styles.navLink}
            href="https://www.instagram.com/phideltneu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram"
          >
            <FaInstagram size={24} />
          </Link>
          <Link className={styles.navLink} href="/about">
            About Us
          </Link>
          <Link className={styles.navLink} href="/brothers">
            Our Brothers
          </Link>
          <Link className={styles.navLink} href="/impact">
            Our Impact
          </Link>
          <Link className={styles.navLink} href="/rush">
            Rush
          </Link>
          <Link className={styles.navLink} href="/notion">
            Notion
          </Link>
        </nav>
      </header>

      {/* Mobile Nav Overlay */}
      <nav className={`${styles.nav} ${styles.mobileNav} ${isMenuOpen ? styles.navOpen : ''}`}>
        {/* Close Button - inside the menu */}
        <button
          className={styles.closeBtn}
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <IoClose size={32} />
        </button>

        <Link
          className={styles.navLink}
          href="https://www.instagram.com/phideltneu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Instagram"
          onClick={() => setIsMenuOpen(false)}
        >
          <FaInstagram size={24} />
        </Link>
        <Link
          className={styles.navLink}
          href="/about"
          onClick={() => setIsMenuOpen(false)}
        >
          About Us
        </Link>
        <Link
          className={styles.navLink}
          href="/brothers"
          onClick={() => setIsMenuOpen(false)}
        >
          Our Brothers
        </Link>
        <Link
          className={styles.navLink}
          href="/impact"
          onClick={() => setIsMenuOpen(false)}
        >
          Our Impact
        </Link>
        <Link
          className={styles.navLink}
          href="/rush"
          onClick={() => setIsMenuOpen(false)}
        >
          Rush
        </Link>
        <Link
          className={styles.navLink}
          href="/notion"
          onClick={() => setIsMenuOpen(false)}
        >
          Notion
        </Link>
        <Link
          className={`${styles.navLink} ${styles.mobileOnly}`}
          href="https://phideltatheta.org/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMenuOpen(false)}
        >
          GHQ
        </Link>
        <Link
          className={`${styles.navLink} ${styles.mobileOnly}`}
          href="/contact"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact Us
        </Link>
      </nav>
    </>
  );
};

export default Header;
