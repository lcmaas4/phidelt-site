import Link from 'next/link';
import styles from './not-found.module.css';

/**
 * Custom 404 Not Found Page Component
 * Displays user-friendly error message and link to return to the homepage.
 *
 * @returns JSX element for the 404 page.
 */
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
