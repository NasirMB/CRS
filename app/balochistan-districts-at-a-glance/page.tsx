import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { districts } from '@/lib/data';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('Balochistan Districts at a Glance', 'Overview of Balochistan districts represented in CRS district information.', '/balochistan-districts-at-a-glance');

export default function DistrictsGlancePage() {
  const divisions = [...new Set(districts.map((d) => d.division))];

  return (
    <>
      <Header />
      <main>
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Balochistan Districts At A Glance</h1>
            <p className="text-gray-200">Overview of all administrative divisions</p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8">
              <p className="text-gray-700 mb-6">
                Balochistan province is divided into {divisions.length} divisions and {districts.length} districts.
              </p>
            </div>

            <div className="space-y-8">
              {divisions.map((division) => {
                const divisionDistricts = districts.filter((d) => d.division === division);
                return (
                  <div key={division} className="bg-crs-sage rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-crs-dark mb-4">{division}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {divisionDistricts.map((district) => (
                        <div key={district.id} className="bg-white p-4 rounded border border-gray-200">
                          <p className="font-semibold text-crs-dark">{district.name}</p>
                          <p className="text-xs text-gray-500">Code: {district.code}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-sm text-blue-800 italic">
                District list and codes require CRS/client verification before publication.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
