import { ArrowUpRight, Ban, FileText, KeyRound, Mail, Smartphone } from 'lucide-react';
import { AppCard } from '../components/AppCard';
import { Battlement } from '../components/Battlement';
import { Hero } from '../components/Hero';
import { GithubIcon } from '../components/icons';
import { PolicyRegister } from '../components/PolicyRegister';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { apps } from '../content/apps';
import { mailto, site } from '../content/site';
import styles from './HomePage.module.css';

const foundation = [
  { value: String(apps.length).padStart(2, '0'), label: 'Apps on Google Play' },
  { value: '0', label: 'Ads, in any app' },
  { value: '0', label: 'Analytics or tracking SDKs' },
  { value: '0', label: 'Bytes of your data sold' },
];

const principles = [
  {
    icon: Smartphone,
    title: 'On-device first',
    body: 'Files and ledgers are processed and stored on your phone. The cloud is used only where a feature truly needs it, and only when you opt in.',
  },
  {
    icon: Ban,
    title: 'No ads, no trackers',
    body: 'No advertising SDKs, no analytics, no profiling. The apps are built to earn trust, not impressions.',
  },
  {
    icon: KeyRound,
    title: 'Least permission',
    body: 'Each app asks only for what it needs, when it needs it. BLUE PDF does not even request access to the internet.',
  },
  {
    icon: FileText,
    title: 'Policies in plain words',
    body: 'Every privacy policy is short, specific and public, written to be read rather than simply agreed to.',
  },
];

const stack = ['Flutter', 'Kotlin', 'C++ / JNI', 'MuPDF', 'SQLite', 'Firebase'];

export function HomePage() {
  return (
    <>
      <Hero />

      <section className={styles.foundation} aria-label="At a glance">
        <Battlement color="var(--navy-800)" />
        <div className={styles.foundationWall}>
          <dl className={`container ${styles.foundationGrid}`}>
            {foundation.map((item, index) => (
              <Reveal key={item.label} delay={index * 80} className={styles.foundationItem}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section id="apps" className={`surface-paper ${styles.section}`}>
        <div className="container">
          <SectionHeading
            index="01"
            label="The Towers"
            title={
              <>
                Two apps, <span className="accent">one standard.</span>
              </>
            }
            intro="Each app is a tower of its own: focused on one job, engineered to feel instant, and built to keep what's yours on your device."
          />
          <div className={styles.apps}>
            {apps.map((app, index) => (
              <Reveal key={app.id} delay={index * 120}>
                <AppCard app={app} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="principles" className={styles.principlesSection}>
        <Battlement color="var(--navy-900)" />
        <div className={`surface-blueprint ${styles.section}`}>
          <div className="container">
            <SectionHeading
              index="02"
              label="The Walls"
              title={
                <>
                  Four walls around <span className="accent">your data.</span>
                </>
              }
              intro="Privacy is not a feature added at the end. It is part of the architecture, decided before the first line of code."
            />
            <ol className={styles.principles}>
              {principles.map(({ icon: Icon, title, body }, index) => (
                <Reveal as="li" key={title} delay={index * 90} className={styles.principle}>
                  <span className={styles.principleNo}>{String(index + 1).padStart(2, '0')}</span>
                  <Icon className={styles.principleIcon} aria-hidden strokeWidth={1.5} />
                  <h3>{title}</h3>
                  <p>{body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
        <Battlement color="var(--navy-900)" edge="bottom" />
      </section>

      <section id="privacy" className={`surface-paper ${styles.section}`}>
        <div className="container">
          <SectionHeading
            index="03"
            label="The Gate"
            title={
              <>
                Every policy, <span className="accent">in one place.</span>
              </>
            }
            intro="Privacy policies and data deletion instructions for each app. These are the pages linked from the Google Play listings."
          />
          <Reveal>
            <PolicyRegister />
          </Reveal>
        </div>
      </section>

      <section id="architect" className={`${styles.section} ${styles.architect}`}>
        <div className={`container ${styles.architectGrid}`}>
          <div>
            <SectionHeading index="04" label="The Architect" title="Designed, engineered and maintained by one hand." align="start" />
            <Reveal className={styles.architectCopy}>
              <p>
                {site.name} is the developer brand of <strong>{site.owner}</strong>, an independent Android developer. Every
                app is planned, designed and built in-house, from the interface down to native C++ where speed matters.
              </p>
              <p>
                The name says what the work is about: a citadel is the strongest, innermost part of a fortress, the place
                where what matters most is kept safe. That is the job these apps are built to do for your files and your
                money.
              </p>
              <ul className={styles.stack} aria-label="Technologies">
                {stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={120} className={styles.contactCard}>
            <span className={styles.contactLabel}>Correspondence</span>
            <h3>Write to the citadel.</h3>
            <p>Questions, feedback, bug reports or privacy requests. Every message is read by a person.</p>
            <a className={styles.contactRow} href={mailto()}>
              <Mail aria-hidden />
              <span>
                <small>Email</small>
                {site.email}
              </span>
              <ArrowUpRight aria-hidden />
            </a>
            <a className={styles.contactRow} href={site.github} target="_blank" rel="noreferrer">
              <GithubIcon />
              <span>
                <small>GitHub</small>
                {site.githubHandle}
              </span>
              <ArrowUpRight aria-hidden />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
