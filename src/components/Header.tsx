import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { Wordmark } from './Wordmark';
import styles from './Header.module.css';

const navItems = [
  { to: '/#apps', label: 'Apps' },
  { to: '/#principles', label: 'Principles' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/#architect', label: 'About' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`${styles.header} no-print`} data-scrolled={scrolled || undefined} data-open={open || undefined}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand} aria-label="The Blue Citadel, home">
          <Wordmark />
        </Link>

        <nav id="site-nav" className={styles.nav} aria-label="Main">
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                {item.to.includes('#') ? (
                  <Link to={item.to}>{item.label}</Link>
                ) : (
                  <NavLink to={item.to}>{item.label}</NavLink>
                )}
              </li>
            ))}
          </ul>
          <Link to="/#apps" className={`btn btn-primary ${styles.cta}`}>
            Get the apps
          </Link>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>
    </header>
  );
}
