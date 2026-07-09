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
      // Normaliza tirando o prefixo de idioma para uma regra so servir aos 3.
      serialize(item) {
        const p = (item.url.replace('https://ibsonjunior.com.br', '').replace(/^\/(es|en)/, '')) || '/';
        let pr = 0.7, cf = 'monthly';
        if (p === '/') { pr = 1.0; cf = 'weekly'; }
        else if (p === '/palestras/' || p === '/mentoria/') { pr = 0.9; cf = 'monthly'; }
        else if (p === '/ibson-junior/') { pr = 0.8; cf = 'monthly'; }
        else if (p === '/artigos/') { pr = 0.8; cf = 'weekly'; }
        else if (p.startsWith('/temas/')) { pr = 0.8; cf = 'weekly'; }
        else if (p.startsWith('/artigos/')) { pr = 0.75; cf = 'monthly'; }
        else if (p === '/imprensa/') { pr = 0.6; cf = 'yearly'; }
        else if (p === '/politica-de-privacidade/') { pr = 0.3; cf = 'yearly'; }
        item.priority = pr;
        item.changefreq = cf;
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
