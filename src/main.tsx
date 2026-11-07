import '@fontsource-variable/fraunces/opsz.css';
import '@fontsource-variable/fraunces/opsz-italic.css';
import '@fontsource-variable/inter';
import '@fontsource-variable/jetbrains-mono';
import './styles/global.css';

import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { App } from './App';
import { basename } from './basename';
import { prerenderPathFor } from './routes';

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
);

const pathname = basename === '/' ? location.pathname : location.pathname.slice(basename.length) || '/';

// Hosts with an SPA fallback may serve another page's HTML for unknown URLs;
// only hydrate markup that was prerendered for this route.
if (container.firstElementChild && container.dataset.path === prerenderPathFor(pathname)) {
  hydrateRoot(container, app);
} else {
  container.replaceChildren();
  createRoot(container).render(app);
}
