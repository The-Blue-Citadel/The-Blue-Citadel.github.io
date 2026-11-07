import { Link } from 'react-router';
import { mailto, site } from '../site';
import type { PolicyDocument } from './types';

export const bluePocketDeletion: PolicyDocument = {
  id: 'bluepocket-delete-account',
  path: '/privacy/bluepocket/delete-account',
  appId: 'bluepocket',
  kind: 'deletion',
  title: 'Delete your account',
  updated: '2026-11-06',
  description: 'How to delete your BluePocket account and its data, in the app or by email.',
  lead: <>You can delete your BluePocket account and its data at any time, in the app or by email.</>,
  highlights: ['Deleted immediately in the app', 'By email within 30 days'],
  sections: [
    {
      id: 'in-the-app',
      title: 'In the app',
      body: (
        <ol>
          <li>
            Open BluePocket and go to <strong>Settings</strong>.
          </li>
          <li>
            In your account card, tap <strong>Delete account</strong>.
          </li>
          <li>Confirm. Your account is deleted straight away.</li>
        </ol>
      ),
    },
    {
      id: 'by-email',
      title: 'By email',
      body: (
        <p>
          No longer have the app? Email <a href={mailto('Delete my BluePocket account')}>{site.email}</a> from the Google
          account you signed in with, with the subject "Delete my BluePocket account". We'll delete it within 30 days and
          reply when it's done.
        </p>
      ),
    },
    {
      id: 'whats-deleted',
      title: "What's deleted",
      body: (
        <ul>
          <li>Your profile: name, email address and photo.</li>
          <li>Your friend code and any invite codes you created.</li>
          <li>The phones registered for notifications, and your group settings (muted, archived, read).</li>
          <li>Your sign-in account.</li>
        </ul>
      ),
    },
    {
      id: 'whats-kept',
      title: "What's kept",
      body: (
        <ul>
          <li>
            Expenses and payments you shared in a group stay with that group, because they're part of the other members'
            records. Your name and photo are removed, and you're shown as "Deleted user".
          </li>
          <li>Unsettled balances stay visible to the group, so the others can still record payments with you.</li>
          <li>
            Expenses kept only on your phone aren't stored by us. They stay on the phone until you uninstall the app or
            clear its data.
          </li>
        </ul>
      ),
    },
    {
      id: 'more',
      title: 'More about your data',
      body: (
        <p>
          The <Link to="/privacy/bluepocket">BluePocket Privacy Policy</Link> explains everything we collect, why, and where
          it's kept.
        </p>
      ),
    },
  ],
};
