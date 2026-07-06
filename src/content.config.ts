import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Artigos publicados no próprio site (reproduzidos fielmente dos originais do
// Ibson no LinkedIn), para indexação e autoridade no Google. Uma coleção por idioma.
const schema = z.object({
  title: z.string(), // H1 na página (voz editorial, estilo do LinkedIn)
  date: z.string(), // data legível (localizada por idioma)
  dateISO: z.string(), // yyyy-mm-dd para <time> e schema
  category: z.string(),
  readingTime: z.string(),
  cover: z.string(),
  excerpt: z.string(),
  linkedinUrl: z.string(),
  // Camadas estratégicas de SEO (todas opcionais, com fallback para os campos acima).
  // Regra: todo artigo novo deve preenchê-las. Ver HANDOFF (Frente 1).
  seoTitle: z.string().optional(), // <title> do Google (palavras-chave no início, ~60 caracteres)
  socialTitle: z.string().optional(), // og:title / twitter:title (compartilhamento e Discover)
  seoDescription: z.string().optional(), // meta description (~155 caracteres, com termos-chave)
  ogImage: z.string().optional(), // imagem social dedicada (default: a capa)
  focusKeyword: z.string().optional(), // termo-alvo principal (referência interna, não renderizado)
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
