import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import BlogGrid from '@/components/BlogGrid';
import BlogPage from './blog/blog-page';


const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1">
        <BlogPage />
        <BlogGrid />
        <CTASection />
      </main>
    </div>
  );
};

export default Blog;
