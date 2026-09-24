# Abbas al Turkmani — Portfolio

Personal portfolio for Abbas al Turkmani, a Flutter-focused software developer based in Damascus, Syria. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and next-themes.

## Features

- Sticky navbar with smooth-scroll section links, theme toggle, and mobile hamburger menu
- Light / dark theme with `next-themes` (system preference, persisted in `localStorage`, no flash of the wrong theme)
- Content driven by a typed data file at `data/portfolio.ts`
- Responsive layout (mobile 375px, tablet 768px, desktop 1280px+)
- Accessible markup, keyboard-friendly controls, and skip-to-content link
- SEO metadata, Open Graph image, and generated favicon

## Getting started

Requirements: Node.js 18.17+ and npm.

```bash
cd abbas-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```text
app/           App Router pages, layout, metadata, OG image
components/    Navbar, sections, theme toggle, icons
data/          Typed portfolio content
lib/           Small utilities
public/        Static assets (OG placeholder)
```

## Updating content

Edit `data/portfolio.ts` to change personal info, experience, projects, skills, education, certificates, and languages. Project GitHub links currently point at the GitHub profile as placeholders — replace each `githubUrl` with the real repository when available.

## Contact form

The contact form uses a `mailto:` fallback (no backend). Submitting opens the visitor’s email client with the name, email, and message filled in.
