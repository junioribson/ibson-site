import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Artigos publicados no próprio site (reproduzidos fielmente dos originais do
// Ibson no LinkedIn), para indexação e autoridade no Google. Uma coleção por idioma.
const schema = z.object({
  title: z.string(),
  date: z.string(), // data legível (localizada por idioma)
  dateISO: z.string(), // yyyy-mm-dd para <time> e schema
  category: z.string(),
  readingTime: z.string(),
  cover: z.string(),
  excerpt: z.string(),
  linkedinUrl: z.string(),
});

const artigos = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/artigos" }),
  schema,
});
const artigosEs = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/artigos-es" }),
  schema,
});
const artigosEn = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/artigos-en" }),
  schema,
});

export const collections = { artigos, artigosEs, artigosEn };
