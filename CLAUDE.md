# relocado.asia

The practical guide to **moving in or out of Singapore**: leaving, arriving, and moving back. It supports
Junk to Clear and HomeToMoved (and HomeToClean where a move-out clean is needed) by answering the questions
people have before they book. It's run openly by the same team. Astro 7, static, GitHub Pages (deploys from `main`).

## The lane (don't drift out of it)

Three sister guide sites split the audience. Never publish the same question on two of them:

| Site | Covers |
|---|---|
| ourkampung.com | Your own home in Singapore (local moves, BTO, ending a tenancy, bulky items, repairs) |
| swyftclear.com | A property you're responsible for but don't live in (estates, landlords, sellers, MCSTs) |
| **relocado.asia** | **A move across the border.** If the reader is getting on a plane, it belongs here |

Also never target the service sites' sales searches ("movers singapore", "house clearing singapore").

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

## Measurement

GA4 renders only when the `PUBLIC_GA4_ID` repository variable is set (see `.github/workflows/deploy.yml`).
Outbound clicks (GA4 enhanced measurement) count the readers sent to the brands.
