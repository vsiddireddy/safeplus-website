# Prerender safeplus.app for AI crawlers

Goal: ship real HTML text in the file crawlers download, instead of an empty `<div id="root">` shell.

## Tool choice

A **headless-Chrome prerender step inside the existing GitHub Action**, using Puppeteer driven by a small script in the repo — not `react-snap` (unmaintained, Puppeteer-1 era, known crashes on React 18) and not `vite-react-ssg` (would require restructuring routing and every browser-only bit of the page: `localStorage` theme read, `window.scrollTo`, the beehiiv script).

Flow: `vite build` → serve `dist/` locally → Chrome visits each route → wait for React to finish → write the fully-rendered DOM back into that route's `index.html`.

## Which routes get prerendered

The site has one public marketing page plus an app behind login. Only public, indexable content is worth prerendering:

- `/` — the SafePlus landing page (all the real content)
- `404.html` — stays as the SPA fallback copy of `/`

The other routes (`/login`, `/signup`, `/dashboard`, `/clients`, `/proposals`, `/settings`, `/p/:shareId`, …) are auth-gated or dynamic; they render nothing meaningful without a session and shouldn't be indexed. They keep working through the existing SPA fallback. If a privacy policy, pricing, or blog page is added later, it gets added to the route list in the prerender script and picks up its own static file automatically.

Note: there is currently no privacy-policy or blog page in the codebase. If you want those pages to exist and be crawlable, that's separate content work — say the word.

## FAQ accordion content must be in the shipped HTML

Today the FAQ uses a collapsed Radix accordion: only the first answer exists in the DOM, the other five don't render until clicked, so crawlers would see five questions with no answers. Fix: mount all accordion panels always and let CSS handle the visual collapse, so every answer is present in the prerendered HTML while the click-to-expand behaviour stays the same on screen.

## Hydration

Existing markup renders identically on server and client except the theme class, which is already resolved by the inline no-flash script before React mounts. After deploy, check the browser console on safeplus.app for hydration warnings and confirm no content flash.

## Technical details

- Add dev dependencies: `puppeteer`, plus a tiny static server (`sirv-cli`) for the crawl step.
- New file `scripts/prerender.mjs`:
  - route list (`["/"]`) as an exported constant, easy to extend
  - serves `dist/` on a local port, launches Chrome with `--no-sandbox`
  - navigates with `waitUntil: "networkidle0"`, waits for `#root` to have children
  - strips nothing; serializes `document.documentElement.outerHTML` and writes `dist/<route>/index.html`
  - per-route `<title>` / `<meta name="description">` / canonical come from the rendered document, so future routes can set their own head tags
  - exits non-zero if a route renders an empty root, so a broken build fails the deploy loudly
- `package.json`: add `"prerender": "node scripts/prerender.mjs"`.
- `.github/workflows/deploy.yml`: after `npm run build`, run `npx puppeteer browsers install chrome`, then `npm run prerender`, then the existing `cp dist/index.html dist/404.html` (now copying the prerendered file).
- `src/pages/Landing.tsx`: render all `AccordionContent` panels (`forceMount` + CSS hidden state) so answers ship in the HTML.
- Add `Sitemap: https://safeplus.app/sitemap.xml` and a one-URL `public/sitemap.xml` for `/`.

## Verification before handoff

- Run the build + prerender locally and grep the output `dist/index.html` for hero copy, feature headings, and all six FAQ answers.
- Confirm file size jumps from ~2.5 KB to a content-bearing page.
- After you push and the Action finishes, `curl safeplus.app` shows the same text.
