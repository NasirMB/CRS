# CRS Website

Modern landing website for **Crop Reporting Services (CRS), Government of Balochistan**.

## Tech Stack

- **Framework:** Next.js `16.2.4` (App Router)
- **UI:** React `19`, TypeScript `5.7`
- **Styling:** Tailwind CSS `4.2`, PostCSS
- **Component System:** shadcn/ui + Radix UI primitives
- **Icons:** Lucide React
- **Map:** Leaflet + OpenStreetMap (`react-leaflet`)
- **Forms:** React state (contact form), React Hook Form available in dependencies
- **Media:** Cloudinary-hosted gallery images with responsive rendering
- **Package Manager:** pnpm

## Brand Palette (CRS)

Defined in Tailwind theme/config and used across sections:

- `crs.primary` `#174A2A`
- `crs.dark` `#0B2E1A`
- `crs.gold` `#D98219`
- `crs.sand` `#F5E6C8`
- `crs.sage` `#DDEAD7`
- `crs.light` `#FFFFFF`
- `crs.text` `#172018`

## Current Implemented Experience

- Premium responsive landing page with strong section hierarchy
- Hero with dual CTAs and trust indicators
- Core Services cards with Lucide icons
- Field Operations Framework cards
- Live District Map section powered by Leaflet/OSM
- Featured Districts, Publications, News sections
- Optimized image-based Gallery section
- Contact section with semantic fields and accessible inputs
- Visit CRS Quetta section with map + contact actions
- Refined footer with structured link groups and social icons
- Homepage metadata configured:
  - Title: `Crop Reporting Services | Agriculture Dept Quetta`
  - Description aligned for agriculture/crop-planning discovery

## Project Structure

```txt
app/
  api/district-status/route.ts
  globals.css
  layout.tsx
  page.tsx
components/
  BalochistanMap.tsx
  BalochistanMapLeaflet.tsx
  ContactFormSection.tsx
  DistrictCard.tsx
  DistrictMapSection.tsx
  Footer.tsx
  Header.tsx
  NewsCard.tsx
  PublicationCard.tsx
  ServiceCard.tsx
  ui/*
lib/
  data.ts
```

## Local Development

### 1) Install dependencies

```bash
pnpm install
```

### 2) Run development server

```bash
pnpm dev
```

Open `http://localhost:3000`.

### 3) Quality checks

```bash
pnpm lint
pnpm build
```

## Environment Variables

No Google Maps key is required.

Optional environment variables can be added in `.env.local` when integrating backend APIs (contact submission, analytics, CMS, etc.).

## Notes

- Map implementation is Leaflet + OpenStreetMap (Google Maps dependency removed).
- Gallery images are loaded from Cloudinary URLs and rendered responsively.
- `next/image` is used for key visual assets including header/footer logo and gallery images.

## Roadmap

### Phase 1: Content & CMS

- Connect dynamic CMS for News, Publications, Gallery, and District content
- Add admin-friendly content workflows and moderation

### Phase 2: Data & Integrations

- Replace mock district status API with live operational data source
- Add server-side contact form submission (email/CRM/helpdesk)
- Add structured analytics events for CTA and section engagement

### Phase 3: SEO & Performance

- Add full metadata strategy per route (Open Graph, Twitter cards, canonical)
- Add JSON-LD structured data for organization, contact, and publications
- Further image optimization and caching strategy

### Phase 4: Accessibility & UX Hardening

- Full keyboard and screen-reader QA pass
- Contrast audit + focus state consistency across all routes
- Form validation enhancements and better success/error handling

### Phase 5: Expansion

- District detail pages with deeper GIS insights
- Download center for reports/publications with filters
- Multi-language support (Urdu/English)

## Maintainers

CRS project team.  
Design & development partner: [Dayyan Tech](https://www.dayyantech.com/)
