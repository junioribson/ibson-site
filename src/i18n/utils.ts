// Camada i18n: resolve o conteúdo por idioma e ajuda a montar caminhos localizados.
import * as ptContent from "../data/content";
import * as esContent from "../data/content.es";
import * as enContent from "../data/content.en";
import imageDims from "../data/image-dims.json";

export type Locale = "pt" | "es" | "en";
export const LOCALES: Locale[] = ["pt", "es", "en"];
export const DEFAULT_LOCALE: Locale = "pt";

// Metadados dos idiomas (bandeira, rótulo curto, nome, código html lang).
export const LANGS: { code: Locale; flag: string; short: string; label: string; htmlLang: string }[] = [
  { code: "pt", flag: "🇧🇷", short: "PT", label: "Português", htmlLang: "pt-BR" },
  { code: "es", flag: "🇪🇸", short: "ES", label: "Español", htmlLang: "es" },
  { code: "en", flag: "🇺🇸", short: "EN", label: "English", htmlLang: "en" },
];

// Cada idioma cai para o PT em qualquer export que ainda não foi traduzido,
// então conteúdo novo nunca quebra o site (mostra em PT até ser traduzido).
const CONTENT = {
  pt: { ...ptContent },
  es: { ...ptContent, ...esContent },
  en: { ...ptContent, ...enContent },
};

export function isLocale(x: unknown): x is Locale {
  return typeof x === "string" && (LOCALES as string[]).includes(x);
}

export function normalizeLocale(locale?: string | null): Locale {
  return isLocale(locale) ? locale : DEFAULT_LOCALE;
}

// Conteúdo (content.ts) do idioma pedido, com fallback para PT export a export.
export function getContent(locale?: string | null) {
  return CONTENT[normalizeLocale(locale)];
}

export function htmlLang(locale?: string | null): string {
  return LANGS.find((l) => l.code === normalizeLocale(locale))!.htmlLang;
}

// Remove o prefixo de idioma de um pathname, devolvendo o caminho "base" (relativo ao PT).
// Ex.: "/es/artigos/x" -> "/artigos/x"; "/en" -> "/"; "/artigos" -> "/artigos".
export function stripLocale(pathname: string): string {
  const m = pathname.match(/^\/(es|en)(\/.*)?$/);
  if (m) return m[2] || "/";
  return pathname || "/";
}

// Monta o caminho equivalente em outro idioma (PT sem prefixo, ES/EN com prefixo).
export function localizePath(pathname: string, target: Locale): string {
  const base = stripLocale(pathname);
  if (target === "pt") return base;
  const clean = base === "/" ? "" : base;
  return `/${target}${clean}` || `/${target}/`;
}

// Nome da coleção de artigos (Astro content) para o idioma.
export function articlesCollection(locale?: string | null): "artigos" | "artigosEs" | "artigosEn" {
  const l = normalizeLocale(locale);
  return l === "es" ? "artigosEs" : l === "en" ? "artigosEn" : "artigos";
}

// Idioma inferido do pathname (para quando currentLocale não estiver disponível).
export function localeFromPath(pathname: string): Locale {
  const m = pathname.match(/^\/(es|en)(\/|$)/);
  return m ? (m[1] as Locale) : DEFAULT_LOCALE;
}

// Dimensões intrínsecas (largura/altura) de uma imagem de /public/assets, para
// reservar o espaço no layout (evita CLS) e satisfazer a auditoria do Lighthouse.
// O mapa é gerado por script a partir dos arquivos reais. Se a imagem não estiver
// no mapa, devolve objeto vazio (não adiciona atributos, sem quebrar nada).
const DIMS = imageDims as Record<string, [number, number]>;
export function imgDims(src?: string | null): { width?: number; height?: number } {
  const d = src ? DIMS[src.split("?")[0]] : undefined;
  return d ? { width: d[0], height: d[1] } : {};
}
