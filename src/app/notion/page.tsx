'use client';
import { useState } from 'react';
import styles from './page.module.css';
import { validateNotionPassword } from './actions';

export default function Notion() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await validateNotionPassword(password);
      if (result.success && result.redirectUrl) {
        window.location.href = result.redirectUrl;
      } else {
        setError(true);
        setPassword('');
      }
    } catch (error) {
      console.error('Error validating password:', error);
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="notion-password">
          Are you a Phi? Enter the password to access our Notion page.
        </label>
        <input
          id="notion-password"
          className={styles.input}
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(false);
          }}
          placeholder="Password"
          required
        />
        {error && <p className={styles.error}>Incorrect password.</p>}
        <button className={styles.button} type="submit">
          Enter
        </button>
      </form>
    </div>
  );
}
