import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: 'prism',
    remarkPlugins: [remarkToc],
    drafts: true,
    gfm: true,
  },
  integrations: [
    mdx({
      drafts: true,
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'dracula' },
      remarkPlugins: [remarkToc],
      gfm: false,
    }),
    tailwind(),
  ],
  site: 'https://eryue0220.github.io/',
});
