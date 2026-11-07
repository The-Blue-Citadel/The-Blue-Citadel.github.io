# The Blue Citadel · Website

Brand site for **The Blue Citadel** and the home of the privacy policies for its Android apps,
[BLUE PDF](https://play.google.com/store/apps/details?id=com.bluepdf.blue_pdf) and
[BluePocket](https://play.google.com/store/apps/details?id=com.thebluecompany.bluepocket).

Built with React 19, React Router 7, TypeScript and Vite. Every route is prerendered to static
HTML at build time, so policies are readable by Google Play reviewers and crawlers without
JavaScript, and the site can be hosted on any static host.

## Pages

| Path                                 | Purpose                                     |
| ------------------------------------ | ------------------------------------------- |
| `/`                                  | Brand home: apps, principles, policies      |
| `/apps/blue-pdf`, `/apps/bluepocket` | App pages                                   |
| `/privacy`                           | Privacy Center, index of every policy       |
| `/privacy/blue-pdf`                  | BLUE PDF privacy policy                     |
| `/privacy/bluepocket`                | BluePocket privacy policy                   |
| `/privacy/bluepocket/delete-account` | BluePocket account deletion (Play Console)  |

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck, build and prerender into dist/
npm run preview    # serve dist/
```

`BASE_PATH` sets the path the site is served from (default `/`), and `SITE_URL` adds canonical
and Open Graph URLs:

```bash
BASE_PATH=/website/ SITE_URL=https://the-blue-citadel.github.io/website npm run build
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.
Enable it once under **Settings → Pages → Source: GitHub Actions**. The base path is detected
automatically, including after a custom domain is added.

## Editing content

- **Brand details** (email, GitHub): `src/content/site.ts`
- **Apps** (copy, features, specs, Play links): `src/content/apps.ts`
- **Policies**: one file per document in `src/content/policies/`. Update the `updated` date
  whenever the text changes. New documents are added to `policies` in `index.ts`, which creates
  their route, register entry and footer link.

Brand artwork lives in `the-blue-citadel-exact-logo-package/`; the files used by the site are
copied into `public/` and `src/assets/brand/`.
