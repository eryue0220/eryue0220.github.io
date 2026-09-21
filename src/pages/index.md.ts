import type { APIRoute } from 'astro';
import { SITE_AUTHOR, SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '@/constant';

export const GET: APIRoute = () => {
  const body = [
    `# ${SITE_TITLE}`,
    '',
    `> ${SITE_DESCRIPTION}`,
    '',
    `${SITE_AUTHOR} is a full-stack engineer from China with more than 10 years of experience building web applications, primarily with React, Next.js, TypeScript, and Koa.js.`,
    '',
    `- Site: ${SITE_URL}`,
    `- About: ${new URL('/about/', `${SITE_URL}/`).href}`,
    `- Blog: ${new URL('/blog/', `${SITE_URL}/`).href}`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
