# Anuj Phuyal — AI/ML Portfolio

A responsive, data-driven portfolio for an AI/ML engineer, software engineer, and researcher. Built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Run locally

Requires Node.js 20 or newer.

This workspace also includes an isolated `portfolio_env` containing Node.js 22 and npm. Activate it before working on the site:

```bash
source portfolio_env/bin/activate
```

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
npm run preview
```

## Customize

Most content lives in `src/data/`:

- `personal.ts`: contact/social links, availability, resume path, and profile image
- `education.ts`: degree and coursework
- `experience.ts`: research and professional experience
- `projects.ts`: project cards, links, categories, and tags
- `publications.ts`: published and ongoing research
- `skills.ts`: skills and research interests
- `hero.ts`: introduction copy and call-to-action labels
- `about.ts`: biography and highlight cards
- `research.ts`: featured and ongoing research details
- `contact.ts`: contact section and form copy

Every major page area is also isolated as its own component in `src/sections/`. Edit the matching data file for content changes; edit the section component only when changing layout or behavior.

Add your real resume as `public/resume.pdf`, then change the resume path in `src/data/personal.ts` to `/resume.pdf`. Empty social URLs render as disabled placeholders rather than broken links.

The contact form performs frontend validation only. Connect its submit handler in `src/sections/Contact.tsx` to Formspree, EmailJS, or your own API when ready.

Theme preference is saved locally, motion respects `prefers-reduced-motion`, and unverified dates, GPA, profile URLs, coauthors, and project links remain explicit placeholders.
