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

// Destination markets: full directory (all categories).
export const DESTINATION_COUNTRIES = ['SG', 'ID'] as const;

// Origin markets: providers based here who move corporate assignees TO Singapore.
// Only the corporate_mobility category is populated for these for now.
export const ORIGIN_COUNTRIES = ['US', 'CA', 'UK', 'DE', 'FR', 'JP', 'KR'] as const;

export const COUNTRIES = [...DESTINATION_COUNTRIES, ...ORIGIN_COUNTRIES] as const;

export type CountryCode = (typeof COUNTRIES)[number];

export const COUNTRY_LABELS: Record<CountryCode, string> = {
  SG: 'Singapore',
  ID: 'Indonesia',
  US: 'United States',
  CA: 'Canada',
  UK: 'United Kingdom',
  DE: 'Germany',
  FR: 'France',
  JP: 'Japan',
  KR: 'South Korea',
};

export const COUNTRY_SLUGS: Record<CountryCode, string> = {
  SG: 'sg',
  ID: 'id',
  US: 'us',
  CA: 'ca',
  UK: 'uk',
  DE: 'de',
  FR: 'fr',
  JP: 'jp',
  KR: 'kr',
};

// City slugs per country. Countries with a single city still keep the segment for URL consistency.
export const CITIES: Record<CountryCode, { slug: string; label: string }[]> = {
  SG: [{ slug: 'singapore', label: 'Singapore' }],
  ID: [
    { slug: 'jakarta', label: 'Jakarta' },
    { slug: 'bali', label: 'Bali' },
  ],
  US: [
    { slug: 'chicago', label: 'Chicago' },
    { slug: 'danbury', label: 'Danbury' },
    { slug: 'denver', label: 'Denver' },
  ],
  CA: [
    { slug: 'toronto', label: 'Toronto' },
    { slug: 'laval', label: 'Laval' },
  ],
  UK: [{ slug: 'london', label: 'London' }],
  DE: [
    { slug: 'frankfurt', label: 'Frankfurt' },
    { slug: 'berlin', label: 'Berlin' },
  ],
  FR: [{ slug: 'paris', label: 'Paris' }],
  JP: [{ slug: 'tokyo', label: 'Tokyo' }],
  KR: [{ slug: 'seoul', label: 'Seoul' }],
};

export function citySlug(city: string): string {
  return city.toLowerCase().replace(/\s+/g, '-');
}

export function countrySlugFromCode(code: CountryCode): string {
  return COUNTRY_SLUGS[code];
}

export function isOriginCountry(code: CountryCode): boolean {
  return (ORIGIN_COUNTRIES as readonly string[]).includes(code);
}
