import { getCollection } from 'astro:content';

export async function get() {
  const posts = await getCollection('posts');
  const pages = [
    {
      url: '/',
      changefreq: 'daily',
      priority: 1.0,
    },
    ...posts.map((post) => ({
      url: `/posts/${post.slug}`,
      changefreq: 'weekly',
      priority: 0.8,
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `<url>
    <loc>${`https://angeldev-blog.vercel.app/${page.url}`}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return {
    body: xml,
    headers: {
      'Content-Type': 'application/xml',
    },
  };
}