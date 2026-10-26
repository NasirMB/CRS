import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('Harvest Prices', 'Market prices and economic data for agricultural commodities.', '/harvest-prices');

export default function HarvestPricesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Harvest Prices</h1>
            <p className="text-gray-200">Market prices and economic data for agricultural commodities</p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="space-y-8">
              <p className="text-gray-700">
                Current market prices and economic information for harvested crops across Balochistan.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {['Market Prices', 'Price Trends', 'Price Comparisons'].map((cat) => (
                  <div key={cat} className="bg-crs-sage p-6 rounded-lg text-center">
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
