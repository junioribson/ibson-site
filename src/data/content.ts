// ============================================================================
// Camada de conteúdo editável do site de Ibson Junior.
// Território central: consciência aplicada à vida, ao trabalho, às relações e
// às decisões em tempos complexos. Tese-mãe: em um tempo em que todos disputam
// atenção, a diferença está em quem ainda consegue sustentar critério.
//
// Regra de fatos: nada é inventado. Onde há incerteza, há comentário TODO.
// Regra de linguagem: nunca usar travessão; frases claras, humanas e densas.
// ============================================================================

// Grafia oficial confirmada pelo Ibson (e no CLAUDE.md): Futmarketing.
// TODO(fato): reconfirmar a grafia definitiva da marca (Futmarketing, Footmarketing
// ou Foot Marketing) antes de publicar, caso o Ibson queira revisar.
export const FUTMARKETING_NAME = "Futmarketing";

// TODO(fato): confirmar o papel exato na operação (usando CEO conforme brief).
export const FUTMARKETING_ROLE = "CEO";

// Cargo atual permitido pelo Ibson (e no CLAUDE.md): Diretor de Conteúdo na
// Futbol Sites, podendo hiperlinkar o site oficial. NUNCA mencionar Better Collective.
export const FUTBOL_SITES_URL = "https://www.futbolsites.net/pt";
export const CARGO_ATUAL = "Diretor de Conteúdo na Futbol Sites";

// Analytics e Search Console. Preencher quando o Ibson criar as contas Google:
// - GA_MEASUREMENT_ID: o ID do Google Analytics 4, no formato "G-XXXXXXXXXX".
// - GSC_VERIFICATION: o valor "content" da meta tag de verificação do Search Console.
// Enquanto estiverem vazios, nada é injetado (site não quebra, sem chamadas inúteis).
export const GA_MEASUREMENT_ID = "G-5S4SJGES22";
export const GSC_VERIFICATION = "";

export const seo = {
  title: "Ibson Junior | Critério, Liderança e Decisão",
  description:
    "Ibson Junior: executivo de conteúdo, liderança e comunicação. Palestras, mentoria e conselho sobre marca pessoal, comunicação, cultura e decisão.",
  ogTitle:
    "Ibson Junior | Critério, liderança e decisão em tempos complexos",
  ogDescription:
    "Reflexões, artigos, palestras e conversas executivas sobre liderança, IA, cultura, conteúdo, comunicação e tomada de decisão em ambientes de pressão, excesso de informação e transformação.",
  // TODO(asset): gerar imagem Open Graph 1200x630 e salvar em public/assets/og/og-ibson.jpg
  ogImage: "/assets/og/og-ibson.jpg",
};

export const nav = {
  links: [
    { href: "/#sobre", label: "Sobre", id: "sobre" },
    { href: "/#cases", label: "Cases", id: "cases" },
    { href: "/#artigos", label: "Artigos", id: "artigos" },
    { href: "/mentoria", label: "Mentoria", id: "mentoria" },
    { href: "/palestras", label: "Palestras", id: "palestras" },
    { href: "/#videos", label: "Vídeos", id: "videos" },
    { href: "/#contato", label: "Contato", id: "contato" },
  ],
  cta: { href: "/#contato", label: "Vamos nos conectar?" },
};

export const hero = {
  topline: "Conteúdo · Liderança · Decisão · IA · Cultura",
  headline: "Quando tudo acelera, clareza vira responsabilidade.",
  headlineLines: ["Quando tudo acelera,", "clareza vira", "responsabilidade."],
  subheadline:
    "Para líderes, equipes e organizações que precisam decidir com critério, comunicar com profundidade e construir confiança em um mundo ruidoso demais para ser conduzido no automático.",
  complement:
    "Minha trajetória atravessa construção de audiência, liderança editorial, cultura, negócios digitais e tomada de decisão. Este espaço reúne artigos, cases, mentorias, palestras e conversas executivas para transformar repertório em clareza, presença e direção.",
  ctas: {
    primary: { href: "#sobre", label: "Conhecer trajetória" },
    secondary: { href: "#contato", label: "Convidar para uma conversa" },
    tertiary: { href: "#artigos", label: "Ler artigos" },
  },
  // Microprovas discretas: cargo genérico, sem nomear empregador atual.
  microprovas: [
    CARGO_ATUAL,
    "Fundador da WolfLife",
    "Fundador da ProliferArte",
    `${FUTMARKETING_ROLE} da ${FUTMARKETING_NAME}, com participação na construção e venda da operação`,
    "Artigos mensais sobre IA, cultura, liderança, conteúdo e responsabilidade",
  ],
};

export const thesis = {
  kicker: "A tese",
  title: "Estratégia começa quando a pressão chega.",
  body: [
    "Em um mundo que produz mais conteúdo do que capacidade de interpretação, o diferencial não está em aparecer mais. Está em decidir melhor.",
    "Meu trabalho parte dessa tensão: separar urgência de importância, transformar ruído em clareza e ajudar líderes, equipes e organizações a sustentarem critério quando tecnologia, mercado e cultura empurram para o automático.",
  ],
  closing:
    "A velocidade pode abrir caminhos. Mas é o critério que define se eles levam a algum lugar.",
};

export const about = {
  title: "Uma trajetória entre audiência, cultura, conteúdo e decisão.",
  subtitle:
    "Antes de falar sobre autoridade, é preciso entender o caminho que construiu o repertório.",
  body: [
    '<strong>Ibson Lima dos Santos Junior</strong>, que assina como <a href="https://www.linkedin.com/in/ibson-junior/" target="_blank" rel="noopener">Ibson Junior</a>, é <strong>executivo de conteúdo, liderança e comunicação</strong>, com trajetória construída entre mídia digital, estratégia editorial, cultura, negócios digitais e construção de audiência.',
    'Sua experiência passa por projetos que conectam atenção, comunidade, narrativa e resultado. Fundou a <strong><a href="https://wolflife.com.br/" target="_blank" rel="noopener">WolfLife</a></strong>, ecossistema de comunidades digitais vendido em 2025, lidera a <strong><a href="https://www.facebook.com/ProliferArte/" target="_blank" rel="noopener">ProliferArte</a></strong> desde 2008 e atuou como <strong><a href="https://es-us.finanzas.yahoo.com/noticias/compra-millonaria-gigante-medios-marketing-090600505.html" target="_blank" rel="noopener">CEO da Futmarketing</a></strong>, participando da construção, posicionamento e venda de uma operação brasileira de mídia esportiva digital.',
    'Também foi criador do site <strong><a href="https://www.antenadosnofutebol.com.br/" target="_blank" rel="noopener">Antenados no Futebol</a></strong>, responsável pelo nome e pela concepção inicial da marca, e teve papel direto na chegada da <strong>Bolavip</strong> ao Brasil, em um movimento iniciado entre 2017 e 2018, quando a marca já existia em outros países da América do Sul, mas ainda não operava no mercado brasileiro.',
    'Hoje, atua como <strong>Diretor de Conteúdo na <a href="https://www.futbolsites.net/pt" target="_blank" rel="noopener">Futbol Sites</a></strong>, liderando operações editoriais e refletindo publicamente sobre IA, atenção, responsabilidade, cultura, liderança e tomada de decisão.',
    "Ao longo desse percurso, foi se firmando um princípio que atravessa cada projeto: audiência não se sustenta pelo volume, e sim pelo critério. Pelo cuidado com o enquadramento, pela coerência entre o que se diz e o que se faz e pela responsabilidade de quem comunica em escala.",
    "O fio condutor da sua trajetória é a capacidade de <em>construir sentido em ambientes de alta complexidade</em>: entender o contexto, organizar a narrativa, decidir com critério e transformar audiência em percepção de valor. É esse repertório, formado no encontro entre cultura, negócio e comunicação, que ele leva hoje para artigos, mentorias, palestras e conversas de conselho.",
  ],
  microprovas: [
    { k: "WolfLife", v: "comunidade digital de grande escala" },
    { k: "ProliferArte", v: "movimento cultural ativo desde 2008" },
    { k: FUTMARKETING_NAME, v: `${FUTMARKETING_ROLE} e participação na venda da operação` },
    { k: "Antenados no Futebol", v: "criação, nome e concepção inicial" },
    { k: "Bolavip Brasil", v: "participação na chegada da marca ao país" },
    { k: "Futbol Sites", v: "Diretor de Conteúdo, liderança editorial no Brasil" },
    { k: "Conselho", v: "atuação administrativa e formação em governança" },
  ],
};

// Página de identidade (/ibson-junior/): a "Entity Home" aprofundada. Biografia
// narrativa (origem curiosa -> repertório -> audiência -> escala -> arquitetura de
// decisão -> atuação pública), com bloco factual secundário. Mesmo #person do site.
export const identity = {
  seoTitle: "Ibson Junior | Executivo de Conteúdo, Liderança e Comunicação",
  seoDescription:
    "Ibson Junior, nome profissional de Ibson Lima dos Santos Junior, é executivo de conteúdo, liderança e comunicação. Trajetória, repertório e a arquitetura de decisão, execução e governança em ambientes digitais complexos.",
  socialTitle: "Ibson Junior: da internet discada à arquitetura da decisão",
  kicker: "Quem é",
  h1: "Ibson Junior",
  subtitle: "Ibson Lima dos Santos Junior, conhecido profissionalmente como Ibson Junior.",
  portrait: "/assets/retratos/ibson-junior-retrato.webp",
  portraitAlt: "Retrato de Ibson Junior, executivo de conteúdo, liderança e comunicação",
  bio: [
    "Ibson Lima dos Santos Junior, conhecido profissionalmente como Ibson Junior, é executivo de conteúdo, liderança e comunicação. Atua na arquitetura de sistemas de decisão, execução e governança em ambientes digitais de alta velocidade, conectando estratégia editorial, cultura, audiência, tecnologia, inteligência artificial e responsabilidade pública.",
    "Sua relação com tecnologia começou antes de qualquer cargo. Em 2000, ganhou seu primeiro computador, aprendeu a navegar pela internet discada e cresceu junto com a popularização da rede no Brasil. Desde cedo, passou a observar como pessoas se conectam, como informações circulam e como ideias ganham força quando encontram o contexto certo.",
    "Essa curiosidade nunca ficou restrita a uma área. Ao longo da trajetória, passou por formações e experiências em eventos, informática, segurança do trabalho, monitoria ambiental e outros campos que, à primeira vista, poderiam parecer distantes entre si. Para Ibson, não era dispersão. Era repertório. Cada área acrescentava uma camada para entender tecnologia, cultura, negócio, comportamento humano e comunicação como partes de um mesmo sistema.",
    "Foi na cultura que essa inquietação encontrou sua primeira expressão pública. Em 2008, fundou a ProliferArte, movimento criado para aproximar pessoas da arte, da palavra e da expressão. Antes de trabalhar com grandes audiências digitais, já experimentava uma convicção que atravessaria toda a sua carreira: atenção verdadeira não nasce apenas de alcance. Nasce de sentido.",
    "Nos anos seguintes, levou esse aprendizado para a comunicação digital em escala. No esporte, foi criador do Antenados no Futebol, responsável pelo nome e pela concepção da marca, e teve papel direto na chegada e no desenvolvimento da Bolavip no Brasil entre 2017 e 2018. Como CEO da Futmarketing, participou da construção, do posicionamento e da venda de uma operação brasileira de mídia esportiva. Depois, fundou a WolfLife, ecossistema de comunidades digitais que alcançou milhões de pessoas e bilhões de visualizações, vendido em 2025.",
    "Ao operar em ambientes de crescimento, audiência e alta pressão por resultado, uma percepção foi se tornando central: o crescimento raramente se perde apenas por falta de estratégia. Muitas vezes, ele se perde pela ausência de coerência entre decisão, governança e execução. Existem direções que não se consolidam, estruturas que crescem sem se sustentar e execuções que acontecem, mas não se repetem com consistência.",
    "Essa leitura passou a orientar sua atuação. Mais do que formular direção, Ibson se dedica a entender a arquitetura que torna uma direção viável: como decisões são tomadas, como responsabilidades são distribuídas, como critérios são preservados e como a execução se mantém quando a complexidade aumenta.",
    "Hoje, como Diretor de Conteúdo no Brasil na Futbol Sites, lidera uma operação que integra editorial, social, dados, audiovisual, BI, negócios e frentes de monetização e parceria. Sua atuação está menos na produção isolada de conteúdo e mais na coordenação de sistemas capazes de sustentar clareza, consistência e responsabilidade em múltiplas frentes ao mesmo tempo.",
    "De galerias de arte a comunidades de milhões, da comunicação cultural à mídia esportiva digital, Ibson sempre lidou com a mesma pergunta em diferentes escalas: o que faz uma ideia, uma operação ou uma decisão se sustentar?",
    "Esse repertório hoje também se traduz para além da operação. Atua como palestrante, mentor executivo e conselheiro, é coautor do livro Conselho Diário e escreve publicamente sobre inteligência artificial, cultura, liderança, comunicação, reputação, governança e decisão.",
    "Sua marca pessoal nasce desse encontro entre experiência prática e reflexão pública. Ibson ajuda pessoas e organizações a decidir, comunicar e crescer com mais critério em meio ao excesso. Sua convicção é direta: resultado consistente não nasce de esforço pontual. Nasce de estruturas claras, responsabilidades bem definidas e decisões que se sustentam na execução.",
    "Em um tempo em que tudo acelera, clareza deixou de ser apenas uma virtude. Virou responsabilidade.",
  ],
  factsTitle: "Em resumo",
  facts: [
    { k: "Nome", v: "Ibson Lima dos Santos Junior" },
    { k: "Atuação", v: "Executivo de conteúdo, liderança e comunicação" },
    { k: "Cargo", v: "Diretor de Conteúdo no Brasil na Futbol Sites" },
    { k: "Territórios", v: "IA, cultura, liderança, comunicação, governança e decisão" },
    { k: "Também", v: "Palestrante, mentor executivo e conselheiro" },
    { k: "Autor", v: 'Coautor do livro "Conselho Diário"' },
    { k: "Formação", v: "Governança (Board Academy), entre outras" },
    { k: "Idade", v: "38 anos" },
  ],
  ctaTitle: "Vamos conversar?",
  ctaText: "Para palestras, mentoria, conselho ou uma conversa profissional.",
  ctaLabel: "Entrar em contato",
  exploreTitle: "Explore",
};

// Kit de imprensa (/imprensa/): material pronto para jornalistas, organizadores de
// eventos e parceiros. Reaproveita a bio longa e a foto do `identity`.
export const press = {
  seoTitle: "Kit de imprensa | Ibson Junior",
  seoDescription:
    "Material de imprensa de Ibson Junior: biografias em três tamanhos, foto oficial, temas, contato e links oficiais. Nome para citação: Ibson Junior.",
  kicker: "Imprensa",
  h1: "Kit de imprensa",
  intro:
    "Material pronto para jornalistas, organizadores de eventos e parceiros. Fique à vontade para usar as biografias, a foto e os links abaixo.",
  citeLabel: "Nome para citação",
  citeName: "Ibson Junior",
  fullLabel: "Nome completo",
  fullName: "Ibson Lima dos Santos Junior",
  roleLabel: "Cargo",
  role: "Diretor de Conteúdo no Brasil na Futbol Sites",
  biosTitle: "Biografias",
  bioShortLabel: "Curta",
  bioMediumLabel: "Média",
  bioLongLabel: "Longa",
  bioShort:
    "Ibson Junior, nome profissional de Ibson Lima dos Santos Junior, é executivo de conteúdo, liderança e comunicação. Diretor de Conteúdo no Brasil na Futbol Sites, atua com estratégia editorial, IA, cultura, audiência, governança e decisão em ambientes digitais complexos.",
  bioMedium:
    "Ibson Lima dos Santos Junior, conhecido profissionalmente como Ibson Junior, é executivo de conteúdo, liderança e comunicação. Atua na arquitetura de sistemas de decisão, execução e governança em ambientes digitais de alta velocidade, conectando estratégia editorial, cultura, audiência, tecnologia, inteligência artificial e responsabilidade pública. Sua trajetória começou na curiosidade pela tecnologia, ainda na época da internet discada, e se expandiu por áreas como cultura, eventos, informática, comunicação, comunidades digitais, mídia esportiva e liderança. Fundou a ProliferArte em 2008, foi criador do Antenados no Futebol, teve papel direto na chegada e no desenvolvimento da Bolavip no Brasil, foi CEO da Futmarketing e fundou a WolfLife, ecossistema de comunidades digitais vendido em 2025. Hoje, é Diretor de Conteúdo no Brasil na Futbol Sites e escreve sobre IA, liderança, cultura, comunicação, governança, reputação e decisão. Sua tese central é que, em tempos de excesso e velocidade, resultado consistente depende de clareza, critério e estruturas capazes de sustentar boas decisões na execução.",
  copy: "Copiar",
  copied: "Copiado",
  topicsTitle: "Temas para entrevistas e palestras",
  topics: [
    "Decidir sob pressão",
    "IA com julgamento humano",
    "Conteúdo e responsabilidade",
    "Cultura e governança",
    "Liderança e decisão",
    "Reputação e presença pública",
  ],
  photoTitle: "Foto oficial",
  photoDownload: "Abrir foto",
  contactTitle: "Contato e links oficiais",
};

// Últimos posts no LinkedIn: as artes que o Ibson cria (renomeadas ibson-junior-*)
// ficam hospedadas AQUI, no próprio site, para o Google Images indexá-las (o LinkedIn
// é difícil de indexar). Contagens são estáticas (o LinkedIn não expõe API pública).
// TODO(ibson): substituir os exemplos abaixo pelos posts reais:
//   - image: a arte do post em /assets/posts/ibson-junior-post-*.webp (o Ibson envia)
//   - url: o link do post específico no LinkedIn
//   - reactions/comments/shares: as contagens (o Ibson informa)
export const linkedinPosts = {
  title: "Últimos posts no LinkedIn",
  subtitle:
    "Reflexões e artes que publico sobre liderança, IA, cultura, conteúdo e decisão. Clique para abrir o post no LinkedIn.",
  profileUrl: "https://www.linkedin.com/in/ibson-junior/recent-activity/all/",
  // Posts reais do LinkedIn, do mais recente para o mais antigo (lidos da página de
  // atividades). Atualizar a cada 3-4 dias pelo mesmo fluxo (navegador logado).
  // Última atualização: 2026-07-18.
  posts: [
    {
      image: "/assets/posts/ibson-junior-post-intensidade-importancia.webp",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7484223053519020032/",
      alt: "Arte de post de Ibson Junior no LinkedIn: a gente começa a escolher melhor quando para de confundir intensidade com importância, clareza também é maturidade.",
    },
    {
      image: "/assets/posts/ibson-junior-post-jornalismo-proporcao.webp",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7483263627806793728/",
      alt: "Arte de post de Ibson Junior no LinkedIn: a pressa mostra o acontecimento, o jornalismo dá proporção.",
    },
    {
      image: "/assets/posts/ibson-junior-post-criterio-vira-lideranca.webp",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7482535582297059328/",
      alt: "Arte de post de Ibson Junior no LinkedIn: quando tudo parece urgente, critério vira liderança.",
    },
    {
      image: "/assets/posts/ibson-junior-post-repeticao-e-sinal.webp",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7481671238621396993/",
      alt: "Arte de post de Ibson Junior no LinkedIn: eu demorei para entender que nem tudo que se repete é fase, às vezes é sinal, consciência também é decisão.",
    },
    {
      image: "/assets/posts/ibson-junior-post-noticia-mudou-de-caminho.webp",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7480719864920358912/",
      alt: "Arte de post de Ibson Junior no LinkedIn: a notícia não mudou só de formato, mudou de caminho.",
    },
    {
      image: "/assets/posts/ibson-junior-post-todos-publicam-poucos-informam.webp",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7479968668077064192/",
      alt: "Arte de post de Ibson Junior no LinkedIn: todo mundo publica, poucos informam.",
    },
    {
      image: "/assets/posts/ibson-junior-post-vitoria-postura.webp",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7479149707659825152/",
      alt: "Arte de post de Ibson Junior no LinkedIn: eu admiro quem cresce sem transformar ninguém em degrau, caráter também é conquista.",
    },
    {
      image: "/assets/posts/ibson-junior-post-ia-criterio-conteudo.webp",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7478545542411632642/",
      alt: "Arte de post de Ibson Junior no LinkedIn: a IA pode ser motor, o humano precisa continuar no volante.",
    },
  ] as Array<{ image: string; url: string; alt: string }>,
};

// Bloco de autoridade entre a biografia e os cases: mostra que os projetos que vêm
// depois são consequência de repertório (conteúdo, comunidade, algoritmo, leitura de
// comportamento), não eventos isolados.
// RIGOR DAS MÉTRICAS: "pessoas", "usuários", "sessões", "impressões" e "visualizações"
// NÃO são a mesma coisa. O número-mãe é declarado como "pontos de contato digitais",
// nunca como "pessoas impactadas".
export const audienceArchitecture = {
  kicker: "Conteúdo · Audiência · Algoritmo · Comportamento",
  title: "A arquitetura por trás da audiência.",
  subhead:
    "Antes de um conteúdo alcançar milhões, alguém precisa entender o ambiente, o comportamento, o formato, o tempo e a responsabilidade do que será colocado em circulação.",
  body: [
    "Desde 2008, Ibson Junior trabalha no ponto em que cultura, tecnologia, comportamento humano e distribuição se encontram.",
    "O que começou como uma comunidade cultural se transformou em repertório para construir, liderar e escalar ativos digitais em diferentes ambientes: redes sociais, sites, comunidades, vídeos, operações editoriais e estratégias de conteúdo.",
    "A lógica nunca foi apenas produzir mais. Foi aprender a ler sinais antes que eles fiquem óbvios, transformar comportamento em estratégia, organizar narrativas com potencial de distribuição e sustentar critério quando o ambiente favorece velocidade, repetição e ruído.",
    "Em conteúdo, o alcance é a parte visível. Antes dele existe uma arquitetura menos aparente: leitura de ambiente, compreensão de audiência, escolha de formato, timing, narrativa, distribuição, dados, repertório cultural e responsabilidade editorial.",
    "Porque viralizar não é apenas entender algoritmo. É entender pessoas. É perceber o que elas reconhecem, compartilham, salvam, comentam, rejeitam ou transformam em pertencimento.",
    "Por isso, sua atuação em conteúdo combina estratégia editorial, comportamento humano, leitura de dados, cultura, liderança e distribuição. O objetivo não é apenas alcançar mais gente. É construir mensagens, operações e decisões que façam sentido em escala.",
  ],
  impact: [
    "Conteúdo que aparece pode nascer de volume.",
    "Conteúdo que permanece nasce de leitura.",
  ],
  // Todos os cards são CONSOLIDADOS (18 anos), sem recorte mensal ou anual. A única
  // janela curta é o "+1 Bi em um único ano", que entra justamente por ser recorde.
  featured: {
    n: "+50 Bi",
    label: "pontos de contato digitais consolidados",
    note: "somatório de 18 anos entre impressões, visualizações, sessões, alcance e engajamento, em redes sociais e sites, considerando projetos próprios, comunidades e operações editoriais.",
  },
  metrics: [
    { n: "+12 Bi", label: "engajamento acumulado em 18 anos de redes, comunidades e conteúdo" },
    // Visualizações > engajamento, sempre: quem vê é muito mais do que quem
    // interage. Consolidado de TODAS as frentes, por isso maior que os "9 Bi+"
    // do case TikTok, que é uma delas. Fecha com o total: 20+12+15+1 = 48 de 50.
    { n: "+20 Bi", label: "visualizações acumuladas em vídeo, comunidades e distribuição" },
    { n: "+1 Bi", label: "sessões em um único ano de operação editorial, o recorde da operação" },
    // Consolidado de TODAS as frentes. Não conflita com os "+160 Mi seguidores na
    // rede" do case WolfLife, que é uma delas: por isso o rótulo diz "conjunto".
    { n: "+200 Mi", label: "seguidores no conjunto das redes e comunidades digitais" },
    { n: "18 anos", label: "construindo cultura, comunidade, conteúdo e audiência digital" },
  ],
  note: "Números consolidados em 18 anos de projetos de cultura, comunidade, mídia digital e operações editoriais, somando redes sociais e sites. As métricas representam diferentes dimensões de alcance, distribuição, consumo e interação, e não devem ser lidas como pessoas únicas.",
  ctas: {
    primary: { href: "#cases", label: "Ver cases de impacto" },
    secondary: { href: "#palestras", label: "Conhecer palestras e mentorias" },
  },
  metricsAria: "Indicadores consolidados de impacto em conteúdo e audiência",
};

export const cases = {
  title: "Cases que conectam audiência, cultura e negócios.",
  subtitle:
    "Projetos em que comunidade, narrativa, distribuição e estratégia digital se transformaram em ativos reais.",
  wolflife: {
    name: "WolfLife",
    tag: "Comunidades digitais · Audiência · Mídia",
    body: [
      "A WolfLife nasceu da leitura de um comportamento simples: pessoas se conectam primeiro por interesse, linguagem e pertencimento.",
      "A partir dessa lógica, o projeto cresceu como um ecossistema de comunidades digitais com alcance nacional, reunindo grandes audiências e entregando campanhas para marcas relevantes.",
      "Ibson fundou a operação e participou de sua venda em 2025, consolidando um ciclo de construção, escala e realização de valor.",
    ],
    provas: [
      { n: "+160 Mi", t: "seguidores na rede" },
      { n: "+15 Bi", t: "impressões" },
      { n: "785 Mi", t: "alcance por mês" },
      { n: "2025", t: "venda da operação" },
    ],
    aprendizado:
      "Audiência não é apenas volume. É a capacidade de entender comportamento, construir pertencimento e transformar atenção em ativo.",
    cta: { href: "https://wolflife.com.br/", label: "Ver WolfLife" },
  },
  tiktok: {
    name: "Case TikTok no Brasil",
    big: "9 Bi+",
    bigLabel: "visualizações geradas em distribuição via comunidades",
    body: "Em uma das entregas de maior escala, a WolfLife apoiou o crescimento do TikTok no Brasil por meio de distribuição massiva em comunidades no Facebook, gerando mais de 9 bilhões de visualizações e ampliando o reconhecimento da marca em território nacional.",
  },
  footmarketing: {
    name: FUTMARKETING_NAME,
    tag: "Mídia esportiva · Operação digital · M&A",
    body: [
      `Na ${FUTMARKETING_NAME}, Ibson atuou como ${FUTMARKETING_ROLE} e participou da construção, posicionamento e venda de uma operação brasileira de mídia esportiva digital.`,
      "A atuação envolveu a criação do site Antenados no Futebol, incluindo a escolha do nome e a concepção inicial do projeto, além da participação direta na chegada da Bolavip ao Brasil, entre 2017 e 2018, quando a marca já existia em países da América do Sul, mas ainda não havia sido consolidada no mercado brasileiro.",
      "O case mostra uma dimensão importante da sua trajetória: transformar visão editorial, audiência e oportunidade de mercado em ativo estratégico.",
      "A venda da operação foi noticiada pelo Yahoo Finance, funcionando como chancela externa da relevância do movimento dentro do mercado de mídia e marketing esportivo.",
    ],
    cta: {
      href: "https://es-us.finanzas.yahoo.com/noticias/compra-millonaria-gigante-medios-marketing-090600505.html",
      label: "Ver notícia no Yahoo Finance",
    },
  },
  proliferarte: {
    name: "ProliferArte",
    tag: "Cultura · Comunidade · Audiência",
    body: [
      "A ProliferArte foi fundada em 2008 para aproximar arte, artistas independentes e público.",
      "Antes de algoritmos, creators e economia da atenção se tornarem termos comuns, o projeto já trabalhava com uma pergunta central: como fazer a arte circular para além dos espaços tradicionais?",
      "Ao longo da trajetória, a ProliferArte se consolidou como uma comunidade digital de cultura, dando visibilidade a artistas, ampliando acesso e construindo pontes entre criação e audiência.",
      "Mais do que um projeto cultural, a ProliferArte foi o primeiro grande laboratório de Ibson sobre audiência, pertencimento, comunicação e impacto social.",
    ],
    // Contadores animados (contam ao entrar na tela). `static` não anima.
    provas: [
      { display: "Desde 2008", label: "início do movimento", static: true },
      { to: 18, suffix: " anos", label: "à frente do movimento" },
      { to: 1.5, decimals: 1, suffix: " Mi+", label: "pessoas na comunidade" },
      { to: 30, suffix: " Mi+", label: "alcance mensal" },
      { to: 1.5, decimals: 1, suffix: " Mi+", label: "engajamento mensal" },
      { to: 12, suffix: " Mi+", label: "impactados por ano" },
    ] as Array<{ display?: string; label: string; static?: boolean; to?: number; decimals?: number; suffix?: string }>,
    // Capas reais extraídas dos PDFs do Ibson (publicações e coletâneas).
    // TODO(link): apontar `url` de cada publicação quando houver página/loja.
    galeria: [
      { title: "Revista ProliferArte: Retrato", src: "/assets/capas/revista-retrato.webp" as string | null, url: "#" },
      { title: "ValorizArte: Transbordando Percepção", src: "/assets/capas/valorizarte.webp" as string | null, url: "#" },
      { title: "Mente Aberta: Evolução dos Pensamentos", src: "/assets/capas/mente-aberta.webp" as string | null, url: "#" },
    ],
  },
};

export interface Article {
  category: string;
  date: string;
  title: string;
  summary: string;
  readingTime: string;
  url: string;
  cover?: string | null;
  // Quando o artigo já tem página própria no site (src/content/artigos/<slug>.md),
  // o card aponta para /artigos/<slug> em vez do LinkedIn.
  slug?: string;
}

const LINKEDIN = "https://www.linkedin.com/in/ibson-junior/recent-activity/all/";

// Links reais de cada artigo no LinkedIn (enviados pelo Ibson).
const ART_URL = {
  copa: "https://www.linkedin.com/pulse/na-copa-do-mundo-conte%C3%BAdo-n%C3%A3o-disputa-apenas-aten%C3%A7%C3%A3o-ibson-junior-fxq1c/",
  cerebro: "https://www.linkedin.com/pulse/c%C3%A9rebro-podre-pandemia-invis%C3%ADvel-que-transforma-em-reativos-junior-bgeqf/",
  estrategia: "https://www.linkedin.com/pulse/nunca-se-falou-tanto-de-estrat%C3%A9gia-e-viu-t%C3%A3o-pouca-ibson-junior-3c5rf/",
  governanca: "https://www.linkedin.com/pulse/qualidade-da-decis%C3%A3o-%C3%A9-o-n%C3%BAcleo-governan%C3%A7a-moderna-ibson-junior-jgk1f/",
  comunicacao: "https://www.linkedin.com/pulse/quando-comunica%C3%A7%C3%A3o-falha-estrat%C3%A9gia-vira-ru%C3%ADdo-ibson-junior-sgxre/",
  oceano: "https://www.linkedin.com/pulse/o-tempo-%C3%A9-um-oceano-ibson-junior-2tstc/",
  ia: "https://www.linkedin.com/pulse/fascinados-pela-intelig%C3%AAncia-artificial-estamos-ignorando-junior-8km7f/",
  cultura: "https://www.linkedin.com/pulse/cultura-n%C3%A3o-%C3%A9-powerpoint-mas-energia-vital-que-sustenta-ibson-junior-lpiwf/",
  identidade: "https://www.linkedin.com/pulse/quando-profiss%C3%A3o-vira-identidade-pessoa-come%C3%A7a-ibson-junior-iue6f/",
};

export const articles = {
  title: "Artigos e ensaios.",
  subtitle:
    "Textos autorais sobre liderança, IA, cultura, conteúdo, comunicação e tomada de decisão.",
  intro:
    "Os artigos são a base editorial da minha marca pessoal. Neles, organizo reflexões mais longas sobre temas que atravessam trabalho, tecnologia, comunicação e maturidade em ambientes complexos.",
  // Artigos reais do LinkedIn (do print enviado pelo Ibson).
  // TODO(asset): adicionar a capa real de cada artigo em /assets/artigos e apontar em `cover`.
  // TODO(titulo): alguns títulos aparecem truncados no print; confirmar os finais.
  list: [
    {
      category: "Conteúdo e responsabilidade",
      date: "2026",
      title: "Na Copa do Mundo, conteúdo não disputa apenas atenção. Disputa responsabilidade.",
      summary: "Entre o grito de gol e a narrativa, cobrir a Copa com consciência é mais do que informar.",
      readingTime: "13 min",
      url: ART_URL.copa,
      cover: "/assets/artigos/ibson-junior-artigo-copa.webp",
      slug: "na-copa-do-mundo",
    },
    {
      category: "Carreira e consciência",
      date: "2026",
      title: "Quando a profissão vira identidade, a pessoa começa a desaparecer",
      summary: "Performar bem no trabalho é uma coisa. Ser apenas o trabalho é outra.",
      readingTime: "14 min",
      url: ART_URL.identidade,
      cover: "/assets/artigos/ibson-junior-artigo-identidade.webp",
      slug: "profissao-identidade",
    },
    {
      category: "Produtividade e atenção",
      date: "2026",
      title: "Cérebro podre: a pandemia invisível que transforma o trabalho",
      summary: "Entre reuniões placebo e o multitasking tóxico, o desperdício de capital humano custa caro.",
      readingTime: "14 min",
      url: ART_URL.cerebro,
      cover: "/assets/artigos/ibson-junior-artigo-cerebro.webp",
      slug: "cerebro-podre",
    },
    {
      category: "Estratégia e decisão",
      date: "2026",
      title: "Nunca se falou tanto de estratégia. E nunca se viu tão pouca.",
      summary: "A diferença entre intenção e estratégia aparece quando o ambiente pressiona.",
      readingTime: "9 min",
      url: ART_URL.estrategia,
      cover: "/assets/artigos/ibson-junior-artigo-estrategia.webp",
      slug: "estrategia",
    },
    {
      category: "Governança e decisão",
      date: "2026",
      title: "A qualidade da decisão é o núcleo da governança moderna",
      summary: "A maioria das crises não nasce da falta de estratégia, mas da qualidade das decisões.",
      readingTime: "8 min",
      url: ART_URL.governanca,
      cover: "/assets/artigos/ibson-junior-artigo-governanca.webp",
      slug: "governanca",
    },
    {
      category: "Comunicação e cultura",
      date: "2026",
      title: "Quando a comunicação falha, a estratégia vira ruído",
      summary: "A comunicação sustenta cultura, governança e previsibilidade. Mas costuma ser negligenciada.",
      readingTime: "6 min",
      url: ART_URL.comunicacao,
      cover: "/assets/artigos/ibson-junior-artigo-comunicacao.webp",
      slug: "comunicacao",
    },
    {
      category: "Vida e trabalho",
      date: "2026",
      title: "O tempo é um oceano",
      summary: "Quem não aprende a velejar vira passageiro da própria vida.",
      readingTime: "10 min",
      url: ART_URL.oceano,
      cover: "/assets/artigos/ibson-junior-artigo-oceano.webp",
      slug: "o-tempo-e-um-oceano",
    },
    {
      category: "IA e discernimento",
      date: "2026",
      title: "Fascinados pela inteligência artificial, estamos ignorando o essencial",
      summary: "Quando não nos autoavaliamos com franqueza, não conseguimos usar bem a tecnologia.",
      readingTime: "8 min",
      url: ART_URL.ia,
      cover: "/assets/artigos/ibson-junior-artigo-ia.webp",
      slug: "inteligencia-artificial",
    },
    {
      category: "Cultura e liderança",
      date: "2026",
      title: "Cultura não é PowerPoint, mas a energia vital que sustenta a organização",
      summary: "Quando vivida em todos os níveis, a cultura transforma relações, decisões e resultados.",
      readingTime: "9 min",
      url: ART_URL.cultura,
      cover: "/assets/artigos/ibson-junior-artigo-cultura.webp",
      slug: "cultura",
    },
  ] as Article[],
  allUrl: "https://www.linkedin.com/in/ibson-junior/recent-activity/articles/",
};

export const talks = {
  title: "Palestras para provocar clareza onde o ruído virou rotina.",
  subtitle:
    "Encontros para empresas, eventos e lideranças que não querem apenas preencher uma agenda, mas instalar uma conversa que continue depois que a palestra termina.",
  intro: [
    "Uma boa palestra não entrega apenas frases bonitas. Ela <strong>organiza uma inquietação que já existe na sala</strong> e dá linguagem para que pessoas e equipes enxerguem melhor o que estão vivendo.",
    "Levo aos encontros corporativos as teses que venho desenvolvendo em artigos, liderança e experiências reais: como <strong>decidir sob pressão</strong>, <strong>preservar critério</strong> em ambientes acelerados, <strong>usar IA sem terceirizar o julgamento</strong> e <strong>construir cultura</strong> em meio ao excesso de ruído.",
    "A proposta é unir <strong>densidade e humanidade</strong>. Menos espetáculo, mais presença. Menos fórmula, mais reflexão. Menos motivação passageira, mais clareza para seguir pensando depois.",
    "Se a empresa precisa falar de <strong>futuro sem superficialidade, IA sem deslumbramento, liderança sem clichê e cultura sem cartaz na parede</strong>, essa conversa faz sentido.",
  ],
  // TODO(asset): a 6ª imagem (tema "Quando a profissão vira identidade") chega depois.
  themes: [
    {
      title: "Conteúdo não disputa apenas atenção. Disputa responsabilidade.",
      description:
        "Uma palestra sobre comunicação, IA, algoritmos, jornalismo, confiança e o desafio de informar em um ambiente onde quase tudo compete por clique, retenção e reação.",
      audience: "Marketing, comunicação, mídia, liderança, conteúdo, reputação e cultura.",
      cover: "/assets/palestras/palestra-conteudo.webp",
    },
    {
      title: "A IA pode ser motor. O humano precisa continuar no volante.",
      description:
        "Uma conversa sobre produtividade, discernimento e julgamento humano em um momento em que a inteligência artificial acelera processos, mas também pode reduzir o nível de exigência das decisões.",
      audience: "Lideranças, equipes de conteúdo, tecnologia, RH, educação e negócios.",
      cover: "/assets/palestras/palestra-ia.webp",
    },
    {
      title: "Critério sob pressão.",
      description:
        "Como decidir melhor quando a velocidade, o volume e a urgência tentam ocupar o lugar da clareza.",
      audience: "Executivos, gestores, coordenadores, heads e equipes de alta demanda.",
      cover: "/assets/palestras/palestra-criterio.webp",
    },
    {
      title: "Cultura é o que a organização aprende a tolerar.",
      description:
        "Uma reflexão sobre comportamento, confiança, coerência e os sinais invisíveis que moldam uma empresa muito antes do discurso oficial.",
      audience: "RH, cultura, liderança, gestão e desenvolvimento organizacional.",
      cover: "/assets/palestras/palestra-cultura.webp",
    },
    {
      title: "Governança pessoal precede a cadeira.",
      description:
        "Uma palestra sobre maturidade, autoconsciência, reputação e responsabilidade antes do poder formal.",
      audience: "Líderes, conselheiros em formação, executivos e profissionais em transição.",
      cover: "/assets/palestras/palestra-governanca.webp",
    },
    {
      title: "Quando a profissão vira identidade.",
      description:
        "Sobre carreira, repertório, criatividade, cansaço e o risco de reduzir a vida ao cargo que se ocupa.",
      audience: "Empresas, lideranças, RH, educação corporativa e profissionais em transição.",
      cover: "/assets/palestras/palestra-identidade.webp",
    },
  ],
  formats: ["Palestra", "Painel", "Roda executiva", "Workshop", "Aula especial", "Conversa com lideranças"],
  durations: ["45 minutos", "60 minutos", "90 minutos"],
  cta: { href: "#contato", label: "Convidar para palestra" },
  note: "Disponível para eventos corporativos, encontros executivos, painéis, aulas especiais, rodas de liderança e conversas com equipes.",
  positioning: {
    title: "Palestrante executivo e estratégico para empresas e lideranças",
    text: "Ibson Junior é palestrante executivo e estratégico, com base em Porto Alegre e atuação em todo o Brasil. Leva a empresas, eventos e lideranças, presencial ou online, palestras corporativas e keynotes sobre decisão sob pressão, inteligência artificial com julgamento humano, comunicação, cultura e liderança. É a atuação de um palestrante corporativo com a densidade de quem construiu e liderou operações de conteúdo de grande escala.",
  },
  geoNote: "Palestrante executivo e estratégico, de Porto Alegre para todo o Brasil. Presencial ou online.",
  faq: [
    { q: "O que é um palestrante executivo?", a: "É quem leva a lideranças e equipes temas de decisão, comunicação, cultura e estratégia com densidade e critério, no lugar de motivação passageira. Ibson Junior traz para o palco o repertório de quem construiu e liderou operações de conteúdo de grande escala, transformando experiência real em clareza para a sala." },
    { q: "Sobre quais temas Ibson Junior palestra?", a: "Decidir sob pressão, IA com julgamento humano, comunicação e conteúdo, cultura organizacional, governança e liderança. Há palestras sobre inteligência artificial e sobre liderança que se adaptam ao momento da empresa e do público." },
    { q: "Como contratar Ibson Junior como palestrante?", a: "Para contratar o palestrante, é pelo formulário de contato do site ou pelo e-mail contato@ibsonjunior.com.br. Basta indicar o evento, o público, a data e o formato desejado que retornamos com disponibilidade e proposta." },
    { q: "Quanto custa contratar uma palestra corporativa?", a: "O investimento depende do formato, da duração e da logística do evento, presencial ou online. Não há valor de tabela: a partir do briefing do encontro, você recebe uma proposta clara com disponibilidade e escopo." },
    { q: "Ibson Junior faz palestras em todo o Brasil? E online?", a: "Sim. Com base em Porto Alegre, Ibson Junior atua como palestrante em todo o Brasil, presencialmente, e também no formato online. Data, formato e logística de cada evento são alinhados diretamente na proposta." },
    { q: "Quais são os formatos e durações?", a: "Palestra, painel, roda executiva, workshop, aula especial e conversa com lideranças, em 45, 60 ou 90 minutos, conforme o objetivo do encontro." },
    { q: "Qual a diferença entre uma palestra executiva e uma motivacional?", a: "A motivacional busca energia momentânea. A executiva organiza uma inquietação real e entrega critério para decidir e comunicar melhor depois que o evento termina. O foco é clareza que permanece, não estímulo passageiro." },
  ],
};

export const mentorship = {
  title: "Mentoria para transformar repertório em direção.",
  subtitle:
    "Para profissionais que já têm história, experiência e ambição, mas precisam organizar posicionamento, narrativa e próximos movimentos com mais clareza.",
  intro: [
    "A mentoria não começa por fórmula. Começa por diagnóstico.",
    "Existe um momento em que acumular experiência já não basta. É preciso entender o que essa experiência comunica, qual território ela sustenta e que tipo de percepção ela constrói no mercado.",
    "A mentoria existe para trabalhar esse ponto: organizar pensamento, lapidar posicionamento, fortalecer presença e transformar repertório em direção prática.",
  ],
  whatIs: [
    "Uma mentoria executiva individual para transformar experiência em clareza: revisar trajetória, identificar território, ajustar a narrativa profissional e definir os próximos movimentos com mais consciência e critério.",
    "Não é curso nem fórmula pronta. É uma conversa estratégica conduzida a partir de repertório real em liderança, conteúdo, comunicação e tomada de decisão, para você enxergar com nitidez onde está, para onde quer ir e o que precisa mudar.",
    "No caminho, trabalhamos marca pessoal, comunicação executiva, posicionamento, LinkedIn estratégico, governança pessoal e produção de conteúdo, sempre ligando percepção de valor a decisões concretas.",
    "O objetivo não é você falar mais. É ser compreendido, lembrado e respeitado pela coerência entre o que você pensa, comunica e entrega.",
  ],
  whoFor: [
    "Líderes",
    "Gestores",
    "Especialistas",
    "Executivos em transição",
    "Profissionais em crescimento",
    "Pessoas que querem fortalecer presença profissional",
    "Profissionais que precisam comunicar melhor seu valor",
    "Pessoas que desejam transformar experiência em autoridade percebida",
  ],
  topics: [
    "Clareza de posicionamento",
    "Tomada de decisão",
    "Comunicação executiva",
    "Marca pessoal",
    "LinkedIn estratégico",
    "Narrativa profissional",
    "Governança pessoal",
    "Repertório e autoridade",
    "Direção de carreira",
    "Presença e percepção de valor",
  ],
  cta: { href: "#contato", label: "Falar sobre mentoria" },
  note: "Não existe pacote genérico. O escopo nasce do diagnóstico, do momento profissional e da clareza do que precisa mudar.",
  positioning: {
    title: "Mentoria executiva individual para líderes e executivos",
    text: "A mentoria executiva de Ibson Junior é individual e online, para líderes e executivos em todo o Brasil. Como mentor executivo, ele conduz uma mentoria para executivos que une posicionamento, marca pessoal, comunicação executiva, LinkedIn estratégico, narrativa e decisão. É mentoria de liderança e de carreira que transforma repertório em direção prática.",
  },
  geoNote: "Mentoria individual e online, para líderes e executivos em todo o Brasil.",
  faq: [
    { q: "O que é mentoria executiva?", a: "É um acompanhamento individual, conduzido por um mentor executivo, que transforma experiência em clareza: revisar a trajetória, ajustar posicionamento e narrativa, e definir os próximos movimentos com mais critério. Não é curso nem fórmula pronta, é direção construída a partir do seu momento real." },
    { q: "Como funciona a mentoria de Ibson Junior?", a: "Começa por diagnóstico e conduz uma conversa estratégica sobre marca pessoal, comunicação executiva, LinkedIn estratégico, narrativa e governança pessoal, sempre ligando percepção de valor a decisões concretas." },
    { q: "Para quem é a mentoria?", a: "É uma mentoria para executivos, líderes, gestores e especialistas em crescimento ou transição que já têm história e querem organizar posicionamento, presença e próximos passos com mais consciência. Funciona como mentoria de liderança e de carreira executiva." },
    { q: "Quanto custa a mentoria executiva?", a: "O investimento depende do escopo, que nasce do diagnóstico e do seu momento profissional. Não há pacote fechado: depois da primeira conversa, você recebe uma proposta clara com formato e cadência." },
    { q: "A mentoria é online? Atende o Brasil todo?", a: "Sim. A mentoria é individual e conduzida online, atendendo profissionais em todo o Brasil, com base em Porto Alegre." },
    { q: "Como é o formato e a duração?", a: "O escopo nasce do diagnóstico e do momento profissional. Não há pacote genérico: o formato e a cadência se ajustam ao que precisa mudar." },
    { q: "Qual a diferença entre mentoria e coaching?", a: "O coaching trabalha processo e comportamento de forma mais ampla. A mentoria de Ibson Junior parte de repertório executivo real em liderança, conteúdo, comunicação e decisão, para dar direção prática a partir de experiência vivida." },
  ],
};

export const videos = {
  title: "Vídeos e reflexões.",
  subtitle: "Uma nova frente para aproximar as ideias da fala.",
  intro:
    "Estou iniciando uma frente de vídeos para o LinkedIn, com reflexões curtas sobre liderança, IA, cultura, conteúdo, decisão e responsabilidade. Este espaço será atualizado com registros reais à medida que forem publicados.",
  // Placeholders assumidos: nenhum vídeo gravado ainda.
  cards: [
    "Critério em tempos de velocidade",
    "IA, decisão e responsabilidade humana",
    "O que ainda constrói confiança?",
    "Cultura, maturidade e liderança",
  ],
  cta: { href: "https://www.linkedin.com/in/ibson-junior/", label: "Acompanhar no LinkedIn" },
};

export const contact = {
  title: "Vamos conversar?",
  subtitle:
    "Para palestras, mentorias, conselho, entrevistas, painéis ou projetos editoriais, entre em contato.",
  quickButtons: [
    "Convidar para palestra",
    "Falar sobre mentoria",
    "Propor entrevista",
    "Falar sobre conselho/advisory",
  ],
  subjects: [
    "Palestra",
    "Mentoria",
    "Conselho / advisory",
    "Entrevista",
    "Painel ou evento",
    "Projeto editorial",
    "Outro assunto",
  ],
  support: "Se a conversa fizer sentido, retorno com disponibilidade, contexto e próximos passos.",
  email: "contato@ibsonjunior.com.br",
  linkedin: "https://www.linkedin.com/in/ibson-junior/",
};

export const footer = {
  name: "Ibson Junior",
  line: "Consciência, decisão e responsabilidade em tempos complexos.",
  complement:
    "Artigos, palestras, mentorias e conversas sobre liderança, IA, cultura, comunicação, conteúdo e tomada de decisão.",
};

// Arquétipos como camadas de arte editorial de fundo.
// TODO(asset): gerar as artes finais em alta e salvar nos caminhos abaixo (webp).
// Até lá, os componentes usam um fallback de textura em CSS.
export const archetypes = {
  wolf: {
    src: "/assets/arquetipos/wolf-editorial.webp",
    alt: "Arte editorial de lobo representando território, estratégia e leitura de ambiente.",
  },
  owl: {
    src: "/assets/arquetipos/owl-editorial.webp",
    alt: "Arte editorial de coruja representando discernimento, visão e sabedoria.",
  },
  seahorse: {
    src: "/assets/arquetipos/moon-network.webp",
    alt: "Arte editorial de cavalo-marinho representando adaptação, cuidado e equilíbrio.",
  },
};
