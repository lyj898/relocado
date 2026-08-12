import type { Category, CountryCode } from './constants';

export interface CompanyAddress {
  street: string;
  postal_code: string;
  lat: number | null;
  lng: number | null;
}

export interface CompanySocial {
  linkedin: string | null;
  instagram: string | null;
  facebook: string | null;
}

export interface CompanyContactPerson {
  name: string | null;
  role: string | null;
}

export interface CompanyContact {
  phone: string[];
  whatsapp: string;
  email: string[];
  website: string;
  contact_form_url: string;
  address: CompanyAddress;
  social: CompanySocial;
  contact_person: CompanyContactPerson;
}

export interface Company {
  id: string;
  name: string;
  slug: string;
  country: CountryCode;
  city: string;
  categories: Category[];
  description: string;
  contact: CompanyContact;
  languages_spoken: string[];
  operating_hours: string;
  source: string;
  source_url: string;
  status: 'unclaimed' | 'claimed';
  verified_at: string | null;
  created_at: string;
  /** True for seed/placeholder data that must be replaced with real research. */
  is_placeholder?: boolean;
}
