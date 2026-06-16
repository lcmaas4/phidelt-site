import BrotherCard from '../components/BrotherCard/BrotherCard';
import Hero from '../components/Hero/Hero';
import { execBoard, council, classes } from './brothersData';
import styles from './page.module.css';

export default function Brothers() {
  return (
    <div className={styles.wrapper}>
      <Hero
        title="Our Brothers"
        imageSrc="/brothers-bg.jpg"
        imageAlt="Phi Delta Theta Brothers"
      />
      {/* Executive Board */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h1 className={styles.sectionTitle}>Executive Board</h1>
        </div>
        <div className={`${styles.grid} ${styles.gridThree}`}>
          {execBoard.map((b) => (
            <BrotherCard key={b.name} {...b} />
          ))}
        </div>
      </section>

      {/* Council */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h1 className={styles.sectionTitle}>Council</h1>
        </div>
        <div className={`${styles.grid} ${styles.gridThree}`}>
          {council.map((b) => (
            <BrotherCard key={b.name} {...b} />
          ))}
        </div>
      </section>

      {/* Brothers by class */}
      {classes.map((cls) => (
        <section key={cls.symbol} className={styles.section}>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>{cls.symbol}</h1>
          </div>
          <div className={`${styles.grid} ${styles.gridFour}`}>
            {cls.brothers.map((b) => (
              <BrotherCard key={b.name} {...b} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
