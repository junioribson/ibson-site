// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ibsonjunior.com.br',
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    // 0.0.0.0 permite acesso pelo celular na mesma rede local
    host: true,
    port: 4321,
  },
});
