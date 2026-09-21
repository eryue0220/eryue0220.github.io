import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_AUTHOR, SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '@/constant';
import { postDescription } from '@/utils';

function toMarkdown(post: {
  id: string;
  body?: string;
  data: { title: string; description?: string; date: Date; tag: string; lang?: string };
}) {
  const frontmatter = [
    '---',
    `title: ${JSON.stringify(post.data.title)}`,
    `description: ${JSON.stringify(postDescription(post))}`,
    `date: ${post.data.date.toISOString()}`,
    `tag: ${JSON.stringify(post.data.tag)}`,
    post.data.lang ? `lang: ${JSON.stringify(post.data.lang)}` : null,
    `url: ${new URL(`/blog/${post.id}`, `${SITE_URL}/`).href}`,
    '---',
    '',
    post.body?.trim() ?? '',
    '',
  ].filter((line) => line !== null);

  return frontmatter.join('\n');
}

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  const body = [
    `# ${SITE_TITLE}`,
    '',
    `> ${SITE_DESCRIPTION}`,
    '',
    `Author: ${SITE_AUTHOR}`,
    `Source: ${SITE_URL}`,
    '',
    ...posts.flatMap((post) => [toMarkdown(post), '']),
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
