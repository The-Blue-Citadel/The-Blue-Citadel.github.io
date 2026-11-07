import { Mail } from 'lucide-react';
import { Link } from 'react-router';
import { apps, getApp } from '../content/apps';
import { policies } from '../content/policies';
import { mailto, site } from '../content/site';
import { Battlement } from './Battlement';
import { GithubIcon } from './icons';
import { Wordmark } from './Wordmark';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={`${styles.footer} no-print`}>
      <Battlement color="var(--navy-950)" />
      <div className={styles.wall}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.brand}>
            <Link to="/" aria-label="The Blue Citadel, home" className={styles.brandLink}>
              <Wordmark tone="dark" />
            </Link>
            <p>{site.tagline} Calm, private Android apps from an independent developer.</p>
            <div className={styles.social}>
              <a href={mailto()} aria-label="Email">
                <Mail aria-hidden />
              </a>
              <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon />
              </a>
            </div>
          </div>

          <nav className={styles.column} aria-label="Apps">
            <h2>Apps</h2>
            <ul>
              {apps.map((app) => (
                <li key={app.id}>
                  <Link to={`/apps/${app.id}`}>{app.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.column} aria-label="Legal">
            <h2>Privacy</h2>
            <ul>
              <li>
                <Link to="/privacy">Privacy Center</Link>
              </li>
              {policies
                .filter((policy) => policy.kind === 'privacy')
                .map((policy) => (
                  <li key={policy.id}>
                    <Link to={policy.path}>{getApp(policy.appId).name} · Privacy</Link>
                  </li>
                ))}
            </ul>
          </nav>

          <div className={styles.column}>
            <h2>Contact</h2>
            <ul>
              <li>
                <a href={mailto()}>{site.email}</a>
              </li>
              <li>
                <a href={site.github} target="_blank" rel="noreferrer">
                  github.com/{site.githubHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={`container ${styles.base}`}>
          <span>
            © {site.founded} {site.name}. All rights reserved.
          </span>
          <span className={styles.coords}>Est. {site.founded} · Built on-device, by design</span>
        </div>
      </div>
    </footer>
  );
}
