import mark from '../assets/brand/citadel-mark.png';
import styles from './Wordmark.module.css';

interface WordmarkProps {
  tone?: 'light' | 'dark';
}

export function Wordmark({ tone = 'light' }: WordmarkProps) {
  return (
    <span className={styles.wordmark} data-tone={tone}>
      <span className={styles.mark}>
        <img src={mark} alt="" width={128} height={128} />
      </span>
      <span className={styles.text}>
        The <span className={styles.blue}>Blue</span> Citadel
      </span>
    </span>
  );
}
