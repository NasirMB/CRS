import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { surveyTypes } from '@/lib/data';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('Surveys', 'Information about CRS survey programs and methodologies.', '/surveys');

export default function SurveysPage() {
  return (
    <>
      <Header />
      <main>
        {/* Header Section */}
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Survey Programs</h1>
            <p className="text-gray-200">Comprehensive field surveys across Balochistan</p>
          </div>
        </section>

        {/* Survey Types */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-crs-dark mb-8">Survey Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {surveyTypes.map((survey, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-crs-sage to-white border border-crs-sage rounded-lg p-8 text-center"
                >
                  <div className="text-4xl mb-3">📋</div>
                  <h3 className="text-xl font-bold text-crs-dark mb-2">{survey.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{survey.description}</p>
                  <div className="inline-block bg-crs-primary text-white px-4 py-2 rounded text-sm font-semibold">
                    {survey.season}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Survey Methodology */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-crs-dark mb-8">Survey Methodology</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Multi-stage Sampling',
                  description:
                    'Statistically sound sampling design ensures accurate representation',
                },
                {
                  title: 'Field Enumeration',
                  description: 'Trained enumerators conduct systematic field data collection',
                },
                {
                  title: 'Quality Control',
                  description:
                    'Regular supervision and verification ensure data quality and accuracy',
                },
                {
                  title: 'Data Processing',
                  description: 'Advanced analytical tools process and validate field data',
                },
                {
                  title: 'Report Generation',
                  description:
                    'Comprehensive statistical reports produced for each survey cycle',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border-l-4 border-crs-gold rounded-lg p-6"
                >
                  <h3 className="text-lg font-bold text-crs-dark mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Survey Schedule */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-crs-dark mb-8">Survey Schedule</h2>
            <div className="bg-crs-dark text-white rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
                {[
                  { season: 'Spring', period: 'March - May', activity: 'Summer Crop Survey' },
                  { season: 'Summer', period: 'June - August', activity: 'Crop Monitoring' },
                  { season: 'Autumn', period: 'September - November', activity: 'Winter Crop Survey' },
                  { season: 'Winter', period: 'December - February', activity: 'Crop Cutting Survey' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-crs-primary p-4 rounded border border-crs-primary"
                  >
                    <h4 className="font-bold mb-2">{item.season}</h4>
                    <p className="text-sm text-gray-200 mb-2">{item.period}</p>
                    <p className="text-xs text-gray-300">{item.activity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Survey Forms CTA */}
        <section className="py-12 bg-crs-sage">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-crs-dark mb-4">Survey Forms & Documents</h2>
            <p className="text-gray-700 mb-6">
              Access survey forms, guidelines, and technical documents.
            </p>
            <a
              href="/survey-forms"
              className="inline-block bg-crs-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-crs-dark transition-colors"
            >
              Download Survey Forms
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
