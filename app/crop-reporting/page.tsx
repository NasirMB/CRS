import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('Crop Reporting', 'Comprehensive crop reporting services and statistics.', '/crop-reporting');

export default function CropReportingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Crop Reporting</h1>
            <p className="text-gray-200">
              Comprehensive reporting on crop cultivation and agricultural trends
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-crs-dark mb-4">Overview</h2>
                <p className="text-gray-700 mb-4">
                  CRS provides comprehensive crop reporting services based on systematic surveys
                  conducted across all districts of Balochistan. Our reports include detailed
                  information on crop cultivation patterns, production statistics, and
                  agricultural trends.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-crs-dark mb-4">Data Coverage</h2>
                <ul className="space-y-3">
                  {[
                    'Crop acreage and distribution',
                    'Production figures by district',
                    'Seasonal crop patterns',
                    'Crop varieties and cultivars',
                    'Yield per unit area',
                    'Agricultural land utilization',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-crs-gold mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-crs-sage p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-crs-dark mb-4">Key Reports</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Seasonal Crop Report',
                    'Annual Crop Statistics',
                    'District-wise Production Report',
                    'Crop Variety Report',
                  ].map((report) => (
                    <div key={report} className="bg-white p-4 rounded border border-gray-200">
                      <p className="font-semibold text-crs-dark">{report}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
