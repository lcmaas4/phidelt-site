"use client";
import React from "react";
import Script from "next/script";
import styles from "./page.module.css";

export default function Rush() {
  return (
    <>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
      />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Check back at the start of next fall for information on rush. Check out
          our spring &apos;25 rush video below!
        </h1>
        <div className={styles.embedWrapper}>
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/reel/DESuG_bPmIi/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
          />
        </div>
      </div>
    </>
  );
}
