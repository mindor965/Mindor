import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";

const CATEGORY_QUERY = `*[_type == "category"]{ title }`;

const CategoryTabs: React.FC<{ onSelect: (category: string) => void }> = ({ onSelect }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    async function fetchCategories() {
      const data = await client.fetch(CATEGORY_QUERY);
      const titles = data.map((c: { title: string }) => c.title);
      setCategories(titles);
      setActive(titles[0] || "");
    }

    fetchCategories();
  }, []);

  const handleClick = (category: string) => {
    setActive(category);
    onSelect(category);
  };

  if (categories.length === 0) {
    return <p className="text-center text-gray-500">No categories available</p>;
  }

  return (
    <div className="flex justify-center mt-6 flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`px-4 py-2 rounded ${
            active === cat
              ? "bg-white text-blue-700 font-semibold shadow"
              : "bg-blue-900 text-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
