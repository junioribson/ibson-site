# Ibson Junior · ibsonjunior.com.br

Site de marca pessoal de Ibson Junior (estrategista digital, mentor, palestrante e
conselheiro em formação). Site estático em Astro + Tailwind CSS. As diretrizes de
conteúdo e do sistema visual estão em [CLAUDE.md](CLAUDE.md).

## Rodar localmente

```bash
npm install       # instala dependências (uma vez)
npm run dev        # sobe o servidor de desenvolvimento em http://localhost:4321
npm run build      # gera o site estático em dist/
npm run preview    # serve o build de produção
```

O dev server já sobe com `--host`, então também fica acessível pelo celular na mesma
rede Wi-Fi pelo endereço "Network" mostrado no terminal (algo como
`http://192.168.x.x:4321/`).

## Estrutura

```
src/
  layouts/Base.astro        layout, fontes, meta, grão e reveal on scroll
  pages/index.astro          monta a página com todos os componentes
  components/                uma seção por componente
    Nav, Hero, Tese, Sobre, Cases, ProliferArte,
    LivrosConselho, Mentoria, Palestras, Artigos, Contato, Footer, Logo
  styles/
    global.css               tokens (paleta + fontes) e base
    sections.css             estilos de cada seção
public/assets/               logo, retratos, capas, artigos, arquetipos
reference/                   design HTML original de referência
```

## Trocar textos e imagens

- Publicações da ProliferArte: array `pubs` em `src/components/ProliferArte.astro`.
- Artigos do LinkedIn: array `artigos` em `src/components/Artigos.astro`.
- Retrato do Sobre: variável `photo` em `src/components/Sobre.astro`.
- Livro e formação: array `cards` em `src/components/LivrosConselho.astro`.

Para cada imagem, coloque o arquivo otimizado na subpasta certa de `public/assets/`
(ver `public/assets/README.md`) e aponte o caminho no componente. Enquanto a imagem
real não chega, cada card mostra um placeholder.
```
