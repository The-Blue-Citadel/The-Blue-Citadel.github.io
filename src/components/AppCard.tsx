import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router';
import type { AppInfo } from '../content/apps';
import { policiesFor } from '../content/policies';
import { AppIcon } from './AppIcon';
import { PlayButton } from './PlayButton';
import styles from './AppCard.module.css';

export function AppCard({ app }: { app: AppInfo }) {
  const privacy = policiesFor(app.id).find((policy) => policy.kind === 'privacy');

  return (
    <article className={styles.card}>
      <header className={styles.crown}>
        <span className={styles.numeral}>Tower {app.numeral}</span>
        <span className={styles.category}>{app.category}</span>
      </header>

      <div className={styles.body}>
        <AppIcon app={app} size={76} />
        <h3 className={styles.name}>
          <Link to={`/apps/${app.id}`}>{app.name}</Link>
        </h3>
        <p className={styles.tagline}>{app.tagline}</p>
        <p className={styles.summary}>{app.summary}</p>

        <ul className={styles.highlights}>
          {app.highlights.map((item) => (
            <li key={item}>
              <ShieldCheck aria-hidden />
              {item}
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <PlayButton href={app.playUrl} appName={app.name} />
          <div className={styles.links}>
            <Link to={`/apps/${app.id}`} className="link-arrow">
              Explore <ArrowRight aria-hidden />
            </Link>
            {privacy && (
              <Link to={privacy.path} className={styles.policyLink}>
                Privacy policy
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
