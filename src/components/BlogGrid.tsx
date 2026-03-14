import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { BLOG_QUERY } from "lib/query";

interface BlogPost {
  _id: string;
  title: string;
  publishedAt: string;
  coverImage?: string;
  coverAlt?: string;
  slug?: string;
}

const BlogGrid: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await client.fetch(BLOG_QUERY);
      setBlogs(data);
      console.log("Fetched Sanity blogs:", data);
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const totalPages = Math.ceil(blogs.length / postsPerPage);
  const start = (currentPage - 1) * postsPerPage;
  const paginated = blogs.slice(start, start + postsPerPage);
  const postsToShow = isMobile ? paginated : blogs;

  return (
    <div className="min-h-screen p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">

        <div className="lg:hidden mb-6">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-semibold mb-4">Recent Posts</h2>
            <div className="space-y-4">
              {blogs.slice(0, 4).map((post) => (
                <div key={post._id} className="border-b pb-4">
                  <h3 className="text-sm font-medium">{post.title}</h3>
                  <p className="text-xs text-gray-500">
                    {new Date(post.publishedAt).toDateString()}
                  </p>

                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {postsToShow.map((post) => (
            <a
              href={`/blog/${post._id}`}
              key={post._id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
            >
              {post.coverImage && (
                <div className="relative w-full h-48">
                  <Image
                    src={post.coverImage}
                    alt={post.coverAlt || "cover image"}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {!post.coverImage && <div className="bg-gray-100 w-full h-48" />}

              <div className="p-4">
                <h3 className="text-sm font-semibold mb-2">{post.title}</h3>
                <p className="text-xs text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </a>
          ))}
        </div>

        {isMobile && totalPages > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            <button onClick={() => setCurrentPage(p => p - 1)} disabled={currentPage === 1} className="px-3 py-2 border rounded">Previous</button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 border rounded ${page === currentPage ? "bg-black text-white" : ""}`}
              >
                {page}
              </button>
            ))}

            <button onClick={() => setCurrentPage(p => p + 1)} disabled={currentPage === totalPages} className="px-3 py-2 border rounded">Next</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogGrid;
