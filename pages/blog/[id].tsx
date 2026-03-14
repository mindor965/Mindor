import React from "react";
import { GetServerSideProps } from "next";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";

const BLOG_QUERY = `*[_type == "post" && _id == $id][0]{
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  "coverImage": coverImage.asset->url,
  "coverAlt": coverImage.alt,
  intro,
  paragraph,
  "firstImage": firstImage.asset->url,
  "firstAlt": firstImage.alt,
  "secondaryImage": secondaryImage.asset->url,
  "secondaryAlt": secondaryImage.alt,
}`;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.params as { id: string };
  const blog = await client.fetch(BLOG_QUERY, { id });

  if (!blog) return { notFound: true };

  return { props: { blog } };
};

const BlogPost = ({ blog }: { blog: any }) => {
  return (
    <article className="w-full relative mx-auto py-5">
      <div className="w-full relative h-[50vh] sm:h-[60vh] md:h-[70vh]">
        <img
          src={blog.coverImage}
          alt={blog.coverAlt}
          className="w-full h-full object-cover grayscale"
        />
        <h1 className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold
          px-4 sm:px-6 py-2 backdrop-blur-sm text-center
        ">
          {blog.title}
        </h1>
      </div>

      {blog.coverImage && (
        <div className="max-w-3xl mx-auto -mt-12 sm:-mt-16 relative z-10">
          <img
            src={blog.coverImage}
            alt={blog.coverAlt}
            className="w-full rounded-lg shadow-xl"
          />
        </div>
      )}

      {blog.intro && (
        <div className="max-w-3xl mx-auto mt-6 prose text-sm sm:text-base md:text-lg">
          <PortableText value={blog.intro} />
        </div>
      )}

      {blog.firstImage && (
        <div className="max-w-3xl mx-auto mt-6">
          <img
            src={blog.firstImage}
            alt={blog.firstAlt}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      )}

      {blog.paragraph && (
        <div className="max-w-3xl mx-auto mt-6 prose text-sm sm:text-base md:text-lg">
          <PortableText value={blog.paragraph} />
        </div>
      )}

      {blog.secondaryImage && (
        <div className="max-w-3xl mx-auto mt-6">
          <img
            src={blog.secondaryImage}
            alt={blog.secondaryAlt}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      )}
    </article>
  );
};

export default BlogPost;
