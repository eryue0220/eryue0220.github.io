import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_AUTHOR, SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '@/constant';
import { postDescription } from '@/utils';

function sitePath(path: string) {
  return new URL(path, `${SITE_URL}/`).href;
}

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  const lines = [
    `# ${SITE_TITLE}`,
    '',
    `> ${SITE_DESCRIPTION}`,
    '',
    `Personal website of ${SITE_AUTHOR}, a full-stack engineer from China. Content covers web engineering (React, TypeScript, Node.js), observability, and interview notes. Posts may be in English or Chinese.`,
    '',
    'Prefer the Markdown URLs below when ingesting a page. HTML versions live at the same path without the `.md` suffix.',
    '',
    '## Pages',
    '',
    `- [Home](${sitePath('index.md')}): Introduction and contact links`,
    `- [About](${sitePath('about/index.md')}): Experience, projects, skills, and education`,
    `- [Blog](${sitePath('blog/index.md')}): Published posts`,
    `- [RSS](${sitePath('rss.xml')}): Feed of published posts`,
    `- [Full content](${sitePath('llms-full.txt')}): Concatenated Markdown of published posts`,
    '',
    '## Blog',
    '',
    ...posts.map(
      (post) =>
        `- [${post.data.title}](${sitePath(`blog/${post.id}.md`)}): ${postDescription(post)}`,
    ),
    '',
    '## Optional',
    '',
    `- [Weekly notes](${sitePath('weekly/')}): Older weekly logs, not featured in the main navigation`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
