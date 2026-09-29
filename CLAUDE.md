# relocado.asia

The practical guide to **moving in or out of Singapore**: leaving, arriving, and moving back. It supports
Junk to Clear and HomeToMoved (and HomeToClean where a move-out clean is needed) by answering the questions
people have before they book. It's run openly by the same team. Astro 7, static, GitHub Pages (deploys from `main`).

## The JTC family (read first)

The lanes between the sister sites, the linking rules, brand facts and the shared facts table live in one
file for the whole family. It wins over anything below:

@../jtc-family/PORTFOLIO.md

Relocado's lane: **a move across the border.** If the reader is getting on a plane, it belongs here.

## Content rules

- Every rule, deadline, eligibility condition or amount links to its official source (IRAS, MOM, CPF, LTA,
  ICA, Customs, NEA, AVS/NParks, HDB, SP Group…) and is listed in the guide's `sources`. If it can't be
  sourced, it doesn't go in. No invented prices, statistics, anecdotes or testimonials.
- Contract terms (diplomatic clause, deposits, handover) are not law. Say so and tell readers to check their agreement.
- Brand links: at most two per guide, only at the step that needs the service, and disclosed in the sentence
  ("Junk to Clear, the team behind Relocado, …"). HomeToMoved and HomeToClean are **matching services**,
  so never write "our movers" / "our cleaners". HomeToMoved does **not** do international moves.
- Nothing ranks or reviews our own businesses against others.
- British spelling, plain English, answer first.

## Structure

- Guides: `src/content/guides/<slug>.md`. The frontmatter schema is in `src/content.config.ts`. The URL is
  `/{hub path}/{slug}/`. Hubs are defined in `src/lib/site.ts`. **Live URLs are a one-way door.**
- The build fails if a page title is over 60 characters or a description is outside 70–160 (`src/lib/seo.ts`).
- Planner: `src/pages/leaving-singapore/planner.astro`. Its task offsets must match the guides' sourced facts.
- Directory: `src/data/directory.json`, Singapore companies only, each verified on its own website with
  `verified_at`. Alphabetical, no rankings, no paid placement.
- `src/data/redirects.json`: old Singapore directory URLs → `/directory/`. The old overseas listings 404 on
  purpose (there's no relevant new home, and redirecting them would be an irrelevant redirect).

## Design

The "Passport" palette: navy `#1B2A4A` for trust (links, headings, primary buttons, footer) and marigold
`#F2B233` for action (planner buttons, step numbers, small bars). Every colour is a token on `:root` in
`src/styles/global.css`; don't hard-code hex values in pages. Marigold is only ever a fill behind dark
text or a decorative bar. As text on white it fails WCAG contrast (1.9:1), so never use `--color-accent`
for text. The palette is deliberately unlike the sister sites (HomeToMoved bronze, HomeToClean teal,
SwyftClear steel blue, Junk to Clear green).

## Measurement

Set up 29 Sep 2026. Don't break either; the user doesn't want to redo them.

- **GA4:** property "Relocado" (556542819) in the Junktoclear Analytics account, linked to Search Console.
  The measurement ID `G-MJ92RY5G1J` lives in `src/lib/site.ts`. The tag renders in production builds only,
  and `scripts/audit.mjs` fails the build if any page is missing it. Data retention is 14 months.
- **Search Console:** domain property `sc-domain:relocado.asia`, verified by a `google-site-verification` TXT
  record at Namecheap. Never delete that record: deleting it unverifies the site.
- Outbound clicks (GA4 enhanced measurement) count the readers sent to the brands.
- The privacy note is on `/about/#privacy`, linked from the footer. Keep it true if tracking changes.
