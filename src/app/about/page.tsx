import Image from "next/image";
import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.wrapper}>
      {/* Intro */}
      <section className={styles.introSection}>
        <div className={styles.introText}>
          <h1 className={styles.introTitle}>
            Phi Delta Theta — Massachusetts Epsilon
          </h1>
          <p className={styles.introParagraph}>
            Founded in the Spring of 2011 at Northeastern University with the
            bold vision of helping its brothers &quot;become the greatest
            version of themselves,&quot; the Massachusetts Epsilon chapter of
            Phi Delta Theta quickly grew from a small group to nearly 50
            members, all sharing a common goal of joining a brotherhood that
            would inspire personal growth. Less than a year later, on February
            4th, 2012, the chapter was officially recognized as the 169th active
            Phi Delta Theta chapter. A decade and over 350 brothers later,
            Massachusetts Epsilon continues to be a powerful force for service,
            philanthropy, and brotherhood, making a lasting impact in Boston and
            beyond.
          </p>
        </div>
      </section>

      {/* History */}
      <section className={styles.historySection}>
        <div className={styles.historyText}>
          <h1 className={styles.historyTitle}>Our History</h1>
          <p className={styles.historyParagraph}>
            On December 26th, 1848, Robert Morrison, John McMillan Wilson, and
            four classmates, known as the &quot;Immortal Six,&quot; founded Phi
            Delta Theta at Miami University in Oxford, Ohio. They created the
            fraternity&apos;s guiding principles and The Bond, which every
            initiate still signs today. Their vision laid the foundation for a
            brotherhood that would grow and thrive for generations.
          </p>
          <p className={styles.historyParagraph}>
            Phi Delta Theta quickly expanded, with its second chapter at Indiana
            University in 1849. The fraternity&apos;s growth was fueled by
            Walter B. Palmer and George Banta Sr., the &quot;Second
            Founders,&quot; who helped spread Phi Delta Theta across campuses in
            the late 19th century.
          </p>
          <p className={styles.historyParagraph}>
            Today, Phi Delta Theta has nearly 190 active chapters and over
            180,000 alumni worldwide, continuing to foster lifelong friendships,
            leadership, and service while making a positive impact in
            communities.
          </p>
        </div>
        <div className={styles.historyImageWrapper}>
          <Image
            src="/history-image.jpg"
            alt="History of Phi Delta Theta"
            width={600}
            height={450}
            className={styles.historyImage}
          />
        </div>
      </section>

      {/* Quote */}
      <section className={styles.morrisonSection}>
        <blockquote className={styles.quote}>
          &ldquo;To do what ought to be done but would not have been done unless
          I did it, I thought to be my duty.&rdquo;
        </blockquote>
        <p className={styles.quoteAttribution}>
          — Robert Morrison, Phi Delta Theta Founder
        </p>
      </section>
    </div>
  );
}
