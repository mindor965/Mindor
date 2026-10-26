import React from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

const SelectedWork: React.FC = () => {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      {/* Subtle background decoration consistent with Mindor palette */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50/60 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#232D62]/10 text-[#232D62] text-xs font-semibold tracking-wider uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-[#232D62]" />
              Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Real Projects. Proven Deliveries.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Explore a curated selection of live digital platforms, publications, and web systems engineered and deployed by Mindor.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 self-start md:self-end px-6 py-3 rounded-full bg-[#232D62] hover:bg-[#1A224D] text-white text-sm font-semibold transition-all shadow-sm hover:shadow group"
          >
            <span>View All {projects.length} Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              priority={project.id === 'sammantiranga'}
            />
          ))}
        </div>

        {/* Discovery & Conversion Bridge */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-gray-900">
              Want to see all delivered client solutions?
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Browse our complete catalogue of {projects.length} production platforms across non-profit, lifestyle, and specialized services.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="whitespace-nowrap px-6 py-3 rounded-full bg-[#232D62] hover:bg-[#1A224D] text-white text-sm font-semibold transition-colors flex items-center gap-2 shrink-0"
          >
            <span>Explore Portfolio</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
