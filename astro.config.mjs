// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ibsonjunior.com.br',
  // Embute o CSS no HTML: elimina a requisicao de CSS que bloqueava a
  // renderizacao (principal gargalo de FCP/LCP no mobile).
  build: { inlineStylesheets: 'always' },
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
      changefreq: 'weekly',
      priority: 0.7,
      // Prioridade/frequencia por tipo de pagina (ajuda o crawler a priorizar).
      serialize(item) {
        const path = item.url.replace('https://ibsonjunior.com.br', '');
        if (path === '/') { item.priority = 1.0; item.changefreq = 'weekly'; }
        else if (path === '/es/' || path === '/en/') { item.priority = 0.9; item.changefreq = 'weekly'; }
        else if (path === '/artigos/' || path === '/es/artigos/' || path === '/en/artigos/') { item.priority = 0.8; item.changefreq = 'weekly'; }
        else if (path.includes('/artigos/')) { item.priority = 0.75; item.changefreq = 'monthly'; }
        return item;
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
