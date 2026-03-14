import React, { useState } from "react";
import Head from "next/head";
import SearchBar from "./search";
import CategoryTabs from "./category-tabs";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All Blogs");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log("Search for:", query);
  };

  const handleCategory = (cat: string) => {
    setCategory(cat);
    console.log("Selected category:", cat);
  };

  const categories = ["All Blogs", "AI", "Web Development", "Blockchain", "Mobile App Development", "Digital Marketing"];

  return (
    <>
      <Head>
        <title>Mindor.Tech Blog | Insights & Updates</title>
        <meta
          name="description"
          content="Read the latest articles, tutorials, and updates from Mindor.Tech on web, mobile, AI, and digital solutions."
        />
      </Head>

      <div className="relative w-full h-96  flex flex-col items-center justify-center">
        <img
          src="/blog/bg.png"
          alt="Blog background"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
        <h1 className="relative text-3xl mt-5 md:text-4xl font-bold text-white text-center drop-shadow-lg">
          Blogs
        </h1>
        <div className="relative mt-8 px-5 md:px-0">
          <SearchBar onSearch={handleSearch} />
        <CategoryTabs  onSelect={handleCategory} />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
