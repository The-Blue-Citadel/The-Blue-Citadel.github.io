import { Link } from 'react-router';
import { mailto, site } from '../site';
import type { PolicyDocument } from './types';

export const bluePocketPrivacy: PolicyDocument = {
  id: 'bluepocket-privacy',
  path: '/privacy/bluepocket',
  appId: 'bluepocket',
  kind: 'privacy',
  title: 'Privacy Policy',
  updated: '2026-11-06',
  description:
    'How BluePocket handles your data: your personal expenses stay on your phone, and only what you choose to share in Groups is stored online.',
  lead: (
    <>
      BluePocket is built to keep your money private. Your personal expenses never leave your phone. Only the things you
      choose to share in Groups are stored online.
    </>
  ),
  highlights: ['Works offline', 'No ads', 'No tracking', 'Nothing sold'],
  sections: [
    {
      id: 'who-we-are',
      title: 'Who we are',
      body: (
        <p>
          BluePocket is made by {site.name}, the independent developer brand of {site.owner}. Questions about this policy
          go to <a href={mailto('BluePocket Privacy')}>{site.email}</a>.
        </p>
      ),
    },
    {
      id: 'on-device',
      title: 'On your phone only',
      body: (
        <ul>
          <li>Your expenses, payees, categories, receipts and settings are stored only on your phone.</li>
          <li>We can't see them, and they aren't uploaded anywhere.</li>
          <li>Uninstalling the app deletes them.</li>
        </ul>
      ),
    },
    {
      id: 'bank-texts',
      title: 'Bank texts (SMS)',
      body: (
        <ul>
          <li>Only if you turn on SMS import, which asks for the Android permission to receive SMS.</li>
          <li>New incoming texts are checked on your phone to spot completed bank and UPI transactions.</li>
          <li>Your inbox is never read, and no text is uploaded or shared.</li>
          <li>You can turn it off anytime in Settings or in Android's app permissions.</li>
        </ul>
      ),
    },
    {
      id: 'google-sign-in',
      title: 'Google sign-in',
      body: (
        <>
          <p>Signing in is optional and only needed for Groups. When you sign in, we receive and store:</p>
          <ul>
            <li>your name, email address and profile photo from your Google account;</li>
            <li>an account id and a friend code, so others can start a shared tab with you.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'groups',
      title: 'Groups',
      body: (
        <ul>
          <li>
            Groups you create or join are stored on Google Firebase: the group name, its members (name and photo), and the
            expenses and payments added to it.
          </li>
          <li>Only members of a group can see it. Your name and photo are shown to the people in your groups.</li>
          <li>
            To prevent abuse, we keep the times of recent actions, like creating groups or adding expenses, for up to a day.
          </li>
        </ul>
      ),
    },
    {
      id: 'notifications',
      title: 'Notifications',
      body: (
        <ul>
          <li>
            To tell you about new expenses and payments in your groups, we store an app installation id for each phone you
            sign in on.
          </li>
          <li>You can mute a group, turn notifications off in Android settings, or sign out to remove it.</li>
        </ul>
      ),
    },
    {
      id: 'processors',
      title: 'Who processes your data',
      body: (
        <p>
          Group data, sign-in and notifications run on Google Firebase (Google Cloud), with servers in the United States.
          Google processes this data on our behalf under its{' '}
          <a href="https://firebase.google.com/terms/data-processing-terms" target="_blank" rel="noreferrer">
            data processing terms
          </a>
          . We don't sell your data, show ads, or share it with anyone else.
        </p>
      ),
    },
    {
      id: 'security',
      title: 'Security',
      body: (
        <ul>
          <li>All data sent to Firebase is encrypted in transit (HTTPS) and at rest.</li>
          <li>Access rules allow only you, and the members of your groups, to read your data.</li>
        </ul>
      ),
    },
    {
      id: 'retention',
      title: 'How long we keep it',
      body: (
        <ul>
          <li>Your account data is kept until you delete your account.</li>
          <li>
            When you delete your account, your profile, friend code, devices and settings are erased right away. Expenses
            you shared in a group stay with that group, because they're part of the other members' records, and you're
            shown as "Deleted user".
          </li>
        </ul>
      ),
    },
    {
      id: 'your-choices',
      title: 'Your choices',
      body: (
        <ul>
          <li>Use BluePocket without signing in. Everything except Groups works offline.</li>
          <li>Leave any group, or sign out, anytime.</li>
          <li>
            Delete your account in the app, or ask us by email. See{' '}
            <Link to="/privacy/bluepocket/delete-account">Delete your account</Link>.
          </li>
          <li>Ask us for a copy of the data we hold about you.</li>
        </ul>
      ),
    },
    {
      id: 'children',
      title: 'Children',
      body: <p>BluePocket isn't meant for children under 13, and we don't knowingly collect their data.</p>,
    },
    {
      id: 'changes',
      title: 'Changes',
      body: <p>If this policy changes, we'll update this page and the date at the top.</p>,
    },
  ],
};
