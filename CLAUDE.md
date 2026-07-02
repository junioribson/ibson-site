# CLAUDE.md — Site Ibson Junior (ibsonjunior.com.br)

> Idioma: responda sempre em português do Brasil.

## Objetivo
Site de marca pessoal de Ibson Junior: uma mente executiva madura sobre consciência,
decisão, liderança, conteúdo, IA, cultura e responsabilidade em ambientes de pressão.
É uma obra de marca pessoal, nível estúdio sênior. O site deve transmitir uma mensagem
poderosa, não parecer template. Desvinculado de qualquer empregador atual.

## Posicionamento (território)
Território central: consciência aplicada à vida, ao trabalho, às relações e às decisões
em tempos complexos. Tese-mãe: em um tempo em que todos disputam atenção, a diferença
está em quem ainda consegue sustentar critério. Apresentar Ibson como executivo de
conteúdo, liderança e comunicação (não reduzir a "estrategista digital" nem a marketing/
tráfego/creator). Voz madura, humana, direta, com repertório, sem autopromoção. Evitar
tom de guru, coach motivacional, frases genéricas e texto com cara de IA. Ordem das
seções: Hero, Tese, Sobre, Cases, ProliferArte, Trajetória em imagens, Artigos,
Repertório, Mentoria, Palestras, Vídeos, Contato. Camada de conteúdo editável em
`src/data/content.ts`. Fatos incertos ficam com comentário TODO no código, nunca inventar.

## Stack
- Astro + Tailwind (site estático, rápido, ótimo para deploy).
- Fontes via Google Fonts: `Plus Jakarta Sans` (títulos/corpo) e `Space Mono` (rótulos, índices, metadados).
- Imagens como arquivos otimizados em `/public/assets` (nunca base64 embutido).
- Deploy: Cloudflare Pages ou Vercel. Domínio no Registro.br (registros DNS apontando para o host).

## Regras inegociáveis (Don'ts)
- NUNCA usar travessão (— ou –) em nenhum texto. Usar vírgula, ponto, dois-pontos ou parênteses.
- NUNCA nomear o empregador atual (ex.: Football Sites, Better Collective). O cargo genérico "Diretor de Conteúdo no Brasil" pode aparecer de forma breve e discreta, apenas como contexto de trajetória, sem protagonismo. O site é sobre o repertório dele.
- NÃO usar tom imperativo ("transforme"). Usar linguagem narrativa e observacional.
- NÃO usar arquétipos como logos desenhados. Arquétipos são imagens fotorrealistas de fundo.
- NÃO deixar quebrar no mobile: testar sempre no preview ao vivo em 3 larguras.

## Sistema visual
- Fundo: creme texturizado `#EBE3D1` (papel), com grão sutil. Branco/creme dominante.
- Tinta (texto): marrom quase preto `#1C0E04`.
- Roxo da marca: `#44026F` (vem da logomarca). Roxo profundo `#2A0148`, noite `#150026`.
- Violeta elétrico (acento, uma palavra por vez): `#5B2EE6`. Secundário `#7B57F0`.
- Dourado (detalhe/hairline): `#B0925E`. Magenta pontual: `#C94F8A`.
- Tipografia pesada (800) nos títulos, tracking negativo. Monoespaçada nos rótulos.
- Hairlines e grid editorial como estrutura. Sofisticação sem poluição.
- Logomarca (triângulo/pico) em `/public/assets/logo-*.png`: roxa em fundo claro, branca em fundo escuro. Discreta.

## Sitemap (seções)
1. Hero: só efeito de cor (aurora animada na paleta), sem foto. Frase-âncora: "Nunca se falou tanto de estratégia. E nunca se viu tão pouca." Positioning: Estrategista Digital, Mentor, Palestrante.
2. Tese/Manifesto: intenção vs estratégia; atenção como ativo.
3. Sobre: foto (retrato navy). Fio condutor: "de galerias de arte a comunidades de milhões, sempre lidei com audiência".
4. Cases: WolfLife/TikTok (9 Bi+ de views; +150 Mi seguidores, +6 Bi impressões/ano, +100 Mi alcance/mês; vendida 2025; botão wolflife.com.br). Futmarketing M&A com botão "Ver a notícia" (Yahoo Finance).
5. ProliferArte (desde 2008, 18 anos, 1,5 Mi+): movimento cultural que ele lidera. Estante de Publicações (capas em HD, título e link editáveis).
6. Livros & Conselho: livro "Conselho Diário, 365 Insights Estratégicos" (coautor); Conselheiro Consultivo (Board Academy), preparado para administrativo/fiscal.
7. Mentoria: 8 entregas (decisão e prioridades; organização da complexidade; estratégia+comunicação+execução; posicionamento de autoridade; LinkedIn estratégico; narrativa; crescimento com percepção de valor; visão executiva).
8. Palestras: convite para palestrar; atmosfera de noite (lua cheia + estrelas).
9. Artigos: cards com CAPA REAL DO ARTIGO (não a capa dos posts) + título + link para o LinkedIn.
10. Contato: mentoria, palestra, conselho. E-mail contato@ibsonjunior.com.br e LinkedIn linkedin.com/in/ibson-junior.
11. Rodapé: logomarca branca + "Símbolos de território: Lobo, Coruja, Cavalo-marinho, Explorador".

## Arquétipos (imagens fotorrealistas de fundo, super realismo, alta qualidade)
Colocar como cenas atmosféricas que ornam o fundo, sutis, sem competir com o texto:
- Coruja + lua cheia (seção Palestras/noite).
- Cavalo-marinho em água transparente (Sobre/ProliferArte, assinatura pessoal).
- Lobo (Cases/audiência, remete à WolfLife).
- Explorador/cosmos (Mentoria, mapear território).
Gerar em Midjourney/Gemini com prompts fornecidos; colocar em `/public/assets/arquetipos/`.

## Responsividade
- Testar sempre no preview ao vivo: desktop (>1180), tablet (~900), mobile (~390).
- Menu vira hambúrguer abaixo de 1180px.
- Nada pode cortar imagem de publicação: capas quadradas, imagem inteira visível (object-fit: contain).
- Garantir contraste em todas as telas (WCAG AA): texto escuro sobre claro, claro sobre escuro.

## Assets a receber de Ibson
- Capas das publicações da ProliferArte em ALTA (com títulos e links).
- Capas reais dos artigos do LinkedIn (com títulos e URLs).
- Imagens dos arquétipos (geradas em alta).
- Fotos de retrato já disponíveis (usar só uma no Sobre; poucas fotos).
```
