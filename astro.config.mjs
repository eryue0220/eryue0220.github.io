import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import remarkToc from 'remark-toc';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: 'prism',
    remarkPlugins: [remarkToc],
    drafts: true,
    gfm: true
  },
  integrations: [
    react(),
    mdx({
      drafts: true,
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'dracula'
      },
      remarkPlugins: [remarkToc],
      remarkRehype: { footnoteLabel: 'Footnotes' },
      gfm: false
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://eryue0220.github.io/'
});
