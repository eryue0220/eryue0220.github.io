import { defineCollection, z } from 'astro:content';

const contentSchema = z.object({
  title: z.string(),
  tag: z.string(),
  draft: z.boolean().optional(),
  lang: z.string().optional(),
  date: z.string()
    .or(z.date())
    .transform((val) => new Date(val)),
  updatedDate: z
    .string()
    .optional()
    .transform((str) => (str ? new Date(str) : undefined)),
});

export const collections = {
  blog: defineCollection({
    schema: contentSchema,
  }),
  weekly: defineCollection({
    schema: contentSchema,
  }),
};
