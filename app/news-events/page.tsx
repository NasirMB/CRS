import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { newsAndEvents } from '@/lib/data';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata('News and Events', 'Latest news, announcements, and events from CRS.', '/news-events');

export default function NewsEventsPage() {
  const events = newsAndEvents.filter((item) => item.type === 'Event');
  const news = newsAndEvents.filter((item) => item.type === 'News');

  return (
    <>
      <Header />
      <main>
        {/* Header Section */}
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">News & Events</h1>
            <p className="text-gray-200">Latest updates and announcements from CRS</p>
          </div>
        </section>

        {/* All Items */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-crs-dark mb-8">All Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newsAndEvents.map((item) => (
                <NewsCard
                  key={item.id}
                  title={item.title}
                  type={item.type}
                  date={item.date}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        {events.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-crs-dark mb-8">Upcoming Events</h2>
              <div className="space-y-4">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white border-l-4 border-crs-gold rounded-lg p-6"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-crs-dark">{event.title}</h3>
                      <span className="text-xs font-semibold px-3 py-1 rounded bg-crs-gold text-white">
                        Event
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* News Section */}
        {news.length > 0 && (
          <section className="py-12 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-crs-dark mb-8">Latest News</h2>
              <div className="space-y-4">
                {news.map((newsItem) => (
                  <div
                    key={newsItem.id}
                    className="bg-white border-l-4 border-blue-400 rounded-lg p-6 border border-gray-200"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-crs-dark">{newsItem.title}</h3>
                      <span className="text-xs font-semibold px-3 py-1 rounded bg-blue-100 text-blue-800">
                        News
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">
                      {new Date(newsItem.date).toLocaleDateString()}
                    </p>
                    <p className="text-gray-700">{newsItem.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Notification Signup */}
        <section className="py-12 bg-crs-sage">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-crs-dark mb-4">Stay Updated</h2>
            <p className="text-gray-700 mb-6">
              Subscribe to receive updates on latest events and news from CRS.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-crs-primary"
              />
              <button className="bg-crs-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-crs-dark transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
