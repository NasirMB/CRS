import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('Remote Sensing Maps', 'Satellite imagery and remote sensing maps for agriculture.', '/remote-sensing-maps');

export default function RemoteSensingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Remote Sensing Maps</h1>
            <p className="text-gray-200">Satellite imagery and geospatial analysis products</p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="space-y-8">
              <p className="text-gray-700">
                Advanced satellite imagery and remote sensing analysis for crop monitoring and assessment.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['Crop Health Maps', 'Vegetation Indices', 'Change Detection', 'Crop Classification'].map((cat) => (
                  <div key={cat} className="bg-crs-sage p-6 rounded-lg">
                    <p className="font-bold text-crs-dark">{cat}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
