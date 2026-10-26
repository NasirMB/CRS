import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('Cost of Production', 'Production costs for different crops.', '/cost-of-production');

export default function CostOfProductionPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Cost of Production</h1>
            <p className="text-gray-200">Comprehensive production cost analysis and economic data</p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="space-y-8">
              <p className="text-gray-700">
                Detailed cost analysis for major crops including inputs, labor, and equipment expenses.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {['Input Costs', 'Labor Costs', 'Equipment & Machinery'].map((cat) => (
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
