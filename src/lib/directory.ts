import entries from '../data/directory.json';

export const DIRECTORY_TYPES = [
  {
    key: 'international-movers',
    label: 'International movers',
    explainer:
      'They pack, ship and deliver household goods between countries, usually by sea container or air freight, and handle export and import paperwork with their partner agents. Get at least two or three surveys and quotes, and ask each mover for its list of items it won’t ship.',
  },
  {
    key: 'relocation-management',
    label: 'Relocation and destination services',
    explainer:
      'Usually hired by an employer rather than the employee. They manage the whole move: home search, school search, settling-in, departure services and coordination with the mover. If your company is paying for your move, ask HR who its provider is before hiring your own.',
  },
  {
    key: 'immigration-corporate',
    label: 'Immigration, tax and corporate services',
    explainer:
      'Advisers who handle work passes, immigration and tax filings for employers and assignees. Your employer normally handles pass cancellation and tax clearance on your behalf.',
  },
  {
    key: 'pet-relocation',
    label: 'Pet relocation',
    explainer:
      'They arrange a pet’s export permit, health certificate, travel crate and flight, and work with an agent at the other end. Destination rules can take months, so contact one early.',
  },
] as const;

export type DirectoryType = (typeof DIRECTORY_TYPES)[number]['key'];

export interface DirectoryEntry {
  name: string;
  slug: string;
  types: DirectoryType[];
  description: string;
  website: string;
  phone: string[];
  email: string[];
  address: string;
  source_url: string;
  verified_at: string;
}

export const directory = (entries as DirectoryEntry[]).slice().sort((a, b) => a.name.localeCompare(b.name, 'en'));

/** Each company is listed once, under its first type; its other types show as tags. */
export function entriesForType(type: DirectoryType): DirectoryEntry[] {
  return directory.filter((e) => e.types[0] === type);
}

export function typeLabel(type: DirectoryType): string {
  return DIRECTORY_TYPES.find((t) => t.key === type)!.label;
}

export function latestCheck(): string {
  return directory.map((e) => e.verified_at).sort().at(-1) ?? '';
}
