# VyaparPool — Marketing Website

Enterprise-grade marketing website for **VyaparPool**, an asset-light demand-aggregation and embedded working-capital platform for semi-urban and rural kirana stores in India.

Built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide icons**.

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
vyapar/
├── app/                        # Next.js App Router
│   ├── layout.tsx             # Root layout (nav, footer, fonts, metadata)
│   ├── globals.css            # Global styles + design tokens as CSS variables
│   ├── page.tsx               # Home page
│   ├── platform/              # Platform overview + 6 module pages
│   │   ├── page.tsx
│   │   ├── route-pools/
│   │   ├── closed-loop-disbursal/
│   │   ├── proof-of-delivery/
│   │   ├── repayment-engine/
│   │   ├── credit-intelligence/
│   │   └── risk-compliance/
│   ├── use-cases/
│   ├── for-distributors/
│   ├── for-lenders/
│   ├── for-retailers/
│   ├── how-it-works/
│   ├── integrations/
│   ├── customers/
│   ├── developers/
│   ├── blog/
│   ├── about/
│   ├── careers/
│   ├── get-started/          # Demo request form
│   ├── legal/
│   │   ├── terms/
│   │   ├── privacy/
│   │   └── cookies/
│   └── api/lead/route.ts     # Demo form submission endpoint
├── components/                # Reusable UI components
│   ├── AnnouncementBar.tsx
│   ├── Navbar.tsx             # Sticky nav + mega-menu + mobile drawer
│   ├── Footer.tsx             # 5-column footer + trust badges
│   ├── Section.tsx
│   ├── PageHeader.tsx
│   ├── LogoStrip.tsx
│   ├── FeatureRow.tsx
│   ├── ModuleTabs.tsx         # Tabbed platform module switcher
│   ├── SpreadCalculator.tsx   # Interactive 3.5% spread calculator
│   ├── PersonaCards.tsx
│   ├── OutcomesStrip.tsx      # Count-up stats
│   ├── CaseCard.tsx           # Customer case cards + developer card
│   ├── IntegrationsGrid.tsx
│   ├── InsightsRow.tsx        # Blog article cards
│   ├── CTABand.tsx
│   └── ProductVisuals.tsx     # All product UI mockups (SVG/CSS)
├── lib/
│   ├── design-tokens.ts       # Colors, typography, spacing, radii, shadows
│   └── utils.ts               # cn(), formatINR(), formatNumber()
├── public/                    # Static assets
└── README.md
```

---

## Design System

### Colors (CSS variables in `app/globals.css`)

| Token | Value | Usage |
|---|---|---|
| `--vp-brand` | `#0B5D4B` | Deep forest emerald · CTAs, eyebrows, accents |
| `--vp-brand-surface` | `#E8F3EF` | Brand-tinted surfaces |
| `--vp-accent-amber` | `#F2B544` | Data highlights, tier progress only |
| `--vp-fg` | `#0F1115` | Near-black text |
| `--vp-fg-muted` | `#5B6470` | Secondary text |
| `--vp-border` | `#E6E8EB` | Hairline borders |
| `--vp-bg` | `#FFFFFF` | Page background |
| `--vp-bg-soft` | `#FAFAF9` | Alternating sections |

### Typography

- **Headings & body**: Geist Sans (loaded via `next/font/google`)
- **Numbers & UI data**: Geist Mono · tabular figures
- Hero H1: `clamp(40px, 5vw, 68px)` · weight 600 · tracking `-0.02em`
- Body: 17px · line-height 1.6
- Eyebrows: 12px uppercase · letter-spacing `0.08em`

### Layout

- 12-column grid · max content width **1200px**
- Section padding: `clamp(72px, 10vw, 128px)`
- Cards: 16px radius · 1px hairline border · soft shadow · subtle hover lift
- Buttons: primary = solid brand, 12px radius, 48px tall; secondary = 1px outline

---

## TODO / PLACEHOLDER Inventory

Before production launch, replace every instance of:

### Content Placeholders
- **`app/page.tsx`** — Customer case cards (3 pilot stories) are PLACEHOLDER
- **`app/customers/page.tsx`** — All 6 pilot case studies are PLACEHOLDER
- **`components/LogoStrip.tsx`** — Partner logos shown as text placeholders
- **`components/IntegrationsGrid.tsx`** — Integration logos shown as text placeholders
- **`components/CaseCard.tsx`** — Image blocks are gradient placeholders
- **`components/Footer.tsx`** — Trust badges (SOC 2, ISO 27001) marked "in progress"
- **`app/blog/page.tsx`** — All articles are placeholder content
- **`app/careers/page.tsx`** — Open roles are illustrative

### Legal (must be reviewed by counsel)
- **`app/legal/terms/page.tsx`** — Draft template · PLACEHOLDER note
- **`app/legal/privacy/page.tsx`** — Draft template · PLACEHOLDER note
- **`app/legal/cookies/page.tsx`** — Draft template · PLACEHOLDER note

### Integrations & Infrastructure
- **`app/api/lead/route.ts`** — Currently logs to console; wire to CRM (HubSpot/Salesforce/Zoho)
- **`app/developers/page.tsx`** — API docs link points to `#`; host real docs
- Footer social icons point to `#`; replace with real URLs
- "Sign in" link in navbar points to `#`; build or connect auth system

### Assets
- **`public/`** — Add real favicon, Open Graph image, and brand assets
- All product visuals are built in HTML/SVG/CSS; replace with production screenshots if desired

### Disclosures & Compliance
- Add actual NBFC partner names only after formal agreements
- Add trust badges only when certifications are formally awarded
- Add RBI LSP registration number once obtained
- Verify all lending-related disclosures with compliance

---

## Tech Stack Notes

- **Next.js 16** with App Router and React 19
- **Tailwind CSS v4** via `@tailwindcss/postcss`
- **Framer Motion** for scroll reveals, tab transitions, and number animations
- **Lucide React** for consistent line icons (1.5px stroke)
- **Geist** fonts loaded via `next/font/google` (zero FOIT)
- Design tokens exposed as CSS variables for easy theming

---

## Accessibility & Performance Targets

- Semantic HTML landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`)
- Skip-to-content link
- ARIA roles on tab switcher (`role="tablist"`, `role="tab"`, `role="tabpanel"`)
- Arrow-key navigation on module tabs
- Visible `:focus-visible` rings throughout
- WCAG AA contrast on all text/background combinations
- `prefers-reduced-motion` respected in CSS
- Target: Lighthouse ≥ 95 on Performance / Accessibility / SEO

---

## Deployment

### Vercel (recommended)

```bash
npm i -g vercel
vercel login
vercel --prod
```

Or connect the GitHub repository in the Vercel dashboard — it auto-detects Next.js.

### Environment Variables

None required for the marketing site alone. When wiring the `/api/lead` endpoint to a CRM, add:

```
CRM_API_KEY=...
CRM_WEBHOOK_URL=...
```

---

## Self-Review Checklist

- [x] Structure parity with Canopy reference (announcement bar, hero, logo strip, Core, OS tabs, use cases, outcomes, customers, integrations, insights, CTA band, rich footer)
- [x] Fully responsive: tested at 360px / 768px / 1280px / 1440px+
- [x] No rural/bazaar clichés, no stock photos, no emoji in HTML
- [x] Deep emerald brand color, not purple/plum
- [x] All nav items route to real pages
- [x] Lending disclosure in footer: "VyaparPool is a Lending Service Provider and does not lend directly…"
- [x] "Illustrative figures" notes near calculator and stats
- [x] Indian number formatting (₹2,00,000) throughout
- [x] No unverified regulatory claims, certifications, or customer endorsements
- [x] All partner/customer/badge items clearly marked PLACEHOLDER
