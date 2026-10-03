// Design tokens for VyaparPool
// Central source of truth for colors, typography, spacing, radii, and shadows

export const colors = {
  background: {
    DEFAULT: '#FFFFFF',
    soft: '#FAFAF9',
    surface: '#F7F8F9',
    brand: '#E8F3EF',
  },
  foreground: {
    DEFAULT: '#0F1115',
    muted: '#5B6470',
    subtle: '#8A939E',
    inverse: '#FFFFFF',
  },
  border: {
    DEFAULT: '#E6E8EB',
    strong: '#D4D7DC',
  },
  brand: {
    DEFAULT: '#0B5D4B',
    hover: '#094D3E',
    pressed: '#073D31',
    surface: '#E8F3EF',
    border: '#B8D8CC',
  },
  accent: {
    amber: '#F2B544',
    amberSurface: '#FDF6E7',
  },
  success: {
    DEFAULT: '#1E8E5C',
    surface: '#E6F4EC',
  },
  critical: {
    DEFAULT: '#C83828',
    surface: '#FBECEA',
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
    '6xl': '68px',
  },
  lineHeight: {
    tight: '1.15',
    snug: '1.3',
    normal: '1.5',
    relaxed: '1.6',
  },
  letterSpacing: {
    tight: '-0.02em',
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
} as const;

export const radii = {
  sm: '6px',
  md: '10px',
  lg: '16px',
  xl: '20px',
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 2px rgba(15, 17, 21, 0.04)',
  md: '0 4px 12px rgba(15, 17, 21, 0.06)',
  lg: '0 12px 32px rgba(15, 17, 21, 0.08)',
  card: '0 1px 3px rgba(15, 17, 21, 0.04), 0 1px 2px rgba(15, 17, 21, 0.03)',
  cardHover: '0 8px 24px rgba(15, 17, 21, 0.08)',
} as const;

export const maxWidth = {
  content: '1200px',
  narrow: '880px',
} as const;
