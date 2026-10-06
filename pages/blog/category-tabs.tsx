import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";

const CATEGORY_QUERY = `*[_type == "category"]{ title }`;

interface CategoryTabsProps {
  onSelect: (category: string) => void;
  activeCategory?: string;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  onSelect,
  activeCategory = "All Blogs",
}) => {
  const [categories, setCategories] = useState<string[]>(["All Blogs"]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await client.fetch(CATEGORY_QUERY);
        if (Array.isArray(data)) {
          const titles = data
            .map((c: { title: string }) => c.title)
            .filter(Boolean);
          // Avoid duplicate 'All Blogs' if returned from backend
          const uniqueTitles = Array.from(new Set(titles)).filter(
            (t) => t.toLowerCase() !== "all blogs"
          );
          setCategories(["All Blogs", ...uniqueTitles]);
        }
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    }

    fetchCategories();
  }, []);

  const handleClick = (cat: string) => {
    onSelect(cat);
  };

  return (
    <div className="w-full py-1.5 px-1">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => handleClick(cat)}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full font-medium whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? "bg-white text-[#232D66] font-semibold shadow-sm"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTabs;
