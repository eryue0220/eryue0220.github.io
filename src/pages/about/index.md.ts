import type { APIRoute } from 'astro';
import { SITE_AUTHOR, SITE_URL } from '@/constant';

export const GET: APIRoute = () => {
  const body = [
    `# About ${SITE_AUTHOR}`,
    '',
    `${SITE_AUTHOR} is a full-stack engineer from China. This page covers work experience, projects, open-source contributions, skills, education, and languages.`,
    '',
    `HTML: ${new URL('/about/', `${SITE_URL}/`).href}`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
