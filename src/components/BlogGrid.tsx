import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { BLOG_QUERY } from "lib/query";

interface BlogPost {
  _id: string;
  title: string;
  publishedAt?: string;
  _createdAt?: string;
  categories?: string[];
  coverImage?: string;
  alt?: string;
  slug?: string;
}

interface BlogGridProps {
  searchQuery?: string;
  selectedCategory?: string;
}

const formatDate = (publishedAt?: string, createdAt?: string) => {
  const dateStr = publishedAt || createdAt;
  if (!dateStr) return "";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const BlogGrid: React.FC<BlogGridProps> = ({
  searchQuery = "",
  selectedCategory = "All Blogs",
}) => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const data = await client.fetch(BLOG_QUERY);
        setBlogs(data || []);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Filter blogs based on search query and selected category
  const filteredBlogs = blogs.filter((post) => {
    const matchesSearch = searchQuery
      ? post.title?.toLowerCase().includes(searchQuery.trim().toLowerCase())
      : true;

    const isAllBlogs =
      !selectedCategory ||
      selectedCategory.trim() === "" ||
      selectedCategory.trim().toLowerCase() === "all blogs";

    const matchesCategory = isAllBlogs
      ? true
      : Array.isArray(post.categories) &&
        post.categories.some(
          (cat) =>
            cat && cat.trim().toLowerCase() === selectedCategory.trim().toLowerCase()
        );

    return matchesSearch && matchesCategory;
  });

  // Reset pagination when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);
  const start = (currentPage - 1) * postsPerPage;
  const paginatedBlogs = filteredBlogs.slice(start, start + postsPerPage);

  if (loading) {
    return (
      <div className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-2xl h-80 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-10 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6">
      {filteredBlogs.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 p-8">
          <h3 className="text-lg font-semibold text-gray-700">No blog posts found</h3>
          <p className="text-sm text-gray-500 mt-1">
            Try adjusting your search query or selecting a different category filter.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedBlogs.map((post) => {
              const displayDate = formatDate(post.publishedAt, post._createdAt);
              const categoryName = post.categories && post.categories[0];

              return (
                <Link
                  href={`/blog/${post._id}`}
                  key={post._id}
                  className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  {/* Card Image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                    {post.coverImage ? (
                      <Image
                        src={post.coverImage}
                        alt={post.alt || post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#232D66] flex items-center justify-center p-4">
                        <span className="text-white font-medium text-center text-sm">
                          {post.title}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        {categoryName ? (
                          <span className="font-semibold text-purple-600">{categoryName}</span>
                        ) : (
                          <span />
                        )}
                        {displayDate && <span>{displayDate}</span>}
                      </div>

                      <h2 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2 leading-snug mb-3">
                        {post.title}
                      </h2>
                    </div>

                    <div className="pt-2 flex items-center text-sm font-semibold text-blue-600 group-hover:text-purple-600 transition-colors">
                      <span>Read More...</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                    page === currentPage
                      ? "bg-[#232D66] text-white shadow-sm"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default BlogGrid;
