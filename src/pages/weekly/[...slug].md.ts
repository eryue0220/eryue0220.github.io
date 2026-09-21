import type { APIRoute } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import { SITE_URL } from '@/constant';
import { postDescription } from '@/utils';

export async function getStaticPaths() {
  const posts = await getCollection('weekly', ({ data }) => !data.draft);
  return posts.map((post) => ({
    params: { slug: post.id },
    props: post,
  }));
}

export const GET: APIRoute = ({ props }) => {
  const post = props as CollectionEntry<'weekly'>;
  const body = [
    '---',
    `title: ${JSON.stringify(post.data.title)}`,
    `description: ${JSON.stringify(postDescription(post))}`,
    `date: ${post.data.date.toISOString()}`,
    `tag: ${JSON.stringify(post.data.tag)}`,
    post.data.lang ? `lang: ${JSON.stringify(post.data.lang)}` : undefined,
    `url: ${new URL(`/weekly/${post.id}`, `${SITE_URL}/`).href}`,
    '---',
    '',
    post.body?.trim() ?? '',
    '',
  ]
    .filter((line) => line !== undefined)
    .join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
