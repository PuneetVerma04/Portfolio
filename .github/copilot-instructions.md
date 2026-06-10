# Portfolio Website - AI Coding Agent Instructions

## Project Overview

Single-page React portfolio website for Puneet Verma, a Computer Science Engineering student at VIT-AP University (2022-2026, CGPA 8.46). Showcases full-stack development, cloud architecture, and machine learning expertise. Built with React 19, **TypeScript**, Vite 7, and Tailwind CSS 4.

## Architecture & Structure

**Single self-contained package**: the Vite app lives at the **repo root** with one `package.json`. Run all commands from the root.

**Component Architecture** (implemented, TypeScript):

- Single-page app composed in `src/App.tsx`; sections in `src/components/`: `Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Experience`, `Leadership` (includes research publications), `Certificates`, `Contact`, `Footer`, plus a shared `Section` wrapper.
- **All content is data-driven**: edit `src/data/resume.ts` (single source of truth) for any text, project, link, or certificate change — do NOT hardcode content in components.
- Hooks in `src/hooks/`: `useInView` (scroll-reveal via IntersectionObserver) and `useTheme` (persisted light/dark, toggles `.dark` on `<html>`).
- No routing — sections scroll within a single page via anchor links.

## Key Technologies

- **React 19.2.0** - Latest version with new features
- **Vite 7.2.4** - Build tool with HMR, configured in `vite.config.js`
- **Tailwind CSS 4.1.17** - Using new Vite plugin (`@tailwindcss/vite`) instead of PostCSS
- **ESLint 9.39.1** - Flat config format (not legacy `.eslintrc`)

## Critical Configuration Details

**Tailwind Setup**: Uses `@tailwindcss/vite` plugin directly in `vite.config.js` - NO separate `tailwind.config.js` or PostCSS config needed. Already configured:

```javascript
import tailwindcss from "@tailwindcss/vite";
plugins: [react(), tailwindcss()];
```

**ESLint**: Uses new flat config format (`eslint.config.js`) with modern defineConfig API. Custom rule allows uppercase-starting unused vars (common for components).

## Development Workflows

**Start dev server**: `npm run dev`
**Build**: `npm run build`
**Lint**: `npm run lint`
**Preview build**: `npm run preview`

**Working directory**: All commands run from the repo root.
**Deployment**: Vercel, auto-deploys on push to `master` (Vite auto-detected, base `/`).

## Project-Specific Conventions

1. **Component files**: Use `.tsx` for components, `.ts` for hooks/data — TypeScript strict mode is on
2. **Styling approach**: Tailwind utility classes only - no separate CSS modules per component. Dark mode via `dark:` variants (class-based, `.dark` on `<html>`)
3. **Global styles**: `index.css` holds the Tailwind import, `@theme` tokens (accent colors, Inter font), and the `.reveal` scroll-animation utility
4. **Content edits**: change `src/data/resume.ts`, never hardcode strings in components
5. **Static assets**: Store in `public/` for root-level access, `src/assets/` for imported assets

## Content Structure

Portfolio sections follow specific order with actual resume data:

1. **Hero** - Name, VIT-AP CS student, full-stack + ML/AI focus, CTA buttons (Resume/Projects)
2. **About** - B.Tech CSE at VIT-AP (CGPA 8.46), full-stack developer with cloud & ML expertise
3. **Skills** - Languages (Java, Python, C#, SQL, JavaScript), Frameworks (HTML, CSS, .NET, TensorFlow, PyTorch), Tools (Visual Studio, VS Code, GitHub, SSMS), Databases (SQL Server, MongoDB), Cloud (AWS)
4. **Projects**:
   - Game Store Web App (ASP.NET Core, Blazor, RESTful APIs, dependency injection)
   - RAG-Based PDF Insight Generator (LangChain, LangGraph, Ollama, RAG pipeline)
   - NTPC Membership System (ASP.NET, C#, auth, admin panel, Windows Server 2019)
5. **Experience** - Vocational Trainee at NTPC Ltd (June-July 2024)
6. **Leadership**:
   - Lead, Deep Learning Team, ML Club (Sept 2024-Aug 2025) - 9 members, 2 research papers
   - Co-Lead, Projects Team, ML Club (Apr-Aug 2024) - 12 members, 6 ML projects
7. **Research Publications**:
   - "Evaluating YOLO V8 Models for Efficient Drone Detection" (RAIT 2025, IIT Dhanbad)
   - "Enhancing Road Safety with YOLOv8: Brake Light Detection" (ACCTHPA 2025, FISAT Cochin)
8. **Certificates**:
   - AWS Certified Solutions Architect – Associate
   - OCI 2025 Certified Generative AI Professional
   - Coursera Machine Learning Specialization
   - Postman API Fundamentals Student Expert
   - Amazon Junior Developer Certificate
9. **Contact** - GitHub, LinkedIn, Email

When creating components, follow this order and use exact details from resume.

## Current State & Intentional Omissions

- All sections are implemented; the UI is a Spotify-inspired app-shell (sidebar, album cards, track lists, Now Playing bar). Deployed on Vercel.
- No routing library (intentional — single scrolling page with anchor links).
- No animation library — scroll reveals use a lightweight `useInView` hook + CSS, not Framer Motion (keeps the bundle small).
- Icons come from `lucide-react` (React Icons is not used).
- Outstanding `TODO`s live in `src/data/resume.ts`: confirm LinkedIn URL, add real project repo/live links, add research-paper DOIs, and drop the résumé PDF + `og-image.png` into `public/`.

## Technical Implementation Guidelines

**Skills Section Grouping**:

- Languages: Java, Python, C#, SQL, JavaScript
- Frameworks & Libraries: HTML, CSS, .NET, TensorFlow, PyTorch
- Developer Tools: Visual Studio, VS Code, GitHub, SSMS
- Databases: SQL Server, MongoDB
- Cloud Platforms: Amazon Web Services (AWS)

**Project Highlights** (technical depth required):

- Game Store: Emphasize RESTful APIs, async/await patterns, DTOs, service architecture, Blazor components
- RAG PDF Generator: Highlight LangChain, LangGraph workflows, RAG pipeline, local AI integration
- NTPC System: Focus on ASP.NET security, admin panels, log analysis with Python/Pandas

**Leadership Metrics to Showcase**:

- Team sizes (9-12 members)
- Project counts (6 ML projects, 2 research papers)
- Community impact (200+ participants)
- Domains covered: ML, NLP, Computer Vision, Deep Learning

## Integration Points

- Deploy target: Vercel (static Vite build, served at domain root)
- No backend/API - pure frontend
- External links: GitHub, LinkedIn, Email, Certificate links, Research paper links
- Education: VIT-AP University, Amravathi (2022-2026)
- CBSE: 12th (79%), 10th (86.9%)
