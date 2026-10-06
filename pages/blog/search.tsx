import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full max-w-md mx-auto bg-white rounded-full p-1.5 shadow-sm border border-gray-200 focus-within:border-blue-500 transition-all"
    >
      <div className="pl-3 text-gray-400">
        <FiSearch className="w-5 h-5" />
      </div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search blogs..."
        className="w-full px-3 py-1.5 text-sm text-gray-800 placeholder-gray-400 bg-transparent outline-none"
      />
      <button
        type="submit"
        className="bg-[#232D66] hover:bg-[#1b2350] text-white px-5 py-2 text-sm font-semibold rounded-full transition-colors flex-shrink-0"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
