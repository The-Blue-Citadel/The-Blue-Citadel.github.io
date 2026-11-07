import { GooglePlayIcon } from './icons';
import styles from './PlayButton.module.css';

interface PlayButtonProps {
  href: string;
  appName: string;
}

export function PlayButton({ href, appName }: PlayButtonProps) {
  return (
    <a className={styles.play} href={href} target="_blank" rel="noreferrer" aria-label={`Get ${appName} on Google Play`}>
      <GooglePlayIcon className={styles.icon} />
      <span className={styles.text}>
        <span className={styles.small}>Get it on</span>
        <span className={styles.large}>Google Play</span>
      </span>
    </a>
  );
}
