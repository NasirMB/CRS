import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { coreServices } from '@/lib/data';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('Services', 'Explore CRS services including crop reporting, GIS mapping, and agricultural data.', '/services');

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Header Section */}
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Our Services</h1>
            <p className="text-gray-200">
              Comprehensive agricultural data and monitoring solutions for informed decision-making
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-crs-dark mb-8">Service Overview</h2>
            <div className="space-y-6">
              {coreServices.slice(0, 5).map((service, index) => (
                <div
                  key={service.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 flex gap-4"
                >
                  <div className="text-4xl flex-shrink-0">{service.icon}</div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-crs-dark mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
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
