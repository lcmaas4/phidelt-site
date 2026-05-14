import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.fatWrapper}>
      {/* Hero */}
      <div className={styles.aboutPreview}>
        <Image
          src="/formal flick.png"
          alt=""
          fill
          className={styles.aboutPreviewBg}
          priority
        />
        <div className={styles.aboutStuff}>
          <Image
            className={styles.aboutImage}
            src="/white logo.png"
            alt="Phi Delta Theta logo without letters"
            width={300}
            height={300}
          />
          <h1>Northeastern University</h1>
          <h3>Friendship - Sound Learning - Rectitude</h3>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Our Story */}
      <div className={styles.section}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.sectionImage}
            src="/coop-and-jc.jpeg"
            alt="Brothers"
            fill
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.sectionHeader}>Our story</h2>
          <p className={styles.sectionText}>
            Founded with the bold vision of helping its brothers &quot;become
            the greatest version of themselves,&quot; the Massachusetts Epsilon
            Chapter was officially recognized as the 169th active chapter of Phi
            Delta Theta on February 4th, 2012. A decade and over 350 brothers
            later, the chapter remains a powerful force for service,
            philanthropy, and brotherhood throughout Boston and beyond.
          </p>
          <Link className={styles.aboutButton} href="/about">
            More about us
          </Link>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Our Brothers */}
      <div className={`${styles.section} ${styles.sectionReverse}`}>
        <div className={styles.textWrapper}>
          <h2 className={styles.sectionHeader}>Our brothers</h2>
          <p className={styles.sectionText}>
            Our brothers are a diverse group of individuals who come together to
            form a close-knit community. We are united by our shared values of
            friendship, sound learning, and rectitude, and we are committed to
            helping each other grow and succeed.
          </p>
          <Link className={styles.aboutButton} href="/brothers">
            See our roster
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.sectionImage}
            src="/our brothers.png"
            alt="Our Brothers"
            fill
          />
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Our Impact */}
      <div className={styles.section}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.sectionImage}
            src="/70-backyard-concert.jpg"
            alt="Philanthropy event"
            fill
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.sectionHeader}>Our impact</h2>
          <p className={styles.sectionText}>
            We find deep fulfillment in offering our support to the
            underprivileged. Our chapter regularly conducts philanthropic work,
            particularly in support of the LiveLikeLou Foundation to fund ALS
            research. In 2015, we were recognized as an Iron Phi Chapter due to
            our outstanding philanthropic fundraising efforts.
          </p>
          <Link className={styles.aboutButton} href="/impact">
            Learn more
          </Link>
        </div>
      </div>

      <hr className={styles.divider} />
    </div>
  );
}
