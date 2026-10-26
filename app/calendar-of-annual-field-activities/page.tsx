import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('Calendar of Activities', 'Annual CRS field activities calendar.', '/calendar-of-annual-field-activities');

export default function CalendarPage() {
  const months = [
    { month: 'January', activities: 'Winter Crop Monitoring' },
    { month: 'February', activities: 'Winter Crop Survey' },
    { month: 'March', activities: 'Spring Survey Begins' },
    { month: 'April', activities: 'Spring Crop Assessment' },
    { month: 'May', activities: 'Spring Survey Completion' },
    { month: 'June', activities: 'Summer Crop Monitoring' },
    { month: 'July', activities: 'Monsoon Data Collection' },
    { month: 'August', activities: 'Crop Health Assessment' },
    { month: 'September', activities: 'Autumn Survey Begins' },
    { month: 'October', activities: 'Harvest Crop Cutting' },
    { month: 'November', activities: 'Autumn Survey Completion' },
    { month: 'December', activities: 'Data Compilation & Report' },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Calendar of Annual Field Activities</h1>
            <p className="text-gray-200">Schedule of CRS field activities throughout the year</p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {months.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-crs-sage to-white border border-crs-sage rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold text-crs-dark mb-2">{item.month}</h3>
                  <p className="text-gray-700 text-sm">{item.activities}</p>
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
