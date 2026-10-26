import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('Land Use', 'Land use classification and analysis.', '/land-use');

export default function LandUsePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Land Use</h1>
            <p className="text-gray-200">Analysis of land utilization patterns across Balochistan</p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="space-y-8">
              <p className="text-gray-700">
                Comprehensive land use classification using satellite imagery and ground surveys.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Cultivated Area', 'Forest Cover', 'Built-up Area', 'Barren Land', 'Water Bodies', 'Pasture Land'].map((cat) => (
                  <div key={cat} className="bg-crs-sage p-4 rounded-lg text-center">
                    <p className="font-bold text-crs-dark text-sm">{cat}</p>
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
