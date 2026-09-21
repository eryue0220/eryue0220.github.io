import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkToc from 'remark-toc';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Keep HTML-aware whitespace (Astro 7 default is 'jsx')
  compressHTML: true,
  markdown: {
    processor: unified({
      remarkPlugins: [remarkToc],
      gfm: true,
    }),
    syntaxHighlight: 'prism',
  },
  integrations: [
    react(),
    mdx({
      processor: unified({
        remarkPlugins: [remarkToc],
        remarkRehype: { footnoteLabel: 'Footnotes' },
        gfm: false,
      }),
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'dracula',
      },
    }),
    sitemap({
      filter: (page) =>
        !page.endsWith('.md') &&
        !page.endsWith('llms.txt') &&
        !page.endsWith('llms-full.txt') &&
        !page.includes('/rss.xml'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://eryue0220.github.io/',
});
