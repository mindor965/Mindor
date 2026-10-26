import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, priority = false }) => {
  return (
    <article className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      {/* Visual Preview */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-full aspect-[16/10] overflow-hidden bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#232D62]"
        aria-label={`Visit live website for ${project.title}`}
      >
        <Image
          src={project.image}
          alt={`Preview of ${project.title} website`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
          priority={priority}
        />
      </a>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between text-xs mb-3 gap-2">
            <span className="font-semibold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md tracking-wide uppercase truncate">
              {project.tag}
            </span>
            <span className="text-gray-400 font-mono text-[11px] truncate shrink-0">
              {project.displayUrl}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors leading-snug mb-2.5">
            {project.title}
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Footer / External Link Button */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:text-purple-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded"
          >
            <span>Visit Live Website</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
