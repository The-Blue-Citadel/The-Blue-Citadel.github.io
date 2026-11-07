import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router';
import { AppIcon } from '../components/AppIcon';
import { Battlement } from '../components/Battlement';
import { GithubIcon } from '../components/icons';
import { PlayButton } from '../components/PlayButton';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import type { AppInfo } from '../content/apps';
import { formatDate, policiesFor } from '../content/policies';
import styles from './AppPage.module.css';

export function AppPage({ app }: { app: AppInfo }) {
  const documents = policiesFor(app.id);

  return (
    <>
      <section className={`surface-paper ${styles.hero}`}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <Reveal>
              <nav className={styles.crumbs} aria-label="Breadcrumb">
                <Link to="/#apps">Apps</Link>
                <span aria-hidden>/</span>
                <span aria-current="page">{app.name}</span>
              </nav>
            </Reveal>
            <Reveal delay={60} className={styles.identity}>
              <AppIcon app={app} size={88} />
              <span className="eyebrow">
                Tower {app.numeral} · {app.category}
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className={styles.title}>{app.name}</h1>
            </Reveal>
            <Reveal delay={160}>
              <p className={styles.tagline}>{app.tagline}</p>
            </Reveal>
            <Reveal delay={200}>
              <p className={styles.summary}>{app.summary}</p>
            </Reveal>
            <Reveal delay={240} className={styles.actions}>
              <PlayButton href={app.playUrl} appName={app.name} />
              {app.sourceUrl && (
                <a className="btn btn-outline" href={app.sourceUrl} target="_blank" rel="noreferrer">
                  <GithubIcon /> Source code
                </a>
              )}
            </Reveal>
          </div>

          <Reveal delay={160} className={styles.specSheet}>
            <div className={styles.specHead}>
              <span>Specification</span>
              <span>{app.name}</span>
            </div>
            <dl>
              {app.specs.map((spec) => (
                <div key={spec.label}>
                  <dt>{spec.label}</dt>
                  <dd data-mono={spec.mono || undefined}>{spec.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {app.screenshots.length > 0 && (
        <section className={styles.gallerySection} aria-label={`${app.name} screenshots`}>
          <Battlement color="var(--navy-900)" />
          <div className={`surface-blueprint ${styles.gallery}`}>
            <div className={`container ${styles.galleryGrid}`}>
              {app.screenshots.map((shot, index) => (
                <Reveal key={shot.src} delay={index * 90} className={styles.phone}>
                  <img src={shot.src} alt={shot.alt} loading="lazy" width={473} height={1024} />
                </Reveal>
              ))}
            </div>
          </div>
          <Battlement color="var(--navy-900)" edge="bottom" />
        </section>
      )}

      <section className={`surface-paper ${styles.section}`}>
        <div className="container">
          <SectionHeading
            index="01"
            label="Capabilities"
            title={
              <>
                What {app.name} <span className="accent">does.</span>
              </>
            }
          />
          <ul className={styles.features}>
            {app.features.map(({ icon: Icon, title, body }, index) => (
              <Reveal as="li" key={title} delay={(index % 3) * 80} className={styles.feature}>
                <Icon className={styles.featureIcon} strokeWidth={1.5} aria-hidden />
                <h3>{title}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
            <Reveal as="li" delay={(app.features.length % 3) * 80} className={styles.featureCta}>
              <span className={styles.ctaLabel}>Free on Google Play</span>
              <h3>Ready when you are.</h3>
              <PlayButton href={app.playUrl} appName={app.name} />
            </Reveal>
          </ul>
        </div>
      </section>

      <section className={`${styles.section} ${styles.privacySection}`}>
        <div className={`container ${styles.privacyGrid}`}>
          <div>
            <SectionHeading
              index="02"
              label="Privacy"
              title={
                <>
                  Private <span className="accent">by design.</span>
                </>
              }
              align="start"
            />
            <Reveal>
              <ul className={styles.privacyList}>
                {app.privacy.map((item) => (
                  <li key={item}>
                    <ShieldCheck aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={120} className={styles.docs}>
            <span className={styles.docsLabel}>Documents</span>
            {documents.map((doc) => (
              <Link key={doc.id} to={doc.path} className={styles.doc}>
                <span>
                  <strong>{doc.title}</strong>
                  <small>Effective {formatDate(doc.updated)}</small>
                </span>
                <ArrowRight aria-hidden />
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
