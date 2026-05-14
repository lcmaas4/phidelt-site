"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Notion() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_NOTION_PASSWORD) {
      window.location.href = process.env.NEXT_PUBLIC_NOTION_LINK || "/";
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Are you a Phi? Enter the password to access our Notion page.
        </label>
        <input
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
