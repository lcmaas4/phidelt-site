import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoWrapper}>
          <Image
            src="/white logo.png"
            alt="Phi Delta Theta"
            width={160}
            height={64}
            className={styles.logo}
            style={{ width: 'auto' }}
          />
        </Link>

        <div className={styles.middle}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Phi Delta Theta Massachusetts Epsilon
            Chapter
          </p>
          <p className={styles.credit}>
            Special thanks to Louie Maas #276, Iron Phi #2082, &apos;25 and Liam
            Lawless #259, &apos;25
          </p>
        </div>

        <nav className={styles.nav}>
          <Link
            className={styles.navLink}
            href="https://phideltatheta.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GHQ
          </Link>
          <Link className={styles.navLink} href="/contact">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
