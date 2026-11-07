import icon from '../assets/brand/citadel-icon.png';
import { site } from '../content/site';
import styles from './CitadelDrawing.module.css';

/** The citadel mark presented as a sheet from an architect's drawing set. */
export function CitadelDrawing() {
  return (
    <figure className={styles.sheet} aria-label="The Blue Citadel logo drawn as an architectural elevation">
      <svg className={styles.drawing} viewBox="0 0 560 560" role="presentation">
        <defs>
          <marker id="tick" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="9" markerHeight="9" orient="auto">
            <path d="M2 8 8 2" className={styles.tickMark} />
          </marker>
        </defs>

        {/* Construction geometry */}
        <g className={styles.construction}>
          <circle cx="280" cy="292" r="214" />
          <circle cx="280" cy="292" r="150" />
          <path d="M66 292h428M280 60v460" className={styles.centerline} />
          <path d="M40 40 520 520M520 40 40 520" className={styles.faint} />
        </g>

        {/* Registration marks */}
        <g className={styles.reg}>
          {[
            [24, 24],
            [536, 24],
            [24, 536],
            [536, 536],
          ].map(([x, y]) => (
            <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
              <circle r="6" />
              <path d="M-11 0h22M0-11v22" />
            </g>
          ))}
        </g>

        {/* North arrow */}
        <g className={styles.north} transform="translate(64 76)">
          <circle r="18" />
          <path d="M0-13 6 8 0 3-6 8Z" />
          <text y="-24" textAnchor="middle">
            N
          </text>
        </g>

        <image href={icon} x="110" y="150" width="340" height="281" className={styles.mark} />

        {/* Dimensions */}
        <g className={styles.dim}>
          <path d="M120 432v54M440 432v54" className={styles.extension} />
          <path d="M120 474h320" markerStart="url(#tick)" markerEnd="url(#tick)" pathLength={1} className={styles.draw} />
          <text x="280" y="466" textAnchor="middle">
            FOUNDATION · PRIVACY
          </text>

          <path d="M392 152h110M452 423h50" className={styles.extension} />
          <path d="M490 152v271" markerStart="url(#tick)" markerEnd="url(#tick)" pathLength={1} className={styles.draw} />
          <text x="0" y="0" textAnchor="middle" transform="translate(482 288) rotate(-90)">
            ELEV. 01
          </text>
        </g>

        {/* Callouts */}
        <g className={styles.callout}>
          <circle cx="346" cy="182" r="3" />
          <path d="M346 182 400 112h120" pathLength={1} className={styles.draw} />
          <text x="520" y="104" textAnchor="end">
            A · EST. {site.founded}
          </text>

          <circle cx="196" cy="236" r="3" />
          <path d="M196 236 150 196H40" pathLength={1} className={styles.draw} />
          <text x="40" y="188">
            B · NO ADS, NO TRACKERS
          </text>

          <circle cx="283" cy="352" r="3" />
          <path d="M283 352H40" pathLength={1} className={styles.draw} />
          <text x="40" y="344">
            C · DATA STAYS INSIDE
          </text>
        </g>
      </svg>

      <figcaption className={styles.titleBlock}>
        <div>
          <span>Project</span>
          <strong>{site.name}</strong>
        </div>
        <div>
          <span>Sheet</span>
          <strong>A-01 Elevation</strong>
        </div>
        <div>
          <span>Drawn</span>
          <strong>A. Pal</strong>
        </div>
        <div>
          <span>Date</span>
          <strong>{site.founded}</strong>
        </div>
      </figcaption>
    </figure>
  );
}
