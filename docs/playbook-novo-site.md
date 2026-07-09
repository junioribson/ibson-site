# Playbook: construir um site de alto padrão (Astro + i18n + SEO + LGPD)

> Compilado do que funcionou (e do que deu errado) na construção de ibsonjunior.com.br,
> generalizado para um novo site. Serve de briefing para uma nova sessão do Claude e de
> checklist para manter o padrão alto. Adapte os nomes/idiomas/entidade ao seu projeto.
>
> Como usar: copie este arquivo para a raiz do novo projeto (pode virar o `CLAUDE.md`
> inicial, ou ficar em `docs/`). No começo da nova sessão, mande o Claude LER este arquivo
> inteiro antes de escrever qualquer linha.

---

## 0. Prompt de arranque (cole na nova sessão)

"Antes de tudo, leia `docs/playbook-novo-site.md` inteiro. Vamos construir um site estático
em Astro + Tailwind, trilíngue (PT/ES/EN), com tema claro/escuro, SEO/GEO de nível estúdio,
Google Analytics com consentimento (LGPD), Search Console, sitemaps e política de privacidade.
Siga o playbook com rigor, verifique tudo com dados reais (não afirme 'está pronto' sem checar
o HTML gerado e o site ao vivo), e mantenha os 3 idiomas 100% sincronizados. Regras
inegociáveis do projeto: [DEFINA AQUI, ex.: voz, termos proibidos, etc.]."

---

## 1. Stack e por quê

- **Astro + Tailwind**, site **estático** (SSG). Rápido, barato (hospedagem grátis), ótimo para SEO.
- **Tailwind via `@tailwindcss/vite`**. `astro.config.mjs` com `build: { inlineStylesheets: 'always' }`
  (embute o CSS no HTML, elimina a requisição que bloqueia a renderização, ganho grande de FCP/LCP).
- **Fontes auto-hospedadas** (`.woff2` em `/public/fonts`), com `<link rel="preload">` só nos pesos
  críticos (o do título/LCP e o do corpo). NÃO usar Google Fonts via CDN (custa requisição externa
  e privacidade).
- **Imagens** como arquivos otimizados (`.webp`), nunca base64. Sempre com `width`/`height` corretos
  (evita CLS). Converter com `sharp` (`.webp({quality:82})`); `cwebp` pode não existir na máquina.
- **Deploy:** Vercel (plano Hobby grátis) com auto-deploy no `git push` da `main`. Alternativa: Cloudflare Pages.

## 2. Arquitetura i18n (a espinha dorsal)

Padrão que se provou robusto:

- `astro.config.mjs`: `i18n: { locales: ['pt','es','en'], defaultLocale: 'pt', routing: { prefixDefaultLocale: false } }`.
  O idioma padrão fica na raiz (`/`), os outros com prefixo (`/es/`, `/en/`).
- **Camada de conteúdo:** `src/data/content.ts` (padrão) + `content.es.ts` + `content.en.ts`, com os
  MESMOS exports. Um resolver `getContent(locale)` espalha o PT e sobrepõe es/en (PT como fallback).
- **Microcopy/labels:** `src/i18n/ui.ts` com um **type `UIStrings`** e um record por locale. O tipo
  FORÇA que toda chave exista nos 3 idiomas (o build quebra se faltar). Isso é o que mantém a sincronia.
- **Utilitários** (`src/i18n/utils.ts`): `normalizeLocale`, `htmlLang`, `localizePath(path, locale)`
  (para links locale-aware), `t(locale)` (retorna UIStrings).
- **Rotas:** um arquivo por idioma (`src/pages/x.astro`, `src/pages/es/x.astro`, `src/pages/en/x.astro`),
  todos finos, delegando para um componente compartilhado.
- **REGRA DE OURO:** toda string nova, todo campo de conteúdo novo, toda rota nova = criar nos 3 idiomas
  na mesma leva. Nunca deixar um idioma pra trás.

## 3. Tema claro/escuro

- Sistema de **tokens CSS** (variáveis) para todas as cores. Nada de cor hardcoded nos componentes.
- `data-theme="light|dark"` no `<html>` (toggle do usuário) + `@media (prefers-color-scheme: dark)`
  como sinal inicial. O `data-theme` estampado pelo toggle deve VENCER nos dois sentidos.
- **Garantir contraste WCAG AA nos DOIS temas.** Testar cada tela nos dois. Cores neon que brilham no
  escuro viram cores vivas e legíveis no claro (ajustar por tema, não usar a mesma).

## 4. SEO on-page (camadas distintas)

Para cada página/artigo, tratar como CAMADAS separadas (não repetir a mesma frase em tudo):

- **Slug:** descritivo e contextual (não o título cru). URL maior com contexto rankeia melhor.
- **H1:** pode diferir do título editorial; deve conter o termo pesquisável.
- **`<title>` (SEO title):** com o termo-alvo + marca, padrão `Assunto específico | Marca` (use `|`, nunca travessão).
- **Meta description:** ~155 caracteres, com o termo, atrativa (serve de copy de clique).
- **Social title / OG:** pode ser mais editorial.
- Guardar essas camadas no schema do conteúdo (frontmatter/collection): `seoTitle`, `socialTitle`,
  `seoDescription`, `focusKeyword`, etc. (opcionais, com fallback para o title).

## 5. Dados estruturados (schema.org / JSON-LD): LEIA COM ATENÇÃO

Isto foi a fonte do nosso pior bug. Regras:

- Definir a **entidade principal** em cheio na home (Person para pessoa; **Organization/WebSite** para
  site não-pessoal), com `@id` estável (ex.: `https://site/#org`), `name`, `url`, `sameAs`,
  `description`, e um **`disambiguatingDescription`** (campo do schema.org feito para separar homônimos).
- **BUG QUE COMETEMOS:** cada página é avaliada pelo Google **isoladamente**. Um `@id` definido na home
  NÃO é resolvido em outra página. Se uma LP tem um `Service` com `provider: {@id: #person}` mas NÃO
  emite o nó Person naquela página, a referência fica **pendurada** (schema quebrado). Resultado: erro
  "campo X não encontrado" no Search Console + entidade não consolida.
  - **Correção:** exporte uma função `entityNode(locale)` autossuficiente (com `worksFor`/dados inline)
    e injete o nó em TODA página que referencia a entidade (LPs, sobre, etc.).
- **`ProfilePage`/`AboutPage` exigem `mainEntity`** (não só `about`) apontando para a entidade. Faltou
  `mainEntity` na nossa ProfilePage → erro crítico no Search Console. Confira os campos obrigatórios de
  CADA tipo na doc do Google.
- **`FAQPage`** para People Also Ask / featured snippets: renderize Q&A VISÍVEL + emita o schema. O
  título do bloco é livre (pode ser editorial, ex.: "Entendendo melhor alguns pontos"); as PERGUNTAS
  é que casam com a busca, mantenha em forma de pergunta. Cada `Question` precisa de `acceptedAnswer.text`.
- **`BreadcrumbList`** em toda página profunda (artigos, hubs, LPs).
- **SEMPRE valide** no Teste de Resultados Aprimorados (search.google.com/test/rich-results) e confira o
  JSON-LD no HTML gerado antes de confiar.

## 6. Indexação e GEO (buscadores de IA)

- `@astrojs/sitemap` com `serialize()` para dar **prioridade por tipo de página** (home 1.0, páginas
  principais 0.9, hubs/artigos 0.8, legais 0.3) e `changefreq`. Normalizar tirando o prefixo de idioma
  (uma regra serve aos 3).
- **Sitemap de imagens** próprio (`scripts/gen-sitemap-images.mjs`): mapeia cada imagem à página onde
  aparece, para o Google Images indexar suas artes. Nomeie os arquivos com prefixo da marca + tema
  (`marca-assunto.webp`), o filename é sinal de SEO de imagem.
- `robots.txt`: aberto para buscadores tradicionais E crawlers de IA (GPTBot, ClaudeBot, PerplexityBot,
  Google-Extended, etc., o chamado GEO). Aponte os 2 sitemaps.
- `llms.txt` (rota que gera o arquivo, atualiza sozinha): título, resumo e links das páginas-chave, para
  ChatGPT/Perplexity/Gemini entenderem o site.
- **Hubs de tópico + linkagem interna:** agrupar conteúdo por tema (`/temas/<slug>/`), cada peça linka
  pro hub do seu tema e para peças relacionadas. Sinal forte de autoridade de tópico.
- **Canonical + hreflang** (os 3 idiomas + `x-default`) em toda página. O `@astrojs/sitemap` emite os
  alternates se configurado com `i18n`.

## 7. Analytics, Search Console e ferramentas

- **Google Analytics (GA4):** carregar de forma **diferida** (após 1ª interação ou idle) E **atrás de
  consentimento** (opt-in, ver LGPD abaixo). Bônus: como o Lighthouse não clica "aceitar", o GA nem
  entra na medição, a performance melhora.
- **Search Console:** verificar (Domain property via TXT no DNS). Enviar `sitemap-index.xml` e
  `sitemap-images.xml`. Pedir indexação das páginas-chave (uma vez cada, e ao editar). Monitorar
  "Aprimoramentos" (FAQ, Página de perfil, etc.) e usar "Validar correção" após consertar. O verde leva
  dias/semanas (recrawl no ritmo do Google).
- **Formulário de contato:** Web3Forms (grátis, sem backend, cai no e-mail). Declarar na política de privacidade.
- **E-mail:** ImprovMX (grátis, catch-all `*@dominio` → seu Gmail; configurar MX + SPF).

## 8. LGPD / privacidade

- **Política de Privacidade** trilíngue, FACTUAL (não genérica): controlador, dados coletados
  (navegação + formulário), cookies, bases legais (LGPD art. 7), **operadores reais** (Google Analytics,
  Web3Forms, Vercel, etc.), transferência internacional, direitos do titular (art. 18), retenção,
  segurança, menores, contato. Página indexável, prioridade baixa no sitemap. Deixar `TODO(legal):
  revisão por advogado + CNPJ/endereço`.
- **Aviso de cookies opt-in**, feito à mão (~2KB inline, SEM biblioteca externa tipo Cookiebot/OneTrust,
  que são pesadas): `position: fixed` (zero CLS), cores da identidade. O GA **só carrega após "Aceitar"**
  (gate: o loader checa `localStorage 'cookie-consent' === 'accepted'`; o banner chama o loader no aceite).
  Recusar mantém desligado; a escolha persiste; nunca reaparece. Nunca invente consentimento se o
  storage estiver bloqueado (trate como recusado).

## 9. Performance (meta: 95-100 mobile no Lighthouse)

- CSS inline (`inlineStylesheets:'always'`), fontes auto-hospedadas + preload dos pesos críticos.
- GA diferido + atrás de consentimento (não entra na medição).
- Imagens `.webp` com `width`/`height` corretos (CLS = 0). `object-fit` conforme o caso. Nunca ampliar
  além da resolução nativa.
- Banners/overlays em `position: fixed` (fora do fluxo, 0 CLS).
- Animações de entrada RÁPIDAS: não esconder o conteúdo do LCP atrás de animação lenta (isso derrubou
  nosso Speed Index; acelerar as animações resolveu).
- Medir sempre com dados: buildar, inspecionar o `dist/`, e rodar o PageSpeed no site AO VIVO.

## 10. Deploy e infra

- **Vercel Hobby (grátis)** + GitHub auto-deploy no push da `main` (~30s a poucos min). Verificar ao vivo.
- `vercel.json` com redirects 301/308 para slugs antigos (quando renomear URLs, para não perder link/SEO).
- DNS: nameservers do host (Vercel) ou registros apontando; domínio no registrador (Registro.br para .com.br).
- **Custo real:** hospedagem/analytics/form/e-mail = grátis. Único gasto recorrente: o domínio (~R$40/ano).

## 11. Autoridade de entidade (off-page): adapte

- **`sameAs`** no schema apontando para todos os perfis oficiais + fontes que citam a entidade. Fechar o
  ciclo: os perfis apontam de volta pro site (links nofollow, mas o valor é CONSOLIDAÇÃO de entidade, não
  PageRank).
- **Bios consistentes** em todos os perfis, com a MESMA descrição do `disambiguatingDescription`. Todos
  contando a mesma história = o Google/IAs consolidam a entidade.
- **Wikidata:** para entidade notável (pessoa/org com fontes independentes), criar item com referências
  (o Claude não cria conta; prepara e guia; você publica). Item com só fontes próprias pode ser apagado
  por notabilidade, por isso anexar fontes independentes. Depois, adicionar a URL `Q...` ao `sameAs`.
  (Para site não-pessoal sem notabilidade clara, isto pode não se aplicar; priorize `sameAs` + PR.)
- **PR/backlinks:** a alavanca off-page que mais acelera termos comerciais disputados. É relacionamento,
  não código.

## 12. Ordem de construção (checklist)

1. Scaffold: Astro + Tailwind + i18n + tokens de tema (claro/escuro).
2. `Base.astro` (layout): `<head>` com meta, OG, `og:locale`, canonical, hreflang, preload de fontes,
   slot de JSON-LD, e o GA diferido+gated. Grão/textura e toggle de tema se houver.
3. Camada de conteúdo (`content.*.ts`) + `ui.ts` tipado. Nada hardcoded.
4. Componentes/seções + rotas nos 3 idiomas.
5. Schema: `schema.ts` com a entidade principal + `entityNode()` reutilizável injetado em TODA página
   que a referencia. Breadcrumb/FAQ/CollectionPage por tipo.
6. Sitemaps (config + `gen-sitemap-images.mjs`), `robots.txt`, rota `llms.txt`.
7. Política de privacidade (3 idiomas) + `CookieBanner` opt-in + gate do GA.
8. Passo de performance (Lighthouse mobile, mirar 95-100).
9. Deploy (Vercel + domínio + DNS).
10. Search Console (verificar, enviar sitemaps, indexar) + GA4 + validar schema no Rich Results Test.
11. Off-page: `sameAs`, bios, (Wikidata se aplicável), PR.

## 13. Lições e ERROS a NÃO repetir (a parte mais valiosa)

- **Verifique com DADOS, não com fé.** Nunca diga "está perfeito/pronto" sem: buildar, dar `grep`/inspecionar
  o HTML gerado, e conferir o site AO VIVO após o deploy. Nós rodamos uma auditoria dura e ela achou buracos
  reais depois de eu ter dito que estava bom. Auditar cedo, honesto e adversarial.
- **Schema por página, não por site.** O `@id` cross-página não resolve. Emita a entidade em cada página que
  a cita. `ProfilePage`/`AboutPage` precisam de `mainEntity`. Valide no Rich Results Test.
- **i18n nunca desincroniza.** Tipo `UIStrings` obrigatório; toda chave nos 3 idiomas; o build deve quebrar
  se faltar. Conferir contagem de itens (ex.: perguntas de FAQ) igual nos 3.
- **Consentimento antes do analytics.** GA gated = compliance E performance. Banner leve, sem lib externa.
- **Densidade de termos comerciais no CORPO, não só no title.** Termos de intenção (contratar, preço, geo,
  categoria) precisam aparecer no texto visível e na FAQ, de forma NATURAL (sem keyword stuffing).
- **Não invente fatos.** Incerteza vira comentário `TODO` no código. Ex.: dados de terceiros, números, datas.
- **Defina regras editoriais inegociáveis cedo** (voz, termos proibidos). No projeto pessoal era "nunca
  travessão (— ou –), usar vírgula/dois-pontos/parênteses". Rode `grep -rl '—\|–'` em `src`/`dist` antes de
  cada push. Defina as SUAS.
- **Seja honesto sobre os tetos de automação.** Nem tudo dá pra automatizar 100%: tarefas agendadas rodam
  quando o app está aberto (ou na próxima abertura), scraping atrás de login exige navegador interativo,
  nada roda com a máquina desligada. Prometa só o que a ferramenta entrega; explique o teto em vez de
  montar algo que quebra calado.
- **Multiagente custa cota.** Workflows com muitos agentes consomem bastante do plano (Max). Use com
  critério; para tarefas simples, faça direto.
- **Cheque rede/auth antes do push.** Se a rede/host bloquear GitHub/deploy, resolva a conectividade antes
  (no projeto pessoal havia um detour de rede específico da máquina). Confirme o deploy AO VIVO.
- **Renomeou URL? Redirect 301.** Sempre. Senão perde link e ranking.
- **Teste em 3 larguras** (mobile ~390, tablet ~900, desktop >1180) e nos 2 temas, sempre, no preview ao vivo.

## 14. Comandos e utilitários que valeram

- `sharp` para converter/otimizar imagens (jpg → webp quality 82).
- `scripts/gen-sitemap-images.mjs` (gerador do sitemap de imagens, reutilizável).
- Verificação de schema por página: extrair os `<script type="application/ld+json">` do HTML e validar
  os `@type`/campos obrigatórios com um script Node.
- Checagem de travessão: `grep -rl '—\|–' src/ public/ dist/`.
- Verificação ao vivo pós-deploy: `curl -s <url> | grep <sinal esperado>`.

---

Mantém o padrão alto: verifica tudo, sincroniza os 3 idiomas, valida o schema, gated no analytics,
honesto sobre limites. Foi assim que este site ficou sólido.
