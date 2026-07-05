import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Artigos publicados no próprio site (reproduzidos fielmente dos originais do
// Ibson no LinkedIn), para indexação e autoridade no Google.
const artigos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/artigos" }),
  schema: z.object({
    title: z.string(),
    date: z.string(), // ISO ou legível
    dateISO: z.string(), // yyyy-mm-dd para <time> e schema
    category: z.string(),
    readingTime: z.string(),
    cover: z.string(),
    excerpt: z.string(),
    linkedinUrl: z.string(),
  }),
});

export const collections = { artigos };
