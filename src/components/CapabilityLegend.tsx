import { ArrowRight } from 'lucide-react';
import { useId, useRef, useState, type KeyboardEvent } from 'react';
import type { AppInfo } from '../content/apps';
import { PlayButton } from './PlayButton';
import styles from './CapabilityLegend.module.css';

const pad = (value: number) => String(value).padStart(2, '0');

/**
 * App capabilities as a drawing legend: a keyed index on one side and a single
 * detail sheet on the other, instead of a grid of equal boxes.
 */
export function CapabilityLegend({ app }: { app: AppInfo }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const features = app.features;
  const feature = features[active];
  const Icon = feature.icon;

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const steps: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    let target: number;
    if (event.key === 'Home') target = 0;
    else if (event.key === 'End') target = features.length - 1;
    else if (event.key in steps) target = (active + steps[event.key] + features.length) % features.length;
    else return;
    event.preventDefault();
    setActive(target);
    tabs.current[target]?.focus();
  };

  return (
    <div className={styles.legend}>
      <div className={styles.index}>
        <div className={styles.indexHead}>
          <span>Legend</span>
          <span>{pad(features.length)} items</span>
        </div>
        <div role="tablist" aria-orientation="vertical" aria-label={`${app.name} capabilities`}>
          {features.map((item, index) => {
            const selected = index === active;
            return (
              <div key={item.title} className={styles.item} data-active={selected || undefined}>
                <button
                  ref={(node) => {
                    tabs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`${id}-tab-${index}`}
                  aria-selected={selected}
                  aria-controls={`${id}-panel`}
                  tabIndex={selected ? 0 : -1}
                  className={styles.tab}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  onKeyDown={onKeyDown}
                >
                  <span className={styles.no}>{pad(index + 1)}</span>
                  <span className={styles.label}>
                    <span className={styles.title}>{item.title}</span>
                    <span className={styles.summary}>{item.summary}</span>
                  </span>
                  <ArrowRight className={styles.arrow} aria-hidden />
                </button>
                <ul className={styles.inlinePoints}>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${active}`} className={styles.detail}>
        <div className={styles.detailHead}>
          <span>
            Detail {pad(active + 1)} / {pad(features.length)}
          </span>
          <span>{app.name}</span>
        </div>

        <div key={active} className={styles.detailBody}>
          <span className={styles.ghost} aria-hidden>
            {pad(active + 1)}
          </span>
          <div className={styles.marker} aria-hidden>
            <span>{pad(active + 1)}</span>
            <span>T-{app.numeral}</span>
          </div>
          <Icon className={styles.icon} strokeWidth={1.4} aria-hidden />
          <h3 className={styles.detailTitle}>{feature.title}</h3>
          <p className={styles.detailSummary}>{feature.summary}</p>
          <ul className={styles.points}>
            {feature.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className={styles.detailFoot}>
          <span>Free on Google Play</span>
          <PlayButton href={app.playUrl} appName={app.name} />
        </div>
      </div>
    </div>
  );
}
