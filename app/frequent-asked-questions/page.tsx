import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata(
  'Frequently Asked Questions',
  'Frequently asked questions about Crop Reporting Services (CRS).',
  '/frequent-asked-questions',
);

export default function FAQPage() {
  const faqs = [
    {
      q: 'What is CRS?',
      a: 'Crop Reporting Services is the official government agency responsible for collecting and analyzing agricultural statistics.',
    },
    {
      q: 'How can I request data?',
      a: 'You can submit data requests through our contact form or email us directly at contact.crs@balochistan.gov.pk',
    },
    {
      q: 'Are your reports accurate?',
      a: 'Yes, our surveys maintain 5-10% accuracy through systematic sampling and quality control procedures.',
    },
    {
      q: 'How often are surveys conducted?',
      a: 'We conduct bi-annual surveys during spring and autumn seasons across all districts.',
    },
    {
      q: 'Can I access historical data?',
      a: 'Yes, historical data is available through our publications and data request services.',
    },
    {
      q: 'What is the coverage area?',
      a: 'All 34 districts of Balochistan are covered in our surveys and data collection activities.',
    },
  ];

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData).replace(/</g, '\\u003c') }}
      />
      <main>
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
            <p className="text-gray-200">Common questions about CRS services</p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 cursor-pointer"
                >
                  <summary className="font-bold text-crs-dark hover:text-crs-primary">
                    {faq.q}
                  </summary>
                  <p className="text-gray-700 mt-3">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
