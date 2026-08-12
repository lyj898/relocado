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
export const ORIGIN_COUNTRIES = ['US', 'CA', 'UK', 'DE', 'FR', 'JP', 'KR', 'AU', 'IE', 'BE', 'NL', 'CH', 'EE'] as const;

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
  AU: 'Australia',
  IE: 'Ireland',
  BE: 'Belgium',
  NL: 'Netherlands',
  CH: 'Switzerland',
  EE: 'Estonia',
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
  AU: 'au',
  IE: 'ie',
  BE: 'be',
  NL: 'nl',
  CH: 'ch',
  EE: 'ee',
};

// City slugs per country. Countries with a single city still keep the segment for URL consistency.
export const CITIES: Record<CountryCode, { slug: string; label: string }[]> = {
  SG: [{ slug: 'singapore', label: 'Singapore' }],
  ID: [
    { slug: 'jakarta', label: 'Jakarta' },
    { slug: 'bali', label: 'Bali' },
  ],
  US: [
    { slug: 'boston', label: 'Boston' },
    { slug: 'buffalo-grove', label: 'Buffalo Grove' },
    { slug: 'chicago', label: 'Chicago' },
    { slug: 'cleveland', label: 'Cleveland' },
    { slug: 'dallas', label: 'Dallas' },
    { slug: 'danbury', label: 'Danbury' },
    { slug: 'denver', label: 'Denver' },
    { slug: 'evansville', label: 'Evansville' },
    { slug: 'fairfax', label: 'Fairfax' },
    { slug: 'fenton', label: 'Fenton' },
    { slug: 'frisco', label: 'Frisco' },
    { slug: 'jacksonville', label: 'Jacksonville' },
    { slug: 'lewisville', label: 'Lewisville' },
    { slug: 'marietta', label: 'Marietta' },
    { slug: 'minneapolis', label: 'Minneapolis' },
    { slug: 'new-castle', label: 'New Castle' },
    { slug: 'oak-creek', label: 'Oak Creek' },
    { slug: 'omaha', label: 'Omaha' },
    { slug: 'parsippany', label: 'Parsippany' },
    { slug: 'pewaukee', label: 'Pewaukee' },
    { slug: 'phoenix', label: 'Phoenix' },
    { slug: 'pittsburgh', label: 'Pittsburgh' },
    { slug: 'pleasanton', label: 'Pleasanton' },
    { slug: 'redondo-beach', label: 'Redondo Beach' },
    { slug: 'roswell', label: 'Roswell' },
    { slug: 'san-diego', label: 'San Diego' },
    { slug: 'san-mateo', label: 'San Mateo' },
    { slug: 'scottsdale', label: 'Scottsdale' },
    { slug: 'springfield', label: 'Springfield' },
    { slug: 'st-louis', label: 'St. Louis' },
    { slug: 'sterling', label: 'Sterling' },
  ],
  CA: [
    { slug: 'anjou', label: 'Anjou' },
    { slug: 'burlington', label: 'Burlington' },
    { slug: 'delta', label: 'Delta' },
    { slug: 'laval', label: 'Laval' },
    { slug: 'mississauga', label: 'Mississauga' },
    { slug: 'montreal', label: 'Montreal' },
    { slug: 'stouffville', label: 'Stouffville' },
    { slug: 'toronto', label: 'Toronto' },
    { slug: 'vancouver', label: 'Vancouver' },
  ],
  UK: [
    { slug: 'aberdeen', label: 'Aberdeen' },
    { slug: 'bristol', label: 'Bristol' },
    { slug: 'chester', label: 'Chester' },
    { slug: 'cobham', label: 'Cobham' },
    { slug: 'croydon', label: 'Croydon' },
    { slug: 'dunstable', label: 'Dunstable' },
    { slug: 'glasgow', label: 'Glasgow' },
    { slug: 'guildford', label: 'Guildford' },
    { slug: 'haddington', label: 'Haddington' },
    { slug: 'london', label: 'London' },
    { slug: 'perth', label: 'Perth' },
    { slug: 'potters-bar', label: 'Potters Bar' },
    { slug: 'southampton', label: 'Southampton' },
    { slug: 'stowmarket', label: 'Stowmarket' },
    { slug: 'tunbridge-wells', label: 'Tunbridge Wells' },
    { slug: 'uxbridge', label: 'Uxbridge' },
    { slug: 'welwyn-garden-city', label: 'Welwyn Garden City' },
  ],
  DE: [
    { slug: 'berlin', label: 'Berlin' },
    { slug: 'cologne', label: 'Cologne' },
    { slug: 'dusseldorf', label: 'Düsseldorf' },
    { slug: 'eschborn', label: 'Eschborn' },
    { slug: 'frankfurt', label: 'Frankfurt' },
    { slug: 'hamburg', label: 'Hamburg' },
    { slug: 'munich', label: 'Munich' },
  ],
  FR: [
    { slug: 'chassieu', label: 'Chassieu' },
    { slug: 'gennevilliers', label: 'Gennevilliers' },
    { slug: 'lampertheim', label: 'Lampertheim' },
    { slug: 'le-bourget', label: 'Le Bourget' },
    { slug: 'le-mans', label: 'Le Mans' },
    { slug: 'lyon', label: 'Lyon' },
    { slug: 'paris', label: 'Paris' },
    { slug: 'saint-aunes', label: 'Saint-Aunès' },
    { slug: 'saint-laurent-du-var', label: 'Saint-Laurent-du-Var' },
    { slug: 'toulouse', label: 'Toulouse' },
  ],
  JP: [
    { slug: 'fukuoka', label: 'Fukuoka' },
    { slug: 'kobe', label: 'Kobe' },
    { slug: 'osaka', label: 'Osaka' },
    { slug: 'tokyo', label: 'Tokyo' },
  ],
  KR: [
    { slug: 'anyang', label: 'Anyang' },
    { slug: 'goyang-si', label: 'Goyang-si' },
    { slug: 'seoul', label: 'Seoul' },
  ],
  AU: [
    { slug: 'adelaide', label: 'Adelaide' },
    { slug: 'brisbane', label: 'Brisbane' },
    { slug: 'chatswood', label: 'Chatswood' },
    { slug: 'clayton', label: 'Clayton' },
    { slug: 'melbourne', label: 'Melbourne' },
    { slug: 'sydney', label: 'Sydney' },
  ],
  IE: [
    { slug: 'cork', label: 'Cork' },
    { slug: 'dublin', label: 'Dublin' },
    { slug: 'kilcock', label: 'Kilcock' },
    { slug: 'kinsale', label: 'Kinsale' },
    { slug: 'limerick', label: 'Limerick' },
    { slug: 'naas', label: 'Naas' },
  ],
  BE: [
    { slug: 'antwerp', label: 'Antwerp' },
    { slug: 'brussels', label: 'Brussels' },
    { slug: 'ghent', label: 'Ghent' },
    { slug: 'kampenhout', label: 'Kampenhout' },
    { slug: 'overijse', label: 'Overijse' },
    { slug: 'walhain', label: 'Walhain' },
    { slug: 'zemst', label: 'Zemst' },
  ],
  NL: [
    { slug: 'alblasserdam', label: 'Alblasserdam' },
    { slug: 'alphen-aan-den-rijn', label: 'Alphen aan den Rijn' },
    { slug: 'amsterdam', label: 'Amsterdam' },
    { slug: 'capelle-aan-den-ijssel', label: 'Capelle aan den IJssel' },
    { slug: 'hoofddorp', label: 'Hoofddorp' },
    { slug: 'nootdorp', label: 'Nootdorp' },
    { slug: 'rijswijk', label: 'Rijswijk' },
    { slug: 'rotterdam', label: 'Rotterdam' },
    { slug: 'schiphol', label: 'Schiphol' },
    { slug: 'the-hague', label: 'The Hague' },
    { slug: 'vlaardingen', label: 'Vlaardingen' },
  ],
  CH: [
    { slug: 'andelfingen', label: 'Andelfingen' },
    { slug: 'basel', label: 'Basel' },
    { slug: 'bern', label: 'Bern' },
    { slug: 'carouge', label: 'Carouge' },
    { slug: 'geneva', label: 'Geneva' },
    { slug: 'lausanne', label: 'Lausanne' },
    { slug: 'petit-lancy', label: 'Petit-Lancy' },
    { slug: 'thalwil', label: 'Thalwil' },
    { slug: 'zug', label: 'Zug' },
    { slug: 'zurich', label: 'Zurich' },
  ],
  EE: [{ slug: 'tallinn', label: 'Tallinn' }],
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
