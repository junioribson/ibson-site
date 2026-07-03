# Deploy do site (Cloudflare Pages)

O site é estático (Astro). O build gera a pasta `dist/`, que é o que vai para o ar.

## Opção A: publicar direto da sua máquina (mais rápido, sem GitHub)

Pré-requisito: ter uma conta gratuita na Cloudflare (https://dash.cloudflare.com/sign-up).

No terminal, dentro da pasta do projeto:

```bash
export PATH="$HOME/.local/bin:$PATH"   # garante o Node local
npm run build                          # gera dist/
npx wrangler login                     # abre o navegador, você autoriza (uma vez)
npm run deploy                         # publica a pasta dist/ no Cloudflare Pages
```

Na primeira vez, o Wrangler cria o projeto `ibson-junior` e devolve uma URL
`https://ibson-junior.pages.dev`. A cada nova atualização, é só rodar `npm run deploy`
de novo.

## Opção B: publicar pelo painel (arrastar e soltar)

1. Rode `npm run build` para gerar `dist/`.
2. Entre em https://dash.cloudflare.com , menu Workers & Pages, Create, Pages,
   "Upload assets".
3. Arraste a pasta `dist/`. Pronto, sai no ar em `*.pages.dev`.

## Domínio próprio (ibsonjunior.com.br) com DNS no Registro.br

1. No Cloudflare Pages, abra o projeto, aba **Custom domains**, "Set up a custom domain",
   digite `ibsonjunior.com.br` (e depois `www.ibsonjunior.com.br`).
2. O Cloudflare vai pedir para o domínio usar os **nameservers da Cloudflare** (jeito
   recomendado). Ele mostra 2 nameservers, algo como `xxx.ns.cloudflare.com`.
3. No **Registro.br**, entre no domínio, vá em "Alterar servidores DNS" e troque pelos
   2 nameservers que a Cloudflare mostrou. Salve.
4. A propagação leva de alguns minutos a algumas horas. Depois disso o site abre em
   `https://ibsonjunior.com.br` com HTTPS automático.

Alternativa sem trocar nameserver (mantendo o DNS no Registro.br): criar um registro
**CNAME** `www` apontando para `ibson-junior.pages.dev`, e usar o redirecionamento do
Registro.br do domínio raiz para o `www`. A troca de nameserver (passo 3) é mais simples
e confiável.

## Observações
- `npm run deploy` está definido no package.json como `wrangler pages deploy dist`.
- O `astro.config.mjs` já tem `site: 'https://ibsonjunior.com.br'` (bom para SEO).
- Nada de segredo fica no repositório; a autenticação é feita pelo `wrangler login`.
