'use client';

import { useState, useMemo } from 'react';
import { districts } from '@/lib/data';
import BalochistanMap from './BalochistanMap';
import { Search, X } from 'lucide-react';
import Link from 'next/link';

export default function DistrictMapSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('All');
  const [selectedDistrict, setSelectedDistrict] = useState<typeof districts[0] | null>(
    null
  );

  const uniqueDivisions = ['All', ...new Set(districts.map((d) => d.division))];

  const filteredDistricts = useMemo(() => {
    return districts.filter((district) => {
      const matchesSearch =
        district.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        district.code.toString().includes(searchQuery);
      const matchesDivision =
        selectedDivision === 'All' || district.division === selectedDivision;
      return matchesSearch && matchesDivision;
    });
  }, [searchQuery, selectedDivision]);

  const activeFilterLabel = selectedDivision === 'All' ? 'All Divisions' : selectedDivision;

  return (
    <section className="section-space bg-[#f7faf6]">
      <div className="page-shell">
        <div className="mb-12">
          <h2 className="section-title mb-3">Balochistan Districts</h2>
          <div className="w-16 h-1 bg-crs-gold mb-4"></div>
          <p className="section-kicker mb-2">
            District Intelligence
          </p>
          <p className="text-gray-600 mb-2 text-sm italic font-medium">
            District list and codes require CRS/client verification before publication.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6">
          <div>
            <div className="surface-card overflow-hidden p-2 md:p-3">
              <div className="rounded-xl overflow-hidden">
                <BalochistanMap
                  onMarkerClick={(marker) => {
                    const district = districts.find((d) => d.code === marker.code);
                    if (district) setSelectedDistrict(district);
                  }}
                />
              </div>
            </div>

            <div className="surface-card mt-5 p-5 md:p-6">
              <div className="relative">
                <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search district name or code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 h-12 border border-gray-300 rounded-xl focus:outline-none focus:border-crs-primary focus:ring-2 focus:ring-crs-primary/20"
                />
              </div>

              <div className="mt-4">
                <label className="text-sm font-semibold text-gray-700 block mb-2">
                  Filter by Division
                </label>
                <div className="flex flex-wrap gap-2 mb-4">
                  {uniqueDivisions.map((division) => (
                    <button
                      key={division}
                      onClick={() => setSelectedDivision(division)}
                      className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-7 sm:py-3.5 rounded-full font-semibold sm:font-bold text-sm sm:text-base whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-crs-gold ${
                        selectedDivision === division
                          ? 'bg-crs-gold text-crs-dark shadow-[0_12px_24px_rgba(217,130,25,0.35)]'
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-[#e79a36] hover:text-crs-dark hover:shadow-[0_14px_28px_rgba(217,130,25,0.42)]'
                      }`}
                    >
                      {division}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-2 rounded-xl bg-[#f3f7ef] border border-[#d8e2d4] px-3 py-2.5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">Active Filter</span>
                  <span className="text-sm font-semibold text-crs-dark">{activeFilterLabel}</span>
                  <span className="text-sm text-gray-500">|</span>
                  <span className="text-sm text-gray-700">{filteredDistricts.length} district(s)</span>
                  {(selectedDivision !== 'All' || searchQuery) && (
                    <button
                      className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-crs-primary hover:text-crs-dark"
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedDivision('All');
                      }}
                    >
                      <X className="w-3.5 h-3.5" />
                      Clear Filters
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="surface-card p-5 md:p-6 mb-5">
              <h3 className="text-sm uppercase tracking-[0.16em] text-crs-primary font-semibold mb-2">
                Selected District
              </h3>
              {selectedDistrict ? (
                <>
                  <div className="rounded-xl border border-[#d8e2d4] bg-[#f3f7ef] p-4 mb-4">
                    <h4 className="font-bold text-xl text-crs-dark">{selectedDistrict.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{selectedDistrict.division}</p>
                    <p className="text-xs text-gray-500 mt-2">Code: {selectedDistrict.code}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="rounded-lg border border-[#d8e2d4] bg-white p-3">
                      <p className="text-[11px] uppercase tracking-wide text-gray-500">Update Cycle</p>
                      <p className="text-sm font-semibold text-crs-dark mt-1">Seasonal</p>
                    </div>
                    <div className="rounded-lg border border-[#d8e2d4] bg-white p-3">
                      <p className="text-[11px] uppercase tracking-wide text-gray-500">Status</p>
                      <p className="text-sm font-semibold text-crs-dark mt-1">Active</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      href={`/districts/${selectedDistrict.code}`}
                      className="flex-1 bg-crs-primary text-white py-3 rounded-xl font-semibold text-sm hover:bg-crs-dark transition-colors text-center block"
                    >
                      View District Profile
                    </Link>
                    <button
                      className="sm:w-auto px-4 py-3 rounded-xl border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                      onClick={() => setSelectedDistrict(null)}
                    >
                      Reset
                    </button>
                  </div>
                </>
              ) : (
                <div className="rounded-xl border border-dashed border-[#c9d8c4] bg-[#f9fcf7] p-5 text-sm text-gray-600">
                  Click any map marker or district from the list to view details.
                </div>
              )}
            </div>

            <div className="surface-card p-4 md:p-5">
              <h3 className="font-bold text-crs-dark mb-3">District List ({filteredDistricts.length})</h3>
              <div className="max-h-[28rem] overflow-y-auto space-y-2 pr-1">
                {filteredDistricts.map((district) => (
                  <button
                    key={district.id}
                    onClick={() => setSelectedDistrict(district)}
                    className={`w-full text-left px-3 py-3 rounded-lg transition-colors text-sm ${
                      selectedDistrict?.id === district.id
                        ? 'bg-crs-primary text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <div className="font-semibold">{district.name}</div>
                    <div className="text-xs opacity-75">{district.division}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
