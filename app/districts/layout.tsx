import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata(
  'Balochistan Districts',
  'Browse CRS district profiles and district information for Balochistan.',
  '/districts',
)

export default function DistrictsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
