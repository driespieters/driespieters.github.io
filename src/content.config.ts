import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/projects" }),
  schema: z.object({
    title: z.string(),
    url: z.string().url().optional(),
    tags: z.array(z.string()).optional(),
    sort: z.number().optional(),
    year: z.string().optional(),
    summary: z.string().optional(),
  }),
});

export const collections = { projects };
