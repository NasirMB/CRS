import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PublicationCard from '@/components/PublicationCard';
import { publications } from '@/lib/data';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('Publications', 'Reports, manuals, and publications from CRS.', '/publications');

export default function PublicationsPage() {
  const categories = ['All', ...new Set(publications.map((p) => p.category))];

  return (
    <>
      <Header />
      <main>
        {/* Header Section */}
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Publications</h1>
            <p className="text-gray-200">
              Reports, technical manuals, and agricultural data publications
            </p>
          </div>
        </section>

        {/* Publications Grid */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-crs-dark mb-4">Latest Publications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {publications.map((pub) => (
                  <PublicationCard
                    key={pub.id}
                    title={pub.title}
                    category={pub.category}
                    date={pub.date}
                    href={pub.href}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Categories Overview */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-crs-dark mb-8">Publication Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.filter((c) => c !== 'All').map((category) => {
                const count = publications.filter((p) => p.category === category).length;
                return (
                  <div
                    key={category}
                    className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
                  >
                    <div className="text-3xl mb-2">📄</div>
                    <h3 className="font-bold text-crs-dark">{category}</h3>
                    <p className="text-sm text-gray-600">{count} publications</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-crs-dark text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact us for additional publications, data requests, or technical information.
            </p>
            <a
              href="/contact"
              className="inline-block bg-crs-gold text-crs-dark px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
