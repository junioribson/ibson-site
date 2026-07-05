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
| 1 | Na Copa do Mundo, conteúdo não disputa apenas atenção | `na-copa-do-mundo` | 23/06/2026 | ✅ **NO AR** |
| 2 | Quando a profissão vira identidade, a pessoa começa a desaparecer | `profissao-identidade` | 27/05/2026 | ✅ **NO AR** |
| 3 | Cérebro podre: a pandemia invisível que transforma o trabalho | `cerebro-podre` | 21/04/2026 | ✅ **NO AR** |
| 4 | Nunca se falou tanto de estratégia. E nunca se viu tão pouca | `estrategia` | 30/03/2026 | ✅ **NO AR** |
| 5 | A qualidade da decisão é o núcleo da governança moderna | `governanca` | 25/02/2026 | ✅ **NO AR** |
| 6 | Quando a comunicação falha, a estratégia vira ruído | `comunicacao` | 30/01/2026 | ✅ **NO AR** |
| 7 | O tempo é um oceano | `o-tempo-e-um-oceano` | 22/12/2025 | ✅ **NO AR** |
| 8 | Fascinados pela IA, estamos ignorando o essencial | `inteligencia-artificial` | 25/11/2025 | ✅ **NO AR** |
| 9 | Cultura não é PowerPoint, mas a energia vital | `cultura` | 28/10/2025 | ✅ **NO AR** |

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

**Nota editorial:** dois artigos (#8 IA e #5 governança) terminam com um CTA verbatim do original
("Te convido a me seguir, curtir e compartilhar..."), que faz sentido no LinkedIn mas soa deslocado no
site. Mantido por fidelidade; decidir com o Ibson se remove nas páginas internas.

---

## FRENTE 2, Seção "Últimos posts no LinkedIn"  🟡 CONSTRUÍDA, DESATIVADA (aguardando dados reais)

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

## FRENTE 3, Site em 3 idiomas (PT / ES / EN)  🔴 NÃO INICIADA

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
