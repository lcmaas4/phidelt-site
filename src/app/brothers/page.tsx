import BrotherCard from '../components/BrotherCard/BrotherCard';
import Hero from '../components/Hero/Hero';
import { getBrothersData } from '@/lib/brothers';
import { siteAssets } from '@/lib/siteAssets';
import styles from './page.module.css';

// Revalidate page cache periodically in ISR
export const revalidate = 60;

/**
 * Brothers Roster Page Server Component
 * Fetches dynamic brother records from MongoDB (with static fallback) and renders the chapter roster.
 *
 * @returns JSX element for the brother roster page.
 */
export default async function Brothers() {
  const { execBoard, council, classes } = await getBrothersData();

  return (
    <div className={styles.wrapper}>
      <Hero
        title="Our Brothers"
        imageSrc={siteAssets.heroes.brothersBg}
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

