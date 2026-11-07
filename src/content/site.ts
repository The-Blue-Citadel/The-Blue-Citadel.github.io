export const site = {
  name: 'The Blue Citadel',
  tagline: 'Software built like a fortress.',
  description:
    'The Blue Citadel is an independent developer brand building calm, private Android apps. Your data stays inside the walls, on your device.',
  founded: 2026,
  owner: 'Ayushman Pal',
  email: 'payushman72@gmail.com',
  github: 'https://github.com/The-Blue-Citadel',
  githubHandle: 'The-Blue-Citadel',
} as const;

export const mailto = (subject?: string) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
