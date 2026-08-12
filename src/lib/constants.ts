// Fixed taxonomy — changing this shape affects routing and data, treat as a structural decision.

export const CATEGORIES = [
  'movers',
  'visa_immigration',
  'real_estate',
  'corporate_mobility',
  'banking_tax',
  'schools',
  'pet_relocation',
  'insurance',
] as const;

export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_LABELS: Record<Category, string> = {
  movers: 'Movers',
  visa_immigration: 'Visa & Immigration',
  real_estate: 'Real Estate',
  corporate_mobility: 'Corporate Mobility',
  banking_tax: 'Banking & Tax',
  schools: 'International Schools',
  pet_relocation: 'Pet Relocation',
  insurance: 'Insurance',
};

export const CATEGORY_DESCRIPTIONS: Record<Category, string> = {
  movers: 'International and local movers for household and office relocations.',
  visa_immigration: 'Visa applications, work permits, and immigration consultancy.',
  real_estate: 'Rental and purchase agents for finding a home.',
  corporate_mobility: 'Employee relocation and global mobility program management.',
  banking_tax: 'Bank account setup, cross-border banking, and tax advisory.',
  schools: 'International and bilingual schools for relocating families.',
  pet_relocation: 'Pet import, quarantine, and transport specialists.',
  insurance: 'Health, property, and international insurance providers.',
};

export const COUNTRIES = ['SG', 'ID'] as const;

export type CountryCode = (typeof COUNTRIES)[number];

export const COUNTRY_LABELS: Record<CountryCode, string> = {
  SG: 'Singapore',
  ID: 'Indonesia',
};

export const COUNTRY_SLUGS: Record<CountryCode, string> = {
  SG: 'sg',
  ID: 'id',
};

// City slugs per country. SG has a single city but keeps the segment for URL consistency.
export const CITIES: Record<CountryCode, { slug: string; label: string }[]> = {
  SG: [{ slug: 'singapore', label: 'Singapore' }],
  ID: [
    { slug: 'jakarta', label: 'Jakarta' },
    { slug: 'bali', label: 'Bali' },
  ],
};

export function citySlug(city: string): string {
  return city.toLowerCase().replace(/\s+/g, '-');
}

export function countrySlugFromCode(code: CountryCode): string {
  return COUNTRY_SLUGS[code];
}
