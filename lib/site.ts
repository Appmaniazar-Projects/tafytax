export const siteUrl = 'https://tafytax.com'

/** Paths for static pages (trailing slash added in sitemap) */
export const staticPaths = [
  '',
  '/about',
  '/contact',
  '/insights',
  '/news',
  '/services',
] as const

export const newsSlugs = [
  'training-capacity-building',
  'master-accounting-software',
  'foreign-trusts-tax',
  'sme-global-operations',
  'cross-border-operations',
] as const

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${siteUrl}${normalized}`
}
