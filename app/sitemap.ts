import type { MetadataRoute } from 'next'
import { districts } from '@/lib/data'
import { siteUrl } from '@/lib/seo'

const staticPaths = [
  '',
  '/about-us',
  '/agriculture-machinery',
  '/area-estimation',
  '/balochistan-districts-at-a-glance',
  '/calendar-of-annual-field-activities',
  '/climate-and-weather-data',
  '/contact',
  '/cost-of-production',
  '/crop-details',
  '/crop-reporting',
  '/current-crops-statistics',
  '/districts',
  '/frequent-asked-questions',
  '/gallery',
  '/gis',
  '/harvest-prices',
  '/info-desk',
  '/land-use',
  '/news-events',
  '/publications',
  '/remote-sensing-maps',
  '/services',
  '/survey-forms',
  '/surveys',
  '/technical-manuals',
  '/yield-estimation',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({ url: `${siteUrl}${path}` })),
    ...districts.map((district) => ({ url: `${siteUrl}/districts/${district.code}` })),
  ]
}
