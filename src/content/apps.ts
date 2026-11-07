import type { LucideIcon } from 'lucide-react';
import {
  Camera,
  ChartColumn,
  Gauge,
  Images,
  ListOrdered,
  Lock,
  Merge,
  MessageSquareText,
  Receipt,
  RefreshCw,
  Scissors,
  Users,
  Wallet,
} from 'lucide-react';

import bluePdfIcon from '../assets/apps/blue-pdf.webp';
import bluePocketIcon from '../assets/apps/bluepocket.svg';
import bpHome from '../assets/apps/bluepocket/home-dark.png';
import bpAdd from '../assets/apps/bluepocket/add-dark.png';
import bpSettingsLight from '../assets/apps/bluepocket/settings-light.png';
import bpSettingsDark from '../assets/apps/bluepocket/settings-dark.png';

export type AppId = 'blue-pdf' | 'bluepocket';

export interface AppFeature {
  icon: LucideIcon;
  title: string;
  body: string;
}

export interface AppSpec {
  label: string;
  value: string;
  mono?: boolean;
}

export interface AppInfo {
  id: AppId;
  name: string;
  numeral: string;
  category: string;
  tagline: string;
  summary: string;
  icon: string;
  iconOnDark: boolean;
  packageId: string;
  playUrl: string;
  sourceUrl?: string;
  highlights: string[];
  features: AppFeature[];
  privacy: string[];
  specs: AppSpec[];
  screenshots: { src: string; alt: string }[];
}

const playUrl = (packageId: string) => `https://play.google.com/store/apps/details?id=${packageId}`;

export const apps: AppInfo[] = [
  {
    id: 'blue-pdf',
    name: 'BLUE PDF',
    numeral: 'I',
    category: 'Productivity',
    tagline: 'Fast, private PDF tools for Android.',
    summary:
      'Merge, split, reorder, protect and create PDFs on your phone, powered by the MuPDF engine. Everything runs on the device: no uploads, no accounts, no internet permission.',
    icon: bluePdfIcon,
    iconOnDark: false,
    packageId: 'com.bluepdf.blue_pdf',
    playUrl: playUrl('com.bluepdf.blue_pdf'),
    sourceUrl: 'https://github.com/The-Blue-Citadel/blue_pdf',
    highlights: ['No internet permission', 'Native MuPDF engine', 'Open source'],
    features: [
      {
        icon: Merge,
        title: 'Merge PDF',
        body: 'Combine any number of PDFs, including password-protected ones, keeping links and annotations.',
      },
      {
        icon: Scissors,
        title: 'Split PDF',
        body: 'Extract pages or ranges such as 1-3, 7, 10-12 into a new document.',
      },
      {
        icon: ListOrdered,
        title: 'Reorder PDF',
        body: 'Drag and rotate pages in a thumbnail grid that stays smooth on 300+ page documents.',
      },
      {
        icon: Lock,
        title: 'Protect PDF',
        body: 'Encrypt any PDF with a password using AES-256.',
      },
      {
        icon: Images,
        title: 'Image to PDF',
        body: 'Turn JPG, PNG, GIF, BMP, TIFF, HEIC and WebP photos into a PDF, respecting camera orientation.',
      },
      {
        icon: Camera,
        title: 'Camera',
        body: 'Capture pages, then crop, rotate or annotate them in the built-in editor before converting.',
      },
      {
        icon: Gauge,
        title: 'Built for speed',
        body: 'Every operation runs in native C++ on MuPDF, off the UI thread. Pages are copied, not re-rendered, so output keeps its quality.',
      },
      {
        icon: RefreshCw,
        title: 'Real progress',
        body: 'Large jobs report exactly where they are ("Copying page 120 of 330") and cancel instantly, cleaning up after themselves.',
      },
    ],
    privacy: [
      'Files never leave your device.',
      'Ships without the INTERNET permission.',
      'No analytics, no ads, no accounts.',
      'Camera is the only runtime permission.',
    ],
    specs: [
      { label: 'Platform', value: 'Android 7.0+' },
      { label: 'Engine', value: 'MuPDF 1.27, native C++' },
      { label: 'Built with', value: 'Flutter, Kotlin, C++' },
      { label: 'Network access', value: 'None' },
      { label: 'License', value: 'AGPL-3.0' },
      { label: 'Package', value: 'com.bluepdf.blue_pdf', mono: true },
    ],
    screenshots: [],
  },
  {
    id: 'bluepocket',
    name: 'BluePocket',
    numeral: 'II',
    category: 'Finance',
    tagline: 'A calm, offline-first expense tracker.',
    summary:
      'Log what you spend and receive in a couple of taps, remember who you paid, and keep a receipt photo with it. Your ledger stays on your phone, and shared Groups are there when you want them.',
    icon: bluePocketIcon,
    iconOnDark: true,
    packageId: 'com.thebluecompany.bluepocket',
    playUrl: playUrl('com.thebluecompany.bluepocket'),
    highlights: ['Works offline', 'On-device ledger', 'No ads, nothing sold'],
    features: [
      {
        icon: Wallet,
        title: 'Fast entry',
        body: 'One sheet for Spent or Received, with a big keypad. Each payee remembers its category.',
      },
      {
        icon: Receipt,
        title: 'Your ledger',
        body: 'Grouped by day with a month switcher, search across payees, notes and amounts, and undo everywhere.',
      },
      {
        icon: ChartColumn,
        title: 'Analysis',
        body: 'Week, month and year trends, category breakdowns, top payees and fair period comparisons.',
      },
      {
        icon: MessageSquareText,
        title: 'Auto-add from bank texts',
        body: 'Optional. New bank, card, UPI and wallet alerts become entries, parsed entirely on your phone.',
      },
      {
        icon: Users,
        title: 'Groups',
        body: 'Split shared costs with friends. The only online feature, and only if you sign in.',
      },
    ],
    privacy: [
      'Your personal ledger never leaves the phone.',
      'SMS import is off by default and never reads your inbox.',
      'Sign-in is optional, only for Groups.',
      'No ads, no analytics, nothing sold.',
    ],
    specs: [
      { label: 'Platform', value: 'Android 7.0+' },
      { label: 'Storage', value: 'SQLite, on-device' },
      { label: 'Built with', value: 'Flutter, Kotlin' },
      { label: 'Online features', value: 'Groups (optional)' },
      { label: 'Themes', value: 'Pocket and Midnight' },
      { label: 'Package', value: 'com.thebluecompany.bluepocket', mono: true },
    ],
    screenshots: [
      { src: bpHome, alt: 'BluePocket home screen in the Midnight theme' },
      { src: bpAdd, alt: 'Adding an expense in BluePocket' },
      { src: bpSettingsLight, alt: 'BluePocket settings in the Pocket theme' },
      { src: bpSettingsDark, alt: 'BluePocket settings in the Midnight theme' },
    ],
  },
];

export const getApp = (id: AppId) => apps.find((app) => app.id === id)!;
