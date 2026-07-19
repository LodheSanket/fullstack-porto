# Sanket Lodhe - Portfolio

A personal portfolio site built with React 19, TypeScript, Vite, Tailwind CSS, and Framer Motion.
All content (summary, skills, experience, projects, education) is pulled from the real resume,
nothing is invented.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Icons / Lucide Icons
- React Router (used for the 404 fallback route)

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5173 by default.

## Build

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Project structure

```
src/
  components/   Reusable UI pieces (Navbar, Hero, Skills, Projects, etc.)
  pages/        Route-level components (Home, NotFound)
  hooks/        Custom hooks (scroll progress, typewriter, count-up)
  constants/    Resume content, kept separate from presentation
  types/        Shared TypeScript interfaces
  utils/        Shared Framer Motion variants
  styles/       Global CSS and Tailwind layers
```

## Design notes

The visual language leans into the backend/API side of the resume: a terminal-style
panel in the hero shows real metrics from the resume (API response time, requests
handled, etc.) formatted like an actual status log, rather than a generic gradient
graphic. Colors are a deep navy base with a teal and indigo accent pair, and type
pairs Space Grotesk (display) with Inter (body) and JetBrains Mono (data and code).

## Updating content

Everything text-based lives in `src/constants/data.ts`. Update that file to change
the summary, skills, experience, projects, or education without touching any
component code.

## Deployment

No backend is required. This deploys as a static site to Vercel, Netlify, or any
static host:

```bash
npm run build
```

Then point your host at the `dist/` folder. On Vercel, the framework preset
"Vite" handles this automatically.

## Replacing the resume file

`public/resume.pdf` is served by the "Download Resume" buttons. Replace that file
with an updated resume to change what visitors download, no code changes needed.
