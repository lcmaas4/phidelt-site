import React from "react";
import Hero from "../components/Hero/Hero";
import { siteAssets } from "@/lib/siteAssets";
import styles from "./page.module.css";

/**
 * Recruitment (Rush) Page Component
 * Renders rush information and high-performance Cloudinary video players with posters.
 *
 * @returns JSX element for the Rush page.
 */
export default function Rush() {
  return (
    <div className={styles.wrapper}>
      <Hero
        title="Rush"
        imageSrc={siteAssets.heroes.rushBg}
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
            poster={siteAssets.rush.spring25Poster}
            loop 
            playsInline
          >
            <source src={siteAssets.rush.spring25Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className={styles.videoLabel}>Spring &apos;25</p>
        </div>
        <div className={styles.videoWrapper}>
          <video 
            className={styles.video}
            controls 
            preload="metadata"
            poster={siteAssets.rush.fall25Poster}
            loop 
            playsInline
          >
            <source src={siteAssets.rush.fall25Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className={styles.videoLabel}>Fall &apos;25</p>
        </div>
        <div className={styles.videoWrapper}>
          <video 
            className={styles.video}
            controls 
            preload="metadata"
            poster={siteAssets.rush.spring26Poster}
            loop 
            playsInline
          >
            <source src={siteAssets.rush.spring26Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className={styles.videoLabel}>Spring &apos;26</p>
        </div>
      </div>
    </div>
  );
}
