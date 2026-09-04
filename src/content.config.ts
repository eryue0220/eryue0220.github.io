import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const contentSchema = z.object({
  title: z.string(),
  tag: z.string(),
  draft: z.boolean().optional(),
  lang: z.string().optional(),
  date: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
});

export const collections = {
  blog: defineCollection({
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    schema: contentSchema,
  }),
  weekly: defineCollection({
    loader: glob({ base: './src/content/weekly', pattern: '**/*.{md,mdx}' }),
    schema: contentSchema,
  }),
};
