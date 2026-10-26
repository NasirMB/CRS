import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { siteUrl } from '@/lib/seo'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Crop Reporting Services (CRS) | Agriculture & Cooperatives Department, Balochistan',
    template: '%s | CRS Balochistan',
  },
  description: 'Official website of Crop Reporting Services (CRS), a directorate of Agriculture and Cooperatives Department Balochistan, Government of Balochistan. Access crop statistics, surveys, district information, GIS services, and agricultural resources.',
  keywords: 'crop reporting, agriculture statistics, Balochistan, yield estimation, area estimation, GIS, remote sensing, crop data',
  authors: [{ name: 'Crop Reporting Services (CRS)' }],
  creator: 'Crop Reporting Services (CRS)',
  publisher: 'Crop Reporting Services (CRS)',
  applicationName: 'Crop Reporting Services (CRS)',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Crop Reporting Services (CRS) | Agriculture & Cooperatives Department, Balochistan',
    description: 'Official CRS information portal for crop reporting, district agricultural data, surveys, GIS, and publications in Balochistan.',
    url: '/',
    siteName: 'Crop Reporting Services (CRS)',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Crop Reporting Services (CRS) | Agriculture & Cooperatives Department, Balochistan',
    description: 'Official CRS information portal for crop reporting, district agricultural data, surveys, GIS, and publications in Balochistan.',
  },
  verification: {
    google: 'U5zKb_ntgtt7dSKKkd6AuubMaYlCt4-IgGnycEKAaMc',
  },
  icons: {
    icon: 'https://res.cloudinary.com/dz3hsef7i/image/upload/v1777993912/favicon_t717oa.png',
  },
}

const governmentId = `${siteUrl}/#government-of-balochistan`
const departmentId = `${siteUrl}/#agriculture-and-cooperatives-department-balochistan`
const crsId = `${siteUrl}/#crop-reporting-services`

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'GovernmentOrganization',
      '@id': governmentId,
      name: 'Government of Balochistan',
    },
    {
      '@type': 'GovernmentOrganization',
      '@id': departmentId,
      name: 'Agriculture and Cooperatives Department Balochistan',
      parentOrganization: {
        '@id': governmentId,
      },
    },
    {
      '@type': 'GovernmentOrganization',
      '@id': crsId,
      name: 'Crop Reporting Services',
      alternateName: 'CRS',
      url: siteUrl,
      email: 'contact.crs@balochistan.gov.pk',
      telephone: '+92 81 9201676',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rani Bagh, Sariyab Road',
        addressLocality: 'Quetta',
        addressRegion: 'Balochistan',
        addressCountry: 'PK',
      },
      parentOrganization: {
        '@id': departmentId,
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'Crop Reporting Services (CRS)',
      alternateName: 'CRS',
      url: siteUrl,
      publisher: {
        '@id': crsId,
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="font-sans antialiased bg-white text-slate-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
