import React from 'react';
import styles from './page.module.css';

export default function ContactPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.description}>
        Get in touch with Phi Delta Theta Massachusetts Epsilon Chapter.
      </p>

      <section className={styles.content}>
        <div className={styles.contactList}>
          <div className={styles.contactItem}>
            <strong>President:</strong>
            <a href="mailto:president@nuphidelts.org">
              president@nuphidelts.org
            </a>
          </div>
          <div className={styles.contactItem}>
            <strong>VP of Socials:</strong>
            <a href="mailto:socials@nuphidelts.org">socials@nuphidelts.org</a>
          </div>
          <div className={styles.contactItem}>
            <strong>Recruitment Chairman:</strong>
            <a href="mailto:recruitment@nuphidelts.org">
              recruitment@nuphidelts.org
            </a>
          </div>
          <div className={styles.contactItem}>
            <strong>Public Relations Chairman:</strong>
            <a href="mailto:outreach@nuphidelts.org">outreach@nuphidelts.org</a>
          </div>
        </div>
      </section>
    </main>
  );
}
