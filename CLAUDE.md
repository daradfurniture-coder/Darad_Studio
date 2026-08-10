# Darad Studio Website — Project Notes

## What this is
React + Vite + TypeScript + Tailwind single-page website for Darad Studio,
a handcrafted furniture and woodwork business in Diani Beach, Kenya
(founded 2010). Owner: Laurent.

- Live site: https://daradfurniture-coder.github.io/Darad_Studio/
- Repo: https://github.com/daradfurniture-coder/Darad_Studio (branch: main)
- Deployed via the `gh-pages` npm package (NOT GitHub Actions).

## Brand decisions (settled — keep consistent)
- Business name: **Darad Studio** (not "Darad Workshop" or "Artisan Woods")
- Founded: **2010** (not 1987)
- Colors: dark wood #5C3D2E / #3D2314, amber #D4A574 / #C17817, cream #F5F0E8
- Contact: WhatsApp/phone +254 745948866, darad_furniture@gmail.com,
  Diani Beach Road, opposite Psalm Beach Hospital

## How to deploy changes
```
npm run build      # verify it compiles
git add . && git commit -m "..." && git push
npm run deploy     # this is what updates the live site
```

## Architecture notes / gotchas
- Uses **HashRouter** (react-router), because the site lives under the
  /Darad_Studio/ subpath on GitHub Pages. Do NOT switch to BrowserRouter.
- Section links must use `scrollToSection()` from `src/lib/scroll.ts`,
  never plain `href="#section"` — raw hash links conflict with HashRouter.
- `vite.config.ts` has `base: '/Darad_Studio/'`. Static asset URLs in code
  use `import.meta.env.BASE_URL`.
- tsconfig: `baseUrl` was removed (deprecated); `paths` works without it.
- Portfolio images live in `public/images/portfolio/` (1200x900, 4:3).
  Untouched originals are in `original-photos/` (git-ignored).
- Contact form opens WhatsApp with a pre-filled message (no backend).
  Floating WhatsApp button: `src/components/WhatsAppButton.tsx`.
- `.github/workflows/` does NOT exist in this repo — deployment is manual
  via `npm run deploy`.

## Known remaining issues / future work
- Hero background and About section image are still Unsplash stock photos —
  replace with real workshop photos when available.
- Footer newsletter form is decorative (emails go nowhere) — wire up or remove.
- Footer social icons (Instagram/Facebook/Twitter) link to "#" — add real URLs.
- Testimonials are template placeholder text — replace with real customers.
- Consider: custom domain, Google Business Profile (then point the Contact
  map embed at the real listing), Open Graph share image.
