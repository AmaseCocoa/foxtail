import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    createdAt: z.date(),
    updatedAt: z.date().optional(),
    iconUrl: z.string().url().optional(),
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    tags: z.array(z.string()).default([]),
    license: z
      .enum([
        "CC0",
        "CC BY",
        "CC BY-SA",
        "CC BY-NC",
        "CC BY-ND",
        "CC BY-NC-ND",
        "All Rights Reserved",
      ])
      .optional()
      .default("All Rights Reserved"),
     noAi: z.boolean().default(true)
  }),
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
});

export const collections = {
  blog: blogCollection,
};
