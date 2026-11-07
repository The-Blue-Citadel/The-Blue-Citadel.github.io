import type { AppInfo } from '../content/apps';
import styles from './AppIcon.module.css';

interface AppIconProps {
  app: AppInfo;
  size?: number;
}

export function AppIcon({ app, size = 64 }: AppIconProps) {
  return (
    <span
      className={styles.icon}
      data-dark={app.iconOnDark || undefined}
      style={{ width: size, height: size, borderRadius: size * 0.24 }}
    >
      <img src={app.icon} alt={`${app.name} icon`} width={size} height={size} loading="lazy" />
    </span>
  );
}
