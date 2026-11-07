// Renders every route to static HTML so each page (privacy policies especially)
// is readable by crawlers and Play Console reviewers without running JavaScript.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');

const siteUrl = (process.env.SITE_URL ?? '').replace(/\/+$/, '');

const template = await readFile(join(dist, 'index.html'), 'utf8');
const { pages, render } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href);

const escapeHtml = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function headFor(page) {
  const tags = [
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="The Blue Citadel" />`,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ];
  if (siteUrl) {
    const url = page.file === '404.html' ? undefined : `${siteUrl}${page.path === '/' ? '/' : page.path}`;
    if (url) {
      tags.push(`<link rel="canonical" href="${url}" />`, `<meta property="og:url" content="${url}" />`);
    }
    tags.push(`<meta property="og:image" content="${siteUrl}/og-image.png" />`);
  }
  return tags.join('\n    ');
}

for (const page of pages) {
  const html = template
    .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(page.title)}</title>`)
    .replace(
      /<meta name="description" content=".*?" \/>/s,
      `<meta name="description" content="${escapeHtml(page.description)}" />`,
    )
    .replace('<!--app-head-->', headFor(page))
    .replace('<div id="root"><!--app-html--></div>', `<div id="root" data-path="${page.path}">${render(page.path)}</div>`);

  const file = join(dist, page.file);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
  console.log(`  prerendered ${page.path.padEnd(36)} -> dist/${page.file}`);
}

await writeFile(join(dist, '.nojekyll'), '');
await rm(ssrDir, { recursive: true, force: true });
