export const BLOG_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  "coverImage": coverImage.asset->url,
  "alt": coverImage.alt
}`
