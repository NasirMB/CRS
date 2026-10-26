import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('Info Desk', 'Frequently asked questions and information resources from CRS.', '/info-desk');

export default function InfoDeskPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Info Desk</h1>
            <p className="text-gray-200">Information and resources for agricultural professionals</p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-crs-sage rounded-lg p-8">
                <h2 className="text-2xl font-bold text-crs-dark mb-4">Quick Resources</h2>
                <ul className="space-y-3">
                  {[
                    'Frequently Asked Questions',
                    'Balochistan Districts At A Glance',
                    'Current Crops Statistics',
                    'Technical Manuals',
                    'Survey Forms',
                    'Calendar of Activities',
                  ].map((item) => (
                    <li key={item} className="text-gray-700">
                      <a href="#" className="text-crs-primary hover:text-crs-gold font-semibold">
                        → {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-crs-sand rounded-lg p-8">
                <h2 className="text-2xl font-bold text-crs-dark mb-4">Services</h2>
                <ul className="space-y-3">
                  {[
                    'Data Request & Inquiry',
                    'Custom Reports',
                    'Technical Consultation',
                    'Training Programs',
                    'Publication Access',
                    'Map & Chart Services',
                  ].map((item) => (
                    <li key={item} className="text-gray-700">
                      <a href="#" className="text-crs-primary hover:text-crs-gold font-semibold">
                        → {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-crs-dark mb-6">Common Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'How often are surveys conducted?',
                    a: 'CRS conducts bi-annual surveys covering all districts during spring and autumn seasons.',
                  },
                  {
                    q: 'How can I request agricultural data?',
                    a: 'You can submit a data request through our contact form or email us directly.',
                  },
                  {
                    q: 'What is the accuracy of CRS estimates?',
                    a: 'Our estimates maintain 5-10% accuracy margin through systematic sampling and quality control.',
                  },
                  {
                    q: 'Are publications available online?',
                    a: 'Yes, all major reports and technical manuals are available in our publications section.',
                  },
                ].map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                    <h3 className="font-bold text-crs-dark mb-2">{item.q}</h3>
                    <p className="text-gray-700">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 bg-crs-dark text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-gray-300 mb-6">Get in touch with our team for more information.</p>
              <Link
                href="/contact"
                className="inline-block bg-crs-gold text-crs-dark px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
