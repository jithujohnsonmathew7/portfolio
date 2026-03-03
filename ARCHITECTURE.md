# Portfolio Architecture

> **Jithu Johnson Mathew** — Personal Portfolio  
> Stack: React + Vite + Tailwind CSS v4 + Framer Motion + Lucide React  
> Deployment: GitHub Pages

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Folder Structure](#folder-structure)
4. [Component Architecture](#component-architecture)
5. [Data Layer](#data-layer)
6. [Styling System](#styling-system)
7. [Animation Strategy](#animation-strategy)
8. [GitHub Pages Deployment](#github-pages-deployment)

---

## Project Overview

This is a fully static single-page application (SPA) built with React and bundled via Vite. It is designed to be deployed on GitHub Pages as a pure static site — no server, no SSR. All content is driven by a single data file, making updates easy without touching UI code.

---

## Tech Stack

| Layer         | Library / Tool             | Version  | Purpose                                      |
|---------------|----------------------------|----------|----------------------------------------------|
| Framework     | React                      | ^19      | Component-based UI                           |
| Bundler       | Vite                       | ^7       | Fast dev server & optimised production build |
| Styling       | Tailwind CSS (Vite plugin) | v4       | Utility-first CSS, zero config               |
| Animation     | Framer Motion              | latest   | Scroll-triggered & interactive animations   |
| Icons         | Lucide React               | latest   | Consistent SVG icon set                      |
| Fonts         | Google Fonts               | CDN      | Inter + Space Grotesk                        |
| Deployment    | gh-pages                   | latest   | Pushes `/dist` to `gh-pages` branch          |

---

## Folder Structure

```
portfolio/
├── public/                   # Static assets served as-is
├── src/
│   ├── main.jsx              # React DOM entry point
│   ├── App.jsx               # Root component — composes all sections
│   ├── index.css             # Global styles + Tailwind v4 import + CSS theme tokens
│   ├── App.css               # (unused — reserved for overrides)
│   ├── assets/               # Images, SVGs (if any)
│   ├── data/
│   │   └── resumeData.js     # Single source of truth for all portfolio content
│   └── components/
│       ├── Navbar.jsx        # Fixed top nav with mobile hamburger menu
│       ├── Hero.jsx          # Landing section with animated background
│       ├── About.jsx         # Bio, education card, stats grid
│       ├── Skills.jsx        # Color-coded skill category cards
│       ├── Experience.jsx    # Interactive timeline with collapsible cards
│       ├── Certifications.jsx# Azure & GCP certification cards
│       ├── Contact.jsx       # Contact form + info + social links
│       └── Footer.jsx        # Site footer with nav & branding
├── index.html                # HTML shell — Google Fonts, meta tags, OG tags
├── vite.config.js            # Vite config — Tailwind plugin + base path for GH Pages
├── package.json              # Scripts: dev, build, predeploy, deploy
└── ARCHITECTURE.md           # This file
```

---

## Component Architecture

```
App.jsx
├── Navbar          (fixed, always rendered)
└── main
    ├── Hero        (#hero)
    ├── About       (#about)
    ├── Skills      (#skills)
    ├── Experience  (#experience)
    ├── Certifications (#certifications)
    └── Contact     (#contact)
└── Footer
```

### Component Responsibilities

#### `Navbar.jsx`
- Fixed top navigation with scroll-aware background blur
- Smooth scroll to section on link click
- Animated mobile hamburger menu using `AnimatePresence`

#### `Hero.jsx`
- Full-viewport landing with animated floating orbs and grid overlay
- Status badge, name, title, tagline, CTA buttons, social links
- Animated scroll indicator

#### `About.jsx`
- Two-column layout: bio text + education card
- Stats grid (Years, Companies, Tech Stack, Projects)
- Each stat card animates in on scroll using `useInView`

#### `Skills.jsx`
- 6 skill categories, each with a distinct gradient accent colour
- Skill tags animate with `whileHover` scale
- Categories: Frontend, Backend, Cloud & DevOps, Database, Tools & Others, Testing

#### `Experience.jsx`
- Vertical timeline with dot connectors (desktop)
- Each card is collapsible via `AnimatePresence` (first card expanded by default)
- Shows role, company, location, period, bullet highlights, and tech tags
- "Current" badge on the active role

#### `Certifications.jsx`
- Card grid for Microsoft Azure & Google Cloud certifications
- Gradient orb per card, hover lift animation

#### `Contact.jsx`
- Contact info (email, phone, location) with icon blocks
- Form with controlled inputs; on submit opens default mail client via `window.location.href = mailto:`
- Success state button after submission

#### `Footer.jsx`
- Brand, nav links (smooth scroll), social icons, copyright

---

## Data Layer

All portfolio content lives in one file:

```
src/data/resumeData.js
```

### Exported objects

| Export           | Type     | Contains                                              |
|------------------|----------|-------------------------------------------------------|
| `personal`       | Object   | Name, title, email, phone, location, GitHub, LinkedIn, tagline |
| `experiences`    | Array    | All work experience — role, company, period, highlights, tech   |
| `skills`         | Object   | Category → string[] map of all skills                 |
| `certifications` | Array    | Title, issuer, date, credential ID, gradient colour   |
| `education`      | Object   | Degree, major, institution, location, period          |

To update any content (e.g. add a new job or skill), **only edit `resumeData.js`** — no component changes needed.

---

## Styling System

Tailwind CSS v4 is used via the `@tailwindcss/vite` plugin (no `tailwind.config.js` needed).

### Custom theme tokens (defined in `index.css`)

```css
@theme {
  --font-inter:    'Inter', sans-serif;
  --font-space:    'Space Grotesk', sans-serif;
  --color-primary: #6366f1;       /* Indigo */
  --color-accent:  #06b6d4;       /* Cyan */
  --color-bg:      #0a0a0f;       /* Near black background */
  --color-surface: #12121a;       /* Card surface */
  --color-border:  #2a2a3e;       /* Subtle borders */
  --color-text:    #e2e8f0;       /* Primary text */
  --color-muted:   #94a3b8;       /* Secondary text */
}
```

### Utility classes (defined in `index.css`)

| Class             | Effect                                         |
|-------------------|------------------------------------------------|
| `.gradient-text`  | Indigo → Cyan gradient applied to text         |
| `.glow`           | Soft indigo box-shadow                         |
| `.section-padding`| Consistent vertical/horizontal section spacing |

---

## Animation Strategy

All animations use **Framer Motion** with the following patterns:

| Pattern | Usage |
|---|---|
| `initial` + `animate` | Entry animations (fade in, slide up/left/right) |
| `useInView` + `once: true` | Trigger animation once when section scrolls into view |
| `AnimatePresence` | Mount/unmount transitions (mobile menu, collapsible cards) |
| `whileHover` / `whileTap` | Micro-interactions on buttons and skill tags |
| `animate` loop | Floating orbs in Hero, scroll arrow bounce |

---

## GitHub Pages Deployment

### Configuration

**`vite.config.js`** — sets the base path to match the repo name:
```js
base: '/portfolio/'
```

**`package.json`** — homepage and deploy scripts:
```json
"homepage": "https://jithujohnsonmathew.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Deploy Steps

```bash
# 1. Initialise git (if not already done)
git init
git remote add origin https://github.com/jithujohnsonmathew/portfolio.git

# 2. Deploy to GitHub Pages
npm run deploy
```

This builds the project into `/dist` and pushes it to the `gh-pages` branch automatically.

### Live URL
```
https://jithujohnsonmathew.github.io/portfolio/
```

---

*Last updated: February 2026*
