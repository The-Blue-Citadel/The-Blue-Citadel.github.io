import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
  return (
    <section className={`surface-paper ${styles.page}`}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.code} aria-hidden>
          404
        </span>
        <span className="eyebrow">Outside the walls</span>
        <h1 className={styles.title}>
          This passage <span className="accent">doesn't exist.</span>
        </h1>
        <p className={styles.lead}>The page you were looking for has moved, or was never part of the citadel.</p>
        <div className={styles.actions}>
          <Link to="/" className="btn btn-primary">
            Back to the citadel <ArrowRight aria-hidden />
          </Link>
          <Link to="/privacy" className="btn btn-outline">
            Privacy Center
          </Link>
        </div>
      </div>
    </section>
  );
}
