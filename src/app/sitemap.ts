import { SITE_URL } from '@/utils'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      changeFrequency: 'monthly',
      lastModified: new Date(),
      priority: 1,
      url: SITE_URL,
    },
    {
      changeFrequency: 'monthly',
      lastModified: new Date(),
      priority: 0.8,
      url: `${SITE_URL}/pool`,
    },
    {
      changeFrequency: 'monthly',
      lastModified: new Date(),
      priority: 0.9,
      url: `${SITE_URL}/restaurant`,
    },
    {
      changeFrequency: 'monthly',
      lastModified: new Date(),
      priority: 0.9,
      url: `${SITE_URL}/booking`,
    },
  ]
}
