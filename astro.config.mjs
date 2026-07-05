// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ibsonjunior.com.br',
  i18n: {
    locales: ['pt', 'es', 'en'],
    defaultLocale: 'pt',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // Emite os alternates hreflang e marca o PT como idioma padrao, reforcando
      // ao Google que a versao principal e a PT (raiz), nao a /en/ ou /es/.
      i18n: {
        defaultLocale: 'pt',
        locales: { pt: 'pt-BR', es: 'es', en: 'en' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    // 0.0.0.0 permite acesso pelo celular na mesma rede local
    host: true,
    port: 4321,
  },
});
