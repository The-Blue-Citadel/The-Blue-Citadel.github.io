import { ArrowRight, ChevronRight, FileText, Folder, FolderOpen } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { apps } from '../content/apps';
import { formatDate, policies, policiesFor } from '../content/policies';
import { AppIcon } from './AppIcon';
import styles from './PolicyRegister.module.css';

const plural = (count: number, word: string) => `${count} ${word}${count === 1 ? '' : 's'}`;

/** Policy documents as a file tree: one folder per app, its documents inside. */
export function PolicyRegister() {
  const { hash } = useLocation();
  const folders = apps
    .map((app) => ({ app, documents: policiesFor(app.id) }))
    .filter((folder) => folder.documents.length > 0);

  useEffect(() => {
    const target = hash ? document.getElementById(`policies-${hash.slice(1)}`) : null;
    if (target instanceof HTMLDetailsElement) target.open = true;
  }, [hash]);

  return (
    <div className={styles.register}>
      <div className={styles.bar}>
        <span>
          Index of <strong>/privacy</strong>
        </span>
        <span>
          {plural(folders.length, 'folder')} · {plural(policies.length, 'file')}
        </span>
      </div>
      <div className={styles.columns} aria-hidden>
        <span>Name</span>
        <span>Contents</span>
        <span>Last updated</span>
      </div>

      <ul className={styles.tree}>
        {folders.map(({ app, documents }) => {
          const updated = documents.reduce((latest, doc) => (doc.updated > latest ? doc.updated : latest), '');
          return (
            <li key={app.id}>
              <details id={`policies-${app.id}`} className={styles.folder}>
                <summary className={styles.folderRow}>
                  <span className={styles.name}>
                    <ChevronRight className={styles.caret} aria-hidden />
                    <AppIcon app={app} size={40} />
                    <span className={styles.label}>
                      <strong>{app.name}</strong>
                      <small>
                        <Folder className={styles.closedIcon} aria-hidden />
                        <FolderOpen className={styles.openIcon} aria-hidden />
                        /privacy/{app.id}/
                      </small>
                    </span>
                  </span>
                  <span className={styles.contents}>{plural(documents.length, 'document')}</span>
                  <span className={styles.date}>{formatDate(updated)}</span>
                </summary>

                <ul className={styles.files}>
                  {documents.map((doc) => (
                    <li key={doc.id}>
                      <Link to={doc.path} className={styles.fileRow}>
                        <span className={styles.name}>
                          <FileText className={styles.fileIcon} aria-hidden />
                          <span className={styles.label}>
                            <strong>{doc.title}</strong>
                            <small>{doc.path}</small>
                          </span>
                        </span>
                        <span className={styles.contents}>{plural(doc.sections.length, 'section')}</span>
                        <span className={styles.date}>{formatDate(doc.updated)}</span>
                        <ArrowRight className={styles.arrow} aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
