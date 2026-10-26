import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('About Us', 'Learn about Crop Reporting Services (CRS), its mission, and its role in Balochistan.', '/about-us');

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Header Section */}
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">About CRS</h1>
            <p className="text-gray-200">
              Directorate General of Crop Reporting Services, Agriculture and Cooperatives
              Department Balochistan, Government of Balochistan
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-crs-sage rounded-lg p-8">
                <h2 className="text-2xl font-bold text-crs-dark mb-4">Our Mission</h2>
                <p className="text-gray-700">
                  To provide timely, accurate, and reliable agricultural statistics and data
                  through systematic surveys, advanced geospatial technologies, and professional
                  expertise to support evidence-based decision-making by farmers, policymakers,
                  and agricultural professionals in Balochistan.
                </p>
              </div>

              <div className="bg-crs-sand rounded-lg p-8">
                <h2 className="text-2xl font-bold text-crs-dark mb-4">Our Vision</h2>
                <p className="text-gray-700">
                  To be a leading source of agricultural intelligence and data-driven insights
                  that contribute to sustainable agricultural development, increased productivity,
                  and improved livelihood of farming communities in Balochistan.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h2 className="text-3xl font-bold text-crs-dark mb-8">Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Accuracy', description: 'Precise data collection and reporting' },
                  { title: 'Transparency', description: 'Open and honest communication' },
                  { title: 'Integrity', description: 'Ethical practices in all operations' },
                  { title: 'Excellence', description: 'Continuous improvement and quality' },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-6 text-center"
                  >
                    <div className="text-3xl mb-3">✓</div>
                    <h3 className="font-bold text-crs-dark mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Functions and Responsibilities */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-crs-dark mb-8">Functions & Responsibilities</h2>
            <div className="space-y-4">
              {[
                'Conduct systematic crop surveys across all districts of Balochistan',
                'Collect and analyze comprehensive agricultural data',
                'Estimate crop area, production, and yield using modern surveying techniques',
                'Maintain GIS databases and produce thematic maps',
                'Monitor crop health using satellite imagery and remote sensing',
                'Provide agricultural statistics and market intelligence',
                'Support policy formulation through evidence-based data',
                'Strengthen agricultural intelligence infrastructure',
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border-l-4 border-crs-gold rounded p-4 flex items-center gap-4"
                >
                  <span className="text-crs-gold text-xl">•</span>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Organization Structure */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-crs-dark mb-8">Organization Structure</h2>
            <div className="bg-crs-dark rounded-lg p-8 text-white">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold">Directorate General</h3>
                <p className="text-gray-300">Crop Reporting Services, Balochistan</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-crs-primary p-4 rounded">
                  <h4 className="font-bold mb-3">Field Operations</h4>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Survey Teams</li>
                    <li>• Data Collectors</li>
                    <li>• Field Supervisors</li>
                    <li>• District Offices</li>
                  </ul>
                </div>

                <div className="bg-crs-primary p-4 rounded">
                  <h4 className="font-bold mb-3">Data Management</h4>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Database Administration</li>
                    <li>• GIS & Mapping</li>
                    <li>• Remote Sensing</li>
                    <li>• Statistical Analysis</li>
                  </ul>
                </div>

                <div className="bg-crs-primary p-4 rounded">
                  <h4 className="font-bold mb-3">Technical Support</h4>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• IT Infrastructure</li>
                    <li>• Equipment Management</li>
                    <li>• Technical Training</li>
                    <li>• Quality Assurance</li>
                  </ul>
                </div>

                <div className="bg-crs-primary p-4 rounded">
                  <h4 className="font-bold mb-3">Administration</h4>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Finance & Budget</li>
                    <li>• Human Resources</li>
                    <li>• Public Relations</li>
                    <li>• Documentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-crs-dark mb-8">Headquarters Location</h2>
            <div className="rounded-lg overflow-hidden shadow-lg">
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
            <div className="mt-6 bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-crs-dark mb-2">Directorate General</h3>
              <div className="text-gray-700 space-y-1">
                <p>Crop Reporting Services</p>
                <p>Rani Bagh, Sariyab Road</p>
                <p>Quetta, Balochistan</p>
                <p>Email: contact.crs@balochistan.gov.pk</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
