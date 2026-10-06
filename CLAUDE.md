# relocado.asia

The practical guide to **moving in or out of Singapore**: leaving, arriving, and moving back. It answers the
questions people have before they book a move, a clean or a clear-out. It's part of the OurKampung family and is
run openly by the OurKampung team, which also runs HomeToMoved and HomeToClean. Junk to Clear is a separate
company we refer clear-outs to; it pays no referral fees, and no company is named as running Relocado (user,
6 Oct 2026). Astro 7, static, GitHub Pages (deploys from `main`).

## The OurKampung family (read first)

The lanes between the sister sites, the linking rules, brand facts and the shared facts table live in one
file for the whole family. It wins over anything below:

@../jtc-family/PORTFOLIO.md

Relocado's lane: **a move across the border.** If the reader is getting on a plane, it belongs here.

## Content rules

- Every rule, deadline, eligibility condition or amount links to its official source (IRAS, MOM, CPF, LTA,
  ICA, Customs, NEA, AVS/NParks, HDB, SP Group…) and is listed in the guide's `sources`. If it can't be
  sourced, it doesn't go in. No invented prices, statistics, anecdotes or testimonials.
- Contract terms (diplomatic clause, deposits, handover) are not law. Say so and tell readers to check their agreement.
- Links to sister sites and partners: at most two per guide, only at the step that needs the service, and
  disclosed in the sentence: "HomeToClean, run by the same team as Relocado, …", or "Junk to Clear, a disposal
  company we refer jobs to, …" (never "our", "sister" or "same team" for Junk to Clear, and never "since 2009").
  HomeToMoved and HomeToClean are **matching services**, so never write "our movers" / "our cleaners".
  HomeToMoved does **not** do international moves. The audit fails on SKAP or "the team behind Junk to Clear".
- Nothing ranks or reviews our own sites or partners against others.
- British spelling, plain English, answer first.

## Enquiries

- The FormSubmit form is `src/components/EnquiryForm.astro`, and its endpoint, services and property types are
  `ENQUIRY` in `src/lib/site.ts`. It posts to the same inbox as HomeToClean, with "Relocado", the service and
  the page in the subject. The OurKampung team passes each enquiry to the partner who'll quote for the job
  (Junk to Clear for clear-outs).
- It appears after the main text of any guide whose frontmatter sets `enquiry` (the service its main step
  needs), on the planner, and at `/about/#enquiry`. It isn't a brand link, so it doesn't count towards the
  two-per-guide limit.
- The GA4 key event is `generate_lead`, sent once, only after FormSubmit confirms delivery. Don't rename it to
  `form_submit`: enhanced measurement already sends that on every submit attempt, delivered or not.
- If the fields, the inbox or who receives the details change, update the notice under the button and
  `/about/#privacy` in the same commit (PDPA).

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

- **GA4:** property "Relocado" (556542819) in the OurKampung Analytics account (403279198), linked to Search Console.
  The measurement ID `G-MJ92RY5G1J` lives in `src/lib/site.ts`. The tag renders in production builds only,
  and `scripts/audit.mjs` fails the build if any page is missing it. Data retention is 14 months.
- **Search Console:** domain property `sc-domain:relocado.asia`, verified by a `google-site-verification` TXT
  record at Namecheap. Never delete that record: deleting it unverifies the site.
- Outbound clicks (GA4 enhanced measurement) count the readers sent to the sister sites and partners.
- The privacy note is on `/about/#privacy`, linked from the footer. Keep it true if tracking changes.
