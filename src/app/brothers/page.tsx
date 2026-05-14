import Image from "next/image";
import BrotherCard from "../components/BrotherCard/BrotherCard";
import { execBoard, council, classes } from "./brothersData";
import styles from "./page.module.css";

export default function Brothers() {
  return (
    <div className={styles.wrapper}>
      {/* Executive Board */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Image
            src="/exec-spring-25.jpg"
            alt="Exec Board"
            width={500}
            height={400}
            className={styles.sectionImage}
          />
          <h1 className={styles.sectionTitle}>Executive Board</h1>
        </div>
        <div className={`${styles.grid} ${styles.gridTwo}`}>
          {execBoard.map((b) => (
            <BrotherCard key={b.name} {...b} />
          ))}
        </div>
      </section>

      {/* Council */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Image
            src="/nuphidelts-logo.png"
            alt="Phi Delta Theta"
            width={200}
            height={200}
            className={styles.sectionImage}
          />
          <h1 className={styles.sectionTitle}>Council</h1>
        </div>
        <div className={`${styles.grid} ${styles.gridThree}`}>
          {council.map((b) => (
            <BrotherCard key={b.name} {...b} />
          ))}
        </div>
      </section>

      {/* Brothers by class */}
      <section className={styles.section}>
        {classes.map((cls) => (
          <div key={cls.symbol}>
            <div className={styles.sectionHeader}>
              <h1 className={styles.sectionTitle}>{cls.symbol}</h1>
            </div>
            <div className={`${styles.grid} ${styles.gridFour}`}>
              {cls.brothers.map((b) => (
                <BrotherCard key={b.name + b.src} {...b} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
