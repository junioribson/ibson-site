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

**Como está:** carrossel na home (após "Sobre", via `HomeContent.astro` → `LinkedinPosts.astro`, id="linkedin")
com os 8 posts mais recentes (o componente faz `slice(0, 8)`), cada card = arte completa (sem corte),
sem contagens, clique abre o post. Artes em `public/assets/posts/ibson-junior-post-<tema>.webp`, dados em
`linkedinPosts.posts` (`content.ts`). Última atualização: 2026-07-09 (8 posts).

### Como ATUALIZAR (fluxo PROVADO ao vivo, ~2 min). Gatilho: o Ibson diz "atualiza os posts".
Depende do navegador logado (a página de atividades exige login; scraping anônimo não funciona).
1. Extensão **Claude for Chrome** conectada (list_connected_browsers NÃO pode vir vazio) + Chrome logado no LinkedIn. "Logado" != "extensão conectada": é o ícone do Claude na barra que conecta à sessão.
2. navigate `https://www.linkedin.com/in/ibson-junior/recent-activity/all/`. Rode JS **SÍNCRONO** com `JSON.stringify(...)` (o async retorna `{}` pela serialização do tool) que rola e lista os `[data-urn^="urn:li:activity"]` com imagem `media.licdn.com` (exceto displayphoto/framedphoto/EntityPhoto/company-logo/profile-banner): `urn` + texto.
3. NOVOS = urn com imagem que NÃO estão nas urls de `content.ts`. Se nenhum, pare.
4. `node scripts/update-linkedin-posts.mjs '[{"urn":"...","slug":"..."}]'` baixa a arte (og:image do permalink, sem login) como jpg.
5. Converta jpg→webp com **sharp** (quality 82; não há cwebp), apague o jpg. Read na arte e escreva o ALT FIEL à frase (sem travessão): "Arte de post de Ibson Junior no LinkedIn: <frase>."
6. `content.ts`: prepend os novos (mais recente primeiro), REMOVA os mais antigos p/ manter MÁX 8, apague os arquivos de imagem removidos, atualize "Última atualização".
7. Regenere `public/sitemap-images.xml` (gerador varre artigos+palestras+posts/retratos/arquetipos). `npm run build`. Cheque rede `curl --interface en1 github`. `git push`. Verifique ao vivo a arte nova na home.

### Automação dos posts (estado real, jul/2026)
- **TETO REAL:** atualizar o site exige LER o LinkedIn do Ibson, que exige o **navegador logado**, que exige o **Mac ligado**. Logo, NÃO existe atualização com o computador desligado. Sem contorno.
- **CronCreate** (agendador local) é **session-only**: morre ao fechar o Claude Code e expira em 7 dias, mesmo com `durable:true`. Headless não serve (extensão do Chrome é interativa). Não há serviço 24/7.
- **Cadência combinada com o Ibson:** ele roda o gatilho "atualiza os posts" quando está no PC **seg/qua** (post sai 17h30, checar após 18h10). O post de **sábado** (9h30, ele fora) é pego **automaticamente na segunda**: o passo 3 adiciona TODOS os posts novos desde a última atualização (self-heal). Site fica no máx. 1 fim de semana atrás.
- **Tarefa agendada PERSISTENTE (jul/2026):** `~/.claude/scheduled-tasks/atualizar-posts-linkedin/SKILL.md`, cron `10 18 * * 1,3` (seg E qua 18h10 local; o rótulo "só segunda" da UI é bug de humanização). Gravada em disco: sobrevive a fechar o Claude. Roda no app local quando aberto; se fechado no horário, roda na PRÓXIMA abertura (catch-up). Runbook completo e autossuficiente; usa `scripts/update-linkedin-posts.mjs` e `scripts/gen-sitemap-images.mjs`. Requer extensão Claude for Chrome conectada + logado no fire time, senão para e reporta (sem dados falsos). **Ação do Ibson:** clicar "Run now" 1x na seção Scheduled para pré-aprovar as ferramentas (browser/git), senão a 1ª rodada pausa em permissão. Gatilho manual continua: "atualiza os posts".
- Existe também tarefa mensal pré-existente `artigos-linkedin-ibson` (cron `0 9 1 * *`, dia 1 às 9h) para ARTIGOS (não os posts). Não mexer sem revisar.
- TETO que permanece: nada roda com o Mac desligado (login do LinkedIn exige o navegador logado). A tarefa é o melhor "persistente" possível: não morre, e faz a atualização de verdade quando o app abre com a extensão conectada.

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
- **Consolidação de entidade (feita nesta sessão, jul/2026):** `schema.ts` ganhou `basePerson()` + `personNode(locale)` autossuficiente (worksFor inline), injetado no `@graph` de `/palestras/`, `/mentoria/` (3 idiomas) e `/ibson-junior/`. ANTES essas páginas referenciavam `#person` (provider/about) SEM emitir o nó Person, referência pendurada (o Google avalia cada página isolada). Adicionado `disambiguatingDescription` (campo do schema.org p/ separar homônimos), nos 3 idiomas, citando Futbol Sites/WolfLife/ProliferArte. Commit d0c6f54.
- **Fix ProfilePage (feito, commit 8b41eb8):** o nó `ProfilePage` da home usava `about` mas não `mainEntity`, que é **obrigatório** no rich result de Página de Perfil. Search Console acusou "O campo mainEntity não foi encontrado" na home (NÃO era FAQ, o FAQPage sempre teve mainEntity). Corrigido: `mainEntity: #person`. **Ação do Ibson:** reiniciar "Validar correção" no Search Console.
- **Bios prontas:** `docs/bios-perfis.md` com LinkedIn (headline + Sobre) e X (bio ≤160 + site), alinhadas ao `disambiguatingDescription`, com versões ES/EN. Links de perfil são nofollow: o valor é consolidação de entidade (fecham o ciclo com o `sameAs`), não PageRank.
- **Wikidata (CRIADO e depois APAGADO, jul/2026):** item Q140469163 foi criado pelo Ibson e **excluído por um admin em 12/07 ("Fails WD:N", não atende à notabilidade)**, em menos de 1 dia. Motivos: fontes fracas (próprias + cobertura da empresa, não da pessoa) e conflito de interesse (item sobre si mesmo, self-promotion, desencorajado). Achamos DEPOIS imprensa independente que o nomeia como CEO da Futmarketing na aquisição pela Playmaker (MarTech Series, Yogonet, SBC), mas apagaram antes de anexar. **Link do Wikidata REMOVIDO do `sameAs`** (schema.ts). Lição registrada no `docs/playbook-novo-site.md`. Só reviver com imprensa independente forte (via PR). NÃO reapontar o `sameAs` para Wikidata sem um item que sobreviva.
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
- **Fase 3 (feita):** FAQ (PAA) por artigo em `src/data/article-faq.ts` (9 artigos × pt/es/en × 4 perguntas, geradas por agentes a partir do texto de cada um), renderizada no `ArticlePage` como bloco **"Entendendo melhor alguns pontos"** (rótulo editorial, não "Perguntas frequentes") + `FAQPage` schema por artigo. Completude de indexação: `BreadcrumbList` nas LPs, `sitemap serialize()` com prioridade por tipo de página, `sitemap-images.xml` regenerado, `llms.txt` ampliado (rota `llms.txt.ts`). Commit fba6058.
- **Fase 4 (feita), lapidação das LPs (após auditoria sênior de 12 agentes):** `positioning`+`faq` de `talks`/`mentorship` enriquecidos com termos comerciais antes zerados (palestra corporativa, keynote, contratar palestrante, palestrante em Porto Alegre / mentor executivo, mentoria para executivos, de liderança e de carreira) + FAQ de **preço** e **geo**. Bloco de **links internos** ("Continue explorando", `lpExploreMore` no `ui.ts`) nas 2 LPs → `/ibson-junior/`, LP cruzada e 2 hubs de tema. FAQPage das LPs 6→7 perguntas. Commit 3065b5f. Nota: NÃO usar cases nem depoimentos nas LPs (decisão do Ibson); credencial só no schema.
- **Lista de termos para acompanhar ranking:** consolidada por prazo (marca/cauda longa em semanas; comercial médio 2-5 meses; cabeça disputada 4-7+ meses). Ver a resposta do chat desta sessão; fonte base em `docs/seo-keywords.md`.

## LGPD e privacidade (feito, jul/2026, commit 9361c4b)
- **Política de Privacidade** trilíngue em `/politica-de-privacidade/` (`src/data/privacy.ts` + `PrivacyPage.astro` + 3 rotas). Factual: controlador, dados (navegação + formulário), cookies, bases legais, operadores REAIS (Google Analytics, Web3Forms, Vercel), transferência internacional, direitos (art. 18), retenção, segurança, menores, contato. Link no rodapé (`privacyPolicy` no `ui.ts`). Prioridade 0.3 no sitemap. **TODO(legal):** revisão por advogado + CNPJ/endereço opcionais. Ao adicionar ferramenta nova (newsletter, pixel), atualizar `privacy.ts`.
- **Aviso de cookies opt-in** (`CookieBanner.astro`, incluído no `Base.astro` antes de `</body>`): o GA **só carrega após "Aceitar"**. Gate no `Base.astro`: `__loadGA()` checa `localStorage 'cookie-consent' === 'accepted'`; o banner expõe/chama `window.__loadGA()` no aceite. Recusar mantém o GA desligado; a escolha persiste e o aviso não reaparece. Sem lib externa (~2KB inline), cores da marca (creme + roxo), `position: fixed` (0 CLS). Como o Lighthouse não clica "Aceitar", o GA não entra na medição, performance não regride. Testado no preview (aceitar/recusar/persistência).

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
- Analytics: **GA4 G-5S4SJGES22** (carrega só com consentimento de cookies, opt-in LGPD, ver seção "LGPD e privacidade"). Search Console: verificado (Domain property, TXT google-site-verification).
- Formulário: **Web3Forms** (access_key ae5d5592-e6e5-4e58-bd78-d24f8240874c), cai no Gmail.
- Node local em ~/.local: prefixar comandos com `export PATH="$HOME/.local/bin:$PATH"`.

## ⚠️ Gotcha de rede (recorrente)
**iCloud Private Relay** derruba o acesso a github.com e ao próprio site (deixa `curl` em 000,
`git push` falha em "port 443"), mesmo com outros sites (google) funcionando. Sintoma: túneis
`utun` ativos, daemon `networkserviceproxy` rodando. **Solução:** desligar Private Relay em
 → Ajustes → [seu nome] → iCloud → Retransmissão Privada → **Desativar** (não "até amanhã",
senão religa ao virar o dia). Se as rotas não limparem, **toggle do Wi-Fi** ou **reiniciar o Mac**.

**Segundo gotcha (cabo sem rota para Vercel/GitHub):** a rede a cabo (en6) não roteia para os IPs da Vercel/GitHub ("No route to host"), enquanto o Wi-Fi (en1) roteia. O Ibson quer manter o cabo (banda p/ reuniões). Solução aplicada: **policy routing** via LaunchDaemon `com.ibson.detour-routes` (`~/net-fix/detour-routes.sh`), que roteia Vercel+GitHub pelo gateway do Wi-Fi e deixa o cabo como default. Requer Wi-Fi **e** cabo conectados. Nos comandos de verificação ao vivo, usar `curl --interface en1`. Se `git push` falhar em github inalcançável, checar o daemon e as rotas (`netstat -rn | grep 140.82`).

## Tarefas do Ibson fora do site (para SEO/autoridade)
- **Search Console:** validação do erro mainEntity (ProfilePage) **solicitada e em andamento** (a mensagem mudou, o Google está recrawleando; verde chega em dias/semanas). Correção no commit 8b41eb8, JSON-LD validado ao vivo. Só aguardar.
- ~~**Bios:** colar LinkedIn e X~~ **FEITO (jul/2026):** LinkedIn (headline "architect-first", Futbol Sites (Better Collective) mantido por escolha do Ibson, + parágrafo de fechamento no Sobre com palestras/mentoria + site) e X (bio em inglês, categoria trocada de "agência de marketing" para content strategist, link do site) atualizados. Versões finais em `docs/bios-perfis.md`. Ciclo recíproco fechado (perfis → site; site → perfis via sameAs).
- ~~**Wikidata:** criar o item~~ **ENCERRADO:** item criado e APAGADO por notabilidade (ver seção Autoridade). Link removido do `sameAs`. Não reabrir sem imprensa independente forte.
- **Search Console, indexação:** manter `sitemap-index.xml` e `sitemap-images.xml` enviados; pedir indexação de `/`, `/palestras/`, `/mentoria/`, `/ibson-junior/`, `/politica-de-privacidade/`, `/artigos/`, `/imprensa/`, os 4 `/temas/*`, e cada artigo novo ao publicar.
- **PR/backlinks:** a alavanca off-page que falta para a cabeça comercial ("mentoria executiva", "palestrante executivo").

## Estado do git neste momento
- `main` sincronizada com origin. Últimos commits (jul/2026): fix ProfilePage mainEntity (8b41eb8), bios doc (fe32d3e), política + cookies LGPD (9361c4b), lapidação das LPs (3065b5f), fix entidade `#person` (d0c6f54), Fase 3 SEO (fba6058).
- Site com **60 páginas**. Build OK, i18n 100%, zero travessão. Deploy: push na `main` → Vercel auto-deploy (~30s a poucos min).
- Preview local: `~/.claude/launch.json` (nível home) aponta o astro dev do projeto via `--root` (o working dir da sessão é a home).
