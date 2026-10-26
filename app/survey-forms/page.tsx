import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('Survey Forms', 'Survey forms and documents for CRS activities.', '/survey-forms');

export default function SurveyFormsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Survey Forms & Documents</h1>
            <p className="text-gray-200">Download forms and guidelines for survey activities</p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Enumeration Survey Form',
                'Crop Cutting Survey Form',
                'Field Data Sheet',
                'Quality Control Checklist',
                'Supervision Report Form',
                'Survey Guidelines',
              ].map((form) => (
                <div key={form} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md">
                  <p className="font-bold text-crs-dark mb-2">{form}</p>
                  <a href="#" className="text-crs-primary hover:text-crs-gold font-semibold text-sm">
                    Download PDF →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
