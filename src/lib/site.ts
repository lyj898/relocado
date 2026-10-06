// Site-wide facts. Pages read these instead of restating them, so a change lands everywhere at once.

export const SITE = {
  name: 'Relocado',
  url: 'https://relocado.asia',
  email: 'hello@relocado.asia',
  /** GA4 property "Relocado" (556542819) in the OurKampung Analytics account (403279198). Don't change it. */
  ga4Id: 'G-MJ92RY5G1J',
  description:
    'Practical guides to moving in or out of Singapore: leaving, arriving and moving back, written by the team behind Junk to Clear and HomeToMoved.',
} as const;

export type HubKey = 'leaving' | 'arriving' | 'hr';

export interface Hub {
  key: HubKey;
  /** URL segment: /{path}/ is the hub, /{path}/{guide}/ its guides. A one-way door once live. */
  path: string;
  navLabel: string;
  title: string;
  lede: string;
  metaTitle: string;
  description: string;
}

export const HUBS: Record<HubKey, Hub> = {
  leaving: {
    key: 'leaving',
    path: 'leaving-singapore',
    navLabel: 'Leaving Singapore',
    title: 'Leaving Singapore',
    lede: 'Tax clearance, your lease, your shipment and everything that isn’t coming with you: what to do, and by when.',
    metaTitle: 'Leaving Singapore: Guides and Checklists | Relocado',
    description:
      'Practical guides to leaving Singapore: IR21 tax clearance, breaking a lease early, what to ship, sell or dispose of, and your last two weeks.',
  },
  arriving: {
    key: 'arriving',
    path: 'moving-to-singapore',
    navLabel: 'Moving to Singapore',
    title: 'Moving to Singapore, or moving back',
    lede: 'Your first move into a Singapore rental, and what to sort out when you come home after years away.',
    metaTitle: 'Moving to Singapore or Moving Back: Guides | Relocado',
    description:
      'Guides for arriving in Singapore and for moving back: from a serviced apartment into your first rental, and your shipment, storage unit and flat.',
  },
  hr: {
    key: 'hr',
    path: 'for-hr-teams',
    navLabel: 'For HR teams',
    title: 'For HR and relocation teams',
    lede: 'What a Singapore departure involves beyond the shipment, and the checklist to hand an employee who’s leaving.',
    metaTitle: 'Singapore Departures: Guides for HR Teams | Relocado',
    description:
      'For HR and global mobility teams: what an employer has to do when a foreign employee leaves Singapore, from IR21 and the work pass to the move-out.',
  },
};

export const HUB_ORDER: HubKey[] = ['leaving', 'arriving', 'hr'];

export function hubUrl(hub: HubKey): string {
  return `/${HUBS[hub].path}/`;
}

export function guideUrl(hub: HubKey, slug: string): string {
  return `/${HUBS[hub].path}/${slug}/`;
}

export const PLANNER_URL = '/leaving-singapore/planner/';
export const DIRECTORY_URL = '/directory/';

/**
 * The businesses Relocado is run alongside. Named in the footer and on /about/ so the relationship
 * is never hidden. HomeToMoved and HomeToClean are matching services: never "our movers" / "our cleaners".
 */
export const BRANDS = [
  {
    name: 'Junk to Clear',
    url: 'https://junktoclear.com.sg/',
    does: 'A Singapore disposal company that clears anything from a single sofa to a whole flat, including clear-outs for people leaving Singapore.',
  },
  {
    name: 'HomeToMoved',
    url: 'https://hometomoved.com/',
    does: 'Matches you with vetted, insured movers for moves within Singapore. It doesn’t handle international moves.',
  },
  {
    name: 'HomeToClean',
    url: 'https://hometoclean.com/',
    does: 'Matches you with vetted cleaners, including move-out cleaning before you hand back a rental.',
  },
] as const;

/**
 * Enquiry form (family rule, 30 Sep 2026: every site takes enquiries on its own FormSubmit form). The
 * endpoint is FormSubmit's alias for the family inbox, the one OurKampung uses, so the address never
 * appears in the page source (5 Oct 2026). The user passes each enquiry to Junk to Clear's staff or the
 * right partner. A form isn't a brand link, so it doesn't count towards the two-per-guide limit.
 */
export const ENQUIRY = {
  endpoint: 'https://formsubmit.co/ajax/1aacc4903352135bb0fa38c3987d3abd',
  /** GA4 event sent once, only after FormSubmit confirms delivery. It's the property's key event. */
  event: 'generate_lead',
  services: {
    clearout: 'Clear out what I’m not taking',
    cleaning: 'Move-out cleaning',
    move: 'A move within Singapore',
    repairs: 'Repairs before handover',
    other: 'Something else',
  },
  propertyTypes: ['HDB flat', 'Condo or apartment', 'Landed house', 'Storage unit', 'Other'],
} as const;

export type EnquiryService = keyof typeof ENQUIRY.services;
