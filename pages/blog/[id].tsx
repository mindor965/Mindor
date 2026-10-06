import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Head from "next/head";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import { FiArrowLeft } from "react-icons/fi";
import CTASection from "@/components/CTASection";

interface BlogPostData {
  _id: string;
  title: string;
  slug?: string;
  publishedAt?: string;
  _createdAt?: string;
  categories?: string[];
  coverImage?: string;
  coverAlt?: string;
  intro?: any;
  paragraph?: any;
  firstImage?: string;
  firstAlt?: string;
  secondaryImage?: string;
  secondaryAlt?: string;
}

const BLOG_QUERY = `*[_type == "post" && (_id == $id || slug.current == $id)][0]{
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  _createdAt,
  "categories": categories[]->title,
  "coverImage": coverImage.asset->url,
  "coverAlt": coverImage.alt,
  intro,
  paragraph,
  "firstImage": firstImage.asset->url,
  "firstAlt": firstImage.alt,
  "secondaryImage": secondaryImage.asset->url,
  "secondaryAlt": secondaryImage.alt
}`;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.params as { id: string };
  try {
    const blog = await client.fetch(BLOG_QUERY, { id });
    if (!blog) return { notFound: true };
    return { props: { blog } };
  } catch (err) {
    console.error("Error fetching blog post:", err);
    return { notFound: true };
  }
};

const formatDate = (publishedAt?: string, createdAt?: string) => {
  const dateStr = publishedAt || createdAt;
  if (!dateStr) return "";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const BlogPost = ({ blog }: { blog: BlogPostData }) => {
  const displayDate = formatDate(blog.publishedAt, blog._createdAt);

  return (
    <>
      <Head>
        <title>{blog.title} | Mindor Tech Blog</title>
        <meta
          name="description"
          content={blog.title}
        />
      </Head>

      <article className="min-h-screen bg-white">
        {/* Article Hero Banner */}
        <section className="relative w-full bg-[#232D66] pt-28 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden">
          {blog.coverImage ? (
            <div className="absolute inset-0">
              <img
                src={blog.coverImage}
                alt={blog.coverAlt || blog.title}
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-[#232D66]/80" />
            </div>
          ) : null}

          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-white">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white/80 hover:text-white transition-colors mb-6 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full"
            >
              <FiArrowLeft className="w-4 h-4" />
              <span>Back to Blogs</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-white/80 mb-3">
              {blog.categories && blog.categories.length > 0 && (
                <span className="font-semibold text-blue-300">{blog.categories[0]}</span>
              )}
              {displayDate && <span>• {displayDate}</span>}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {blog.title}
            </h1>
          </div>
        </section>

        {/* Article Body Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="space-y-8 text-gray-800">
            {blog.intro && (
              <div className="prose prose-lg max-w-none text-base sm:text-lg leading-relaxed text-gray-700">
                <PortableText value={blog.intro} />
              </div>
            )}

            {blog.firstImage && (
              <figure className="my-8">
                <img
                  src={blog.firstImage}
                  alt={blog.firstAlt || blog.title}
                  className="w-full rounded-2xl shadow-sm object-cover max-h-[500px]"
                />
                {blog.firstAlt && (
                  <figcaption className="text-center text-xs text-gray-500 mt-2">
                    {blog.firstAlt}
                  </figcaption>
                )}
              </figure>
            )}

            {blog.paragraph && (
              <div className="prose prose-lg max-w-none text-base sm:text-lg leading-relaxed text-gray-700 space-y-4">
                <PortableText value={blog.paragraph} />
              </div>
            )}

            {blog.secondaryImage && (
              <figure className="my-8">
                <img
                  src={blog.secondaryImage}
                  alt={blog.secondaryAlt || blog.title}
                  className="w-full rounded-2xl shadow-sm object-cover max-h-[500px]"
                />
                {blog.secondaryAlt && (
                  <figcaption className="text-center text-xs text-gray-500 mt-2">
                    {blog.secondaryAlt}
                  </figcaption>
                )}
              </figure>
            )}
          </div>

          {/* Bottom Navigation */}
          <div className="mt-12 pt-6 border-t border-gray-100 flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-purple-600 transition-colors"
            >
              <FiArrowLeft className="w-4 h-4" />
              <span>Back to Blogs</span>
            </Link>
          </div>
        </section>

        <CTASection />
      </article>
    </>
  );
};

export default BlogPost;
