import { Mail } from 'lucide-react';
import { PolicyRegister } from '../components/PolicyRegister';
import { Reveal } from '../components/Reveal';
import { mailto, site } from '../content/site';
import styles from './PrivacyCenterPage.module.css';

export function PrivacyCenterPage() {
  return (
    <section className={`surface-paper ${styles.page}`}>
      <div className="container">
        <header className={styles.header}>
          <Reveal>
            <span className="eyebrow">Privacy Center</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={styles.title}>
              What we collect, <span className="accent">and what we never do.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className={styles.lead}>
              Every app made by {site.name} has its own privacy policy, written in plain language. Choose an app below to
              read exactly how it handles your data.
            </p>
          </Reveal>
        </header>

        <Reveal delay={200}>
          <PolicyRegister />
        </Reveal>

        <Reveal className={styles.contact}>
          <Mail aria-hidden />
          <p>
            Have a privacy question or a data request? Write to{' '}
            <a href={mailto('Privacy request')}>{site.email}</a>. Every message is answered by a person.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
