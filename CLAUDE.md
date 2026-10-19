# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Static export to out/
npm run lint     # ESLint + Prettier checks
```

No test suite is configured.

## Architecture

**Next.js 16 App Router** with TypeScript, Tailwind CSS 4, React Spring, and next-view-transitions.

**Static export** — `output: "export"` in `next.config.mjs`; the site is plain files served by GitHub Pages (`public/CNAME`, `public/.nojekyll`). Keep everything static-export compatible: no API routes, server actions, middleware/proxy, ISR, or the default `next/image` loader.

```
src/
├── app/           # File-based routes (layout.tsx, page.tsx per route)
└── components/    # Shared components
```

Routes: `/`, `/about`, `/blog`, `/contact`, `/works`

## Key Patterns

**Metro/Japanese aesthetic** — the central design theme. Components use kanji/hiragana/romaji bilingual text and metro station sign styling (see `MetroSign.tsx`).

**Animations** — React Spring for component-level animations; `next-view-transitions` + `viewTransitionName` props for cross-page transitions (e.g., `viewTransitionName="logo"` on the logo).

**Client components** — any interactive or animated component uses `"use client"` directive.

**Path alias** — `@/*` maps to `./src/*`.

## Linting & Formatting

ESLint 10 flat config enforces import ordering (`import-x/order`): builtin → external (React first) → internal. Prettier with `prettier-plugin-tailwindcss` auto-sorts Tailwind classes. Run `npm run lint` to check both.
