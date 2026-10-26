interface NewsCardProps {
  title: string;
  type: 'News' | 'Event';
  date: string;
  description: string;
}

export default function NewsCard({
  title,
  type,
  date,
  description,
}: NewsCardProps) {
  const badgeColor = type === 'Event' ? 'bg-crs-gold text-white' : 'bg-crs-sage text-crs-dark';

  return (
    <article className="surface-card grain-panel p-7 hover:shadow-lg hover:border-crs-primary transition-all duration-300 group h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${badgeColor}`}>
          {type}
        </span>
        <span className="text-xs text-gray-500 font-medium">{new Date(date).toLocaleDateString()}</span>
      </div>
      <h3 className="text-xl font-bold text-crs-dark mb-3 group-hover:text-crs-primary transition-colors">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-grow">{description}</p>
    </article>
  );
}
