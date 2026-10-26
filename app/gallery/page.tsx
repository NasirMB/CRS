import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { galleryImages } from '@/lib/data';
import { createPageMetadata } from '@/lib/seo';
import Image from 'next/image';

export const metadata = createPageMetadata('Gallery', 'Photo gallery of CRS field work and agricultural activities.', '/gallery');

export default function GalleryPage() {
  const categories = ['All', ...new Set(galleryImages.map((g) => g.category))];

  return (
    <>
      <Header />
      <main>
        {/* Header Section */}
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Photo Gallery</h1>
            <p className="text-gray-200">Field work and agricultural activities</p>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            {/* Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 rounded-full bg-crs-primary text-white text-sm font-medium hover:bg-crs-dark transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((image) => (
                <article
                  key={image.id}
                  className="surface-card overflow-hidden"
                >
                  <div className="relative aspect-[4/3] bg-crs-sage">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-crs-dark">{image.title}</p>
                    <p className="text-sm text-gray-600">{image.category}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Overview */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-crs-dark mb-8">Gallery Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories
                .filter((c) => c !== 'All')
                .map((category) => {
                  const count = galleryImages.filter((g) => g.category === category).length;
                  return (
                    <div
                      key={category}
                      className="bg-white border border-gray-200 rounded-lg p-6 text-center"
                    >
                      <h3 className="font-bold text-crs-dark text-lg mb-2">{category}</h3>
                      <p className="text-gray-600">{count} images</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
