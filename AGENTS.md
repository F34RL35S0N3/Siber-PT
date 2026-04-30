# AGENTS.md — Architecture & Conventions

## Project Overview

Next.js 14 App Router static site for a technology organization's recruitment portal. Cyberpunk/military-tech aesthetic with neon colors, glassmorphism, and animated canvas effects.

## Directory Structure

```
app/
  layout.tsx       — Root layout with font imports and metadata
  page.tsx         — Home page (client component, imports all sections)
  globals.css      — Tailwind base + custom CSS animations, variables

components/
  CyberGrid.tsx    — Canvas-based animated background (particles + grid)
  Navbar.tsx       — Fixed top nav with scroll detection and live clock
  Hero.tsx         — Full-screen hero with glitch text effect
  About.tsx        — Two-column glassmorphism panels for divisions
  Divisions.tsx    — Tilt-card division showcase with capability bars
  WhyJoin.tsx      — 6-reason benefit grid with scroll reveal
  Gallery.tsx      — Team/gallery placeholder grid
  CTASection.tsx   — Closing recruitment CTA
  Footer.tsx       — Footer with socials and navigation
```

## Key Conventions

### Styling
- **Color palette** defined as CSS variables in `globals.css`: `--cyan`, `--purple`, `--green`, `--dark`
- **Tailwind config** extends theme with `cyber-*` color names, `orbitron`/`exo`/`mono` font families, custom keyframes
- All animations use `transform` and `opacity` only (performance guardrail)
- Glassmorphism uses `.glass-panel` and `.glass-panel-purple` utility classes from globals.css
- Glitch effect on heading text uses `.glitch` class with `::before`/`::after` pseudo-elements

### Components
- All section components are client components (`'use client'`) due to Framer Motion
- `CyberGrid` is dynamically imported with `ssr: false` to avoid hydration issues with Canvas API
- `FadeIn` is a local wrapper around `motion.div` + `useInView` — copy-pasted per file (intentionally not abstracted to a shared component, keeping components self-contained)
- Scroll reveal uses `useInView` with `{ once: true, margin: '-80px' }` pattern

### Animation Philosophy
- Page load: staggered `opacity`/`y` entrance with `delay` increments
- Scroll: `useInView` triggers once per element
- Hover: CSS transitions for glow/border changes; Framer Motion for tilt cards
- Canvas: `requestAnimationFrame` loop in `CyberGrid`, cleaned up on unmount

### Build
- Output: static export (`output: 'export'` in next.config.js → `out/` dir)
- Netlify: `netlify.toml` runs `npm install && npm run build`, publishes `out/`
- Images: `unoptimized: true` for static export compatibility

## Non-Obvious Decisions

- `CyberGrid` uses a Canvas element fixed behind all content (z-index: 0) rather than CSS grid patterns for smoother animation and particle support
- The `TiltCard` component in `Divisions.tsx` uses Framer Motion springs on mouse position for physics-based feel
- `GlitchText` in `Hero.tsx` does character-by-character scramble via `setInterval`, not CSS, for maximum control over timing
- Footer social icons use inline SVG to avoid external icon library dependencies
- Team gallery uses inline SVG placeholders (not `<img>`) to avoid broken image requests
