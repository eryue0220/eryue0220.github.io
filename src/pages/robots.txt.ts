import type { APIRoute } from 'astro';
import { SITE_URL } from '@/constant';

const sitemap = new URL('sitemap-index.xml', `${SITE_URL}/`).href;

export const GET: APIRoute = () =>
  new Response(
    [
      'User-agent: *',
      'Allow: /',
      '',
      `Sitemap: ${sitemap}`,
      '',
    ].join('\n'),
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    },
  );
