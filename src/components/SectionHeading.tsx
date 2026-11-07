import type { ReactNode } from 'react';
import { Reveal } from './Reveal';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'start' | 'split';
}

export function SectionHeading({ index, label, title, intro, align = 'split' }: SectionHeadingProps) {
  return (
    <Reveal className={styles.heading} data-align={align}>
      <div className={styles.marker}>
        <span className={styles.index}>§ {index}</span>
        <span className={styles.rule} />
        <span className={styles.label}>{label}</span>
      </div>
      <div className={styles.body}>
        <h2 className={styles.title}>{title}</h2>
        {intro && <p className={styles.intro}>{intro}</p>}
      </div>
    </Reveal>
  );
}
