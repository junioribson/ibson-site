// ==========================================================================
// Dados estruturados (schema.org / JSON-LD) do site. É a camada "invisível" de
// SEO/GEO: diz ao Google e aos buscadores de IA (ChatGPT, Perplexity, Gemini,
// Claude) QUEM é o Ibson, o que ele oferece (Palestra, Mentoria, Conselho) e
// responde perguntas frequentes com os termos-alvo. Fatos vêm de content.ts;
// nada é inventado.
// ==========================================================================
import { normalizeLocale, type Locale } from "../i18n/utils";

const SITE = "https://ibsonjunior.com.br";
const PERSON_ID = `${SITE}/#person`;
const WEBSITE_ID = `${SITE}/#website`;

const PORTRAITS = [
  `${SITE}/assets/retratos/ibson-navy.webp`,
  `${SITE}/assets/retratos/ibson-colete.webp`,
];
const SAME_AS = [
  "https://www.linkedin.com/in/ibson-junior/",
  "https://x.com/IbsonJunior",
  "https://www.instagram.com/ibsonjunior.com.br/",
];

type SeoCopy = {
  jobTitle: string;
  personDesc: string;
  disambig: string;
  knowsAbout: string[];
  services: { name: string; type: string; desc: string }[];
  faq: { q: string; a: string }[];
  siteName: string;
  siteDesc: string;
  audienceType: string;
  occupations: string[];
};

const COPY: Record<Locale, SeoCopy> = {
  pt: {
    jobTitle: "Conselheiro consultivo e executivo de conteúdo, liderança e comunicação",
    personDesc:
      "Ibson Junior é conselheiro consultivo e executivo de conteúdo, liderança e comunicação. Ex-CEO e CSO, cofundou a Futmarketing e fundou a WolfLife, ambas vendidas, lidera a ProliferArte desde 2008 e construiu entre 2017 e 2026 um ciclo de nove anos com a Futbol Sites, operação que liderou a audiência esportiva digital do Brasil. Atua com palestras, mentoria executiva e conselho sobre liderança, comunicação, cultura, governança, inteligência artificial e tomada de decisão.",
    disambig:
      "Conselheiro consultivo e executivo de conteúdo, liderança e comunicação; fundador da WolfLife e do movimento cultural ProliferArte, ex-Diretor de Conteúdo na Futbol Sites (2017 a 2026). Palestrante executivo e mentor executivo, com base em Porto Alegre.",
    knowsAbout: [
      "Palestra", "Mentoria", "Conselheiro", "Marca pessoal", "Comunicação",
      "Desenvolvimento de equipes", "Cultura organizacional", "Liderança",
      "Comunicação executiva", "Tomada de decisão", "Inteligência artificial",
      "Governança pessoal", "Posicionamento", "Narrativa profissional",
      "LinkedIn estratégico", "Estratégia editorial", "Conteúdo",
      "Governança corporativa", "Conselho consultivo", "Produto digital", "Integração pós-aquisição",
    ],
    services: [
      { name: "Palestras e keynotes corporativos", type: "Palestra",
        desc: "Palestras e keynotes para empresas, eventos e lideranças sobre decidir sob pressão, comunicação, cultura organizacional, inteligência artificial com julgamento humano, liderança e desenvolvimento de equipes. Formatos: palestra, painel, roda executiva, workshop e aula especial." },
      { name: "Mentoria executiva individual", type: "Mentoria",
        desc: "Mentoria executiva individual que começa por diagnóstico e trabalha marca pessoal, posicionamento, comunicação executiva, narrativa profissional, LinkedIn estratégico e governança pessoal, transformando repertório em direção." },
      { name: "Conselho e advisory", type: "Conselho / advisory",
        desc: "Atuação como conselheiro (advisory) e formação em governança, contribuindo com repertório em liderança, comunicação, conteúdo, cultura e tomada de decisão." },
    ],
    faq: [
      { q: "Quem é Ibson Junior?",
        a: "Ibson Junior é conselheiro consultivo e executivo de conteúdo, liderança e comunicação. Cofundou a Futmarketing e fundou a WolfLife, ambas vendidas, lidera a ProliferArte desde 2008 e encerrou em 2026 um ciclo de nove anos com a Futbol Sites. Atua com palestras, mentoria executiva e conselho." },
      { q: "Ibson Junior faz palestras corporativas?",
        a: "Sim. Ele leva palestras e keynotes para empresas, eventos e lideranças sobre decidir sob pressão, comunicação, cultura organizacional, inteligência artificial com julgamento humano, liderança e desenvolvimento de equipes, em formatos como palestra, painel, roda executiva e workshop." },
      { q: "Como funciona a mentoria do Ibson Junior?",
        a: "É uma mentoria executiva individual que começa por diagnóstico e trabalha marca pessoal, posicionamento, comunicação executiva, narrativa profissional, LinkedIn estratégico e governança pessoal, transformando experiência e repertório em direção." },
      { q: "Ibson Junior atua como conselheiro?",
        a: "Sim, com atuação em conselho e advisory e formação em governança, contribuindo com repertório em liderança, comunicação, conteúdo, cultura e tomada de decisão." },
      { q: "Como convidar ou entrar em contato com o Ibson Junior?",
        a: "Pelo WhatsApp, pelo e-mail contato@ibsonjunior.com.br ou pelo LinkedIn (linkedin.com/in/ibson-junior). Assuntos: palestra, mentoria, conselho, entrevista, painel ou projeto editorial." },
      { q: "Onde Ibson Junior atua e de onde ele é?",
        a: "Com base em Porto Alegre, Ibson Junior atende empresas e lideranças em todo o Brasil, de forma presencial ou online. Palestras, mentoria e conselho podem ser conduzidos à distância ou no local do evento." },
      { q: "Quais empresas Ibson Junior fundou?",
        a: "Ele fundou a WolfLife, ecossistema de comunidades digitais vendido em 2025, e lidera a ProliferArte, movimento cultural, desde 2008. Também cofundou e dirigiu a Futmarketing como CEO e CSO, uma operação de mídia esportiva digital que foi vendida." },
      { q: "O que é a WolfLife?",
        a: "A WolfLife é um ecossistema de comunidades digitais fundado por Ibson Junior, que alcançou milhões de pessoas e bilhões de visualizações, entre elas o apoio ao crescimento do TikTok no Brasil. A operação foi vendida em 2025." },
      { q: "O que é a ProliferArte?",
        a: "A ProliferArte é um movimento cultural que Ibson Junior fundou em 2008 e lidera até hoje, criado para aproximar arte, artistas independentes e público. Foi o seu primeiro laboratório de audiência e comunidade." },
      { q: "Ibson Junior ainda trabalha na Futbol Sites?",
        a: "Não. Ele encerrou em outubro de 2026 um ciclo de nove anos com a Futbol Sites (2017 a 2026), no qual foi de parceiro externo a Head of Digital Product e, por fim, Diretor de Conteúdo no Brasil. Hoje atua como conselheiro consultivo e executivo independente." },
      { q: "Ibson Junior escreveu algum livro?",
        a: "Sim. Ele é coautor do livro Conselho Diário, com insights estratégicos sobre decisão, liderança e comunicação." },
      { q: "Ibson Junior fala sobre inteligência artificial?",
        a: "Sim. Inteligência artificial com julgamento humano é um de seus temas centrais em palestras, mentoria e artigos, sempre ligada a decisão, cultura e responsabilidade, e não à tecnologia pela tecnologia." },
    ],
    siteName: "Ibson Junior",
    siteDesc:
      "Site oficial de Ibson Junior: palestras, mentoria executiva e conselho sobre liderança, comunicação, cultura, marca pessoal e tomada de decisão.",
    audienceType: "Empresas, lideranças e executivos",
    occupations: ["Conselheiro consultivo", "Diretor de Conteúdo, Futbol Sites (2026)", "Head of Digital Product Brasil, Futbol Sites (2021 a 2026)", "Cofundador, CEO e CSO, Futmarketing (2017 a 2025)", "Fundador e CEO, WolfLife (2021 a 2025)", "Fundador, ProliferArte (desde 2008)"],
  },
  es: {
    jobTitle: "Consejero consultivo y ejecutivo de contenido, liderazgo y comunicación",
    personDesc:
      "Ibson Junior es consejero consultivo y ejecutivo de contenido, liderazgo y comunicación. Ex-CEO y CSO, cofundó Futmarketing y fundó WolfLife, ambas vendidas, lidera ProliferArte desde 2008 y construyó entre 2017 y 2026 un ciclo de nueve años con Futbol Sites, operación que lideró la audiencia deportiva digital de Brasil. Ofrece charlas, mentoría ejecutiva y consejo sobre liderazgo, comunicación, cultura, gobernanza, inteligencia artificial y toma de decisiones.",
    disambig:
      "Consejero consultivo y ejecutivo de contenido, liderazgo y comunicación; fundador de WolfLife y del movimiento cultural ProliferArte, ex Director de Contenido en Futbol Sites (2017 a 2026). Conferencista ejecutivo y mentor ejecutivo, con base en Porto Alegre.",
    knowsAbout: [
      "Charlas", "Mentoría", "Consejero", "Marca personal", "Comunicación",
      "Desarrollo de equipos", "Cultura organizacional", "Liderazgo",
      "Comunicación ejecutiva", "Toma de decisiones", "Inteligencia artificial",
      "Gobernanza personal", "Posicionamiento", "Narrativa profesional",
      "LinkedIn estratégico", "Estrategia editorial", "Contenido",
      "Gobernanza corporativa", "Consejo consultivo", "Producto digital", "Integración pos-adquisición",
    ],
    services: [
      { name: "Charlas y keynotes corporativos", type: "Charla",
        desc: "Charlas y keynotes para empresas, eventos y liderazgos sobre decidir bajo presión, comunicación, cultura organizacional, inteligencia artificial con juicio humano, liderazgo y desarrollo de equipos. Formatos: charla, panel, mesa ejecutiva, workshop y clase especial." },
      { name: "Mentoría ejecutiva individual", type: "Mentoría",
        desc: "Mentoría ejecutiva individual que empieza por diagnóstico y trabaja marca personal, posicionamiento, comunicación ejecutiva, narrativa profesional, LinkedIn estratégico y gobernanza personal, transformando repertorio en dirección." },
      { name: "Consejo y advisory", type: "Consejo / advisory",
        desc: "Actuación como consejero (advisory) y formación en gobernanza, aportando repertorio en liderazgo, comunicación, contenido, cultura y toma de decisiones." },
    ],
    faq: [
      { q: "¿Quién es Ibson Junior?",
        a: "Ibson Junior es consejero consultivo y ejecutivo de contenido, liderazgo y comunicación. Cofundó Futmarketing y fundó WolfLife, ambas vendidas, lidera ProliferArte desde 2008 y en 2026 cerró un ciclo de nueve años con Futbol Sites. Ofrece charlas, mentoría ejecutiva y consejo." },
      { q: "¿Ibson Junior da charlas corporativas?",
        a: "Sí. Lleva charlas y keynotes a empresas, eventos y liderazgos sobre decidir bajo presión, comunicación, cultura organizacional, inteligencia artificial con juicio humano, liderazgo y desarrollo de equipos, en formatos como charla, panel, mesa ejecutiva y workshop." },
      { q: "¿Cómo funciona la mentoría de Ibson Junior?",
        a: "Es una mentoría ejecutiva individual que empieza por diagnóstico y trabaja marca personal, posicionamiento, comunicación ejecutiva, narrativa profesional, LinkedIn estratégico y gobernanza personal, transformando experiencia y repertorio en dirección." },
      { q: "¿Ibson Junior actúa como consejero?",
        a: "Sí, con actuación en consejo y advisory y formación en gobernanza, aportando repertorio en liderazgo, comunicación, contenido, cultura y toma de decisiones." },
      { q: "¿Cómo invitar o contactar a Ibson Junior?",
        a: "Por WhatsApp, por el correo contato@ibsonjunior.com.br o por LinkedIn (linkedin.com/in/ibson-junior). Temas: charla, mentoría, consejo, entrevista, panel o proyecto editorial." },
      { q: "¿Dónde actúa Ibson Junior y de dónde es?",
        a: "Con base en Porto Alegre, Ibson Junior atiende a empresas y liderazgos en todo Brasil, de forma presencial u online. Las charlas, la mentoría y el consejo pueden conducirse a distancia o en el lugar del evento." },
      { q: "¿Qué empresas fundó Ibson Junior?",
        a: "Fundó WolfLife, ecosistema de comunidades digitales vendido en 2025, y lidera ProliferArte, movimiento cultural, desde 2008. También cofundó y dirigió Futmarketing como CEO y CSO, una operación de medios deportivos digitales que fue vendida." },
      { q: "¿Qué es WolfLife?",
        a: "WolfLife es un ecosistema de comunidades digitales fundado por Ibson Junior, que alcanzó a millones de personas y miles de millones de visualizaciones, entre ellas el apoyo al crecimiento de TikTok en Brasil. La operación fue vendida en 2025." },
      { q: "¿Qué es ProliferArte?",
        a: "ProliferArte es un movimiento cultural que Ibson Junior fundó en 2008 y lidera hasta hoy, creado para acercar el arte, los artistas independientes y el público. Fue su primer laboratorio de audiencia y comunidad." },
      { q: "¿Ibson Junior todavía trabaja en Futbol Sites?",
        a: "No. Cerró en octubre de 2026 un ciclo de nueve años con Futbol Sites (2017 a 2026), en el que pasó de socio externo a Head of Digital Product y, por fin, Director de Contenido en Brasil. Hoy actúa como consejero consultivo y ejecutivo independiente." },
      { q: "¿Ibson Junior escribió algún libro?",
        a: "Sí. Es coautor del libro Conselho Diário, con insights estratégicos sobre decisión, liderazgo y comunicación." },
      { q: "¿Ibson Junior habla sobre inteligencia artificial?",
        a: "Sí. La inteligencia artificial con juicio humano es uno de sus temas centrales en charlas, mentoría y artículos, siempre ligada a decisión, cultura y responsabilidad, y no a la tecnología por la tecnología." },
    ],
    siteName: "Ibson Junior",
    siteDesc:
      "Sitio oficial de Ibson Junior: charlas, mentoría ejecutiva y consejo sobre liderazgo, comunicación, cultura, marca personal y toma de decisiones.",
    audienceType: "Empresas, liderazgos y ejecutivos",
    occupations: ["Consejero consultivo", "Director de Contenido, Futbol Sites (2026)", "Head of Digital Product Brasil, Futbol Sites (2021 a 2026)", "Cofundador, CEO y CSO, Futmarketing (2017 a 2025)", "Fundador y CEO, WolfLife (2021 a 2025)", "Fundador, ProliferArte (desde 2008)"],
  },
  en: {
    jobTitle: "Advisory board member and content, leadership and communication executive",
    personDesc:
      "Ibson Junior is an advisory board member and content, leadership and communication executive. A former CEO and CSO, he co-founded Futmarketing and founded WolfLife, both sold, has led ProliferArte since 2008 and between 2017 and 2026 built a nine-year cycle with Futbol Sites, the operation that led Brazil's digital sports audience. He offers keynote talks, executive mentoring and advisory on leadership, communication, culture, governance, artificial intelligence and decision-making.",
    disambig:
      "Advisory board member and content, leadership and communication executive; founder of WolfLife and of the ProliferArte cultural movement, former Content Director at Futbol Sites (2017 to 2026). Executive keynote speaker and executive mentor, based in Porto Alegre, Brazil.",
    knowsAbout: [
      "Keynote speaking", "Mentoring", "Advisor", "Personal branding", "Communication",
      "Team development", "Organizational culture", "Leadership",
      "Executive communication", "Decision-making", "Artificial intelligence",
      "Personal governance", "Positioning", "Professional narrative",
      "Strategic LinkedIn", "Editorial strategy", "Content",
      "Corporate governance", "Advisory board", "Digital product", "Post-acquisition integration",
    ],
    services: [
      { name: "Corporate keynote talks", type: "Keynote / talk",
        desc: "Keynotes and talks for companies, events and leaders on deciding under pressure, communication, organizational culture, artificial intelligence with human judgment, leadership and team development. Formats: talk, panel, executive roundtable, workshop and special class." },
      { name: "One-on-one executive mentoring", type: "Mentoring",
        desc: "One-on-one executive mentoring that starts with diagnosis and works on personal branding, positioning, executive communication, professional narrative, strategic LinkedIn and personal governance, turning experience into direction." },
      { name: "Board advisory", type: "Advisory",
        desc: "Advisory and board work with governance training, contributing a repertoire in leadership, communication, content, culture and decision-making." },
    ],
    faq: [
      { q: "Who is Ibson Junior?",
        a: "Ibson Junior is an advisory board member and content, leadership and communication executive. He co-founded Futmarketing and founded WolfLife, both sold, has led ProliferArte since 2008 and in 2026 closed a nine-year cycle with Futbol Sites. He offers keynote talks, executive mentoring and advisory." },
      { q: "Does Ibson Junior give corporate talks?",
        a: "Yes. He delivers keynotes and talks for companies, events and leaders on deciding under pressure, communication, organizational culture, artificial intelligence with human judgment, leadership and team development, in formats such as talk, panel, executive roundtable and workshop." },
      { q: "How does Ibson Junior's mentoring work?",
        a: "It is one-on-one executive mentoring that starts with diagnosis and works on personal branding, positioning, executive communication, professional narrative, strategic LinkedIn and personal governance, turning experience and repertoire into direction." },
      { q: "Does Ibson Junior act as an advisor?",
        a: "Yes, with board and advisory work and governance training, contributing a repertoire in leadership, communication, content, culture and decision-making." },
      { q: "How to invite or contact Ibson Junior?",
        a: "By WhatsApp, by email at contato@ibsonjunior.com.br or on LinkedIn (linkedin.com/in/ibson-junior). Topics: talk, mentoring, advisory, interview, panel or editorial project." },
      { q: "Where does Ibson Junior work and where is he from?",
        a: "Based in Porto Alegre, Ibson Junior serves companies and leaders across Brazil, in person or online. Talks, mentoring and advisory can be delivered remotely or at the event venue." },
      { q: "Which companies did Ibson Junior found?",
        a: "He founded WolfLife, a digital community ecosystem sold in 2025, and has led the ProliferArte cultural movement since 2008. He also co-founded and ran Futmarketing as CEO and CSO, a digital sports media operation that was sold." },
      { q: "What is WolfLife?",
        a: "WolfLife is a digital community ecosystem founded by Ibson Junior that reached millions of people and billions of views, including supporting TikTok's growth in Brazil. The operation was sold in 2025." },
      { q: "What is ProliferArte?",
        a: "ProliferArte is a cultural movement Ibson Junior founded in 2008 and still leads, created to bring art, independent artists and the public closer together. It was his first audience and community laboratory." },
      { q: "Does Ibson Junior still work at Futbol Sites?",
        a: "No. In October 2026 he closed a nine-year cycle with Futbol Sites (2017 to 2026), where he went from external partner to Head of Digital Product and finally Content Director in Brazil. Today he works as an advisory board member and independent executive." },
      { q: "Has Ibson Junior written a book?",
        a: "Yes. He is co-author of the book Conselho Diário, with strategic insights on decision-making, leadership and communication." },
      { q: "Does Ibson Junior speak about artificial intelligence?",
        a: "Yes. Artificial intelligence with human judgment is one of his core themes in talks, mentoring and articles, always tied to decision-making, culture and responsibility rather than technology for its own sake." },
    ],
    siteName: "Ibson Junior",
    siteDesc:
      "Official site of Ibson Junior: keynote talks, executive mentoring and advisory on leadership, communication, culture, personal branding and decision-making.",
    audienceType: "Companies, leaders and executives",
    occupations: ["Advisory board member", "Content Director, Futbol Sites (2026)", "Head of Digital Product Brazil, Futbol Sites (2021 to 2026)", "Co-founder, CEO and CSO, Futmarketing (2017 to 2025)", "Founder and CEO, WolfLife (2021 to 2025)", "Founder, ProliferArte (since 2008)"],
  },
};

// Campos-base da entidade Ibson (compartilhados entre a home e as páginas
// secundárias). Inclui disambiguatingDescription: o campo do schema.org feito
// para separar homônimos (evita a confusão com outros "Ibson" na busca).
function basePerson(c: SeoCopy) {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Ibson Junior",
    alternateName: ["Ibson Lima dos Santos Junior", "Ibson Júnior", "Ibson"],
    url: `${SITE}/`,
    image: PORTRAITS,
    jobTitle: c.jobTitle,
    description: c.personDesc,
    disambiguatingDescription: c.disambig,
    email: "mailto:contato@ibsonjunior.com.br",
    knowsAbout: c.knowsAbout,
    sameAs: SAME_AS,
    hasOccupation: c.occupations.map((n) => ({ "@type": "Occupation", name: n })),
  };
}

// Nó Person autossuficiente para páginas que NÃO são a home (LPs, /ibson-junior/).
// Cada página é avaliada isoladamente pelo Google: sem este nó, um provider/about
// apontando para #person fica pendurado (referência quebrada).
export function personNode(locale?: string | null) {
  const c = COPY[normalizeLocale(locale)];
  return { ...basePerson(c) };
}

// Grafo completo para a home (a página-entidade principal).
export function siteGraph(locale?: string | null) {
  const l = normalizeLocale(locale);
  const c = COPY[l];
  const homeUrl = l === "pt" ? `${SITE}/` : `${SITE}/${l}/`;

  const services = c.services.map((s) => ({
    "@type": "Service",
    name: s.name,
    serviceType: s.type,
    description: s.desc,
    provider: { "@id": PERSON_ID },
    areaServed: [
      { "@type": "Country", name: "Brasil" },
      { "@type": "AdministrativeArea", name: "Online / remoto" },
    ],
    audience: { "@type": "BusinessAudience", audienceType: c.audienceType },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...basePerson(c),
        makesOffer: services.map((s) => ({ "@type": "Offer", itemOffered: s })),
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE}/`,
        name: c.siteName,
        description: c.siteDesc,
        inLanguage: l === "pt" ? "pt-BR" : l,
        publisher: { "@id": PERSON_ID },
        about: { "@id": PERSON_ID },
      },
      {
        "@type": "ProfilePage",
        "@id": `${homeUrl}#webpage`,
        url: homeUrl,
        name: c.siteName,
        isPartOf: { "@id": WEBSITE_ID },
        // mainEntity é obrigatório no rich result de Página de Perfil (ProfilePage):
        // identifica de quem é o perfil. about fica como reforço.
        mainEntity: { "@id": PERSON_ID },
        about: { "@id": PERSON_ID },
        inLanguage: l === "pt" ? "pt-BR" : l,
      },
      {
        "@type": "FAQPage",
        "@id": `${homeUrl}#faq`,
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: c.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}
