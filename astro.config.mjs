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
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    // 0.0.0.0 permite acesso pelo celular na mesma rede local
    host: true,
    port: 4321,
  },
});
