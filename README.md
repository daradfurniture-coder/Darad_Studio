# Darad Studio — Modern Woodwork Shop Website

A beautiful, responsive single-page website for a woodwork shop, built with React 19, TypeScript, Vite, and Tailwind CSS.

![Website Preview](https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=2070&auto=format&fit=crop)

## Features

- **8 Sections**: Hero, About, Services, Portfolio, Process, Testimonials, Contact, Footer
- **Responsive Design**: Fully mobile-first, works on all screen sizes
- **Smooth Animations**: Scroll-reveal effects, hover transitions, image zoom
- **Portfolio Lightbox**: Click any portfolio image to view full-size
- **Contact Form**: Full working form with validation states
- **Sticky Navigation**: Navbar changes style on scroll
- **Warm Wood Aesthetic**: Custom color palette inspired by natural timber

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| TypeScript | Type safety |
| Vite | Build tool & dev server |
| Tailwind CSS | Utility-first styling |
| shadcn/ui | UI component primitives |
| Lucide React | Icons |

## Quick Start

### 1. Prerequisites

Make sure you have these installed:
- **Node.js 20+** — [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **VS Code** — [Download here](https://code.visualstudio.com/)

Verify your Node version:
```bash
node --version
# Should print v20.x.x or higher
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open your browser to: `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

The static site will be in the `dist/` folder.

## Project Structure

```
woodwork-shop-artisan-woods/
├── index.html              # Entry HTML file
├── package.json            # Dependencies & scripts
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind theme & colors
├── postcss.config.js       # PostCSS setup
├── tsconfig.json           # TypeScript config
├── dist/                   # Production build output
└── src/
    ├── main.tsx            # React entry point
    ├── App.tsx             # Root component with routing
    ├── App.css             # Global styles (minimal)
    ├── index.css           # Tailwind directives + custom styles
    ├── pages/
    │   └── Home.tsx        # Assembles all sections
    ├── sections/           # Page sections (one per file)
    │   ├── Navbar.tsx
    │   ├── Hero.tsx
    │   ├── About.tsx
    │   ├── Services.tsx
    │   ├── Portfolio.tsx
    │   ├── Process.tsx
    │   ├── Testimonials.tsx
    │   ├── Contact.tsx
    │   └── Footer.tsx
    ├── components/ui/      # shadcn/ui components (40+)
    ├── hooks/
    │   └── useScrollAnimation.ts
    └── lib/
        └── utils.ts        # Utility functions (cn helper)
```

## Customizing Content

### Change Business Name
1. Open `index.html` → edit the `<title>` tag
2. Open `src/sections/Navbar.tsx` → edit the logo text
3. Open `src/sections/Footer.tsx` → edit the brand name

### Change Colors
Open `src/index.css` and edit the CSS custom properties in `:root`:

```css
:root {
  --background: 36 33% 95%;    /* Cream background */
  --primary: 25 45% 25%;        /* Dark brown */
  --accent: 35 60% 45%;         /* Gold/amber */
  /* ... etc */
}
```

### Change Images
All images use Unsplash URLs. To use your own:
1. Add images to a `public/images/` folder
2. Replace the `src` attributes in components (e.g., `src/sections/Hero.tsx`, `src/sections/Portfolio.tsx`)

Example:
```tsx
// Before
<img src="https://images.unsplash.com/photo-..." />

// After
<img src="/images/my-photo.jpg" />
```

### Edit Text Content
Each section is self-contained. Open the relevant file in `src/sections/` and edit the text directly:

| File | What to Edit |
|---|---|
| `Hero.tsx` | Headline, subtitle, CTA buttons |
| `About.tsx` | Company story, stats |
| `Services.tsx` | Service cards (title + description) |
| `Portfolio.tsx` | Project gallery images & titles |
| `Process.tsx` | Workflow steps |
| `Testimonials.tsx` | Client quotes |
| `Contact.tsx` | Contact info, form fields |
| `Footer.tsx` | Links, social handles |

## Deploy to GitHub Pages

### Step 1: Update `vite.config.ts`

Add your repository name as the `base` path:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/your-repo-name/',  // <-- ADD THIS LINE
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

Replace `your-repo-name` with your actual GitHub repo name.

### Step 2: Build

```bash
npm run build
```

### Step 3: Deploy `dist/` folder

#### Option A: Manual Upload
1. Go to your GitHub repo → Settings → Pages
2. Set source to "Deploy from a branch"
3. Create a `gh-pages` branch
4. Upload the contents of `dist/` to that branch

#### Option B: Using `gh-pages` npm package

```bash
# Install the gh-pages package
npm install --save-dev gh-pages

# Add these scripts to package.json:
# "predeploy": "npm run build"
# "deploy": "gh-pages -d dist"

# Then deploy:
npm run deploy
```

#### Option C: GitHub Actions (Auto-deploy)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Push this file, then go to Settings → Pages → Source → GitHub Actions.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Troubleshooting

### "Cannot find module" errors
Make sure you ran `npm install` in the project directory.

### Port already in use
Change the port in `vite.config.ts`:
```ts
export default defineConfig({
  server: { port: 3001 },
  // ...
})
```

### Images not loading after deploy
Make sure `base` is set correctly in `vite.config.ts` (see Deploy section).

## License

MIT — Feel free to use this template for your own projects.
