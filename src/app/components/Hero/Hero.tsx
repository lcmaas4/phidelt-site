import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
}

/**
 * Page Hero Header Component
 * Renders full-width background image banner with title and dark overlay.
 *
 * @param props - Hero properties including title, imageSrc, and imageAlt.
 * @returns JSX element for the page hero banner.
 */
const Hero: React.FC<HeroProps> = ({ title, imageSrc, imageAlt }) => {
  return (
    <section className={styles.hero}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className={styles.heroImage}
        sizes="100vw"
      />
      <div className={styles.heroOverlay} />
      <h1 className={styles.title}>{title}</h1>
    </section>
  );
};

export default Hero;
