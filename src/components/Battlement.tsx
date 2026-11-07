import styles from './Battlement.module.css';

interface BattlementProps {
  /** Colour of the wall the merlons belong to. */
  color?: string;
  /** Which edge of the wall the merlons sit on. */
  edge?: 'top' | 'bottom';
  className?: string;
}

/** A crenellated edge, drawn as merlons rising out of the section it sits against. */
export function Battlement({ color = 'var(--navy-900)', edge = 'top', className }: BattlementProps) {
  return (
    <div
      aria-hidden
      className={`${styles.battlement} ${className ?? ''}`}
      data-edge={edge}
      style={{ ['--wall' as string]: color }}
    />
  );
}
