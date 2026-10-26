import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('Crop Details', 'In-depth information about crops and cultivation practices.', '/crop-details');

export default function CropDetailsPage() {
  const crops = [
    { name: 'Wheat', season: 'Winter', area: 'Major crop' },
    { name: 'Barley', season: 'Winter', area: 'Secondary crop' },
    { name: 'Maize', season: 'Summer', area: 'Major crop' },
    { name: 'Cotton', season: 'Summer', area: 'Cash crop' },
    { name: 'Pulses', season: 'Winter', area: 'Legumes' },
    { name: 'Oilseeds', season: 'Seasonal', area: 'Cash crop' },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Crop Details</h1>
            <p className="text-gray-200">In-depth information about crops and cultivation practices</p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-crs-dark mb-8">Major Crops</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {crops.map((crop, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold text-crs-dark mb-3">{crop.name}</h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-semibold text-gray-700">Season: </span>
                      <span className="text-gray-600">{crop.season}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-gray-700">Category: </span>
                      <span className="text-gray-600">{crop.area}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-crs-dark mb-8">Crop Information</h2>
            <div className="space-y-6">
              {['Cultivation Practices', 'Varieties & Cultivars', 'Seasonal Requirements', 'Pest & Disease Management'].map(
                (item) => (
                  <div
                    key={item}
                    className="bg-white border border-gray-200 rounded-lg p-6"
                  >
                    <h3 className="text-lg font-bold text-crs-dark mb-2">{item}</h3>
                    <p className="text-gray-600">
                      Detailed information and guidelines for {item.toLowerCase()}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
