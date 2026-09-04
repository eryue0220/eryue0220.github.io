import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
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
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://eryue0220.github.io/',
});
