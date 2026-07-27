import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.code}>404</p>
      <h1 className={styles.heading}>Page not found</h1>
      <p className={styles.text}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link className={styles.button} href="/">
        Back to home
      </Link>
    </div>
  );
}
