import React from "react";
import Head from "next/head";
import SearchBar from "./search";
import CategoryTabs from "./category-tabs";

interface BlogPageProps {
  searchQuery?: string;
  onSearch: (query: string) => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({
  onSearch,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <>
      <Head>
        <title>Mindor Tech Blog | Insights & Updates</title>
        <meta
          name="description"
          content="Explore the latest insights, tutorials, and industry trends on Web Development, AI, Blockchain, Mobile Apps, and Digital Marketing from Mindor Tech."
        />
      </Head>

      <section className="relative w-full pt-28 pb-20 sm:pb-28 px-4 sm:px-6 overflow-hidden">
        {/* Background Image Overlay with Production Curve */}
        <img
          src="/blog/bg.png"
          alt="Blog background"
          className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none"
        />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Blogs
            </h1>
            <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
              Insights, updates, and tech trends from Mindor Tech.
            </p>
          </div>

          {/* Search & Category Filter */}
          <div className="w-full max-w-3xl mt-2 flex flex-col gap-4 items-center">
            <SearchBar onSearch={onSearch} />
            <CategoryTabs
              onSelect={onSelectCategory}
              activeCategory={selectedCategory}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
