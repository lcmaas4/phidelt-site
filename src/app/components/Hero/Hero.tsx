import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
}

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
