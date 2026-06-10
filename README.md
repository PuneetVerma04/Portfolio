# Puneet Verma — Portfolio Website

A single-page portfolio showcasing my work as a full-stack & applied-AI engineer — built to demonstrate that I can deliver complete systems from backend to frontend, with a Spotify-inspired interface.

🔗 **Live:** deployed on [Vercel](https://vercel.com)

---

## 🧰 Tech Stack

- **Framework:** React 19 + **TypeScript** (strict)
- **Build tool:** Vite 7 with HMR
- **Styling:** Tailwind CSS 4 (CSS-first `@theme`, via `@tailwindcss/vite` — no `tailwind.config.js`)
- **Icons:** lucide-react
- **Linting:** ESLint 9 (flat config) with `typescript-eslint`
- **Hosting:** Vercel (auto-deploys on push to `master`)

---

## 📁 Project Structure

```
Portfolio/                       # The app lives at the repo root
├── .github/
│   └── copilot-instructions.md  # AI coding-agent guidelines
├── index.html                   # SEO + Open Graph/Twitter meta, Figtree font
├── vite.config.ts               # Vite + Tailwind (base '/')
├── tsconfig*.json               # TypeScript project references
├── eslint.config.js
├── public/                      # favicon.svg, resume PDF, og-image
└── src/
    ├── main.tsx                 # Entry point
    ├── App.tsx                  # Spotify app-shell composition
    ├── index.css                # Tailwind import, theme tokens, animations
    ├── data/resume.ts           # ⭐ Single source of truth for all content
    ├── hooks/                   # useInView (reveal), useActiveSection
    └── components/              # Sidebar, TopBar, Hero, About, Projects,
                                 # Skills, Experience, Leadership, Certificates,
                                 # Contact, NowPlayingBar, MobileNav, Reveal
```

> All content lives in [`src/data/resume.ts`](src/data/resume.ts). Edit text, projects,
> links, and certificates there — components render from it. No JSX edits needed for content changes.

---

## 📑 Sections

Hero · About (with education + stats) · Projects · Skills · Experience · Leadership & Research · Certificates · Contact

---

## 📦 Setup & Development

```bash
npm install      # install dependencies
npm run dev      # start dev server → http://localhost:5173
npm run build    # type-check (tsc -b) + production build → dist/
npm run preview  # preview the production build
npm run lint     # ESLint
```

---

## 🚀 Deployment

Hosted on **Vercel**, connected to this GitHub repo. Every push to `master` triggers a production
deploy; pull requests get preview deployments automatically.

Vercel auto-detects the Vite framework — no `vercel.json` required. Expected project settings:

| Setting | Value |
|---|---|
| Framework Preset | Vite |
| Root Directory | `./` (repo root) |
| Build Command | `npm run build` (or `vite build`) |
| Output Directory | `dist` |

---

## ✅ Personalize before publishing

A few placeholders in [`src/data/resume.ts`](src/data/resume.ts) are marked with `TODO`:

- Add real **repo / live URLs** for each project (currently point to the GitHub profile).
- Add **DOI / proceedings links** for the two research papers.
- Add `public/og-image.png` (1200×630) for social-share previews, and update the `og:url`
  in [`index.html`](index.html) to your live Vercel domain.
