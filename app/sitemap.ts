import type { MetadataRoute } from 'next'
import { absoluteUrl, newsSlugs, staticPaths } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: absoluteUrl(path === '' ? '/' : `${path}/`),
    lastModified,
  }))

  const newsEntries: MetadataRoute.Sitemap = newsSlugs.map((slug) => ({
    url: absoluteUrl(`/news/${slug}/`),
    lastModified,
  }))

  return [...staticEntries, ...newsEntries]
}
