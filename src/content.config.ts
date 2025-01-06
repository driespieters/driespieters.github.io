import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      video: z
        .string()
        .optional()
        .refine((val) => !val || val.endsWith(".mp4"), {
          message: "Video must be an MP4 file",
        }),
      browser_image: image(),
      browser_video: z
        .string()
        .optional()
        .refine((val) => !val || val.endsWith(".mp4"), {
          message: "Video must be an MP4 file",
        }),
      url: z.string().url().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

const services = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/services" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { projects, services };
