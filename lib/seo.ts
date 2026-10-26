import type { Metadata } from 'next'

export const siteUrl = 'https://crs.balochistan.gov.pk'

export function createPageMetadata(
  title: string,
  description: string,
  pathname: string,
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
  }
}
