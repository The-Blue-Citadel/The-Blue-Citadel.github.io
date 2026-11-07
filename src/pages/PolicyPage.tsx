import { ArrowRight, Mail, Printer } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AppIcon } from '../components/AppIcon';
import { getApp } from '../content/apps';
import { formatDate, policiesFor, type PolicyDocument } from '../content/policies';
import { mailto, site } from '../content/site';
import styles from './PolicyPage.module.css';

export function PolicyPage({ policy }: { policy: PolicyDocument }) {
  const app = getApp(policy.appId);
  const related = policiesFor(app.id).filter((doc) => doc.id !== policy.id);
  const activeId = useActiveSection(policy.sections.map((section) => section.id));

  return (
    <>
      <header className={`surface-paper ${styles.header}`}>
        <div className="container">
          <nav className={`${styles.crumbs} no-print`} aria-label="Breadcrumb">
            <Link to="/privacy">Privacy Center</Link>
            <span aria-hidden>/</span>
            <Link to={`/apps/${app.id}`}>{app.name}</Link>
            <span aria-hidden>/</span>
            <span aria-current="page">{policy.title}</span>
          </nav>

          <div className={styles.titleRow}>
            <AppIcon app={app} size={72} />
            <div>
              <span className={styles.appName}>{app.name}</span>
              <h1 className={styles.title}>{policy.title}</h1>
            </div>
          </div>

          <dl className={styles.meta}>
            <div>
              <dt>Effective</dt>
              <dd>
                <time dateTime={policy.updated}>{formatDate(policy.updated)}</time>
              </dd>
            </div>
            <div>
              <dt>Applies to</dt>
              <dd>{app.name} for Android</dd>
            </div>
            <div>
              <dt>Published by</dt>
              <dd>{site.name}</dd>
            </div>
          </dl>

          <p className={styles.lead}>{policy.lead}</p>

          <div className={styles.headerFoot}>
            <ul className={styles.highlights} aria-label="Highlights">
              {policy.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button type="button" className={`btn btn-outline no-print ${styles.print}`} onClick={() => window.print()}>
              <Printer aria-hidden /> Print or save as PDF
            </button>
          </div>
        </div>
      </header>

      <div className={`container ${styles.body}`}>
        <aside className={`${styles.toc} no-print`} aria-label="On this page">
          <span className={styles.tocLabel}>On this page</span>
          <ol>
            {policy.sections.map((section, index) => (
              <li key={section.id}>
                <a href={`#${section.id}`} aria-current={activeId === section.id ? 'location' : undefined}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </aside>

        <article className={styles.document}>
          {policy.sections.map((section, index) => (
            <section key={section.id} id={section.id} className={styles.section}>
              <h2>
                <span className={styles.sectionNo}>§ {index + 1}</span>
                {section.title}
              </h2>
              <div className={styles.prose}>{section.body}</div>
            </section>
          ))}

          <footer className={`${styles.docFoot} no-print`}>
            <a className={styles.mailCard} href={mailto(`${app.name} ${policy.title}`)}>
              <Mail aria-hidden />
              <span>
                <strong>Questions about this document?</strong>
                {site.email}
              </span>
            </a>
            {related.map((doc) => (
              <Link key={doc.id} to={doc.path} className={styles.relatedCard}>
                <span>
                  <small>Related</small>
                  <strong>{doc.title}</strong>
                </span>
                <ArrowRight aria-hidden />
              </Link>
            ))}
          </footer>
        </article>
      </div>
    </>
  );
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>();
  const key = ids.join('|');

  useEffect(() => {
    const elements = key
      .split('|')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -65% 0px' },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return active;
}
