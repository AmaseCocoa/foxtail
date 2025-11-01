import { z, defineCollection } from "astro:content";

const adventCalander = z.object({
  id: z.number(),
  name: z.string(),
  day: z.number()
})

export const blogLicenses = z
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
  .default("All Rights Reserved")

export const blogSchema = z.object({
  createdAt: z.date(),
  updatedAt: z.date().optional(),
  iconUrl: z.string().url().optional(),
  title: z.string(),
  description: z.string(),
  thumbnail: z.string().optional(),
  tags: z.array(z.string()).default([]),
  license: blogLicenses,
  adventCalander: adventCalander.nullable().default(null),
  noAi: z.boolean().default(true),
});

const blog = defineCollection({
  type: "content",
  schema: blogSchema,
});

export const collections = { blog };