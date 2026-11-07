import type { AppId } from '../apps';
import { bluePdfPrivacy } from './bluePdfPrivacy';
import { bluePocketDeletion } from './bluePocketDeletion';
import { bluePocketPrivacy } from './bluePocketPrivacy';
import type { PolicyDocument } from './types';

export type { PolicyDocument, PolicyKind, PolicySection } from './types';

export const policies: PolicyDocument[] = [bluePdfPrivacy, bluePocketPrivacy, bluePocketDeletion];

export const policiesFor = (appId: AppId) => policies.filter((policy) => policy.appId === appId);

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
