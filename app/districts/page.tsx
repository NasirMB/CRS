'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DistrictCard from '@/components/DistrictCard';
import { districts } from '@/lib/data';
import { useState, useMemo } from 'react';

export default function DistrictsPage() {
  const [selectedDivision, setSelectedDivision] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

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

  return (
    <>
      <Header />
      <main>
        {/* Header Section */}
        <section className="bg-crs-primary text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Balochistan Districts</h1>
            <p className="text-gray-200 italic">
              District list and codes require CRS/client verification before publication.
            </p>
          </div>
        </section>

        {/* Filters and Districts */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            {/* Filters */}
            <div className="mb-8 space-y-4">
              {/* Search */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Search Districts
                </label>
                <input
                  type="text"
                  placeholder="Search by name or code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-crs-primary focus:ring-1 focus:ring-crs-primary"
                />
              </div>

              {/* Division Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Filter by Division
                </label>
                <div className="flex flex-wrap gap-2">
                  {uniqueDivisions.map((division) => (
                    <button
                      key={division}
                      onClick={() => setSelectedDivision(division)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedDivision === division
                          ? 'bg-crs-primary text-white'
                          : 'bg-white border border-gray-300 text-gray-700 hover:border-crs-primary'
                      }`}
                    >
                      {division}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Districts Grid */}
            <div className="mb-4 text-sm text-gray-600">
              Showing {filteredDistricts.length} of {districts.length} districts
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDistricts.map((district) => (
                <DistrictCard
                  key={district.id}
                  id={district.id}
                  name={district.name}
                  division={district.division}
                  code={district.code}
                />
              ))}
            </div>

            {filteredDistricts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No districts found matching your search.</p>
              </div>
            )}
          </div>
        </section>

        {/* Division Overview */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-crs-dark mb-8">Divisions Overview</h2>
            <div className="space-y-4">
              {uniqueDivisions.filter((d) => d !== 'All').map((division) => {
                const divisionDistricts = districts.filter((d) => d.division === division);
                return (
                  <div
                    key={division}
                    className="bg-white border border-gray-200 rounded-lg p-6"
                  >
                    <h3 className="text-xl font-bold text-crs-dark mb-2">{division}</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {divisionDistricts.length} districts
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {divisionDistricts.map((district) => (
                        <span
                          key={district.id}
                          className="inline-block bg-crs-sage text-crs-dark px-3 py-1 rounded text-sm"
                        >
                          {district.name}
                        </span>
                      ))}
                    </div>
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
