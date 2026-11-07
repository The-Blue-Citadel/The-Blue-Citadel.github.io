import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, type RefObject } from 'react';
import { Link } from 'react-router';
import { apps } from '../content/apps';
import { site } from '../content/site';
import { AppIcon } from './AppIcon';
import { CitadelDrawing } from './CitadelDrawing';
import { Reveal } from './Reveal';
import styles from './Hero.module.css';

const columns = ['A', 'B', 'C', 'D', 'E', 'F'];
const rows = ['1', '2', '3', '4'];

/** The home hero, laid out as the cover sheet of a drawing set. */
export function Hero() {
  const fieldRef = useRef<HTMLDivElement>(null);
  const readoutRef = useRef<HTMLSpanElement>(null);

  useCadCursor(fieldRef, readoutRef);

  return (
    <section className={`surface-paper ${styles.hero}`}>
      <div className={`container ${styles.wrap}`}>
        <div className={styles.sheet}>
          <span className={styles.corner} aria-hidden />
          <div className={styles.rulerTop} aria-hidden>
            {columns.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
          <div className={styles.rulerLeft} aria-hidden>
            {rows.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>

          <div ref={fieldRef} className={styles.field}>
            <span className={styles.crossX} aria-hidden />
            <span className={styles.crossY} aria-hidden />

            <div className={styles.copy}>
              <Reveal>
                <span className="eyebrow">Independent software studio</span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className={styles.title}>
                  Software built <span className="accent">like a fortress.</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className={styles.lead}>
                  Calm, private Android apps, engineered natively and walled in by design. Your data stays inside the
                  citadel: on your phone.
                </p>
              </Reveal>
              <Reveal delay={220} className={styles.actions}>
                <Link to="/#apps" className="btn btn-primary">
                  Explore the apps <ArrowRight aria-hidden />
                </Link>
                <Link to="/privacy" className="btn btn-outline">
                  Privacy Center
                </Link>
              </Reveal>
              <Reveal delay={280} className={styles.roster}>
                <span className={styles.rosterLabel}>On Google Play</span>
                <ul>
                  {apps.map((app) => (
                    <li key={app.id}>
                      <Link to={`/apps/${app.id}`}>
                        <AppIcon app={app} size={30} />
                        {app.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={120} className={styles.drawing}>
              <CitadelDrawing />
            </Reveal>
          </div>

          <div className={styles.status} aria-hidden>
            <span>Sheet A-00 · Cover</span>
            <span className={styles.statusMid}>
              {site.name} · Est. {site.founded}
            </span>
            <span ref={readoutRef} className={styles.readout}>
              X ---- · Y ----
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Draws CAD-style crosshairs over the field and reports the cursor position. */
function useCadCursor(
  fieldRef: RefObject<HTMLDivElement | null>,
  readoutRef: RefObject<HTMLSpanElement | null>,
) {
  useEffect(() => {
    const field = fieldRef.current;
    const readout = readoutRef.current;
    if (!field || !readout || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let frame = 0;
    const pad = (value: number) => String(Math.max(0, Math.round(value))).padStart(4, '0');

    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = field.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        field.style.setProperty('--cx', `${x}px`);
        field.style.setProperty('--cy', `${y}px`);
        field.dataset.cursor = 'on';
        readout.textContent = `X ${pad(x)} · Y ${pad(y)}`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame);
      delete field.dataset.cursor;
      readout.textContent = 'X ---- · Y ----';
    };

    field.addEventListener('pointermove', onMove);
    field.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      field.removeEventListener('pointermove', onMove);
      field.removeEventListener('pointerleave', onLeave);
    };
  }, [fieldRef, readoutRef]);
}
