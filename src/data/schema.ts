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
const ORG_ID = `${SITE}/#futbolsites`;

const PORTRAITS = [
  `${SITE}/assets/retratos/ibson-junior-executivo.webp`,
  `${SITE}/assets/retratos/ibson-junior-retrato.webp`,
];
const SAME_AS = [
  "https://www.linkedin.com/in/ibson-junior/",
  "https://x.com/IbsonJunior",
];

type SeoCopy = {
  jobTitle: string;
  personDesc: string;
  knowsAbout: string[];
  services: { name: string; type: string; desc: string }[];
  faq: { q: string; a: string }[];
  siteName: string;
  siteDesc: string;
};

const COPY: Record<Locale, SeoCopy> = {
  pt: {
    jobTitle: "Executivo de conteúdo, liderança e comunicação",
    personDesc:
      "Ibson Junior é executivo de conteúdo, liderança e comunicação, Diretor de Conteúdo na Futbol Sites. Fundou a WolfLife (vendida em 2025), lidera a ProliferArte desde 2008 e foi CEO da Futmarketing. Atua com palestras, mentoria executiva e conselho sobre liderança, comunicação, cultura, marca pessoal, desenvolvimento de equipes, inteligência artificial e tomada de decisão.",
    knowsAbout: [
      "Palestra", "Mentoria", "Conselheiro", "Marca pessoal", "Comunicação",
      "Desenvolvimento de equipes", "Cultura organizacional", "Liderança",
      "Comunicação executiva", "Tomada de decisão", "Inteligência artificial",
      "Governança pessoal", "Posicionamento", "Narrativa profissional",
      "LinkedIn estratégico", "Estratégia editorial", "Conteúdo",
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
        a: "Ibson Junior é executivo de conteúdo, liderança e comunicação, Diretor de Conteúdo na Futbol Sites. Fundou a WolfLife (vendida em 2025), lidera a ProliferArte desde 2008 e foi CEO da Futmarketing. Atua com palestras, mentoria executiva e conselho." },
      { q: "Ibson Junior faz palestras corporativas?",
        a: "Sim. Ele leva palestras e keynotes para empresas, eventos e lideranças sobre decidir sob pressão, comunicação, cultura organizacional, inteligência artificial com julgamento humano, liderança e desenvolvimento de equipes, em formatos como palestra, painel, roda executiva e workshop." },
      { q: "Como funciona a mentoria do Ibson Junior?",
        a: "É uma mentoria executiva individual que começa por diagnóstico e trabalha marca pessoal, posicionamento, comunicação executiva, narrativa profissional, LinkedIn estratégico e governança pessoal, transformando experiência e repertório em direção." },
      { q: "Ibson Junior atua como conselheiro?",
        a: "Sim, com atuação em conselho e advisory e formação em governança, contribuindo com repertório em liderança, comunicação, conteúdo, cultura e tomada de decisão." },
      { q: "Como convidar ou entrar em contato com o Ibson Junior?",
        a: "Pelo e-mail contato@ibsonjunior.com.br ou pelo LinkedIn (linkedin.com/in/ibson-junior). Assuntos: palestra, mentoria, conselho, entrevista, painel ou projeto editorial." },
    ],
    siteName: "Ibson Junior",
    siteDesc:
      "Site oficial de Ibson Junior: palestras, mentoria executiva e conselho sobre liderança, comunicação, cultura, marca pessoal e tomada de decisão.",
  },
  es: {
    jobTitle: "Ejecutivo de contenido, liderazgo y comunicación",
    personDesc:
      "Ibson Junior es ejecutivo de contenido, liderazgo y comunicación, Director de Contenido en Futbol Sites. Fundó WolfLife (vendida en 2025), lidera ProliferArte desde 2008 y fue CEO de Futmarketing. Ofrece charlas, mentoría ejecutiva y consejo sobre liderazgo, comunicación, cultura, marca personal, desarrollo de equipos, inteligencia artificial y toma de decisiones.",
    knowsAbout: [
      "Charlas", "Mentoría", "Consejero", "Marca personal", "Comunicación",
      "Desarrollo de equipos", "Cultura organizacional", "Liderazgo",
      "Comunicación ejecutiva", "Toma de decisiones", "Inteligencia artificial",
      "Gobernanza personal", "Posicionamiento", "Narrativa profesional",
      "LinkedIn estratégico", "Estrategia editorial", "Contenido",
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
        a: "Ibson Junior es ejecutivo de contenido, liderazgo y comunicación, Director de Contenido en Futbol Sites. Fundó WolfLife (vendida en 2025), lidera ProliferArte desde 2008 y fue CEO de Futmarketing. Ofrece charlas, mentoría ejecutiva y consejo." },
      { q: "¿Ibson Junior da charlas corporativas?",
        a: "Sí. Lleva charlas y keynotes a empresas, eventos y liderazgos sobre decidir bajo presión, comunicación, cultura organizacional, inteligencia artificial con juicio humano, liderazgo y desarrollo de equipos, en formatos como charla, panel, mesa ejecutiva y workshop." },
      { q: "¿Cómo funciona la mentoría de Ibson Junior?",
        a: "Es una mentoría ejecutiva individual que empieza por diagnóstico y trabaja marca personal, posicionamiento, comunicación ejecutiva, narrativa profesional, LinkedIn estratégico y gobernanza personal, transformando experiencia y repertorio en dirección." },
      { q: "¿Ibson Junior actúa como consejero?",
        a: "Sí, con actuación en consejo y advisory y formación en gobernanza, aportando repertorio en liderazgo, comunicación, contenido, cultura y toma de decisiones." },
      { q: "¿Cómo invitar o contactar a Ibson Junior?",
        a: "Por el correo contato@ibsonjunior.com.br o por LinkedIn (linkedin.com/in/ibson-junior). Temas: charla, mentoría, consejo, entrevista, panel o proyecto editorial." },
    ],
    siteName: "Ibson Junior",
    siteDesc:
      "Sitio oficial de Ibson Junior: charlas, mentoría ejecutiva y consejo sobre liderazgo, comunicación, cultura, marca personal y toma de decisiones.",
  },
  en: {
    jobTitle: "Content, leadership and communication executive",
    personDesc:
      "Ibson Junior is a content, leadership and communication executive, Content Director at Futbol Sites. He founded WolfLife (sold in 2025), leads ProliferArte since 2008 and was CEO of Futmarketing. He offers keynote talks, executive mentoring and advisory on leadership, communication, culture, personal branding, team development, artificial intelligence and decision-making.",
    knowsAbout: [
      "Keynote speaking", "Mentoring", "Advisor", "Personal branding", "Communication",
      "Team development", "Organizational culture", "Leadership",
      "Executive communication", "Decision-making", "Artificial intelligence",
      "Personal governance", "Positioning", "Professional narrative",
      "Strategic LinkedIn", "Editorial strategy", "Content",
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
        a: "Ibson Junior is a content, leadership and communication executive, Content Director at Futbol Sites. He founded WolfLife (sold in 2025), leads ProliferArte since 2008 and was CEO of Futmarketing. He offers keynote talks, executive mentoring and advisory." },
      { q: "Does Ibson Junior give corporate talks?",
        a: "Yes. He delivers keynotes and talks for companies, events and leaders on deciding under pressure, communication, organizational culture, artificial intelligence with human judgment, leadership and team development, in formats such as talk, panel, executive roundtable and workshop." },
      { q: "How does Ibson Junior's mentoring work?",
        a: "It is one-on-one executive mentoring that starts with diagnosis and works on personal branding, positioning, executive communication, professional narrative, strategic LinkedIn and personal governance, turning experience and repertoire into direction." },
      { q: "Does Ibson Junior act as an advisor?",
        a: "Yes, with board and advisory work and governance training, contributing a repertoire in leadership, communication, content, culture and decision-making." },
      { q: "How to invite or contact Ibson Junior?",
        a: "By email at contato@ibsonjunior.com.br or on LinkedIn (linkedin.com/in/ibson-junior). Topics: talk, mentoring, advisory, interview, panel or editorial project." },
    ],
    siteName: "Ibson Junior",
    siteDesc:
      "Official site of Ibson Junior: keynote talks, executive mentoring and advisory on leadership, communication, culture, personal branding and decision-making.",
  },
};

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
    audience: { "@type": "BusinessAudience", audienceType: "Empresas, lideranças e executivos" },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: "Ibson Junior",
        url: `${SITE}/`,
        image: PORTRAITS,
        jobTitle: c.jobTitle,
        description: c.personDesc,
        email: "mailto:contato@ibsonjunior.com.br",
        worksFor: { "@id": ORG_ID },
        knowsAbout: c.knowsAbout,
        sameAs: SAME_AS,
        makesOffer: services.map((s) => ({ "@type": "Offer", itemOffered: s })),
      },
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: "Futbol Sites",
        url: "https://www.futbolsites.net/pt",
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
