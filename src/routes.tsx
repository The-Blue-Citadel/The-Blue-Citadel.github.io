import type { ReactElement } from 'react';
import { apps, getApp } from './content/apps';
import { policies } from './content/policies';
import { site } from './content/site';
import { AppPage } from './pages/AppPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PolicyPage } from './pages/PolicyPage';
import { PrivacyCenterPage } from './pages/PrivacyCenterPage';

export interface PageMeta {
  title: string;
  description: string;
}

export interface RouteDef extends PageMeta {
  path: string;
  element: ReactElement;
}

const withBrand = (title: string) => `${title} · ${site.name}`;

export const routes: RouteDef[] = [
  {
    path: '/',
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    element: <HomePage />,
  },
  ...apps.map((app) => ({
    path: `/apps/${app.id}`,
    title: withBrand(`${app.name}: ${app.tagline.replace(/\.$/, '')}`),
    description: app.summary,
    element: <AppPage app={app} />,
  })),
  {
    path: '/privacy',
    title: withBrand('Privacy Center'),
    description: `Privacy policies and data deletion instructions for every app made by ${site.name}.`,
    element: <PrivacyCenterPage />,
  },
  ...policies.map((policy) => {
    const app = getApp(policy.appId);
    return {
      path: policy.path,
      title: withBrand(policy.kind === 'privacy' ? `${app.name} ${policy.title}` : `${policy.title} · ${app.name}`),
      description: policy.description,
      element: <PolicyPage policy={policy} />,
    };
  }),
];

export const notFound: PageMeta & { element: ReactElement } = {
  title: withBrand('Page not found'),
  description: site.description,
  element: <NotFoundPage />,
};

export const normalizePath = (pathname: string) => (pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname);

const findRoute = (pathname: string) => routes.find((route) => route.path === normalizePath(pathname));

export const findPageMeta = (pathname: string): PageMeta => findRoute(pathname) ?? notFound;

export const NOT_FOUND_PATH = '/404';

/** The prerendered page that should be served for a pathname (relative to the base). */
export const prerenderPathFor = (pathname: string) => findRoute(pathname)?.path ?? NOT_FOUND_PATH;
