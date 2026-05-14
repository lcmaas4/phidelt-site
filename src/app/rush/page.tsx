"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";

export default function Rush() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>
        Check back at the start of next fall for information on rush. Check out
        our spring &apos;25 rush video below!
      </h3>
      <div className={styles.embedWrapper}>
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/reel/DESuG_bPmIi/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
        />
      </div>
    </div>
  );
}
