import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';

interface DistrictCardProps {
  id: number;
  name: string;
  division: string;
  code: number;
}

export default function DistrictCard({
  id: _id,
  name,
  division,
  code,
}: DistrictCardProps) {
  return (
    <Link
      href={`/districts/${code}`}
      className="surface-card grain-panel p-6 hover:shadow-xl hover:border-crs-primary hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crs-primary/35 transition-all duration-300 group h-full block relative overflow-hidden"
    >
      <span className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#174a2a_0%,#d98219_100%)]" />
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-bold text-crs-dark text-xl mb-1">{name}</h3>
          <p className="text-sm text-gray-600">{division}</p>
        </div>
        <MapPin className="w-5 h-5 text-gray-500 group-hover:text-crs-gold transition-colors" />
      </div>
      <div className="mt-4 mb-4 flex flex-wrap gap-2">
        <span className="inline-flex items-center rounded-full bg-[#eef5ea] border border-[#d8e2d4] px-2.5 py-1 text-[11px] font-semibold text-crs-primary">
          Survey
        </span>
        <span className="inline-flex items-center rounded-full bg-[#f9f0dc] border border-[#e8dbc0] px-2.5 py-1 text-[11px] font-semibold text-[#6b4f20]">
          GIS
        </span>
        <span className="inline-flex items-center rounded-full bg-[#f3f7ef] border border-[#d8e2d4] px-2.5 py-1 text-[11px] font-semibold text-gray-700">
          Statistics
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="rounded-lg border border-[#e1e7de] bg-[#f9fcf7] p-2.5">
          <p className="text-[11px] uppercase tracking-wide text-gray-500">Code</p>
          <p className="text-sm font-semibold text-crs-dark mt-0.5">{code}</p>
        </div>
        <div className="rounded-lg border border-[#e1e7de] bg-[#f9fcf7] p-2.5">
          <p className="text-[11px] uppercase tracking-wide text-gray-500">Status</p>
          <p className="text-sm font-semibold text-crs-dark mt-0.5">Active</p>
        </div>
      </div>
      <div className="pt-3 border-t border-[#e4eadf] flex items-center justify-between">
        <span className="text-sm font-semibold text-crs-primary group-hover:text-crs-gold transition-colors">Open Profile</span>
        <ArrowRight className="w-4 h-4 text-crs-primary group-hover:text-crs-gold transition-colors" />
      </div>
    </Link>
  );
}
