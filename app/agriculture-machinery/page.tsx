import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('Agriculture Machinery', 'Information on agricultural machinery and equipment.', '/agriculture-machinery');

export default function MachineryPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Agriculture Machinery</h1>
            <p className="text-gray-200">Equipment and machinery for farming operations</p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-crs-dark mb-4">Available Equipment</h2>
                <p className="text-gray-700">
                  Information on agricultural machinery and mechanization support for farming operations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['Tractors & Power', 'Tillage Equipment', 'Harvesting Machinery', 'Irrigation Equipment'].map(
                  (cat) => (
                    <div key={cat} className="bg-crs-sage p-6 rounded-lg">
                      <p className="font-bold text-crs-dark">{cat}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
