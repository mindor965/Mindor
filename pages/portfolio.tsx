import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { projects, Project } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import CTASection from '@/components/CTASection';

type CategoryFilter = 'All' | 'Non-Profit & Honors' | 'Specialized Services' | 'Lifestyle & Brands';

const categories: { label: string; value: CategoryFilter }[] = [
  { label: `All Projects (${projects.length})`, value: 'All' },
  { label: 'Non-Profit & Honors', value: 'Non-Profit & Honors' },
  { label: 'Specialized Services', value: 'Specialized Services' },
  { label: 'Lifestyle & Brands', value: 'Lifestyle & Brands' },
];

const PortfolioPage: React.FC = () => {
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
        <meta property="og:url" content="https://mindor.io/portfolio" />
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
        {/* Hero Header Section - Consistent with Home & Service Hero Background */}
        <section
          className="relative w-full pt-28 pb-16 sm:pt-32 sm:pb-20 px-4 sm:px-6 overflow-hidden text-white"
          style={{
            background: 'linear-gradient(135deg, #232D62 0%, #4A5DB8 100%), url(/assets/background.png)',
            backgroundSize: 'cover, cover',
            backgroundPosition: 'center, center',
            backgroundRepeat: 'no-repeat, no-repeat',
            backgroundBlendMode: 'overlay',
          }}
        >
          {/* Subtle gradient pattern & ambient lighting consistent with Service landing pages */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          </div>

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

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{projects.length} Live Production Projects</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Portfolio & Client Deliveries
            </h1>

            {/* Subheading */}
            <p className="mt-5 text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed font-normal">
              Explore real digital products, publications, and web systems engineered and shipped by Mindor. Every project below is live in production.
            </p>

            {/* Quick Metrics */}
            <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12 text-center w-full max-w-xl">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">{projects.length}</p>
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
        <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 max-w-full px-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-4 py-2 text-xs sm:text-sm rounded-full font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 active:scale-95 whitespace-nowrap ${
                    isActive
                      ? 'bg-[#232D62] text-white shadow-md font-semibold'
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
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                priority={idx < 3}
              />
            ))}
          </div>
        </section>

        {/* Client Conversion CTA Section - Shared Component */}
        <CTASection />
      </main>
    </>
  );
};

export default PortfolioPage;
