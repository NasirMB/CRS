import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { districts } from '@/lib/data';
import { createPageMetadata } from '@/lib/seo';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return districts.map((district) => ({
    slug: district.code.toString(),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const district = districts.find((item) => item.code.toString() === slug);

  if (!district) {
    return {
      title: 'District Not Found',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return createPageMetadata(
    `${district.name} District Profile`,
    `CRS district profile for ${district.name}, ${district.division}, Balochistan, including district survey and agricultural information.`,
    `/districts/${district.code}`,
  );
}

export default async function DistrictPage({ params }: PageProps) {
  const { slug } = await params;
  const district = districts.find((d) => d.code.toString() === slug);

  if (!district) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        {/* Header Section */}
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <Link href="/districts" className="text-gray-300 hover:text-white text-sm font-medium mb-4 inline-block">
              ← Back to Districts
            </Link>
            <h1 className="text-4xl font-bold mb-2">{district.name}</h1>
            <p className="text-gray-200">{district.division}</p>
          </div>
        </section>

        {/* District Information */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-crs-sage rounded-lg p-6">
                <h3 className="text-lg font-bold text-crs-dark mb-2">District Code</h3>
                <p className="text-3xl font-bold text-crs-primary">{district.code}</p>
              </div>
              <div className="bg-crs-sand rounded-lg p-6">
                <h3 className="text-lg font-bold text-crs-dark mb-2">Division</h3>
                <p className="text-lg text-gray-700">{district.division}</p>
              </div>
              <div className="bg-gradient-to-br from-crs-primary to-crs-dark text-white rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Status</h3>
                <p className="text-lg">Active</p>
              </div>
            </div>

            {/* Information Sections */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-crs-dark mb-4">Overview</h2>
                <p className="text-gray-700">
                  {district.name} is a district in {district.division} of Balochistan province. This district
                  is included in CRS&apos;s systematic agricultural surveys and monitoring programs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-crs-dark mb-4">Major Crops</h3>
                  <ul className="space-y-2">
                    {['Wheat', 'Barley', 'Maize', 'Cotton', 'Pulses'].map((crop) => (
                      <li key={crop} className="flex items-center gap-2 text-gray-700">
                        <span className="text-crs-gold">✓</span>
                        {crop}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-crs-dark mb-4">Survey Coverage</h3>
                  <ul className="space-y-2">
                    {['Enumeration Survey', 'Crop Cutting Survey', 'Area Estimation', 'Yield Assessment'].map(
                      (survey) => (
                        <li key={survey} className="flex items-center gap-2 text-gray-700">
                          <span className="text-crs-gold">✓</span>
                          {survey}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              <div className="bg-crs-sage rounded-lg p-8">
                <h3 className="text-2xl font-bold text-crs-dark mb-4">Agricultural Profile</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {['Crop Area', 'Production', 'Yield Rate'].map((metric) => (
                    <div key={metric} className="bg-white p-4 rounded text-center">
                      <p className="text-sm text-gray-600">{metric}</p>
                      <p className="text-2xl font-bold text-crs-primary mt-2">--</p>
                      <p className="text-xs text-gray-500">Data pending</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-crs-dark mb-4">Resources</h3>
                <div className="space-y-3">
                  {[
                    { title: 'District Survey Reports', href: '/publications' },
                    { title: 'Agricultural Statistics', href: '/current-crops-statistics' },
                    { title: 'GIS Maps', href: '/gis' },
                  ].map((resource) => (
                    <Link
                      key={resource.title}
                      href={resource.href}
                      className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <p className="text-crs-primary hover:text-crs-gold font-semibold">{resource.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Districts */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-crs-dark mb-8">Other Districts in {district.division}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {districts
                .filter((d) => d.division === district.division && d.id !== district.id)
                .map((d) => (
                  <Link key={d.id} href={`/districts/${d.code}`}>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-crs-dark">{d.name}</h3>
                      <p className="text-xs text-gray-500">Code: {d.code}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
