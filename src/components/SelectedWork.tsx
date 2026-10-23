import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';

const SelectedWork: React.FC = () => {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="work" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      {/* Subtle background decoration consistent with Mindor palette */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50/60 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#232D66]/10 text-[#232D66] text-xs font-semibold tracking-wider uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-[#232D66]" />
              Selected Work
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Real Projects. Proven Deliveries.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Explore a curated selection of live digital platforms, publications, and web systems engineered and deployed by Mindor.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 self-start md:self-end px-5 py-2.5 rounded-full bg-[#232D66] hover:bg-[#1b2350] text-white text-sm font-semibold transition-all shadow-sm hover:shadow group"
          >
            <span>View All 9 Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Browser mockup header & visual preview */}
              <div className="bg-gray-100/90 border-b border-gray-200/90 px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-500 bg-white/80 px-3 py-0.5 rounded-full border border-gray-200/60 truncate max-w-[200px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span className="truncate">{project.displayUrl}</span>
                </div>
                <div className="w-8" />
              </div>

              {/* Image Preview */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full aspect-[16/10] overflow-hidden bg-gray-50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#232D66]"
                aria-label={`Visit live website for ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title} homepage`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  priority={project.id === 'sammantiranga'}
                />
              </a>

              {/* Content Details */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    <span className="inline-block text-xs font-semibold tracking-wide uppercase text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                      {project.tag}
                    </span>
                    <span className="text-xs font-medium text-emerald-600 flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      Live in Production
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#232D66] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#232D66] hover:text-indigo-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#232D66] rounded"
                  >
                    <span>Visit Live Website</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <span className="text-xs text-gray-400 font-mono">
                    {project.displayUrl}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Discovery & Conversion Bridge */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-gray-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-gray-900">
              Want to see all delivered client solutions?
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Browse our complete catalogue of 9 production platforms across news media, non-profit, lifestyle, and specialized services.
            </p>
          </div>

          <Link
            href="/work"
            className="whitespace-nowrap px-6 py-3 rounded-full bg-[#232D66] hover:bg-[#1b2350] text-white text-sm font-semibold transition-colors flex items-center gap-2 shrink-0"
          >
            <span>Explore All Work</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
