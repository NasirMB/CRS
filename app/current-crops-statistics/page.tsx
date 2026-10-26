import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('Current Crop Statistics', 'Latest crop statistics and data.', '/current-crops-statistics');

export default function CropStatisticsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Current Crops Statistics</h1>
            <p className="text-gray-200">Latest agricultural statistics and data</p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="space-y-8">
              <p className="text-gray-700">
                Latest statistics on crop cultivation, production, and agricultural trends across Balochistan.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {['Total Crop Area', 'Production Volume', 'Yield per Acre', 'Price Index'].map((stat) => (
                  <div key={stat} className="bg-crs-sage p-6 rounded-lg text-center">
                    <p className="font-bold text-crs-dark">{stat}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-crs-dark mb-4">Data by Crop</h3>
                <div className="space-y-3">
                  {['Wheat', 'Maize', 'Barley', 'Cotton', 'Pulses'].map((crop) => (
                    <div key={crop} className="flex justify-between p-3 bg-gray-50 rounded">
                      <span className="font-semibold text-gray-700">{crop}</span>
                      <span className="text-gray-600">View Details</span>
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
