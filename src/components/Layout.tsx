import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { findPageMeta } from '../routes';
import { Footer } from './Footer';
import { Header } from './Header';

export function Layout() {
  usePageMeta();
  useScrollOnNavigate();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function usePageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = findPageMeta(pathname);
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
  }, [pathname]);
}

function useScrollOnNavigate() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);
}
