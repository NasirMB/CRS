import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('Yield Estimation', 'Crop yield prediction and analysis services.', '/yield-estimation');

export default function YieldEstimationPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Yield Estimation</h1>
            <p className="text-gray-200">Prediction and analysis of crop yields based on field data</p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-crs-dark mb-4">Crop Cutting Survey</h2>
                <p className="text-gray-700 mb-4">
                  Systematic crop cutting and sampling at harvest time to measure actual yield and
                  validate production estimates.
                </p>
              </div>

              <div className="bg-crs-sage p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-crs-dark mb-4">Key Parameters</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Plant Density', 'Grain/Fruit Quality', 'Harvest Losses', 'Sample Size'].map(
                    (param) => (
                      <div key={param} className="bg-white p-4 rounded">
                        <p className="font-semibold text-crs-dark">{param}</p>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-crs-dark mb-4">Analysis Methods</h2>
                <ul className="space-y-3">
                  {[
                    'Statistical analysis of sample data',
                    'Regression modeling',
                    'Temporal trend analysis',
                    'Spatial variation assessment',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-crs-gold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
