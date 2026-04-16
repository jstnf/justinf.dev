# Dependency Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade justinf.dev from Next.js 14/React 18 to Next.js 15/React 19 with security patches, verifying the dev server in-browser after each step.

**Architecture:** Sequential upgrade — security fixes first, then minor patches, then major version bumps (Next 15 + React 19 together since they're tightly coupled), then ESLint v9. Each step ends with a dev server check.

**Tech Stack:** Next.js 15, React 19, TypeScript 5, Tailwind CSS 3, @react-spring/web 10, ESLint 9, Prettier 3

---

### Task 1: Fix security vulnerabilities

**Files:**
- Modify: `justinf.dev/package.json` (via npm audit fix)
- Modify: `justinf.dev/package-lock.json` (auto)

- [ ] **Step 1: Run audit fix**

```bash
cd /Users/jusfigueroa/dev/justinf.dev/justinf.dev && npm audit fix
```

Expected: output listing resolved vulnerabilities, no breaking changes.

- [ ] **Step 2: Confirm audit result**

```bash
npm audit --audit-level=high
```

Expected: 0 high/critical vulnerabilities remaining (moderate is acceptable at this step).

- [ ] **Step 3: Start dev server and verify in browser**

```bash
npm run dev
```

Open `http://localhost:3000` — all routes (`/`, `/about`, `/blog`, `/contact`, `/works`) should render. Check that the carousel and page transitions work.

- [ ] **Step 4: Commit**

```bash
git add justinf.dev/package.json justinf.dev/package-lock.json
git commit -m "chore: npm audit fix - resolve high/critical vulnerabilities"
```

---

### Task 2: Upgrade patch/minor dependencies (safe bumps)

These packages have no breaking changes between current and latest within the ranges already in `package.json`. We bump them explicitly so the lockfile is up to date.

**Files:**
- Modify: `justinf.dev/package.json`
- Modify: `justinf.dev/package-lock.json` (auto)

- [ ] **Step 1: Update patch/minor-safe packages**

```bash
cd /Users/jusfigueroa/dev/justinf.dev/justinf.dev && npm update
```

This respects the semver ranges in `package.json` and brings all packages to their latest compatible version (e.g., `postcss` 8.5.x, `prettier` 3.8.x, `next-view-transitions` 0.3.5, `eslint-plugin-import` 2.32.0, `eslint-plugin-prettier` 5.5.5, `eslint-config-prettier` 9.1.2).

- [ ] **Step 2: Confirm nothing is stale within ranges**

```bash
npm outdated
```

Expected: Only packages with *major* version jumps remain listed (next, react, eslint, @types/react, etc.). Patch/minor rows should be gone or show `Current == Wanted`.

- [ ] **Step 3: Run lint**

```bash
npm run lint
```

Expected: No new lint errors introduced by the updated packages.

- [ ] **Step 4: Start dev server and verify in browser**

```bash
npm run dev
```

Open `http://localhost:3000` and check all pages and the carousel again.

- [ ] **Step 5: Commit**

```bash
git add justinf.dev/package.json justinf.dev/package-lock.json
git commit -m "chore: npm update - bump patch/minor deps to latest compatible"
```

---

### Task 3: Upgrade Next.js 14 → 15 and React 18 → 19

These two upgrades are done together because Next.js 15 requires React 19. The main breaking changes to watch for:
- `next/headers`, `next/cookies` — now return Promises (async APIs)
- `params` and `searchParams` in page/layout props are now Promises
- `<Link>` no longer requires a nested `<a>` tag (already true in v13+, so likely fine)
- React 19: removes deprecated APIs (`defaultProps` on function components, `string` refs, etc.)
- `@react-spring/web` v9 → v10 has breaking API changes (see Task 4)

**Files:**
- Modify: `justinf.dev/package.json`
- Modify: `justinf.dev/package-lock.json` (auto)
- Potentially modify: `justinf.dev/src/app/layout.tsx`
- Potentially modify: `justinf.dev/src/app/page.tsx`
- Potentially modify: each route's `page.tsx` under `src/app/`

- [ ] **Step 1: Install Next.js 15 and React 19**

```bash
cd /Users/jusfigueroa/dev/justinf.dev/justinf.dev && npm install next@latest react@latest react-dom@latest eslint-config-next@latest
```

Expected: `next@15.x`, `react@19.x`, `react-dom@19.x`, `eslint-config-next@15.x` installed.

- [ ] **Step 2: Run the Next.js codemod for async request APIs**

```bash
npx @next/codemod@latest upgrade latest
```

This automatically converts `params`/`searchParams`/`headers`/`cookies` usages to async where needed.

- [ ] **Step 3: Update @types/react and @types/react-dom**

```bash
npm install --save-dev @types/react@latest @types/react-dom@latest
```

Expected: `@types/react@19.x`, `@types/react-dom@19.x`.

- [ ] **Step 4: Check TypeScript compiles**

```bash
npx tsc --noEmit
```

Fix any type errors before proceeding. Common React 19 type changes:
- `React.FC` no longer implicitly includes `children` — add `children: React.ReactNode` to props if needed.
- `ref` is now a regular prop (no `forwardRef` needed).

If errors appear in `src/app/layout.tsx` or route pages, inspect the file and update prop types as needed.

- [ ] **Step 5: Run lint**

```bash
npm run lint
```

Fix any lint errors. The `eslint-config-next` upgrade may surface new rules.

- [ ] **Step 6: Build check**

```bash
npm run build
```

Expected: successful production build with no errors. Address any build-time errors before the browser check.

- [ ] **Step 7: Start dev server and verify in browser**

```bash
npm run dev
```

Check all routes: `/`, `/about`, `/blog`, `/contact`, `/works`. Verify:
- Page transitions (next-view-transitions) still work
- Carousel scrolling and highlighting works
- Dark mode renders correctly (logo should not change)
- No console errors in the browser dev tools

- [ ] **Step 8: Commit**

```bash
git add justinf.dev/package.json justinf.dev/package-lock.json justinf.dev/src/
git commit -m "feat: upgrade Next.js 14 → 15 and React 18 → 19"
```

---

### Task 4: Upgrade @react-spring/web v9 → v10

`@react-spring/web` v10 has breaking changes — the public API was restructured. The main changes:
- `useSpring` return type changed: `[props, api]` tuple API is now `api` object only (or use `useSpringRef`)
- `animated` import path unchanged
- `config` presets are still available

**Files:**
- Modify: `justinf.dev/package.json`
- Modify: `justinf.dev/src/components/carousel/MetroSignCarousel.tsx`
- Modify: `justinf.dev/src/components/FloatingHeaderText.tsx`
- Modify: `justinf.dev/src/components/MetroSign.tsx`

- [ ] **Step 1: Install @react-spring/web v10**

```bash
cd /Users/jusfigueroa/dev/justinf.dev/justinf.dev && npm install @react-spring/web@latest
```

- [ ] **Step 2: Check TypeScript for breakage**

```bash
npx tsc --noEmit
```

Note every file with errors — those are the components that used v9 APIs that changed.

- [ ] **Step 3: Read each flagged component and fix the API usage**

Read each file reported in Step 2. The most common v10 migration:

**Before (v9):**
```tsx
const [springs, api] = useSpring(() => ({ opacity: 0 }));
```

**After (v10):**
```tsx
const springs = useSpring({ opacity: 0 });
// or for imperative control:
const [springs, api] = useSpring(() => ({ opacity: 0 })); // still works in v10
```

Check the [react-spring v10 migration guide](https://react-spring.dev/docs/guides/migration-guide) if unfamiliar with specific changes. Apply fixes to each component.

- [ ] **Step 4: TypeScript check passes**

```bash
npx tsc --noEmit
```

Expected: 0 errors.

- [ ] **Step 5: Run lint**

```bash
npm run lint
```

Expected: 0 errors.

- [ ] **Step 6: Start dev server and verify animations in browser**

```bash
npm run dev
```

Focus on animation-heavy areas:
- Home page entrance animation
- Carousel scroll and highlight transitions
- Page transitions between routes
- Any hover effects using spring animations

- [ ] **Step 7: Commit**

```bash
git add justinf.dev/package.json justinf.dev/package-lock.json justinf.dev/src/
git commit -m "feat: upgrade @react-spring/web v9 → v10"
```

---

### Task 5: Upgrade ESLint v8 → v9 (flat config)

ESLint v9 dropped support for `.eslintrc.json` in favor of `eslint.config.js` (flat config). The existing plugins (`eslint-plugin-import`, `eslint-plugin-prettier`, `eslint-config-next`) must all have v9-compatible versions.

**Files:**
- Delete: `justinf.dev/.eslintrc.json`
- Create: `justinf.dev/eslint.config.js`
- Modify: `justinf.dev/package.json`

- [ ] **Step 1: Install ESLint v9 and compatible plugins**

```bash
cd /Users/jusfigueroa/dev/justinf.dev/justinf.dev && npm install --save-dev eslint@latest
```

- [ ] **Step 2: Check if eslint-config-next supports ESLint v9**

```bash
npm info eslint-config-next peerDependencies
```

If `eslint-config-next` does not yet list ESLint v9 as a peer, stay on ESLint v8 for now and note this in a comment — forcing v9 here may break Next.js's lint integration. If it does support v9, proceed.

- [ ] **Step 3: Create flat config (if proceeding with v9)**

Delete the old config:
```bash
rm justinf.dev/.eslintrc.json
```

Create `justinf.dev/eslint.config.js`:
```js
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...compat.extends('plugin:import/recommended'),
  ...compat.extends('plugin:prettier/recommended'),
  {
    rules: {
      'import/order': [
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

- [ ] **Step 4: Run lint**

```bash
npm run lint
```

Expected: same lint output as before (no regressions, same rules enforced). Fix any issues.

- [ ] **Step 5: Start dev server and verify in browser**

```bash
npm run dev
```

Confirm app still works after the ESLint config change (this doesn't affect runtime, but a quick sanity check is fast).

- [ ] **Step 6: Commit**

```bash
git add justinf.dev/eslint.config.js justinf.dev/package.json justinf.dev/package-lock.json
git commit -m "chore: upgrade ESLint v8 → v9, migrate to flat config"
```

---

### Task 6: Final audit and cleanup

- [ ] **Step 1: Full audit check**

```bash
cd /Users/jusfigueroa/dev/justinf.dev/justinf.dev && npm audit
```

Expected: 0 high/critical. Note any remaining moderate issues.

- [ ] **Step 2: Final outdated check**

```bash
npm outdated
```

Note any remaining packages that could not be upgraded (e.g., if ESLint v9 was skipped). These are acceptable to leave with a comment.

- [ ] **Step 3: Production build**

```bash
npm run build
```

Expected: clean build with no errors or warnings.

- [ ] **Step 4: Final browser check**

```bash
npm run start
```

Open `http://localhost:3000` on the production build. Walk through all routes one final time.

- [ ] **Step 5: Final commit**

```bash
git add .
git commit -m "chore: final dependency upgrade cleanup and audit"
```
