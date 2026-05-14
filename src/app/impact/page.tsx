import styles from "./page.module.css";

export default function Impact() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Our Impact</h1>
        <p className={styles.subtitle}>
          Phi Delta Theta is a leading fraternity centered around the idea of
          developing its brothers into the greatest version of themselves —
          through service, scholarship, and brotherhood.
        </p>
      </div>
    </div>
  );
}
