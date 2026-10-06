import React, { useState } from 'react';
import CTASection from '@/components/CTASection';
import BlogGrid from '@/components/BlogGrid';
import BlogPage from './blog/blog-page';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Blogs');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <BlogPage
          searchQuery={searchQuery}
          onSearch={setSearchQuery}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <BlogGrid
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
        />
        <CTASection />
      </main>
    </div>
  );
};

export default Blog;
