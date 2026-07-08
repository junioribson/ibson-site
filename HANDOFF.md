# HANDOFF, estado da missão (site ibsonjunior.com.br)

> Documento vivo de continuidade. Serve para retomar o trabalho em QUALQUER máquina
> ou sessão sem perder contexto. Atualizar ao fim de cada frente concluída.
> Idioma de trabalho: sempre pt-BR. Regras completas em `CLAUDE.md`.

## A missão (visão geral)
Melhorar o posicionamento do Ibson Junior no Google e firmar a autoridade do nome
(vencer a disputa de nome com um jogador homônimo) construindo **3 frentes novas**:

1. **Páginas de artigos no próprio site** (maior alavanca de SEO/autoridade).
2. **Seção "Últimos posts no LinkedIn"** (galeria/carrossel para indexar as artes dos posts).
3. **Site em 3 idiomas** (PT/ES/EN) com bandeiras no topo (expandir território).

---

## FRENTE 1, Páginas de artigos  ✅ CONCLUÍDA (9 de 9 no ar)

Objetivo: reproduzir os artigos do LinkedIn **no site**, idênticos em texto e imagem,
diagramados em nível premium, com schema `BlogPosting` + canonical próprio (assim o
Google entende que a versão oficial é a do site). Cada artigo vira `/artigos/<slug>`.

**Arquitetura de navegação (dinâmica, feita nesta rodada):**
- Home, bloco `Artigos.astro`: mostra só os **3 mais recentes** (dinâmico, `getCollection` ordenado por `dateISO`), com botão "Ver todos os artigos" para `/artigos`. Menu "Artigos" continua rolando para esse bloco (`/#artigos`).
- `/artigos` (`src/pages/artigos/index.astro`): **biblioteca premium** com todos os artigos (destaque "Mais recente" + galeria), ordenada por data.
- Card compartilhado: `src/components/ArticleCard.astro` (home e biblioteca).
- Páginas de artigo: link "Ver o original no LinkedIn" REMOVIDO (o original agora é o site); rodapé tem "Ver todos os artigos" (`/artigos`) + "Compartilhar no LinkedIn". Voltar leva a `/artigos`.
- Fim de cada artigo (em `ArticlePage.astro`): (1) bloco de fechamento "continue a conversa" com link ao post; (2) bloco **"Você pode se interessar também"** (`articleRelatedTitle` no `ui.ts`) com 3 artigos do mesmo idioma (exclui o atual), reusando `ArticleCard`. Grid de 3 no desktop, faixa horizontal com scroll-snap (estilo Top Stories) no mobile.
- **Clusters de tópico (internal linking temático):** o "Veja também" prioriza artigos do **mesmo tema/pilar**, completando com os mais recentes. O mapa slug→tema fica em `src/data/clusters.ts` (`articleTheme`), 4 pilares: `decisao`, `conteudo`, `lideranca`, `vida`. Quando um pilar acumular ~4+ artigos, vale uma página-pilar dedicada. (Site estático não tem "mais acessados" em build; para isso seria preciso puxar do GA.)
- Obs: `articles.list`/`allUrl` em `content.ts` ficaram sem uso (a fonte da verdade agora é a content collection dos `.md`); mantidos por ora, podem ser removidos numa limpeza futura.

**Camadas de título/SEO por artigo (REGRA, feito):** cada `.md` tem 4 camadas no frontmatter, cada uma para uma superfície diferente. Ver `src/content.config.ts` (campos opcionais com fallback) e como são ligadas em `src/pages/**/artigos/[...slug].astro` + `Base.astro`.
- `title` = **H1** na página (voz editorial, com embasamento e contexto, não a frase curta/filosófica do LinkedIn).
- `seoTitle` = **`<title>`** do Google (palavra-chave no início, ~55 a 60 caracteres). Fallback: `title`.
- `socialTitle` = **og:title / twitter:title** (compartilhamento e Discover). Fallback: `seoTitle` → `title`.
- `seoDescription` = **meta description** (~150 a 155 caracteres, com termos-chave). Fallback: `excerpt`.
- `ogImage` (opcional) = imagem social dedicada. Fallback: `cover`.
- Base.astro emite OG/Twitter por página (não mais genérico), `og:locale` (pt_BR/es_ES/en_US), `og:type=article` + `article:*`, e schema único `BlogPosting` (sem ProfilePage duplicado).
- **Slugs**: descritivos e concisos (3 a 4 palavras-chave, sem stopwords, sem empilhar keyword, seguindo a diretriz de URL do Google). Mesmo slug nos 3 idiomas.
- **Redirects 301** dos slugs antigos → novos em `vercel.json` (com e sem barra final, nos 3 idiomas). Ao renomear um slug no futuro, SEMPRE adicionar o redirect aqui.

**Sistema já construído (pronto para reuso):**
- `src/content.config.ts`, coleção `artigos` (glob loader) + schema (title, date, dateISO, category, readingTime, cover, excerpt, linkedinUrl).
- `src/pages/artigos/[...slug].astro`, template de leitura premium + schema `BlogPosting` + canonical próprio + OG.
- `src/content/artigos/*.md`, um arquivo por artigo (frontmatter + corpo verbatim em Markdown).
- `src/components/Artigos.astro`, card abre a página interna quando o artigo tem `slug`; senão abre o LinkedIn.
- Para publicar um artigo novo: (1) criar o `.md` em `src/content/artigos/`, (2) adicionar `slug: "<slug>"` no item correspondente de `articles.list` em `src/data/content.ts`.

**Como obter o texto verbatim:** WebFetch na URL do Pulse, com o prompt
"Retorne VERBATIM no português original. NÃO traduza. NÃO resuma." (sem isso ele traduz).
Ao colar no `.md`: **trocar todo travessão (— ou –) por vírgula/dois-pontos/parênteses** (regra inegociável).

### Status por artigo (9 no total)
| # | Título | slug | data real | Página |
|---|--------|------|-----------|--------|
Slugs reescritos (SEO) com 301 dos antigos no `vercel.json`. Slug atual de cada artigo:
| # | Tema (H1 resumido) | slug atual | slug antigo (redirect 301) | data | Página |
|---|--------|------|------|------|--------|
| 1 | Conteúdo na Copa do Mundo e responsabilidade | `conteudo-copa-do-mundo-responsabilidade` | na-copa-do-mundo | 23/06/2026 | ✅ |
| 2 | Profissão que vira identidade | `profissao-identidade-carreira` | profissao-identidade | 27/05/2026 | ✅ |
| 3 | Cérebro podre, atenção e produtividade | `cerebro-podre-atencao-produtividade` | cerebro-podre | 21/04/2026 | ✅ |
| 4 | Estratégia x intenção | `estrategia-e-intencao` | estrategia | 30/03/2026 | ✅ |
| 5 | Qualidade da decisão e governança | `qualidade-da-decisao-governanca` | governanca | 25/02/2026 | ✅ |
| 6 | Comunicação que falha vira ruído | `comunicacao-falha-estrategia-ruido` | comunicacao | 30/01/2026 | ✅ |
| 7 | O tempo é um oceano | `o-tempo-e-um-oceano` | (mantido, sem redirect) | 22/12/2025 | ✅ |
| 8 | IA e inteligência emocional | `inteligencia-artificial-e-emocional` | inteligencia-artificial | 25/11/2025 | ✅ |
| 9 | Cultura organizacional não é PowerPoint | `cultura-organizacional-nao-e-powerpoint` | cultura | 28/10/2025 | ✅ |

**Datas reais** foram capturadas do JSON-LD `datePublished` de cada Pulse e estão no frontmatter de cada `.md`.

**Frente 1 fechada:** os 9 artigos têm página própria com canonical + schema BlogPosting. O #2
(identidade) foi o último, a URL veio do Ibson (logado). Todas as URLs em `src/data/content.ts` (`ART_URL`).

**Imagens internas dos artigos:** 18 imagens internas (fora a capa) foram capturadas na posição
correta e salvas em `public/assets/artigos/inline/`, renderizadas como `<figure class="art-fig">`
com legenda quando havia (governança e IA). CSS no template `[...slug].astro`. Qualidade: melhor
rendition pública do LinkedIn (400 a 1000px de largura, a maioria ~600, 710px). Se o Ibson tiver os
ORIGINAIS em alta, substituir os arquivos em `inline/` (as dimensões `width/height` são calculadas).

**SEO das imagens (Google Imagens/Discover):** cada imagem tem nome de arquivo descritivo começando
com `ibson-junior-` + tema/conteúdo (ex.: `ibson-junior-estrategia-leme-tempestade-direcao.png`) e
ALT rico e fiel ao que a imagem mostra, associando o nome ("Ilustração do artigo de Ibson Junior
sobre..."). O ALT (invisível ao usuário) é mais completo que a `figcaption` visível. Mapa por imagem
no gerador `scratchpad/generate-arts.mjs` (const `IMAGES`), na ordem do artigo.

**Bug corrigido nesta rodada:** o extrator gerava markdown quebrado quando havia negritos adjacentes
ou link dentro de negrito (asteriscos vazando na tela, ex.: `De acordo com a****[revista Nature]`).
Conversor reescrito (espaço fora da ênfase + fusão de negritos adjacentes + classes `italic font-[700]`).
Script gerador reutilizável: `scratchpad/generate-arts.mjs` (para novos artigos, é só adicionar ao array).

**Bloco de fechamento (feito):** todo artigo termina agora com um bloco padrão no template
(`ArticlePage.astro`, i18n via `ui.ts`: `articleCtaTitle/Text/Button`) convidando a continuar a
conversa no post original do LinkedIn (link direto via `linkedinUrl`). Com isso, os CTAs de
autopromoção que vinham verbatim do LinkedIn ("Te convido a me seguir, curtir e compartilhar...")
foram REMOVIDOS dos `.md` (governança, IA e a frase em negrito de cultura, nos 3 idiomas),
preservando a pergunta/fecho natural de cada artigo. Decisão: comentários no próprio site foram
descartados (Giscus/Disqus exigem conta GitHub ou trazem anúncios e fragmentam o engajamento);
o engajamento fica concentrado no LinkedIn, o que também reforça a autoridade do perfil.

---

## FRENTE 2, Seção "Últimos posts no LinkedIn"  ✅ NO AR (8 posts reais)

**Como está:** carrossel na home (após "Sobre") com os 8 posts mais recentes, cada card = arte
completa (qualquer formato, sem corte, altura fixa/largura auto), sem contagens, clique abre o post.
Artes em `public/assets/posts/ibson-junior-post-<tema>.jpg`, dados em `linkedinPosts` (`content.ts`).

### Como ATUALIZAR a cada 3-4 dias (fluxo repetível)
Depende do navegador logado (a página de atividades exige login; scraping anônimo não funciona).
1. Extensão **Claude for Chrome** conectada + Chrome logado no LinkedIn do Ibson.
2. Abrir `https://www.linkedin.com/in/ibson-junior/recent-activity/all/`, rolar p/ carregar ~8 posts.
3. Rodar no navegador o JS que lista os posts com imagem (retorna `urn` + texto). Snippet salvo em
   `scripts/linkedin-extract.js` (colar via javascript_tool).
4. Para cada urn: baixar a arte pública. `node scripts/update-linkedin-posts.mjs '<json com urn/slug>'`
   (usa o `og:image` do permalink `feed/update/urn:li:activity:<urn>/`, ~980px, sem login).
5. Ver cada arte (a frase da arte às vezes difere da legenda) e escrever o ALT fiel + slug SEO.
6. Atualizar o array `posts` em `content.ts` (mais recente primeiro) e a data de "Última atualização".
7. `npm run build` e `git push` (deploy Vercel).

### (histórico) Estado anterior: CONSTRUÍDA, DESATIVADA (aguardava dados reais)

Objetivo: galeria lateralizada (carrossel) que hospeda as **artes dos POSTS** (não os artigos)
para o Google indexar as imagens `ibson-junior-*`. Componente pronto, só comentado na home.

**Já construído:**
- `src/components/LinkedinPosts.astro`, carrossel scroll-snap, setas prev/next, imagem 100% visível (sem corte), stats (reações/comentários/compartilhamentos), clique abre o post.
- `src/pages/index.astro`, `<LinkedinPosts />` está **comentado** (linha ~28), reativar quando houver dados reais.
- `src/data/content.ts`, export `linkedinPosts` com array `posts` de placeholders (image, url, alt, reactions, comments, shares).

**Comportamento definido pelo Ibson (IMPORTANTE, implementar assim):**
- Ordem **cronológica**, do mais recente para o mais antigo (espelha o feed de "conteúdos recentes" do LinkedIn dele).
- Mostrar **até 8 posts** no carrossel. Ao clicar na seta além do 8º, **redirecionar para o LinkedIn** (página de posts / recent-activity).
- Tudo bem se um artigo aparecer no meio: o feed espelha exatamente a ordem real do LinkedIn.
- Cada card: arte do post 100% legível/responsiva + reações + comentários + compartilhamentos; clique leva ao post exato.

**Falta (dados que só o Ibson fornece):** arquivos de imagem `ibson-junior-*` de cada post, URL de cada post, e as contagens (reações/comentários/compartilhamentos). Contagens NÃO podem ser buscadas automaticamente (sem API pública; scraping viola ToS), então são manuais/estáticas, com atualização periódica (ideia: revisar a cada ~7 dias).
- Fonte dos posts: https://www.linkedin.com/in/ibson-junior/recent-activity/all/

---

## FRENTE 3, Site em 3 idiomas (PT / ES / EN)  ✅ NO AR

**Como funciona:**
- i18n nativo do Astro (`astro.config.mjs`): `pt` padrão em `/`, `es` em `/es/`, `en` em `/en/`. Cada idioma é URL indexável, com `hreflang` (Base.astro) e `<html lang>` correto.
- Bandeiras no topo (Nav) 🇧🇷 🇪🇸 🇺🇸: trocam o idioma mantendo a página atual e guardam a escolha em `localStorage` (a autodetecção respeita).
- **Autodetecção** (script inline no Base): na 1ª visita sem escolha salva, redireciona por `navigator.language` (es-*/en-*), sem loop, sempre reversível pelas bandeiras.
- **Artigos:** botão "Traduzir" (🌐) na página do artigo abre o mesmo texto no outro idioma. Rotas por idioma (`/artigos`, `/es/artigos`, `/en/artigos` e `/.../[slug]`).
- **Camada de conteúdo:** `content.ts` (PT) + `content.es.ts` + `content.en.ts` (mesma forma). Resolver em `src/i18n/utils.ts` (`getContent(locale)`). Microcopy de UI em `src/i18n/ui.ts` (`t(locale)`). Artigos traduzidos em coleções `artigosEs`/`artigosEn` (`src/content/artigos-es|en/`).
- Componentes leem `Astro.currentLocale`. Home/biblioteca/artigo extraídos em `HomeContent`, `ArticlesLibrary`, `ArticlePage` (reaproveitados pelas 3 línguas).

**Como ADICIONAR um idioma ou editar traduções:** editar `content.<lang>.ts`, `ui.ts` e os `.md` das coleções. Para um novo artigo, criar o `.md` em `artigos/`, `artigos-es/` e `artigos-en/` (mesmo slug).

**A revisar (recomendado):** as traduções ES/EN foram feitas por IA com voz madura; uma revisão de nativo dá o acabamento final "zero erros". Corrigido de passagem: o `governanca.md` (PT) mencionava "Better Collective" (removido).

### Manutenção: manter os 3 idiomas 100% sincronizados (REGRA)
O site é à prova de falhas: se faltar tradução, o texto aparece em PT (fallback no `getContent`),
e o botão "Traduzir" só oferece idiomas que existem para aquele artigo (sem 404). Mesmo assim, a
regra é traduzir SEMPRE que adicionar conteúdo, para não acumular lacunas.

**Ao adicionar um ARTIGO novo (PT em `src/content/artigos/<slug>.md`):**
1. Criar também `src/content/artigos-es/<slug>.md` e `src/content/artigos-en/<slug>.md` (mesmo slug).
   Traduzir title/category/excerpt + corpo; localizar `date`; manter `dateISO`/`cover`/`linkedinUrl`/`readingTime`;
   preservar `<figure>` (só traduz alt/figcaption); sem travessão; sem "Better Collective".
   **Preencher as camadas de SEO** (`seoTitle`, `socialTitle`, `seoDescription`) nos 3 idiomas, traduzidas
   (ver a REGRA das camadas na Frente 1). Slug descritivo e conciso; se renomear depois, adicionar 301 no `vercel.json`.
   **Atribuir o tema** do artigo em `src/data/clusters.ts` (`articleTheme`), para o internal linking temático.
2. Adicionar o item em `articles.list` nos TRÊS `content.*.ts` (traduzindo category/title/summary).

**Ao adicionar/editar SEÇÃO (`content.ts`) ou microcopy (`i18n/ui.ts`):** replicar a mesma chave
em `content.es.ts`/`content.en.ts` e nos 3 blocos de `ui.ts`, traduzida.

**Checar lacunas a qualquer momento:** `node scripts/i18n-status.mjs` (lista o que falta em ES/EN;
sai com erro se houver lacuna). Rodar antes de publicar.

**Fluxo automatizável:** ao rodar via agente (ex.: rotina agendada), depois de adicionar conteúdo,
rodar `i18n-status`; para cada lacuna, traduzir seguindo as regras acima e rebuildar. Assim o site
permanece 100% trilíngue conforme cresce.

### (histórico) Estado anterior: NÃO INICIADA

Objetivo: bandeiras no **topo** (PT-BR, ES, EN). Clicar traduz o **site inteiro** para o idioma.
Motivo: expandir território e a força do nome. Níveis do Ibson: português fluente, espanhol
avançado, inglês intermediário indo para avançado.

**Abordagem recomendada (Astro i18n nativo, estático, ótimo p/ SEO):**
- Usar i18n do Astro: rotas `/` (pt, default), `/es/`, `/en/`.
- Mover os textos de `src/data/content.ts` para dicionários por idioma (ex.: `content.pt.ts`, `content.es.ts`, `content.en.ts`) ou um objeto `{ pt, es, en }`.
- Seletor de idioma com bandeiras no `Nav.astro` (topo), trocando o prefixo da rota.
- **SEO:** adicionar tags `hreflang` (alternate) entre as 3 versões, `lang` correto no `<html>`, e traduzir `title`/`description`/OG por idioma. Cada idioma é uma URL indexável (ganho real de território).
- Traduções feitas com qualidade editorial (não Google Translate cru), respeitando a voz madura e as regras (sem travessão, sem tom de guru).
- Artigos: decidir se traduz também (ideal a médio prazo) ou começa só pela interface/seções.

**Ainda a decidir com o Ibson:** traduzir os artigos também ou só a interface no 1º momento; bandeiras (ícones) x códigos (PT/ES/EN).

---

## Autoridade de entidade (SEO de nome: Ibson Junior = Ibson Lima dos Santos Junior = Ibson)
Objetivo: consolidar a entidade para o Google/IAs e desambiguar do homônimo (ex-jogador).
- **Fase 1 (feita):** artigos e biblioteca apontam `author`/`publisher`/`about` para o mesmo `@id #person` (definido em cheio na home, `schema.ts`). `BreadcrumbList` (JSON-LD) em artigos e biblioteca. `alternateName` = ["Ibson Lima dos Santos Junior", "Ibson Júnior", "Ibson"] (em `schema.ts` e no `personSchema` do `Base.astro`). Byline do artigo linka para a home.
- **`sameAs`:** LinkedIn, X e as staff pages (Bolavip/Antenados/Somos Fanáticos). Ibson NÃO controla esses sites (multinacional), então backlink de volta está descartado; a menção via `sameAs` é o teto.
- **Página `/ibson-junior/` (feita):** "Entity Home" aprofundada (AboutPage → mesmo `#person`, `og:type=profile`, título de intenção informacional distinto da home para não canibalizar). Conteúdo em `identity` (`content.ts`/`.es`/`.en`): bio narrativa (origem curiosa → repertório → audiência → escala → arquitetura de decisão → atuação pública) + bloco factual. Componente `IbsonJunior.astro`, rotas nos 3 idiomas, botão "Saiba mais sobre mim" no Sobre da home (`aboutMore` no `ui.ts`). Cargo público: "Diretor de Conteúdo no Brasil na Futbol Sites". **Nunca "Better Collective".** Idade (38) só no bloco factual. "afiliados" virou "frentes de monetização e parceria".
- **Wikidata:** item pronto para o Ibson publicar em `docs/wikidata-item.md` (o Claude não cria conta; prepara e guia). Quando publicado, adicionar a URL Q... ao `sameAs`.
- **Ações do Ibson (fora do site):** PR (matérias em portais de negócio com link), bios de LinkedIn/X com nome completo + link do site, criar o item do Wikidata, pedir indexação das URLs no Search Console.
- **A confirmar com o Ibson:** coautor de "Conselho Diário" (mantido); "bilhões de visualizações" (mantido, defensável); Board Academy (fica no bloco factual, não no corpo).
- **Landing pages `/palestras/` e `/mentoria/` (feitas):** novo **padrão visual elevado** (hero imersivo com aurora animada em CSS puro, orbs, grid sutil, botões neon, temas com imagem/numerados, CTA de "noite"), claro + escuro, nos 3 idiomas. Componentes `PalestrasPage.astro` e `MentoriaPage.astro` (CSS `.lp-*` duplicado nos dois; extrair para `src/styles/lp.css` se surgir uma 3ª LP). Rotas em `pages/(es|en)/palestras|mentoria.astro`. Conteúdo reaproveitado de `talks`/`mentorship` (content.*). SEO/labels novos no `ui.ts` (`lp*`). Hero é CSS puro (LCP leve). Na home, as seções viraram **teasers** (`LpTeaser.astro`, com id de âncora) que levam às LPs, e o **menu (nav) aponta para as páginas** (`/palestras`, `/mentoria`, localizado). Os antigos `Palestras.astro`/`Mentoria.astro` (seções completas) ficaram **sem uso** (podem ser removidos).
- **Página `/imprensa/` (feita):** press kit com bios curta/média/longa (botão "Copiar"), foto oficial, temas para entrevistas, contato e links oficiais. Componente `ImprensaPage.astro`, conteúdo em `press` (content.*), reaproveita `identity` (bio longa + foto). Rotas nos 3 idiomas. Nome de citação: Ibson Junior; nome completo: Ibson Lima dos Santos Junior; cargo: Diretor de Conteúdo no Brasil na Futbol Sites. TODO opcional: adicionar link "Imprensa" no rodapé para descoberta.
- **Fases seguintes:** Hubs `/temas/`, `/notas/` e cases dedicados: esperar mais volume de conteúdo por tema antes de criar (evitar páginas rasas).

## SEO orgânico (missão em curso: palestras, mentoria, artigos)
Objetivo: rankear no Google para termos comerciais (palestrante executivo/estratégico, mentoria executiva, geo Porto Alegre/Brasil) e informacionais (temas dos artigos), e capturar PAA.
- **Log de palavras-chave:** `docs/seo-keywords.md`, 574 termos por cluster/intenção/página/prioridade (gerado por time de agentes). Ativo vivo, expandir com o Search Console.
- **Fase 1 (feita), LPs `/palestras/` e `/mentoria/`:** title/meta com termos-alvo (`ui.ts`: lp*SeoTitle/Desc), **bloco de posicionamento** (H2 + parágrafo com densidade dos termos) + **FAQ (PAA)** + `FAQPage schema` + `Service schema` com `areaServed` (Porto Alegre/RS/Brasil) e canal presencial+online. Conteúdo `talks`/`mentorship` (content.*): `positioning`, `geoNote`, `faq`. Posicionamento **nacional** ("de Porto Alegre para todo o Brasil"), sem "custeio de deslocamento" (isso é da proposta).
- **Fase 2 (feita), hubs de tema:** `/temas/<slug>/` (4 pilares: estrategia-e-decisao, lideranca-e-cultura, conteudo-e-comunicacao, vida-e-trabalho), nos 3 idiomas, com H1/tese/lista de artigos + `CollectionPage`/`BreadcrumbList` schema. Dados em `src/data/clusters.ts` (`themeSlug`, `themeHub`, `themeOrder`, `slugToTheme`). `/artigos` linka pros 4 hubs; cada artigo linka pro hub do seu tema. Componente `HubPage.astro`, rotas `pages/**/temas/[theme].astro`.
- **Ações do Ibson:** pedir indexação no Search Console das URLs novas (`/palestras/`, `/mentoria/`, os 4 `/temas/*`, `/artigos`); PR (backlinks) é a alavanca off-page que falta.
- **Fase 3 (pendente):** otimização fina por artigo (H2 em pergunta, FAQ por artigo onde couber) + expandir termos com dados reais do Search Console.

## Regras inegociáveis (resumo, ver CLAUDE.md)
- **NUNCA** travessão (— ou –). Usar vírgula, ponto, dois-pontos, parênteses.
- **NUNCA** mencionar Better Collective.
- Cargo permitido: "Diretor de Conteúdo na Futbol Sites" (link https://www.futbolsites.net/pt). Sem protagonismo do cargo.
- Grafias confirmadas: **Futmarketing**, **Antenados no Futebol**, **Bolavip**.
- Não inventar fatos: incerteza vira comentário `TODO` no código.
- Responder sempre em pt-BR.

## Infra publicada (fatos)
- Hospedagem: **Vercel** (Hobby/grátis, team `ibson-jr`, projeto `ibson-junior`). Deploy por push na `main` (GitHub auto-deploy) OU `npx vercel --prod --yes`.
- Repo: **github.com/junioribson/ibson-site** (remote `origin` já configurado).
- DNS: nameservers da Vercel (ns1/ns2.vercel-dns.com), domínio no Registro.br.
- E-mail: **ImprovMX** grátis, catch-all `*@ibsonjunior.com.br` → junior.ibson@gmail.com (MX mx1/mx2.improvmx.com + SPF).
- Analytics: **GA4 G-5S4SJGES22**. Search Console: verificado (Domain property, TXT google-site-verification).
- Formulário: **Web3Forms** (access_key ae5d5592-e6e5-4e58-bd78-d24f8240874c), cai no Gmail.
- Node local em ~/.local: prefixar comandos com `export PATH="$HOME/.local/bin:$PATH"`.

## ⚠️ Gotcha de rede (recorrente)
**iCloud Private Relay** derruba o acesso a github.com e ao próprio site (deixa `curl` em 000,
`git push` falha em "port 443"), mesmo com outros sites (google) funcionando. Sintoma: túneis
`utun` ativos, daemon `networkserviceproxy` rodando. **Solução:** desligar Private Relay em
 → Ajustes → [seu nome] → iCloud → Retransmissão Privada → **Desativar** (não "até amanhã",
senão religa ao virar o dia). Se as rotas não limparem, **toggle do Wi-Fi** ou **reiniciar o Mac**.

## Tarefas do Ibson fora do site (para SEO/autoridade)
- Colocar o link ibsonjunior.com.br na bio do **LinkedIn** e do **X (@IbsonJunior)** (links recíprocos).
- Usar sempre a **mesma foto** profissional nos perfis.
- No Search Console: enviar `sitemap-index.xml` e `sitemap-images.xml` e pedir indexação das páginas novas.

## Estado do git neste momento
- Máquina nova (MacBook) configurada: Node v24.18.0 em `~/.local` (cópia em `~/.local/opt/node` p/ o launch.json), deps instaladas, build OK. Idioma do chat fixado em pt-BR na memória.
- Frente 1 completa e commitada localmente (9 páginas de artigo). **Push pendente:** falta autenticação no GitHub desta máquina. Chave SSH ed25519 já gerada em `~/.ssh/id_ed25519.pub`; o Ibson precisa adicioná-la em github.com/settings/ssh/new. Depois: trocar remote p/ SSH e `git push` (dispara deploy na Vercel).
- Preview local: `~/.claude/launch.json` (nível home) aponta o astro dev do projeto via `--root`, para o painel de preview funcionar (o working dir da sessão é a home, não a pasta do projeto).
