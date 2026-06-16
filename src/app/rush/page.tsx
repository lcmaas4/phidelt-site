import React from "react";
import Hero from "../components/Hero/Hero";
import styles from "./page.module.css";

export default function Rush() {
  return (
    <div className={styles.wrapper}>
      <Hero
        title="Rush"
        imageSrc="/rush-bg.jpg"
        imageAlt="Rush background"
      />
      <h2 className={styles.title}>
        Check back at the start of next fall for information on rush. Check out
        our past rush videos below!
      </h2>
      <div className={styles.videoGrid}>
        <div className={styles.videoWrapper}>
          <video 
            className={styles.video}
            controls 
            autoPlay 
            muted
            preload="metadata"
            loop 
            playsInline
          >
            <source src="/springrush25.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className={styles.videoLabel}>Spring &apos;25</p>
        </div>
        <div className={styles.videoWrapper}>
          <video 
            className={styles.video}
            controls 
            preload="metadata"
            loop 
            playsInline
          >
            <source src="/fallrush25.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className={styles.videoLabel}>Fall &apos;25</p>
        </div>
        <div className={styles.videoWrapper}>
          <video 
            className={styles.video}
            controls 
            preload="metadata"
            loop 
            playsInline
          >
            <source src="/springrush26.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className={styles.videoLabel}>Spring &apos;26</p>
        </div>
      </div>
    </div>
  );
}
