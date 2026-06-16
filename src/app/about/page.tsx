import Image from 'next/image';
import Hero from '../components/Hero/Hero';
import styles from './page.module.css';

type Activity = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  priority?: boolean;
};

const activities: Activity[] = [
  {
    title: 'Academics',
    imageSrc: '/about-academics.jpg',
    imageAlt: 'Brothers studying together',
    description:
      'At Northeastern University, we’re here to pursue our academic and professional ambitions, and our fraternity plays a key role in keeping us on track. With the support of our scholarship chairmen, we stay focused on our studies and work to achieve success both in the classroom and beyond.',
  },
  {
    title: 'Social Events',
    imageSrc: '/about-social.jpg',
    imageAlt: 'Brothers at a social event',
    description:
      'We strive to build strong connections with sororities and campus organizations through social events such as mixers and formals. These gatherings build friendships, create memories, and strengthen our Greek community.',
  },
  {
    title: 'Philanthropy',
    imageSrc: '/about-philo.jpg',
    imageAlt: 'Brothers volunteering together',
    priority: true,
    description:
      'We make it our duty to support those in need. As such, our chapter regularly conducts philanthropic work, particularly in support of the LiveLikeLou Foundation to fund ALS research.',
  },
];

export default function About() {
  return (
    <div className={styles.wrapper}>
      {/* Hero */}
      <Hero
        title="About us"
        imageSrc="/exec-spring-25.jpg"
        imageAlt="About us background"
      />

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
          <h2 className={styles.historyTitle}>Our History</h2>
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
            loading="eager"
          />
        </div>
      </section>

      {/* Brotherhood */}
      <section className={styles.brotherhoodSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.brotherhoodContent}>
            <div className={styles.brotherhoodImageWrapper}>
              <div className={styles.brotherhoodGrid}>
                <div className={styles.brotherhoodTile} aria-hidden="true">
                  <Image
                    src="/about-brotherhood1.jpg"
                    alt="Brotherhood photo"
                    fill
                    className={styles.brotherhoodImage}
                    sizes="(max-width: 900px) 100vw, 19vw"
                  />
                </div>
                <div className={styles.brotherhoodTile} aria-hidden="true">
                  <Image
                    src="/about-brotherhood2.jpg"
                    alt="Brotherhood photo"
                    fill
                    className={styles.brotherhoodImage}
                    sizes="(max-width: 900px) 100vw, 19vw"
                  />
                </div>
                <div className={styles.brotherhoodTile} aria-hidden="true">
                  <Image
                    src="/about-brotherhood3.png"
                    alt="Brotherhood photo"
                    fill
                    className={styles.brotherhoodImage}
                    sizes="(max-width: 900px) 100vw, 19vw"
                  />
                </div>
                <div className={styles.brotherhoodTile} aria-hidden="true">
                  <Image
                    src="/about-brotherhood4.jpg"
                    alt="Brotherhood photo"
                    fill
                    className={styles.brotherhoodImage}
                    sizes="(max-width: 900px) 100vw, 19vw"
                  />
                </div>
              </div>
            </div>
            <div className={styles.brotherhoodText}>
              <h2 className={styles.sectionHeading}>The Brotherhood</h2>
              <p className={styles.sectionCopy}>
                True brotherhood is at the core of everything we do. It&apos;s
                about building lasting relationships, pushing each other to be
                our best selves, and offering support through life&apos;s ups
                and downs. In our fraternity, brotherhood means being there for
                one another, both in moments of celebration and challenge. With
                a foundation built on trust and mutual respect, we form
                connections that stand the test of time, united by a shared
                sense of purpose and loyalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className={styles.activitiesSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionHeading}>Activities</h2>
          <div className={styles.activitiesGrid}>
            {activities.map((activity) => (
              <article key={activity.title} className={styles.activityCard}>
                <div className={styles.activityImageSlot} aria-hidden="true">
                  {activity.imageSrc ? (
                    <Image
                      src={activity.imageSrc}
                      alt={activity.imageAlt ?? activity.title}
                      fill
                      className={styles.activityImage}
                      sizes="(max-width: 900px) 100vw, 33vw"
                      loading={activity.priority ? 'eager' : undefined}
                    />
                  ) : (
                    <span className={styles.activityImageText}>
                      Image space
                    </span>
                  )}
                </div>
                <h3 className={styles.activityTitle}>{activity.title}</h3>
                <p className={styles.activityCopy}>{activity.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
