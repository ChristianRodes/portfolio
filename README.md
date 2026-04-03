# Christian Rodes — Portfolio

Personal portfolio built with Next.js 15, showcasing my work as a Junior Product Manager and Digital Builder. Bilingual (English/Spanish) with a ProductPartner case study, experience timeline, skills section, and downloadable CV.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Internationalization**: next-intl (EN/ES)
- **Deployment**: Vercel-ready

## Project Structure

```
src/
├── app/
│   └── [locale]/
│       ├── page.js                        # Home page
│       └── projects/productpartner/       # Case study page
├── components/
│   ├── hero/          # Hero section
│   ├── experience/    # Experience timeline
│   ├── skills/        # Skills section
│   ├── education/     # Education section
│   ├── projects/      # Project card & case study
│   ├── footer/        # Footer with CV download
│   └── nav/           # Navbar
messages/
├── en.json            # English translations
└── es.json            # Spanish translations
public/
├── cveng.pdf          # English CV
├── cvesp.pdf          # Spanish CV
└── img/               # Images and logos
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run lint` — Run ESLint
