# Client Brief — Just Plaster

## Business

- Business name: Just Plaster
- Legal entity: BUTCON PTY LTD (also trades as Butler Bathrooms & Butler Build)
- Industry: Plastering / home improvement renovations
- Location/service area: Melbourne, Victoria (residential & commercial)
- Primary contact: Phone 0414 945 931
- Website URL: https://justplaster.com.au/
- Existing social: Twitter (broken), Instagram (@JUSTPLASTER — broken feed)
- Registration: L-DBL, U-DBL, U-CBL (registered builders)

## Goals

- Primary goal: Generate qualified plastering enquiries from Melbourne homeowners and businesses
- Secondary goals: Rebuild trust (old site looks abandoned), strengthen the quote flow, make the "fast free quote" path frictionless
- Most important visitor action: Submit a quote enquiry (Snap Send Repair style — upload photos, get quote in 24h)
- Launch deadline: ASAP (experimental build to test workflow)

## Audience

- Primary audience: Melbourne homeowners needing plastering repairs, renovations, garage ceilings, insurance claims work; small-medium job specialists
- Common visitor questions: How much does plastering cost? How fast can you come? Do you do small jobs? Are you licensed and insured?
- Objections or concerns: Tradies who don't show up, hidden costs, messy work, poor quality
- Proof points: 60+ years combined experience, family owned, registered builders, testimonials (St Kilda mentions), service/price/care guarantees, full project from demo to install

## Brand

- Existing brand assets: Logo (orange/black — downloaded at ~/Projects/just-plaster/public/uploads/justplaster-logo.png)
- Preferred tone: Professional, reliable, friendly, "small-medium job specialists"
- Colors: **Orange accent** carry from old site (CTA buttons, highlights, brand elements). Exact hex to match old site. Keep the rest clean and neutral.
- Fonts: Use template default (Inter) unless the client brief clearly calls for a change
- Competitors or references: The old site itself (but improve it). Other Melbourne trade sites with clean quote paths.
- Styles to avoid: Busy, dated WordPress look. No decorative blobs, heavy shadows, or gradient backgrounds.

## Pages

- Required pages: Home, Services (with sub-services), About, Contact (with quote form / Snap Send Repair equivalent)
- Optional pages: FAQ, Gallery (can be folded into services or home)
- Services: Residential & Commercial, Insurance Claims, Renovations, Patch & Repairs, New Buildings, Installations, Restorations, Extensions, Customer Care, Garage Ceiling Repairs
- Testimonials: Yes — plenty on old site, use them
- Legal/privacy requirements: Standard small business privacy

## Layout Preferences

- Preferred hero style: Simple and clean with a strong CTA — "Fast Free Quote" is the main action
- Image/media: Stock photos of plastering work, garage ceilings, renovation interiors
- Service layout: Grid or icon grid with clear descriptions
- Gallery: Portfolio-style if needed, or fold before/after into service pages
- CTA style: Prominent orange button, clear language, low friction
- Sections to avoid: Anything that looks like the old WordPress site (dated accordions, broken social feeds, stale project dates)

## Content

- Existing copy available: Yes — old site has extensive copy for all services, about us, guarantees, testimonials
- Images available: Logo grabbed. Old site images are stock/Depositphotos. Source fresh Unsplash stock photos.
- Testimonials: At least 6 solid ones from the old site (Rob Benson, Lara Main, Bess Andrews, Michael Ploumidis, Simon Darcy, Mary McDonald, etc.)
- Blog/news required: No
- FAQ: Can compile common questions

## Integrations

- Form destination: TBD — will set up a basic contact form (can use Decap forms or a form action)
- Analytics: Not required for this test build
- Booking/CRM: Not required yet

## Stock Photography

Source from Unsplash via the template's stock photo workflow (search → extract ID → curl download). Photos needed:

1. Hero — plastering work in progress (trowel, ceiling, wall finish)
2. Garage ceiling repair / roof work
3. Renovation interior
4. Residential/commercial plastering setting
5. General home renovation / paint-ready walls
6. Before/after style images if possible

Keep hero images moderate (~500-700KB). Gallery/service images at w=800.

## Visual Review Protocol (CRITICAL)

Per Sylvain's instructions, this build has a **two-stage review**:

1. **Spark self-review first** — build the site, `npm run build`, serve locally, take full-page screenshot, review every section (headings, spacing, images loading, button styles, colours, mobile layout), fix issues found before passing on
2. **Bito fallback review** — final QA pass after Spark's review is complete

Do not skip the self-review. The goal is fewer UI back-and-forth cycles.
