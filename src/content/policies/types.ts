import type { ReactNode } from 'react';
import type { AppId } from '../apps';

export type PolicyKind = 'privacy' | 'deletion';

export interface PolicySection {
  id: string;
  title: string;
  body: ReactNode;
}

export interface PolicyDocument {
  id: string;
  path: string;
  appId: AppId;
  kind: PolicyKind;
  title: string;
  /** ISO date, YYYY-MM-DD */
  updated: string;
  description: string;
  lead: ReactNode;
  highlights: string[];
  sections: PolicySection[];
}
