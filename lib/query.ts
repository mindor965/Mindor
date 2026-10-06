export const BLOG_QUERY = `*[_type == "post"] | order(publishedAt desc, _createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  _createdAt,
  "categories": categories[]->title,
  "coverImage": coverImage.asset->url,
  "alt": coverImage.alt
}`;