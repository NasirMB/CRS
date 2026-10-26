import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import NewsCard from '@/components/NewsCard';
import PublicationCard from '@/components/PublicationCard';
import { Badge } from '@/components/ui/badge';
import {
  coreServices,
  newsAndEvents,
  publications,
  surveyTypes,
} from '@/lib/data';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  Satellite,
  ShieldCheck,
  BarChart3,
  ClipboardList,
  FileSearch,
  Scissors,
} from 'lucide-react';

export const metadata = {
  title: {
    absolute: 'Crop Reporting Services (CRS) | Agriculture & Cooperatives Department, Balochistan',
  },
  description:
    'Official website of Crop Reporting Services (CRS), a directorate of Agriculture and Cooperatives Department Balochistan, Government of Balochistan. Access crop statistics, surveys, district information, GIS services, and agricultural resources.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  const featuredPublications = publications.slice(0, 3);
  const featuredNews = newsAndEvents.slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#071f11_0%,#0f3a22_45%,#1a5835_100%)] text-white py-16 md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(245,230,200,0.18),transparent_32%),radial-gradient(circle_at_85%_0%,rgba(217,130,25,0.22),transparent_28%)]" />
          <div className="page-shell relative z-10">
            <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div className="max-w-2xl">
                <Badge className="bg-crs-sand text-crs-dark border-transparent mb-6">Official CRS Platform</Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-5">
                  Crop Reporting Services (CRS)
                </h1>
                <p className="text-base md:text-lg text-gray-100 leading-relaxed mb-6 max-w-xl">
                  Official government source for district crop reporting, seasonal surveys, and GIS-backed agricultural intelligence.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-crs-gold px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-bold text-crs-dark hover:bg-[#e79a36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crs-gold"
                  >
                    Explore Services <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/districts"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-crs-gold px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-bold text-crs-dark hover:bg-[#e79a36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crs-gold"
                  >
                    View District Profiles <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <Link
                  href="/publications"
                  className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-crs-sand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md px-1 py-0.5"
                >
                  Latest Reports <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="rounded-2xl border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.07))] backdrop-blur-sm p-5 md:p-6">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="rounded-xl border border-white/20 bg-black/15 p-4">
                    <p className="text-[11px] uppercase tracking-wide text-crs-sand">District Coverage</p>
                    <p className="text-3xl font-black mt-1">36+</p>
                  </div>
                  <div className="rounded-xl border border-white/20 bg-black/15 p-4">
                    <p className="text-[11px] uppercase tracking-wide text-crs-sand">Core Services</p>
                    <p className="text-3xl font-black mt-1">10</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="rounded-xl border border-white/20 bg-black/15 p-4">
                    <p className="text-xs font-semibold text-crs-sand mb-2">Seasonal Monitoring</p>
                    <div className="h-2 w-full rounded-full bg-white/20 overflow-hidden">
                      <div className="h-2 w-[78%] rounded-full bg-[repeating-linear-gradient(90deg,#D98219_0_10px,#F2B55B_10px_20px)]" />
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/20 bg-black/15 p-4">
                    <p className="text-xs font-semibold text-crs-sand mb-2">District Reporting Status</p>
                    <div className="h-2 w-full rounded-full bg-white/20 overflow-hidden">
                      <div className="h-2 w-[64%] rounded-full bg-[repeating-linear-gradient(135deg,#D98219_0_8px,#E79A36_8px_16px)]" />
                    </div>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl border border-white/20 bg-black/15 p-3.5 text-sm">
                    <Check className="w-4 h-4 text-crs-gold mt-0.5" />
                    Field-verified statistics and GIS-backed planning support.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                'Official Govt Data',
                '36+ District Coverage',
                'Seasonal Survey Updates',
                'GIS Enabled',
              ].map((item) => (
                <div key={item} className="rounded-lg border border-white/25 bg-white/10 px-3 py-2.5 text-xs md:text-sm font-semibold text-white/95">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-8 pb-4 md:pt-10 md:pb-6 bg-[linear-gradient(180deg,#fffbf3_0%,#ffffff_100%)]">
          <div className="page-shell">
            <div className="surface-card p-5 md:p-6 lg:p-8 mb-6 relative overflow-hidden">
              <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[#f4d8ab]/40 blur-2xl" />
              <div className="flex items-end justify-between gap-4 flex-wrap relative z-10">
                <div>
                  <p className="section-kicker mb-2">Latest Updates</p>
                  <h2 className="section-title mb-3">News and Events</h2>
                  <p className="text-gray-600 text-base md:text-lg max-w-2xl">Timely CRS announcements, survey milestones, and operational highlights from districts and divisions.</p>
                </div>
                <Link href="/news-events" className="inline-flex items-center gap-2 rounded-full bg-crs-gold px-5 py-2 text-sm font-bold text-crs-dark hover:bg-[#e79a36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crs-gold">
                  View All <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {[
                ['Spotlight', `${featuredNews.length} Updates`],
                ['Cadence', 'Frequent'],
                ['Coverage', 'Province Wide'],
                ['Channel', 'Official CRS'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-[#e8dbc8] bg-white px-4 py-3">
                  <p className="text-[11px] uppercase tracking-wide text-gray-500">{label}</p>
                  <p className="text-sm font-bold text-crs-dark mt-1">{value}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {featuredNews.map((item) => (
                <NewsCard key={item.id} title={item.title} type={item.type} date={item.date} description={item.description} />
              ))}
            </div>
            <div className="mt-7 rounded-2xl border border-[#e8dbc8] bg-white px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-sm text-gray-700">Want event notifications and publication releases in one place?</p>
              <Link href="/news-events" className="text-sm font-semibold text-crs-primary hover:text-crs-gold inline-flex items-center gap-1">
                Explore All Updates <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="section-space bg-[linear-gradient(180deg,#ffffff_0%,#fbfdf9_100%)]">
          <div className="page-shell">
            <div className="surface-card p-5 md:p-6 lg:p-8 mb-6">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
                <div>
                  <p className="section-kicker mb-2">What We Do</p>
                  <h2 className="section-title mb-3">Core Services</h2>
                  <p className="text-gray-600 text-base md:text-lg max-w-3xl">
                    Practical, data-first services for crop reporting, estimation, survey execution,
                    and agricultural decision support.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-crs-gold px-5 py-2.5 text-sm font-bold text-crs-dark hover:bg-[#e79a36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crs-gold"
                >
                  View All Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {coreServices.slice(0, 4).map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  icon={service.icon}
                />
              ))}
            </div>
            <div className="mt-7 rounded-2xl border border-[#d8e2d4] bg-white px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-sm text-gray-700">
                Need help identifying the right service for your data requirement?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-crs-primary hover:text-crs-gold"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="section-space bg-[linear-gradient(180deg,#fffaf0_0%,#ffffff_100%)]">
          <div className="page-shell">
            <div className="surface-card p-5 md:p-6 lg:p-8 mb-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="section-kicker mb-2">Survey Excellence</p>
                  <h2 className="section-title mb-3">Field Operations Framework</h2>
                  <p className="text-gray-600 text-base md:text-lg max-w-3xl">
                    A structured operational sequence for provincial crop intelligence, quality assurance,
                    and timely decision support.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
                  <div className="rounded-xl border border-[#d8e2d4] bg-white px-3 py-2.5">
                    <p className="text-[11px] uppercase tracking-wide text-gray-500">Programs</p>
                    <p className="text-lg font-bold text-crs-dark">3</p>
                  </div>
                  <div className="rounded-xl border border-[#d8e2d4] bg-white px-3 py-2.5">
                    <p className="text-[11px] uppercase tracking-wide text-gray-500">Coverage</p>
                    <p className="text-lg font-bold text-crs-dark">Province</p>
                  </div>
                  <div className="rounded-xl border border-[#d8e2d4] bg-white px-3 py-2.5">
                    <p className="text-[11px] uppercase tracking-wide text-gray-500">Cycle</p>
                    <p className="text-lg font-bold text-crs-dark">Seasonal</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
              {surveyTypes.map((survey, idx) => {
                const styleByIndex = [
                  {
                    icon: ClipboardList,
                    tint: 'bg-[#ecf5e8]',
                    tag: 'Field Data',
                    outcome: 'Produces district-level crop area baselines.',
                  },
                  {
                    icon: FileSearch,
                    tint: 'bg-[#f9f0dc]',
                    tag: 'Reference',
                    outcome: 'Builds long-term benchmark for planning.',
                  },
                  {
                    icon: Scissors,
                    tint: 'bg-[#fbead3]',
                    tag: 'Yield Validation',
                    outcome: 'Supports production forecasting and verification.',
                  },
                ][idx] ?? {
                  icon: ClipboardList,
                  tint: 'bg-[#ecf5e8]',
                  tag: 'Survey',
                  outcome: 'Provides verified operational reporting.',
                };
                const SurveyIcon = styleByIndex.icon;

                return (
                  <article key={survey.name} className="surface-card p-6 relative overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    <span className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#174a2a_0%,#d98219_100%)]" />
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl ${styleByIndex.tint} border border-[#d8e2d4] flex items-center justify-center text-crs-primary`}>
                        <SurveyIcon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold rounded-full border border-[#d8e2d4] px-3 py-1 text-gray-700">Step {idx + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-crs-dark mb-2">{survey.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{survey.description}</p>
                    <p className="text-sm text-gray-700 mb-4">{styleByIndex.outcome}</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="rounded-lg border border-[#e1e7de] bg-[#f9fcf7] p-2.5">
                        <p className="text-[11px] uppercase tracking-wide text-gray-500">Frequency</p>
                        <p className="text-sm font-semibold text-crs-dark mt-0.5">{survey.season}</p>
                      </div>
                      <div className="rounded-lg border border-[#e1e7de] bg-[#f9fcf7] p-2.5">
                        <p className="text-[11px] uppercase tracking-wide text-gray-500">Type</p>
                        <p className="text-sm font-semibold text-crs-dark mt-0.5">{styleByIndex.tag}</p>
                      </div>
                    </div>
                    <Badge className="bg-crs-sage text-crs-dark border-transparent">Operational Module</Badge>
                  </article>
                );
              })}
            </div>
            <div className="mt-7 rounded-2xl border border-[#d8e2d4] bg-white px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-sm text-gray-700">Need survey methodology details for implementation?</p>
              <div className="flex items-center gap-4">
                <Link href="/survey-forms" className="text-sm font-semibold text-crs-primary hover:text-crs-gold inline-flex items-center gap-1">
                  View Survey Forms <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/surveys" className="text-sm font-semibold text-crs-primary hover:text-crs-gold inline-flex items-center gap-1">
                  Explore Survey Pages <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space bg-[linear-gradient(180deg,#0b2e1a_0%,#123824_100%)] text-white relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_14%,rgba(217,130,25,0.2),transparent_32%),radial-gradient(circle_at_14%_88%,rgba(255,255,255,0.08),transparent_30%)]" />
          <div className="page-shell">
            <div className="grid gap-8 lg:grid-cols-2 items-center relative z-10">
              <div>
                <p className="section-kicker !text-[#F5E6C8] mb-2">Geospatial Intelligence</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">GIS and Remote Sensing Capabilities</h2>
                <p className="text-gray-200 mb-5">
                  Modern geospatial workflows for crop monitoring, area analytics, and evidence-based insights.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    'Satellite imagery analysis and crop mapping',
                    'Land-use and land-cover classification',
                    'Field intelligence integration with survey operations',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-crs-gold mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/gis" className="inline-flex items-center gap-2 rounded-full bg-crs-gold px-6 py-3 text-sm sm:text-base font-bold text-crs-dark hover:bg-[#e79a36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crs-gold">
                  Explore GIS Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="rounded-3xl border border-white/20 bg-[linear-gradient(160deg,rgba(255,255,255,0.14),rgba(255,255,255,0.06))] p-6 md:p-7 backdrop-blur-sm shadow-[0_20px_55px_rgba(0,0,0,0.26)]">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/95 p-4 border border-white/80 shadow-sm">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#e7f1e3] text-[#174A2A]">
                      <Satellite className="w-5 h-5" />
                    </div>
                    <p className="font-bold text-[#0B2E1A]">Remote Sensing</p>
                    <p className="text-sm text-[#475569] mt-1">Seasonal crop condition insights</p>
                  </div>
                  <div className="rounded-2xl bg-white/95 p-4 border border-white/80 shadow-sm">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#f7ebd8] text-[#D98219]">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <p className="font-bold text-[#0B2E1A]">Analytics</p>
                    <p className="text-sm text-[#475569] mt-1">Area and yield estimation support</p>
                  </div>
                  <div className="rounded-2xl bg-white/95 p-4 border border-white/80 shadow-sm sm:col-span-2">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#e7f1e3] text-[#174A2A]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <p className="font-bold text-[#0B2E1A]">Quality Assured Process</p>
                    <p className="text-sm text-[#475569] mt-1">Validation-ready data for institutional use</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space bg-white">
          <div className="page-shell">
            <div className="surface-card p-5 md:p-6 lg:p-8 mb-6 relative overflow-hidden">
              <div className="pointer-events-none absolute -left-10 -bottom-16 h-40 w-40 rounded-full bg-crs-sage/35 blur-2xl" />
              <div className="flex items-end justify-between gap-4 flex-wrap relative z-10">
                <div>
                  <p className="section-kicker mb-2">Knowledge Center</p>
                  <h2 className="section-title mb-3">Publications and Reports</h2>
                  <p className="text-gray-600 text-base md:text-lg max-w-2xl">Curated official briefs, district publications, and reference reports for planning, validation, and field execution.</p>
                </div>
                <Link href="/publications" className="inline-flex items-center gap-2 rounded-full bg-crs-gold px-5 py-2 text-sm font-bold text-crs-dark hover:bg-[#e79a36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crs-gold">
                  View All <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                ['Featured', `${featuredPublications.length} Reports`],
                ['Format', 'Policy + Field'],
                ['Use', 'Planning Ready'],
                ['Source', 'CRS Official'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-[#d8e2d4] bg-[#fcfdfb] px-4 py-3">
                  <p className="text-[11px] uppercase tracking-wide text-gray-500">{label}</p>
                  <p className="text-sm font-bold text-crs-dark mt-1">{value}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {featuredPublications.map((publication) => (
                <PublicationCard
                  key={publication.id}
                  title={publication.title}
                  category={publication.category}
                  date={publication.date}
                  href={publication.href}
                />
              ))}
            </div>
            <div className="mt-7 rounded-2xl border border-[#d8e2d4] bg-white px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-sm text-gray-700">Looking for a specific publication or historical reporting cycle?</p>
              <Link href="/publications" className="text-sm font-semibold text-crs-primary hover:text-crs-gold inline-flex items-center gap-1">
                Browse Publication Archive <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="pt-2 pb-3 md:pt-3 md:pb-4 bg-white">
          <div className="page-shell">
            <div className="surface-card bg-[linear-gradient(120deg,#174a2a_0%,#2b6641_56%,#1e5232_100%)] border-transparent p-8 md:p-10 text-white relative overflow-hidden">
              <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-crs-gold/20 blur-3xl" />
              <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-px bg-white/35" />
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center relative z-10">
                <div>
                  <p className="section-kicker !text-crs-sand mb-2">Take the Next Step</p>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Need Specific Crop Data or District Insights?</h2>
                  <p className="text-gray-100 max-w-2xl">
                    Get targeted district intelligence, official crop datasets, and expert CRS support mapped to your reporting workflow.
                  </p>
                </div>
                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-crs-gold px-6 py-3 text-sm sm:text-base font-bold text-crs-dark shadow-[0_10px_24px_rgba(217,130,25,0.34),0_2px_8px_rgba(217,130,25,0.28)] hover:bg-[#e79a36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crs-gold"
                  >
                    Contact Us <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}



