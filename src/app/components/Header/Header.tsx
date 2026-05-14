"use client";
import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const Header: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setIsHidden(window.scrollY > lastScrollY);
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isHidden ? styles.hidden : ""}`}>
      <Link href="/" className={styles.logoWrapper}>
        <Image
          src="/white logo no letters.png"
          alt="Phi Delta Theta"
          width={160}
          height={64}
          className={styles.logo}
          priority
        />
      </Link>
      <nav className={styles.nav}>
        <Link
          className={styles.navLink}
          href="https://www.instagram.com/phideltneu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={18} />
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
  );
};

export default Header;
