import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { App } from './App';
import { basename } from './basename';
import { NOT_FOUND_PATH, notFound, routes, type PageMeta } from './routes';

export interface PrerenderPage extends PageMeta {
  /** Route path without the base, e.g. "/privacy/blue-pdf" */
  path: string;
  /** Output file relative to dist, e.g. "privacy/blue-pdf/index.html" */
  file: string;
}

export const pages: PrerenderPage[] = [
  ...routes.map(({ path, title, description }) => ({
    path,
    title,
    description,
    file: path === '/' ? 'index.html' : `${path.slice(1)}/index.html`,
  })),
  { path: NOT_FOUND_PATH, title: notFound.title, description: notFound.description, file: '404.html' },
];

export function render(path: string): string {
  const location = basename === '/' ? path : `${basename}${path === '/' ? '' : path}`;
  return renderToString(
    <StrictMode>
      <StaticRouter location={location} basename={basename}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
}
