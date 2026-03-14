import React from 'react';

interface BlogCardProps {
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ className = '' }) => {
  return (
    <div className="relative">
      <div className={`bg-white rounded-xl p-6 max-w-6xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
        <div className="flex flex-col sm:flex-row items-start gap-6">
          {/* Image Section */}
          <div className="relative flex-shrink-0 w-full sm:w-auto">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=faces"
              alt="Woman with laptop reading digital marketing content"
              className="w-full sm:w-48 h-40 sm:h-32 object-cover rounded-lg"
            />
            
            {/* Overlay Badge */}
            <div className="absolute -top-3 -left-3 bg-white rounded-lg shadow-lg px-3 py-2 border border-gray-100">
              <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                20 DIGITAL
              </div>
              <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                MARKETING BLOGS
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 min-w-0 w-full sm:w-auto">
            {/* New Badge */}
            <div className="inline-block mb-3">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                New
              </span>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-900 mb-4 leading-tight sm:pr-8">
              20 Best Digital Marketing Blogs Of 2025: Must-Read For Marketers
            </h2>

            {/* Read More Link */}
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 hover:underline">
              Read More...
            </button>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default BlogCard;