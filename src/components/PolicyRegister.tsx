import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { getApp } from '../content/apps';
import { formatDate, policies } from '../content/policies';
import { AppIcon } from './AppIcon';
import styles from './PolicyRegister.module.css';

/** All policy documents, laid out like the drawing register of an architectural set. */
export function PolicyRegister() {
  return (
    <div className={styles.register}>
      <div className={styles.head} aria-hidden>
        <span>No.</span>
        <span>App</span>
        <span>Document</span>
        <span>Effective</span>
        <span />
      </div>
      <ul className={styles.rows}>
        {policies.map((policy, index) => {
          const app = getApp(policy.appId);
          return (
            <li key={policy.id}>
              <Link to={policy.path} className={styles.row}>
                <span className={styles.no}>P-{String(index + 1).padStart(2, '0')}</span>
                <span className={styles.app}>
                  <AppIcon app={app} size={36} />
                  {app.name}
                </span>
                <span className={styles.doc}>
                  {policy.kind === 'privacy' ? 'Privacy Policy' : 'Account & data deletion'}
                </span>
                <span className={styles.date}>{formatDate(policy.updated)}</span>
                <ArrowRight className={styles.arrow} aria-hidden />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
