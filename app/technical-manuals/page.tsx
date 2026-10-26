import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('Technical Manuals', 'Technical documentation and manuals from CRS.', '/technical-manuals');

export default function TechnicalManualsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Technical Manuals</h1>
            <p className="text-gray-200">Technical documentation and operational guidelines</p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Survey Methodology Manual',
                'GIS and Mapping Guide',
                'Data Collection Procedures',
                'Quality Control Guidelines',
                'Report Generation Guide',
                'Database Manual',
              ].map((manual) => (
                <div key={manual} className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="font-bold text-crs-dark">{manual}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
