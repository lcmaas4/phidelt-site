import Image from 'next/image';
import Link from 'next/link';
import Hero from '../components/Hero/Hero';
import styles from './page.module.css';

export default function Impact() {
  return (
    <div className={styles.wrapper}>
      {/* Hero */}
      <Hero
        title="Our Impact"
        imageSrc="/impact-bg.png"
        imageAlt="Our Impact background"
      />

      {/* Philanthropy */}
      <section className={styles.philoSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.philoContent}>
            <div className={styles.philoText}>
              <h2 className={styles.introTitle}>Philanthropy</h2>
              <p className={styles.sectionCopy}>
                We find deep fulfillment in offering our support to those in
                need. Our chapter is deeply committed to philanthropic work and
                community service, particularly in support of the LiveLikeLou
                Foundation to fund ALS research. In 2015, we were recognized as
                an Iron Phi Chapter due to our outstanding philanthropic
                fundraising efforts. We also love supporting local organizations
                in Boston through community service and fundraising events. We
                are proud of the impact we have made and truly believe that
                giving back brings us closer to each other and to our community.
              </p>
            </div>
            <div className={styles.logoGrid}>
              <Link
                href="https://www.livelikelou.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.logoWrapper}
              >
                <Image
                  src="/impact-livelikelou.png"
                  alt="LiveLikeLou Foundation"
                  width={280}
                  height={120}
                  className={styles.logoImage}
                />
              </Link>
              <Link
                href="http://www.ironphi.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.logoWrapper}
              >
                <Image
                  src="/impact-ironphi.png"
                  alt="Iron Phi"
                  width={280}
                  height={120}
                  className={styles.logoImage}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Service */}
      <section className={styles.serviceSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.serviceContent}>
            <div className={styles.serviceImageWrapper}>
              <Image
                src="/impact-alswalk.jpg"
                alt="Community Service - ALS Walk"
                fill
                className={styles.serviceImage}
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </div>
            <div className={styles.serviceText}>
              <h2 className={styles.introTitle}>Community Service</h2>
              <p className={styles.sectionCopy}>
                Raising money through fundraisers is important, but nothing
                compares to getting involved in hands-on community service. Over
                the years, we’ve partnered with organizations like the Walk to
                Defeat ALS, the Boston Celtics and Bruins, Red Cross Blood
                Drives, and local cleanups. If your organization could benefit
                from our support, feel free to reach out through the{' '}
                <Link href="/contact" className={styles.textLink}>
                  Contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philanthropy Week */}
      <section className={styles.philoWeekSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.philoWeekContent}>
            <div className={styles.philoWeekText}>
              <h2 className={styles.introTitle}>Philanthropy Week</h2>
              <p className={styles.sectionCopy}>
                Each semester, our fraternity hosts a philanthropy week to
                support ALS research through the LiveLikeLou Foundation. We
                organize events and fundraisers to raise awareness and help fund
                the search for a cure. It’s a week of bringing people together,
                having a great time, and making a positive impact on the fight
                against ALS.
              </p>
            </div>
            <div className={styles.philoWeekImageWrapper}>
              <Image
                src="/impact-philoweek.png"
                alt="Philanthropy Week"
                fill
                className={styles.philoWeekImage}
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Events */}
      <section className={styles.eventsSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.introTitle}>Our Events</h2>
          <div className={styles.eventsGrid}>
            <div className={styles.eventItem}>
              <div className={styles.eventImageWrapper}>
                <Image
                  src="/impact-greeksing.jpg"
                  alt="Greek Sing Performance"
                  fill
                  className={styles.eventImage}
                  sizes="(max-width: 900px) 100vw, 30vw"
                />
              </div>
              <div className={styles.eventText}>
                <h3 className={styles.eventTitle}>Greek Sing</h3>
                <p className={styles.sectionCopy}>
                  Each semester we participate in a charity concert where
                  sororities and fraternities are paired to compete for a great
                  cause. Through hard work and creative performances, we raise
                  funds for local charities while strengthening bonds within the
                  Greek community.
                </p>
              </div>
            </div>

            <div className={styles.eventItem}>
              <div className={styles.eventImageWrapper}>
                <Image
                  src="/impact-relay.jpg"
                  alt="Brothers at Relay For Life"
                  fill
                  className={styles.eventImage}
                  sizes="(max-width: 900px) 100vw, 30vw"
                />
              </div>
              <div className={styles.eventText}>
                <h3 className={styles.eventTitle}>Relay For Life</h3>
                <p className={styles.sectionCopy}>
                  Our brothers annually participate in Relay for Life, raising
                  funds and awareness for cancer research while honoring
                  survivors and those we&apos;ve lost. It&apos;s a meaningful
                  event that brings our brothers together for a great cause.
                </p>
              </div>
            </div>

            <div className={styles.eventItem}>
              <div className={styles.eventImageWrapper}>
                <Image
                  src="/70-backyard-concert.JPG"
                  alt="Brothers performing at a fundraiser concert"
                  fill
                  className={styles.eventImage}
                  sizes="(max-width: 900px) 100vw, 30vw"
                />
              </div>
              <div className={styles.eventText}>
                <h3 className={styles.eventTitle}>Fundraiser Concerts</h3>
                <p className={styles.sectionCopy}>
                  We organize semesterly concerts featuring local artists to
                  raise money for our philanthropic causes. Our performing acts
                  often include our brothers and friends. These events are a
                  great way to bring the community together, enjoy live music,
                  and support important research and initiatives.
                </p>
              </div>
            </div>
          </div>
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
