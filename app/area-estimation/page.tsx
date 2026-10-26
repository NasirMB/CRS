import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('Area Estimation', 'Accurate crop area measurement and estimation services.', '/area-estimation');

export default function AreaEstimationPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Area Estimation</h1>
            <p className="text-gray-200">Accurate measurement and estimation of cultivated areas</p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-crs-dark mb-8">Methodology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6">
                  CRS uses advanced surveying techniques and geospatial technologies to provide
                  accurate area estimation for all crops across Balochistan.
                </p>
                <ul className="space-y-3">
                  {[
                    'Multi-stage stratified sampling',
                    'Field measurement and verification',
                    'Satellite imagery analysis',
                    'GIS-based area calculation',
                    'Quality control procedures',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-crs-gold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-crs-sage rounded-lg p-8">
                <h3 className="text-2xl font-bold text-crs-dark mb-4">Coverage Areas</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">
                    <span className="font-semibold">Districts:</span> All 34 districts of Balochistan
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Crops:</span> All major and minor crops
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Frequency:</span> Bi-annual surveys
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Accuracy:</span> Within 5-10% margin
                  </p>
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
