import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex max-w-md mx-auto bg-white rounded overflow-hidden shadow-lg">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Blogs"
        className="flex-1 px-4 py-2 outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-900 text-white px-4 py-2 font-medium"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
