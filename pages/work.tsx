import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Calendar, MessageCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { projects, Project } from '@/data/projects';

type CategoryFilter = 'All' | 'Non-Profit & Honors' | 'Media & Publishing' | 'Specialized Services' | 'Lifestyle & Brands';

const categories: { label: string; value: CategoryFilter }[] = [
  { label: 'All Projects (9)', value: 'All' },
  { label: 'Non-Profit & Honors', value: 'Non-Profit & Honors' },
  { label: 'Media & Publishing', value: 'Media & Publishing' },
  { label: 'Specialized Services', value: 'Specialized Services' },
  { label: 'Lifestyle & Brands', value: 'Lifestyle & Brands' },
];

const WorkPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Head>
        <title>Portfolio & Completed Projects | Mindor</title>
        <meta
          name="description"
          content="Explore Mindor's portfolio of completed client projects, digital platforms, and web applications delivered across media, travel, non-profit, and professional services."
        />
        <meta property="og:title" content="Portfolio & Completed Projects | Mindor" />
        <meta
          property="og:description"
          content="Explore Mindor's portfolio of completed client projects, digital platforms, and web applications delivered across media, travel, non-profit, and professional services."
        />
        <meta property="og:url" content="https://mindor.io/work" />
        <meta property="og:image" content="https://mindor.io/og/homepage.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio & Completed Projects | Mindor" />
        <meta
          name="twitter:description"
          content="Explore Mindor's portfolio of completed client projects, digital platforms, and web applications delivered across media, travel, non-profit, and professional services."
        />
        <meta name="twitter:image" content="https://mindor.io/og/homepage.webp" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Header Section */}
        <section className="relative w-full bg-[#232D66] pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden text-white">
          {/* Subtle gradient pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E2757] via-[#232D66] to-[#161C40] opacity-95" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
            {/* Breadcrumb & Live Verification Pill */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
              <Link
                href="/"
                className="text-xs font-medium text-white/70 hover:text-white transition-colors"
              >
                Home
              </Link>
              <span className="text-white/40 text-xs">/</span>
              <span className="text-xs font-semibold text-blue-200">Portfolio</span>

              <span className="mx-2 hidden sm:inline text-white/30">•</span>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-medium text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>9 Live Production Projects</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Selected Work & Client Deliveries
            </h1>

            {/* Subheading */}
            <p className="mt-5 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
              Explore real digital products, publications, and web systems engineered and shipped by Mindor. Every project below is live in production.
            </p>

            {/* Quick Metrics */}
            <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12 text-center">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">9</p>
                <p className="text-xs sm:text-sm text-white/75 mt-0.5">Delivered Websites</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">100%</p>
                <p className="text-xs sm:text-sm text-white/75 mt-0.5">Live Deployments</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-2xl sm:text-3xl font-extrabold text-white">Multiple</p>
                <p className="text-xs sm:text-sm text-white/75 mt-0.5">Global Industries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Showcase Section */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-4 py-2 text-xs sm:text-sm rounded-full font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#232D66] focus-visible:ring-offset-2 active:scale-95 ${
                    isActive
                      ? 'bg-[#232D66] text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200/80'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Browser bar preview chrome */}
                <div className="bg-gray-100 border-b border-gray-200/80 px-4 py-2.5 flex items-center justify-between select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-600 bg-white px-2.5 py-0.5 rounded-full border border-gray-200 truncate max-w-[170px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="truncate">{project.displayUrl}</span>
                  </div>
                  <div className="w-7" />
                </div>

                {/* Screenshot Visual */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full aspect-[16/10] overflow-hidden bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#232D66]"
                  aria-label={`Open live website for ${project.title}`}
                >
                  <Image
                    src={project.image}
                    alt={`Preview of ${project.title} live website`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                </a>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-block text-xs font-semibold tracking-wide uppercase text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                        {project.tag}
                      </span>
                      <span className="text-xs font-medium text-emerald-600 flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        Live
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#232D66] transition-colors leading-snug">
                      {project.title}
                    </h2>

                    <p className="mt-2.5 text-sm text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Card Footer with Direct External Link */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#232D66] hover:text-indigo-600 transition-colors group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#232D66] rounded"
                    >
                      <span>Visit Live Website</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>

                    <span className="text-xs text-gray-400 font-mono">
                      {project.displayUrl}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Client Conversion CTA Section */}
        <section className="bg-[#F8FAFC] border-t border-gray-200/80 py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-200/90 shadow-xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
            {/* Background ambient accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50/70 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#232D66]/10 text-[#232D66] text-xs font-semibold tracking-wider uppercase mb-4">
                Next Steps
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                Have a Project in Mind? Let's Discuss.
              </h3>

              <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
                Whether you need a full web platform, a mobile application, AI automation, or custom software engineering, Mindor delivers scalable technology tailored to your business.
              </p>

              {/* Consultation Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://calendar.app.google/c94YxYt7MYuphBsw6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#232D66] hover:bg-[#1b2350] text-white text-base font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Strategy Call</span>
                </a>

                <a
                  href="https://wa.me/918928210967?text=Hi%20Mindor%20Team,%20I'm%20interested%20in%20discussing%20a%20project%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 text-base font-semibold transition-all hover:border-gray-400"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>No-commitment consultation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Direct technical discussion</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Custom architecture scoping</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WorkPage;
