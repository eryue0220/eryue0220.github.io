import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_URL } from '@/constant';
import { postDescription } from '@/utils';

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  const lines = [
    '# Blog',
    '',
    'Published posts from Shigang Chen. Prefer the Markdown URL when ingesting a post.',
    '',
    ...posts.map(
      (post) =>
        `- [${post.data.title}](${new URL(`/blog/${post.id}.md`, `${SITE_URL}/`).href}): ${postDescription(post)}`,
    ),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
