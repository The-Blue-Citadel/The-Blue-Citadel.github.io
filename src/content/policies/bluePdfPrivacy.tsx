import { mailto, site } from '../site';
import type { PolicyDocument } from './types';

export const bluePdfPrivacy: PolicyDocument = {
  id: 'blue-pdf-privacy',
  path: '/privacy/blue-pdf',
  appId: 'blue-pdf',
  kind: 'privacy',
  title: 'Privacy Policy',
  updated: '2026-10-31',
  description:
    'How BLUE PDF handles your data: every file is processed on your device, with no internet permission, accounts, ads or analytics.',
  lead: (
    <>
      BLUE PDF works entirely offline. Every PDF and image you open is processed on your phone, and the app does not
      even have permission to use the internet. We never see your files, your usage, or who you are.
    </>
  ),
  highlights: ['Works offline', 'No internet permission', 'No ads', 'No analytics', 'No accounts'],
  sections: [
    {
      id: 'who-we-are',
      title: 'Who we are',
      body: (
        <p>
          BLUE PDF is developed and published on Google Play by {site.name}, the independent developer brand of{' '}
          {site.owner}. Questions about this policy can be sent to <a href={mailto('BLUE PDF Privacy')}>{site.email}</a>.
        </p>
      ),
    },
    {
      id: 'on-device',
      title: 'Your files stay on your device',
      body: (
        <>
          <p>
            Every PDF and image you open is processed on your phone by the app's built-in PDF engine (MuPDF). Nothing is
            uploaded to us or to anyone else.
          </p>
          <p>
            The app ships without Android's <code>INTERNET</code> permission, so it is technically unable to send your
            files, or anything else, over the network.
          </p>
        </>
      ),
    },
    {
      id: 'data-we-collect',
      title: 'Data we collect',
      body: (
        <>
          <p>
            <strong>None.</strong> There are no accounts, ads, analytics, crash reporters or tracking libraries in BLUE PDF.
            We do not collect, store, sell or share any personal or usage data.
          </p>
        </>
      ),
    },
    {
      id: 'passwords',
      title: 'Passwords',
      body: (
        <p>
          Passwords you enter to protect or unlock a PDF are used only for that file, and only while it is being
          processed. They are never stored, logged or shared.
        </p>
      ),
    },
    {
      id: 'camera',
      title: 'Camera',
      body: (
        <p>
          The camera is the only permission the app asks for, and only when you choose to capture a page. Photos you take
          are used to build your PDF and nothing else. You can deny or revoke the permission at any time in Android
          settings; every other tool keeps working.
        </p>
      ),
    },
    {
      id: 'files',
      title: 'Files you open and save',
      body: (
        <ul>
          <li>Files are opened through Android's system file picker, so the app can see only what you select.</li>
          <li>
            Results are saved to <code>Download/BLUE PDF</code> or a folder you choose. They remain yours, and stay on your
            device after you uninstall the app.
          </li>
          <li>Temporary working copies are kept in the app's private storage and deleted automatically.</li>
          <li>On Android 10 and later, saving uses MediaStore and the system picker, so no storage permission is needed.</li>
        </ul>
      ),
    },
    {
      id: 'google-play',
      title: 'Google Play',
      body: (
        <p>
          Update notices and the rating prompt are provided by Google Play. Your rating goes to Google, not to the app.
          Google Play may share anonymous crash and performance statistics with developers, as it does for every app,
          under{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
            Google's Privacy Policy
          </a>
          .
        </p>
      ),
    },
    {
      id: 'children',
      title: 'Children',
      body: (
        <p>
          BLUE PDF does not collect personal information from anyone, including children. It can be used safely by people
          of any age.
        </p>
      ),
    },
    {
      id: 'changes',
      title: 'Changes to this policy',
      body: (
        <p>
          If anything here changes, this page and the policy inside the app will be updated, with a new date at the top.
        </p>
      ),
    },
    {
      id: 'contact',
      title: 'Contact',
      body: (
        <p>
          For any question about privacy in BLUE PDF, write to <a href={mailto('BLUE PDF Privacy')}>{site.email}</a>.
        </p>
      ),
    },
  ],
};
