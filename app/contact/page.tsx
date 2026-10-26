import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactFormSection from '@/components/ContactFormSection';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('Contact Us', 'Contact the Directorate General of Crop Reporting Services for inquiries and information.', '/contact');

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Header Section */}
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
            <p className="text-gray-200">
              Have questions? We&apos;d love to hear from you. Get in touch with the Directorate
              General of Crop Reporting Services.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Address */}
              <div className="bg-crs-sage rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">📍</div>
                <h3 className="font-bold text-crs-dark mb-2">Address</h3>
                <p className="text-sm text-gray-700">
                  Rani Bagh, Sariyab Road
                  <br />
                  Quetta, Balochistan
                </p>
              </div>

              {/* Email */}
              <div className="bg-crs-sage rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">✉️</div>
                <h3 className="font-bold text-crs-dark mb-2">Email</h3>
                <p className="text-sm text-gray-700">
                  <a
                    href="mailto:contact.crs@balochistan.gov.pk"
                    className="text-crs-primary hover:text-crs-gold"
                  >
                    contact.crs@balochistan.gov.pk
                  </a>
                </p>
              </div>

              {/* Website */}
              <div className="bg-crs-sage rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">🌐</div>
                <h3 className="font-bold text-crs-dark mb-2">Website</h3>
                <p className="text-sm text-gray-700">crs.balochistan.gov.pk</p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg mb-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.2824955960723!2d66.99120287620477!3d30.17192331251843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed2e1ea2ce24efd%3A0x41fc08d3cedf7ae!2sCRS%20Headquarter%20Quetta!5e0!3m2!1sen!2sau!4v1777990212539!5m2!1sen!2sau"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactFormSection />

        {/* Quick Links */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-crs-dark mb-8">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/services"
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow text-center"
              >
                <p className="text-crs-primary font-semibold">Services</p>
              </Link>
              <Link
                href="/districts"
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow text-center"
              >
                <p className="text-crs-primary font-semibold">Districts</p>
              </Link>
              <Link
                href="/publications"
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow text-center"
              >
                <p className="text-crs-primary font-semibold">Publications</p>
              </Link>
              <Link
                href="/about-us"
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow text-center"
              >
                <p className="text-crs-primary font-semibold">About Us</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
