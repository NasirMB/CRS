import Link from 'next/link';
import type { ComponentType } from 'react';
import {
  BadgeDollarSign,
  BarChart3,
  CircleDollarSign,
  CloudSun,
  Map,
  Ruler,
  Satellite,
  Tractor,
  TrendingUp,
  Wheat,
} from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  icon,
}: ServiceCardProps) {
  const icons: Record<string, ComponentType<{ className?: string }>> = {
    'bar-chart-3': BarChart3,
    wheat: Wheat,
    ruler: Ruler,
    'trending-up': TrendingUp,
    tractor: Tractor,
    map: Map,
    'circle-dollar-sign': CircleDollarSign,
    'badge-dollar-sign': BadgeDollarSign,
    'cloud-sun': CloudSun,
    satellite: Satellite,
  };

  const ServiceIcon = icons[icon] || BarChart3;
  const serviceTagByIcon: Record<string, string> = {
    'bar-chart-3': 'Reporting',
    wheat: 'Crop Data',
    ruler: 'Estimation',
    'trending-up': 'Forecast',
    tractor: 'Mechanization',
    map: 'Land Use',
    'circle-dollar-sign': 'Economics',
    'badge-dollar-sign': 'Market',
    'cloud-sun': 'Climate',
    satellite: 'GIS',
  };
  const serviceTag = serviceTagByIcon[icon] || 'Service';

  return (
    <Link
      href={href}
      className="surface-card grain-panel p-6 md:p-7 hover:shadow-xl hover:border-crs-primary hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crs-primary/35 transition-all duration-300 h-full flex flex-col group relative overflow-hidden"
    >
      <span className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#174a2a_0%,#d98219_100%)]" />
      <div className="flex items-center justify-between mb-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-crs-sage to-crs-sand text-crs-primary flex items-center justify-center border border-[#d8e2d4] group-hover:from-[#eef5ea] group-hover:to-crs-sand group-hover:text-crs-primary transition-colors shadow-sm">
          <ServiceIcon className="w-6 h-6 stroke-[2.25]" />
        </div>
        <span className="inline-flex items-center rounded-full border border-[#d8e2d4] bg-white/80 px-3 py-1 text-[11px] uppercase tracking-wide font-semibold text-crs-primary">
          {serviceTag}
        </span>
      </div>
      <h3 className="text-xl font-bold text-crs-dark mb-2">{title}</h3>
      <p className="text-gray-600 text-sm flex-grow leading-relaxed line-clamp-3">{description}</p>
      <div className="mt-5 pt-4 border-t border-[#e4eadf] flex items-center justify-between">
        <span className="text-crs-primary font-semibold text-sm group-hover:text-crs-gold transition-colors">
          Learn More
        </span>
        <span className="text-xs text-gray-500 font-medium">CRS Module</span>
      </div>
      <div className="pointer-events-none absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-crs-sand/35 blur-2xl" />
    </Link>
  );
}
