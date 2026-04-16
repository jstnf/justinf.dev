# Deferred Dependency Upgrades Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade TypeScript 5→6, Next.js 15→16, ESLint 9→10 (with `eslint-plugin-import-x`), and Tailwind CSS 3→4 to put the codebase on current, actively maintained versions across all tools.

**Architecture:** Sequential — TypeScript first (trivial, independent), then Next.js 16 (ties to eslint-config-next), then ESLint v10 (swaps import plugin, builds on Next 16 install), then Tailwind v4 (largest change, fully independent of the others). Each task ends with a dev server browser check before committing.

**Tech Stack:** TypeScript 6, Next.js 16, ESLint 10, eslint-plugin-import-x, Tailwind CSS 4, @tailwindcss/postcss, prettier-plugin-tailwindcss 0.7.x

---

### Task 1: Upgrade TypeScript 5 → 6

**Files:**
- Modify: `justinf.dev/package.json`
- Modify: `justinf.dev/package-lock.json` (auto)

- [ ] **Step 1: Install TypeScript 6**

```bash
cd /Users/jusfigueroa/dev/justinf.dev/justinf.dev && npm install --save-dev typescript@latest
```

Expected: `typescript@6.x` installed.

- [ ] **Step 2: Run TypeScript check**

```bash
npx tsc --noEmit
```

Expected: 0 errors. TypeScript 6 has no breaking API changes for application code — if errors appear, read the file and fix them. Do not use `any` or `@ts-ignore`.

- [ ] **Step 3: Run lint**

```bash
npm run lint
```

Expected: clean.

- [ ] **Step 4: Start dev server and verify in browser**

```bash
npm run dev
```

Open `http://localhost:3000`. Verify all routes render and carousel/transitions work. Stop the server.

- [ ] **Step 5: Commit**

```bash
cd /Users/jusfigueroa/dev/justinf.dev
git add justinf.dev/package.json justinf.dev/package-lock.json
git commit -m "chore: upgrade TypeScript 5 → 6"
```

---

### Task 2: Upgrade Next.js 15 → 16

**Files:**
- Modify: `justinf.dev/package.json`
- Modify: `justinf.dev/package-lock.json` (auto)
- Possibly modify: `justinf.dev/package.json` scripts (if `next lint` is removed in v16)

- [ ] **Step 1: Install Next.js 16**

```bash
cd /Users/jusfigueroa/dev/justinf.dev/justinf.dev && npm install next@latest eslint-config-next@latest
```

Expected: `next@16.x`, `eslint-config-next@16.x` installed.

- [ ] **Step 2: Run the Next.js codemod**

```bash
npx @next/codemod@latest upgrade latest --yes
```

This catches any async API changes between v15 and v16. Review the diff if it changes anything.

- [ ] **Step 3: Check if `next lint` still works**

```bash
npm run lint
```

If this fails with an error like `"next lint" has been removed`, update the `lint` script in `justinf.dev/package.json`:

```json
"lint": "eslint ."
```

Then re-run `npm run lint` and confirm it passes.

- [ ] **Step 4: Run TypeScript check**

```bash
npx tsc --noEmit
```

Expected: 0 errors. Fix any that appear before proceeding.

- [ ] **Step 5: Run production build**

```bash
npm run build
```

Expected: clean build. Fix any errors before proceeding.

- [ ] **Step 6: Start dev server and verify in browser**

```bash
npm run dev
```

Open `http://localhost:3000`. Check all routes, carousel, page transitions. Stop the server.

- [ ] **Step 7: Commit**

```bash
cd /Users/jusfigueroa/dev/justinf.dev
git add justinf.dev/package.json justinf.dev/package-lock.json
git commit -m "feat: upgrade Next.js 15 → 16"
```

---

### Task 3: Upgrade ESLint 9 → 10 (swap eslint-plugin-import → eslint-plugin-import-x)

`eslint-plugin-import` v2 does not support ESLint v10. `eslint-plugin-import-x` is the actively maintained fork with native flat config support and ESLint v10 compatibility. The rule prefix changes from `import/` to `import-x/`.

**Files:**
- Modify: `justinf.dev/package.json`
- Modify: `justinf.dev/eslint.config.mjs`
- Modify: `justinf.dev/package-lock.json` (auto)

- [ ] **Step 1: Check if eslint-config-next@16 supports ESLint v10**

```bash
cd /Users/jusfigueroa/dev/justinf.dev/justinf.dev && npm info eslint-config-next peerDependencies
```

If the output does NOT include `"eslint": ">=10"` or `"eslint": "^10"`, stop and report DONE_WITH_CONCERNS — do not force ESLint v10. If it does support v10, proceed.

- [ ] **Step 2: Install ESLint v10 and swap import plugin**

```bash
npm install --save-dev eslint@latest eslint-plugin-import-x@latest eslint-config-prettier@latest eslint-plugin-prettier@latest
npm uninstall eslint-plugin-import
```

Expected: `eslint@10.x`, `eslint-plugin-import-x@latest` installed, `eslint-plugin-import` removed.

- [ ] **Step 3: Update eslint.config.mjs**

Read the current file first, then replace it entirely with:

```js
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import importX from 'eslint-plugin-import-x';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  importX.flatConfigs.recommended,
  ...compat.extends('plugin:prettier/recommended'),
  {
    rules: {
      'import-x/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          pathGroups: [{ pattern: 'react', group: 'external', position: 'before' }],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
];
```

Key changes from the previous config:
- Added `import importX from 'eslint-plugin-import-x'`
- Replaced `compat.extends('plugin:import/recommended')` with `importX.flatConfigs.recommended` (native flat config, no FlatCompat needed)
- Renamed rule key from `import/order` → `import-x/order`

- [ ] **Step 4: Run lint**

```bash
npm run lint
```

Expected: clean. If errors appear in source files due to changed rule behavior, read each file and fix the actual import order — do not suppress rules.

- [ ] **Step 5: Start dev server and verify in browser**

```bash
npm run dev
```

Confirm app still starts cleanly. Stop the server.

- [ ] **Step 6: Commit**

```bash
cd /Users/jusfigueroa/dev/justinf.dev
git add justinf.dev/package.json justinf.dev/package-lock.json justinf.dev/eslint.config.mjs
git commit -m "chore: upgrade ESLint 9 → 10, swap eslint-plugin-import for eslint-plugin-import-x"
```

---

### Task 4: Upgrade Tailwind CSS 3 → 4

Tailwind v4 is a CSS-first rewrite. Key changes:
- `@tailwind base/components/utilities` directives → `@import "tailwindcss"`
- `tailwind.config.ts` is deleted — config moves to `@theme {}` in CSS
- PostCSS plugin moves from `tailwindcss` to `@tailwindcss/postcss` (separate package)
- Custom font utilities: `font-futuraBold` (camelCase v3) → `font-futura-bold` (kebab v4)
- `next/font` CSS variable names must be renamed to avoid circular self-reference in `@theme`

**Files:**
- Modify: `justinf.dev/src/app/globals.css`
- Modify: `justinf.dev/src/app/layout.tsx`
- Modify: `justinf.dev/src/components/MetroSign.tsx`
- Modify: `justinf.dev/src/components/MetroStandaloneEmblem.tsx`
- Modify: `justinf.dev/postcss.config.mjs`
- Modify: `justinf.dev/package.json`
- Delete: `justinf.dev/tailwind.config.ts`

- [ ] **Step 1: Install Tailwind v4 packages**

```bash
cd /Users/jusfigueroa/dev/justinf.dev/justinf.dev && npm install --save-dev tailwindcss@latest @tailwindcss/postcss prettier-plugin-tailwindcss@latest
```

Expected: `tailwindcss@4.x`, `@tailwindcss/postcss` (new package), `prettier-plugin-tailwindcss@0.7.x` installed.

- [ ] **Step 2: Update postcss.config.mjs**

Read the current file, then replace with:

```js
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};

export default config;
```

- [ ] **Step 3: Rename next/font CSS variables in layout.tsx to avoid circular reference**

Read `src/app/layout.tsx`, then update the `variable` fields:

```tsx
const frutiger = localFont({
  src: [
    {
      path: "../../public/fonts/Frutiger.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Frutiger_bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-frutiger-src",
});

const futuraBold = localFont({
  src: [
    {
      path: "../../public/fonts/Futura_Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-futura-bold-src",
});
```

All other lines in layout.tsx remain unchanged.

- [ ] **Step 4: Rewrite globals.css for Tailwind v4**

Replace the entire file:

```css
@import "tailwindcss";

@theme {
  --font-frutiger: var(--font-frutiger-src, sans-serif);
  --font-futura-bold: var(--font-futura-bold-src, sans-serif);
}

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: var(--font-frutiger), sans-serif;
  overflow-x: hidden;
  max-width: 100vw;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

What changed vs the old file:
- `@tailwind base/components/utilities` → `@import "tailwindcss"`
- Added `@theme` block declaring font utilities via the renamed `*-src` variables
- `body { font-family: "Frutiger", sans-serif }` → `font-family: var(--font-frutiger), sans-serif` (uses Tailwind theme var)

- [ ] **Step 5: Rename font-futuraBold → font-futura-bold in MetroSign.tsx**

Read `src/components/MetroSign.tsx`, then replace both occurrences of `font-futuraBold` with `font-futura-bold`:

```tsx
// Line ~60: was font-futuraBold text-2xl font-semibold
className="font-futura-bold text-2xl font-semibold"

// Line ~66: was font-futuraBold text-3xl font-bold
className="font-futura-bold text-3xl font-bold"
```

- [ ] **Step 6: Rename font-futuraBold → font-futura-bold in MetroStandaloneEmblem.tsx**

Read `src/components/MetroStandaloneEmblem.tsx`, then replace:

```tsx
// was: font-futuraBold text-4xl
className="translate-y-0.5 font-futura-bold text-4xl"
```

- [ ] **Step 7: Delete tailwind.config.ts**

```bash
rm /Users/jusfigueroa/dev/justinf.dev/justinf.dev/tailwind.config.ts
```

- [ ] **Step 8: Run TypeScript check**

```bash
cd /Users/jusfigueroa/dev/justinf.dev/justinf.dev && npx tsc --noEmit
```

Expected: 0 errors (tailwind.config.ts deletion may briefly surface if tsc still references it — fix tsconfig.json if needed by removing any explicit include of that file).

- [ ] **Step 9: Run lint**

```bash
npm run lint
```

Expected: clean.

- [ ] **Step 10: Run production build**

```bash
npm run build
```

Expected: clean build. If Tailwind classes fail to generate, check that `@import "tailwindcss"` is being processed by `@tailwindcss/postcss` — verify `postcss.config.mjs` has `'@tailwindcss/postcss': {}` and not the old `tailwindcss: {}`.

- [ ] **Step 11: Start dev server and verify in browser — thorough check**

```bash
npm run dev
```

Open `http://localhost:3000`. Check carefully:
- Fonts render correctly (Frutiger for body text, Futura Bold on metro sign letters and route names)
- Dark mode works (toggle OS dark mode — background/foreground should switch)
- Carousel renders with correct sizing and gap
- All routes: `/`, `/about`, `/blog`, `/contact`, `/works`
- No unstyled/broken layout

Stop the server.

- [ ] **Step 12: Commit**

```bash
cd /Users/jusfigueroa/dev/justinf.dev
git add -A
git commit -m "feat: upgrade Tailwind CSS 3 → 4, migrate to CSS-first config"
```

---

### Task 5: Final verification

- [ ] **Step 1: Full audit**

```bash
cd /Users/jusfigueroa/dev/justinf.dev/justinf.dev && npm audit
```

Expected: 0 high/critical (the 4 Next 15 highs should now be gone with Next 16).

- [ ] **Step 2: Outdated check**

```bash
npm outdated
```

Expected: only patch/minor gaps remain (no major-version stragglers). Note anything unexpected.

- [ ] **Step 3: Production build**

```bash
npm run build
```

Expected: clean.

- [ ] **Step 4: Final browser check on production build**

```bash
npm run start
```

Walk all routes at `http://localhost:3000`. Stop the server.

- [ ] **Step 5: Commit if any changes, otherwise skip**

If nothing changed (audit/outdated produced no fixable items): no commit needed.
