import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PublicationCardProps {
  title: string;
  category: string;
  date?: string;
  href: string;
}

export default function PublicationCard({
  title,
  category,
  date,
  href,
}: PublicationCardProps) {
  return (
    <Link
      href={href}
      className="surface-card grain-panel p-7 hover:shadow-lg hover:border-crs-primary hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crs-primary/35 transition-all duration-300 group h-full flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-crs-sage text-crs-dark">
          {category}
        </span>
        {date && (
          <span className="text-xs text-gray-500 font-medium">{new Date(date).toLocaleDateString()}</span>
        )}
      </div>
      <h3 className="text-lg font-bold text-crs-dark mb-4 line-clamp-2 group-hover:text-crs-primary transition-colors flex-grow">{title}</h3>
      <div className="text-crs-primary font-semibold text-sm group-hover:text-crs-gold transition-colors flex items-center gap-1">
        Read More <ChevronRight className="w-4 h-4" />
      </div>
    </Link>
  );
}
