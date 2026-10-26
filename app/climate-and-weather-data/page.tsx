import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('Climate and Weather Data', 'Meteorological information and climate data for agriculture.', '/climate-and-weather-data');

export default function ClimateWeatherPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Climate & Weather Data</h1>
            <p className="text-gray-200">Meteorological information affecting agricultural production</p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="space-y-8">
              <p className="text-gray-700">
                Comprehensive climate and weather data for understanding agricultural conditions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['Temperature Data', 'Rainfall Statistics', 'Humidity & Wind', 'Seasonal Patterns'].map((cat) => (
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
