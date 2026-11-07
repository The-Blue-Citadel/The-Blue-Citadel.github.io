import type { LucideIcon } from 'lucide-react';
import {
  ChartColumn,
  Gauge,
  Images,
  ListOrdered,
  Lock,
  Merge,
  MessageSquareText,
  Receipt,
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
  summary: string;
  points: string[];
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
        title: 'Merge',
        summary: 'Combine any number of PDFs into one document.',
        points: [
          'Works with password-protected files',
          'Links and annotations are kept',
          'Pages are copied, never re-rendered, so quality and size are preserved',
        ],
      },
      {
        icon: Scissors,
        title: 'Split',
        summary: 'Pull out exactly the pages you need.',
        points: ['Type ranges such as 1-3, 7, 10-12', 'Saved as a new PDF; the original stays untouched'],
      },
      {
        icon: ListOrdered,
        title: 'Reorder',
        summary: 'Rearrange and rotate pages by hand.',
        points: ['Drag pages in a thumbnail grid', 'Stays smooth on 300+ page documents', 'Rotate any page in place'],
      },
      {
        icon: Lock,
        title: 'Protect',
        summary: 'Lock a PDF behind a password.',
        points: ['AES-256 encryption', 'Passwords are used once and never stored'],
      },
      {
        icon: Images,
        title: 'Image to PDF',
        summary: 'Turn photos and scans into a clean PDF.',
        points: [
          'JPG, PNG, GIF, BMP and TIFF directly; HEIC and WebP converted',
          'Built-in camera with crop, rotate and annotate',
          'Respects camera orientation',
        ],
      },
      {
        icon: Gauge,
        title: 'Native speed',
        summary: 'Heavy lifting in C++, so the app feels instant.',
        points: [
          'Every operation runs on MuPDF, off the UI thread',
          'Real progress ("Copying page 120 of 330") with instant cancel',
          'Results stream to disk, so a 100 MB merge never sits in memory',
        ],
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
        summary: 'Log a payment in a couple of taps.',
        points: [
          'One sheet for Spent or Received, with a big keypad',
          'Each payee remembers its category, so the next entry fills itself in',
          'Add a note, date or receipt photo without crowding the form',
        ],
      },
      {
        icon: Receipt,
        title: 'Ledger',
        summary: 'Every entry, grouped by day.',
        points: [
          'Month switcher with spent, received and net totals',
          'Search by payee, note, receipt text or amount',
          'Swipe to delete or open details, with undo on everything',
        ],
      },
      {
        icon: ChartColumn,
        title: 'Analysis',
        summary: 'See where the money actually went.',
        points: [
          'Week, month and year views with trend charts',
          'Fair comparisons: a running month against the same days of the last',
          'Category breakdown, top payees and quick insights',
        ],
      },
      {
        icon: MessageSquareText,
        title: 'Bank texts',
        summary: 'New bank alerts become entries automatically.',
        points: [
          'Off by default, and switched on only with your consent',
          'Banks, cards, UPI and wallets in formats worldwide',
          'Read on the phone as they arrive; your inbox is never opened',
        ],
      },
      {
        icon: Users,
        title: 'Groups',
        summary: 'Split shared costs with friends.',
        points: ['The only online feature', 'Needs an optional Google sign-in', 'Only members can see a group'],
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
