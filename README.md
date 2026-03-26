# PP2025

A modern, responsive portfolio website built with Next.js, showcasing comprehensive product design and development services. Features internationalization support for English and Spanish, dynamic service pages with MDX content, and detailed case studies.

## Features

- **Internationalization**: Multi-language support (English/Spanish) using Next.js i18n and next-intl
- **Dynamic Service Pages**: MDX-based content for services across Strategy, Design, Development, and Growth categories
- **Responsive Design**: Mobile-first approach with Tailwind CSS and shadcn/ui components
- **Interactive Components**: Built with Framer Motion for smooth animations
- **Service Categories**: Comprehensive service offerings organized by category with dedicated landing pages
- **Case Studies**: Detailed project pages including 37signals collaborations
- **Contact Integration**: Crisp chat integration for user engagement
- **SEO Optimized**: Server-side rendering, dynamic metadata, and sitemap generation
- **Type-Safe Content**: TypeScript-powered content management with Zod validation

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript and JavaScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui and HeroUI/React
- **Animations**: Framer Motion
- **Charts**: Recharts for data visualization
- **Content**: MDX with custom components
- **Validation**: Zod for type-safe content schemas
- **Internationalization**: next-intl with route-based localization
- **Icons**: Bootstrap Icons and Lucide React
- **Deployment**: Vercel-ready with optimized production builds

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/cacooper16/pp2025.git
cd pp2025
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/
│   ├── [locale]/              # Internationalized routes
│   │   ├── layout.js          # Locale-specific layout
│   │   ├── page.js            # Homepage
│   │   ├── providers.js       # Client-side providers
│   │   ├── policy/            # Legal pages (privacy, terms, cookies)
│   │   └── services/          # Service pages
│   │       ├── page.tsx       # Services overview
│   │       └── [category]/    # Category pages (strategy, design, development, growth)
│   │           ├── page.tsx   # Category landing page
│   │           └── [service]/ # Individual service pages (dynamic)
│   ├── 37signals/             # Case study pages
│   │   └── (.)/               # Parallel route
│   ├── lib/                   # App-level utilities (crisp, growthcard)
│   ├── ui/layout/             # Layout components (header, footer)
│   ├── globals.css            # Global styles
│   ├── layout.js              # Root layout
│   ├── not-found.js           # 404 page
│   └── sitemap.xml            # Dynamic sitemap
├── components/
│   ├── services/              # Service page components
│   │   ├── ServiceHero.tsx
│   │   ├── ServiceBenefits.tsx
│   │   ├── ServiceAudiences.tsx
│   │   ├── ServiceCaseStudies.tsx
│   │   ├── ServiceTestimonial.tsx
│   │   ├── ServiceFAQs.tsx
│   │   ├── ServiceCTA.tsx
│   │   ├── ServiceRelated.tsx
│   │   └── index.ts
│   └── ui/                    # Reusable UI components
├── content/
│   └── services/              # MDX service content
│       ├── en/                # English services
│       │   ├── strategy/      # Strategy services
│       │   ├── design/        # Design services
│       │   ├── development/   # Development services
│       │   └── growth/        # Growth services
│       └── es/                # Spanish services (same structure)
├── i18n/
│   ├── request.ts             # i18n request handler
│   └── routing.ts             # Routing configuration
├── lib/
│   └── content/
│       ├── services.ts        # Service content loader & utilities
│       └── types.ts           # Content type definitions (Zod schemas)
└── middleware.ts              # i18n middleware

messages/
├── en.json                    # English translations
└── es.json                    # Spanish translations

public/
├── docs/                      # Documentation files
├── favicons/                  # Favicon assets
└── img/                       # Images
    ├── 37signals/             # Case study images
    ├── avatars/               # User avatars
    ├── logos/                 # Company logos
    ├── services/              # Service-related images
    └── work/                  # Work examples

Config Files:
├── components.json            # shadcn/ui configuration
├── eslint.config.mjs          # ESLint configuration
├── jsconfig.json              # JavaScript configuration
├── next.config.mjs            # Next.js configuration
├── postcss.config.mjs         # PostCSS configuration
├── tailwind.config.mjs        # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## Internationalization

The site supports English (`en`) and Spanish (`es`) locales.

- **Translation Files**: Located in `messages/` directory (`en.json`, `es.json`)
- **URL Structure**: Routes follow the pattern `/{locale}/page` (e.g., `/en/services`, `/es/servicios`)
- **Content Management**: Service content is organized by locale in `src/content/services/{locale}/`
- **Dynamic Routes**: Service pages automatically generate for each locale
- **Middleware**: Handles locale detection and routing in `src/middleware.ts`

### Adding New Translations

1. Add translations to `messages/en.json` and `messages/es.json`
2. For service content, create corresponding MDX files in both `src/content/services/en/` and `src/content/services/es/`

## Services Structure

Services are organized into four main categories:

1. **Strategy** 🎯
2. **Design** 🎨
3. **Development** 💻
4. **Growth** 📈

Each service has:

- Dedicated MDX content file with frontmatter metadata
- Hero section with title, description, and pricing
- Benefits and key features
- Target audiences
- Related case studies
- Testimonials
- FAQs
- Related services suggestions

## Adding New Services

1. Create an MDX file in `src/content/services/{locale}/{category}/{service-slug}.mdx`
2. Include required frontmatter:
   ```mdx
   ---
   title: "Service Title"
   description: "Service description"
   category: "strategy" | "design" | "development" | "growth"
   slug: "service-slug"
   price: "Starting at $X,XXX"
   duration: "X weeks"
   hero:
     title: "Hero Title"
     description: "Hero description"
   benefits: [...]
   audiences: [...]
   caseStudies: [...]
   faqs: [...]
   relatedServices: [...]
   ---
   ```
3. The service will automatically appear in the category page and be accessible at `/{locale}/services/{category}/{service-slug}`

## License

This project is private and proprietary.
