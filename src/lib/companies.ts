import companiesData from '../data/companies.json';
import type { Company } from './types';
import { CITIES, type CountryCode } from './constants';
import type { Category } from './constants';

export const companies = companiesData as Company[];

export function getCompaniesByCountry(country: CountryCode): Company[] {
  return companies.filter((c) => c.country === country);
}

export function getCompaniesByCity(country: CountryCode, citySlug: string): Company[] {
  const city = CITIES[country].find((c) => c.slug === citySlug);
  if (!city) return [];
  return companies.filter((c) => c.country === country && c.city === city.label);
}

export function getCompaniesByCategory(
  country: CountryCode,
  citySlug: string,
  category: Category
): Company[] {
  return getCompaniesByCity(country, citySlug).filter((c) => c.categories.includes(category));
}

export function getCompanyBySlug(
  country: CountryCode,
  citySlug: string,
  category: Category,
  slug: string
): Company | undefined {
  return getCompaniesByCategory(country, citySlug, category).find((c) => c.slug === slug);
}

export function countByCategory(list: Company[], category: Category): number {
  return list.filter((c) => c.categories.includes(category)).length;
}
