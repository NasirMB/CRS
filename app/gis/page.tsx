import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('GIS and Remote Sensing', 'Geographic information systems and remote sensing services for agriculture.', '/gis');

export default function GISPage() {
  return (
    <>
      <Header />
      <main>
        {/* Header Section */}
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">GIS & Remote Sensing</h1>
            <p className="text-gray-200">
              Advanced geospatial technology for crop monitoring and agricultural intelligence
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-3xl font-bold text-crs-dark mb-4">GIS Capabilities</h2>
                <p className="text-gray-700 mb-4">
                  Our GIS infrastructure provides comprehensive mapping and spatial analysis tools
                  for agricultural planning and monitoring.
                </p>
                <ul className="space-y-3">
                  {[
                    'Digital map creation and maintenance',
                    'Spatial data management and analysis',
                    'Thematic mapping and visualization',
                    'Land use and land cover classification',
                    'District and sub-district boundary mapping',
                    'Agricultural zone delineation',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-crs-gold mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-crs-primary to-crs-dark rounded-lg flex items-center justify-center py-20 text-white">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-xl font-semibold">GIS System</p>
                  <p className="text-sm text-gray-300 mt-2">Advanced Mapping Platform</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-crs-dark to-crs-primary rounded-lg flex items-center justify-center py-20 text-white">
                <div className="text-center">
                  <div className="text-6xl mb-4">🛰️</div>
                  <p className="text-xl font-semibold">Satellite Imagery</p>
                  <p className="text-sm text-gray-300 mt-2">Remote Sensing Analysis</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-crs-dark mb-4">Remote Sensing</h2>
                <p className="text-gray-700 mb-4">
                  Utilizing satellite imagery and advanced sensors for real-time crop monitoring
                  and agricultural assessment.
                </p>
                <ul className="space-y-3">
                  {[
                    'Crop health monitoring and assessment',
                    'Vegetation index analysis',
                    'Crop identification and mapping',
                    'Damage and stress detection',
                    'Yield estimation support',
                    'Change detection analysis',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-crs-gold mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Products and Services */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-crs-dark mb-8">Products & Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Land Use Maps',
                  description: 'Comprehensive land use and land cover classification maps',
                },
                {
                  title: 'Crop Area Maps',
                  description: 'Detailed crop distribution and area estimation maps',
                },
                {
                  title: 'Vegetation Index',
                  description: 'NDVI and vegetation health monitoring products',
                },
                {
                  title: 'District Maps',
                  description: 'Boundary maps and administrative divisions',
                },
                {
                  title: 'Thematic Maps',
                  description: 'Specialized maps for agricultural planning',
                },
                {
                  title: 'Change Detection',
                  description: 'Land cover change and crop transition analysis',
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6"
                >
                  <h3 className="text-lg font-bold text-crs-dark mb-2">{product.title}</h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-crs-dark mb-8">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/remote-sensing-maps"
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <p className="text-crs-primary font-semibold">Remote Sensing Maps</p>
              </Link>
              <Link
                href="/land-use"
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <p className="text-crs-primary font-semibold">Land Use Classification</p>
              </Link>
              <Link
                href="/crop-details"
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <p className="text-crs-primary font-semibold">Crop Details</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
