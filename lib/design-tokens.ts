// Design tokens for B2Beat
// Canopy-inspired: near-black dark theme, royal blue accent, purple gradients

export const colors = {
  background: {
    DEFAULT: '#FFFFFF',
    dark: '#0A0A0A',
    soft: '#FAFAFA',
    surface: '#F4F4F5',
    darkSurface: '#141414',
    darkSurfaceAlt: '#1A1A1A',
  },
  foreground: {
    DEFAULT: '#111111',
    onDark: '#FFFFFF',
    muted: '#6B7280',
    onDarkMuted: '#9CA3AF',
    subtle: '#A1A1AA',
    inverse: '#FFFFFF',
  },
  border: {
    DEFAULT: '#E5E5E5',
    strong: '#D4D4D4',
    onDark: '#262626',
    onDarkStrong: '#333333',
  },
  brand: {
    DEFAULT: '#4F46E5',
    hover: '#4338CA',
    pressed: '#3730A3',
    surface: '#EEF2FF',
    surfaceDark: '#1E1B4B',
    border: '#C7D2FE',
  },
  accent: {
    purple: '#7C3AED',
    purpleLight: '#A855F7',
    lime: '#D9F99D',
    yellow: '#FACC15',
  },
  success: {
    DEFAULT: '#10B981',
    surface: '#ECFDF5',
  },
  critical: {
    DEFAULT: '#EF4444',
    surface: '#FEF2F2',
  },
} as const;

export const typography = {
  fontFamily: {
    sans: 'var(--font-geist-sans), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'var(--font-geist-mono), "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '17px',
    lg: '19px',
    xl: '22px',
    '2xl': '28px',
    '3xl': '36px',
    '4xl': '44px',
    '5xl': '56px',
    '6xl': '72px',
  },
  lineHeight: {
    tight: '1.05',
    snug: '1.2',
    normal: '1.5',
    relaxed: '1.6',
  },
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.08em',
  },
} as const;

export const spacing = {
  0: '0',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
  36: '144px',
} as const;

export const radii = {
  sm: '6px',
  md: '10px',
  lg: '16px',
  xl: '20px',
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.04)',
  md: '0 4px 12px rgba(0, 0, 0, 0.06)',
  lg: '0 12px 32px rgba(0, 0, 0, 0.08)',
  card: '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.03)',
  cardHover: '0 8px 24px rgba(0, 0, 0, 0.08)',
} as const;

export const maxWidth = {
  content: '1240px',
  narrow: '880px',
} as const;
