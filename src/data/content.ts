// ============================================================================
// Camada de conteúdo editável do site de Ibson Junior.
// Território central: consciência aplicada à vida, ao trabalho, às relações e
// às decisões em tempos complexos. Tese-mãe: em um tempo em que todos disputam
// atenção, a diferença está em quem ainda consegue sustentar critério.
//
// Regra de fatos: nada é inventado. Onde há incerteza, há comentário TODO.
// Regra de linguagem: nunca usar travessão; frases claras, humanas e densas.
// ============================================================================

// TODO(fato): confirmar a grafia oficial do projeto de mídia esportiva.
// O CLAUDE.md e a referência usavam "Futmarketing"; o brief pede "Footmarketing".
// Ajuste esta constante quando a grafia estiver confirmada.
export const FOOTMARKETING_NAME = "Footmarketing";

// TODO(fato): confirmar o papel exato na operação (o brief indica CEO;
// a versão anterior dizia "participação na construção e venda").
export const FOOTMARKETING_ROLE = "CEO";

export const seo = {
  title: "Ibson Junior | Consciência, Decisão e Responsabilidade",
  description:
    "Artigos, palestras, mentorias e conversas executivas sobre liderança, IA, cultura, conteúdo, comunicação e tomada de decisão em tempos complexos.",
  ogTitle:
    "Ibson Junior | Consciência, decisão e responsabilidade em tempos complexos",
  ogDescription:
    "Uma plataforma autoral sobre liderança, IA, conteúdo, cultura, comunicação e decisões em ambientes de pressão e transformação.",
  // TODO(asset): gerar imagem Open Graph 1200x630 e salvar em public/assets/og/og-ibson.jpg
  ogImage: "/assets/og/og-ibson.jpg",
};

export const nav = {
  links: [
    { href: "#sobre", label: "Sobre", id: "sobre" },
    { href: "#cases", label: "Cases", id: "cases" },
    { href: "#artigos", label: "Artigos", id: "artigos" },
    { href: "#mentoria", label: "Mentoria", id: "mentoria" },
    { href: "#palestras", label: "Palestras", id: "palestras" },
    { href: "#videos", label: "Vídeos", id: "videos" },
    { href: "#contato", label: "Contato", id: "contato" },
  ],
  cta: { href: "#contato", label: "Convidar para uma conversa" },
};

export const hero = {
  topline: "Conteúdo · Liderança · Decisão · IA · Cultura",
  headline: "Consciência, decisão e responsabilidade em tempos complexos.",
  subheadline:
    "Reflexões, artigos e conversas executivas para líderes, equipes e organizações que precisam pensar melhor em ambientes de pressão, excesso de informação e transformação digital.",
  complement:
    "Minha trajetória passa pela construção de audiência, liderança editorial, cultura, negócios digitais e tomada de decisão. Este espaço reúne ideias, cases e conversas para quem precisa transformar repertório em clareza, presença e direção.",
  ctas: {
    primary: { href: "#sobre", label: "Conhecer trajetória" },
    secondary: { href: "#contato", label: "Convidar para uma conversa" },
    tertiary: { href: "#artigos", label: "Ler artigos" },
  },
  // Microprovas discretas: cargo genérico, sem nomear empregador atual.
  microprovas: [
    "Diretor de Conteúdo no Brasil",
    "Fundador da WolfLife",
    "Fundador da ProliferArte",
    `${FOOTMARKETING_ROLE} da ${FOOTMARKETING_NAME}, com participação na construção e venda da operação`,
    "Artigos mensais sobre IA, cultura, liderança, conteúdo e responsabilidade",
  ],
};

export const thesis = {
  kicker: "A tese",
  title: "Estratégia começa quando a pressão chega.",
  body: [
    "Em um mundo que produz mais informação do que capacidade de interpretação, o diferencial não está em fazer mais. Está em decidir melhor.",
    "Meu trabalho parte dessa tensão: separar o que parece urgente do que realmente importa, transformar ruído em clareza e ajudar pessoas e organizações a sustentarem critério quando o ambiente empurra para o automático.",
  ],
  closing:
    "A velocidade pode abrir caminhos. Mas é o critério que define se eles levam a algum lugar.",
};

export const about = {
  title: "Uma trajetória entre audiência, cultura, conteúdo e decisão.",
  subtitle:
    "Antes de falar sobre autoridade, é preciso entender o caminho que construiu o repertório.",
  body: [
    "Ibson Junior é executivo de conteúdo, liderança e comunicação, com trajetória construída entre mídia digital, estratégia editorial, cultura, negócios digitais e construção de audiência.",
    "Sua experiência passa por projetos que conectam atenção, comunidade, narrativa e resultado. Fundou a WolfLife, ecossistema de comunidades digitais vendido em 2025, lidera a ProliferArte desde 2008 e participou da construção e venda de uma operação brasileira de mídia esportiva digital.",
    "Hoje, atua como Diretor de Conteúdo no Brasil, liderando operações editoriais e refletindo publicamente sobre IA, atenção, responsabilidade, cultura, liderança e tomada de decisão.",
    "O fio condutor da sua trajetória é a capacidade de construir sentido em ambientes de alta complexidade: entender o contexto, organizar a narrativa, decidir com critério e transformar audiência em percepção de valor.",
  ],
  microprovas: [
    { k: "WolfLife", v: "comunidade digital de grande escala" },
    { k: "ProliferArte", v: "movimento cultural ativo desde 2008" },
    { k: FOOTMARKETING_NAME, v: `${FOOTMARKETING_ROLE} e participação na venda da operação` },
    { k: "Direção de conteúdo", v: "liderança editorial no Brasil" },
    { k: "Artigos", v: "produção autoral mensal no LinkedIn" },
  ],
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
      { n: "+150 Mi", t: "seguidores na rede" },
      { n: "+6 Bi", t: "impressões anuais" },
      { n: "+100 Mi", t: "alcançados por mês" },
      { n: "2025", t: "venda da operação" },
    ],
    aprendizado:
      "Audiência não é apenas volume. É a capacidade de entender comportamento, construir pertencimento e transformar atenção em ativo.",
    cta: { href: "https://wolflife.com.br/", label: "Ver WolfLife" },
  },
  tiktok: {
    name: "Case TikTok no Brasil",
    big: "9 Bi+",
    bigLabel: "visualizações entregues",
    body: "Em uma das entregas de maior escala, a WolfLife apoiou o crescimento do TikTok no Brasil por meio de distribuição massiva em comunidades no Facebook, gerando mais de 9 bilhões de visualizações e ampliando o reconhecimento da marca em território nacional.",
  },
  footmarketing: {
    name: FOOTMARKETING_NAME,
    tag: "Mídia esportiva · Operação digital · M&A",
    body: [
      `Na ${FOOTMARKETING_NAME}, Ibson atuou como ${FOOTMARKETING_ROLE} e participou da construção, posicionamento e venda de uma operação brasileira de mídia esportiva digital.`,
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
    provas: [
      { n: "2008", t: "início do movimento" },
      { n: "1,5 Mi+", t: "pessoas na comunidade" },
      { n: "Ativo", t: "cultura e visibilidade" },
    ],
    // Capas em alta a chegar; até lá, placeholders elegantes.
    galeria: [
      { title: "A Beleza da Natureza", src: null as string | null },
      { title: "Revista ProliferArte", src: null as string | null },
      { title: "Arte Aberta", src: null as string | null },
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
}

// TODO(links): substituir url por links definitivos de cada artigo no LinkedIn.
const LINKEDIN = "https://www.linkedin.com/in/ibson-junior/recent-activity/all/";

export const articles = {
  title: "Artigos e ensaios.",
  subtitle:
    "Textos sobre consciência, decisão, IA, cultura, conteúdo, liderança e responsabilidade.",
  intro:
    "Os artigos são a base editorial da minha marca pessoal. Neles, organizo reflexões mais longas sobre temas que atravessam trabalho, tecnologia, comunicação e maturidade em ambientes complexos.",
  list: [
    {
      category: "Conteúdo e responsabilidade",
      date: "2026",
      title:
        "Na Copa do Mundo, conteúdo não disputa apenas atenção. Disputa responsabilidade.",
      summary:
        "Uma reflexão sobre cobertura, IA, algoritmos, emoção, distribuição e o papel de quem informa em eventos de escala global.",
      readingTime: "6 min",
      url: LINKEDIN,
    },
    {
      category: "Carreira e consciência",
      date: "2026",
      title: "Quando a profissão vira identidade",
      summary:
        "Uma reflexão sobre o risco de reduzir quem somos ao cargo que ocupamos e o impacto disso sobre criatividade, relações e decisões.",
      readingTime: "5 min",
      url: LINKEDIN,
    },
    {
      category: "IA e decisão",
      date: "2026",
      title: "A IA pode ser motor, mas o humano precisa continuar no volante",
      summary:
        "Uma reflexão sobre eficiência, julgamento humano e responsabilidade em tempos de automação.",
      readingTime: "5 min",
      url: LINKEDIN,
    },
    {
      category: "Cultura e liderança",
      date: "2026",
      title: "Cultura não é o que a empresa diz",
      summary:
        "Uma reflexão sobre comportamento, coerência e os sinais invisíveis que moldam uma organização.",
      readingTime: "4 min",
      url: LINKEDIN,
    },
  ] as Article[],
  allUrl: LINKEDIN,
};

export const talks = {
  title: "Palestras e conversas executivas.",
  subtitle:
    "Reflexões para empresas, eventos, lideranças e equipes que precisam pensar melhor em tempos de pressão, ruído e transformação.",
  intro: [
    "Estou estruturando uma frente de palestras e conversas executivas a partir dos temas que venho desenvolvendo em artigos, liderança e experiências profissionais.",
    "A proposta não é levar respostas prontas, mas provocar clareza, responsabilidade e maturidade em quem decide, comunica e lidera.",
  ],
  themes: [
    {
      title: "Conteúdo não disputa apenas atenção. Disputa responsabilidade.",
      description:
        "Sobre comunicação, IA, algoritmos, jornalismo, confiança e responsabilidade editorial em um ambiente saturado de informação.",
      audience: "Marketing, comunicação, mídia, liderança, conteúdo, reputação e cultura.",
    },
    {
      title: "A IA pode ser motor. O humano precisa continuar no volante.",
      description:
        "Uma conversa sobre produtividade, discernimento, julgamento humano e responsabilidade no uso da inteligência artificial.",
      audience: "Lideranças, equipes de conteúdo, tecnologia, RH, educação e negócios.",
    },
    {
      title: "Critério sob pressão.",
      description:
        "Como decidir melhor quando velocidade, volume e urgência parecem dominar o ambiente.",
      audience: "Executivos, gestores, coordenadores, heads e equipes de alta demanda.",
    },
    {
      title: "Cultura é o que a organização aprende a tolerar.",
      description:
        "Sobre comportamento, confiança, coerência e os sinais invisíveis que moldam empresas.",
      audience: "RH, cultura, liderança, gestão e desenvolvimento organizacional.",
    },
    {
      title: "Governança pessoal precede a cadeira.",
      description:
        "Uma reflexão sobre maturidade, autoconsciência, reputação e responsabilidade antes do poder formal.",
      audience: "Líderes, conselheiros em formação, executivos e profissionais em transição.",
    },
    {
      title: "Quando a profissão vira identidade.",
      description:
        "Sobre carreira, repertório, criatividade, cansaço e o risco de reduzir a vida ao cargo.",
      audience: "Empresas, lideranças, RH, educação corporativa e profissionais em transição.",
    },
  ],
  formats: ["Palestra", "Painel", "Roda executiva", "Workshop", "Aula especial", "Conversa com lideranças"],
  durations: ["45 minutos", "60 minutos", "90 minutos"],
  cta: { href: "#contato", label: "Convidar para palestra" },
  note: "Disponível para eventos corporativos, encontros executivos, painéis, aulas especiais e conversas com lideranças.",
};

export const mentorship = {
  title: "Mentoria para clareza, posicionamento e decisão.",
  subtitle:
    "Uma conversa estratégica para profissionais que precisam organizar repertório, presença e direção.",
  intro: [
    "A mentoria é voltada para pessoas que estão em momentos de transição, crescimento ou maior exposição profissional e precisam pensar com mais clareza sobre posicionamento, decisões, comunicação e próximos passos.",
    "Não se trata de fórmula pronta. É um espaço de escuta, organização e provocação estratégica para transformar experiência em direção.",
  ],
  whatIs: [
    "Uma conversa estratégica individual para organizar pensamento, trajetória, posicionamento e tomada de decisão.",
    "Pode envolver marca pessoal, comunicação executiva, carreira, liderança, governança pessoal, conteúdo e clareza de próximos passos.",
  ],
  whoFor: [
    "Líderes",
    "Gestores",
    "Especialistas",
    "Executivos em transição",
    "Profissionais que querem fortalecer presença",
    "Pessoas que precisam comunicar melhor seu valor",
    "Profissionais que desejam transformar experiência em posicionamento",
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
  ],
  cta: { href: "#contato", label: "Quero conversar sobre mentoria" },
  note: "Formato e escopo definidos em conversa, de acordo com o momento e a necessidade de cada pessoa.",
};

export const videos = {
  title: "Vídeos e reflexões.",
  subtitle: "Uma nova frente para aproximar as ideias da fala.",
  intro:
    "Estou iniciando uma frente de vídeos para o LinkedIn, com reflexões curtas sobre liderança, IA, cultura, conteúdo, decisão e responsabilidade. Este espaço reunirá esses registros à medida que forem publicados.",
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
    "Para palestras, mentorias, painéis, entrevistas, projetos editoriais, consultoria ou conversas executivas, entre em contato.",
  quickButtons: [
    "Convidar para palestra",
    "Falar sobre mentoria",
    "Propor entrevista",
    "Falar sobre consultoria",
  ],
  subjects: [
    "Palestra",
    "Mentoria",
    "Consultoria",
    "Entrevista",
    "Painel ou evento",
    "Projeto editorial",
    "Outro assunto",
  ],
  support: "Se a conversa fizer sentido, retorno com disponibilidade e próximos passos.",
  email: "contato@ibsonjunior.com.br",
  linkedin: "https://www.linkedin.com/in/ibson-junior/",
};

export const footer = {
  name: "Ibson Junior",
  line: "Consciência, decisão e responsabilidade em tempos complexos.",
  complement:
    "Artigos, palestras, mentorias e conversas executivas sobre liderança, IA, cultura, comunicação, conteúdo e tomada de decisão.",
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
    src: "/assets/arquetipos/seahorse-editorial.webp",
    alt: "Arte editorial de cavalo-marinho representando adaptação, cuidado e equilíbrio.",
  },
};
