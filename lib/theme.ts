// Centralized design tokens. Every component below imports these instead of
// hardcoding hex values — change the palette/fonts here once, it propagates
// everywhere. (Kept as plain JS constants rather than Tailwind utility
// classes because the codebase already styles everything via inline `style`
// objects — mixing that with Tailwind color classes would mean two systems
// instead of one. Spacing/sizing stays inline on purpose: a restyle usually
// changes palette and type, not the layout grid.)

export const colors = {
  bg: '#f2f5f8',
  bgSubtle: '#eef1f5',
  surface: '#ffffff',

  navy: '#1a1a2e',
  navyBorder: '#3b4a6b',
  navyMuted: '#8b9cb8',

  sky: '#3b82c4',
  skyDark: '#2563ab',
  skyLight: '#e4eaf2',

  border: '#c8d3e0',

  ink: '#111827',
  inkMuted: '#5a6475',
  inkSubtle: '#6b7280',
  inkFaint: '#9ca3af',
  inkSoft: '#374151',
} as const;

export const fonts = {
  serif: "'Fraunces', serif",
  sans: "'Plus Jakarta Sans', sans-serif",
} as const;

export const shadows = {
  card: '0 2px 16px rgba(26,26,46,0.07)',
  cardHover: '0 8px 28px rgba(26,26,46,0.13)',
  photo: '0 8px 30px rgba(26,26,46,0.12)',
} as const;
