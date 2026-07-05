// ============================================================================
// Editable content layer for Ibson Junior's website.
// Central territory: consciousness applied to life, work, relationships and
// decisions in complex times. Core thesis: at a time when everyone competes for
// attention, the difference lies in who can still sustain judgment.
//
// Facts rule: nothing is invented. Where there is uncertainty, there is a TODO comment.
// Language rule: never use em dashes; clear, human and dense sentences.
// ============================================================================

// Official spelling confirmed by Ibson (and in CLAUDE.md): Futmarketing.
// TODO(fact): reconfirm the definitive brand spelling (Futmarketing, Footmarketing
// or Foot Marketing) before publishing, in case Ibson wants to review it.
export const FUTMARKETING_NAME = "Futmarketing";

// TODO(fact): confirm the exact role in the operation (using CEO as per the brief).
export const FUTMARKETING_ROLE = "CEO";

// Current role allowed by Ibson (and in CLAUDE.md): Content Director at
// Futbol Sites, with the option to hyperlink the official site. NEVER mention Better Collective.
export const FUTBOL_SITES_URL = "https://www.futbolsites.net/pt";
export const CARGO_ATUAL = "Content Director at Futbol Sites";

// Analytics and Search Console. Fill in when Ibson creates the Google accounts:
// - GA_MEASUREMENT_ID: the Google Analytics 4 ID, in the format "G-XXXXXXXXXX".
// - GSC_VERIFICATION: the "content" value of the Search Console verification meta tag.
// While they are empty, nothing is injected (the site does not break, no useless calls).
export const GA_MEASUREMENT_ID = "G-5S4SJGES22";
export const GSC_VERIFICATION = "";

export const seo = {
  title: "Ibson Junior | Judgment, Leadership and Decision",
  description:
    "Ibson Junior: content, leadership and communication executive. Articles, talks and mentoring to decide with judgment amid AI, noise and pressure.",
  ogTitle:
    "Ibson Junior | Judgment, leadership and decision in complex times",
  ogDescription:
    "Reflections, articles, talks and executive conversations on leadership, AI, culture, content, communication and decision-making in environments of pressure, information overload and transformation.",
  // TODO(asset): generate a 1200x630 Open Graph image and save it in public/assets/og/og-ibson.jpg
  ogImage: "/assets/og/og-ibson.jpg",
};

export const nav = {
  links: [
    { href: "/#sobre", label: "About", id: "sobre" },
    { href: "/#cases", label: "Cases", id: "cases" },
    { href: "/#artigos", label: "Articles", id: "artigos" },
    { href: "/#mentoria", label: "Mentoring", id: "mentoria" },
    { href: "/#palestras", label: "Talks", id: "palestras" },
    { href: "/#videos", label: "Videos", id: "videos" },
    { href: "/#contato", label: "Contact", id: "contato" },
  ],
  cta: { href: "/#contato", label: "Shall we connect?" },
};

export const hero = {
  topline: "Content · Leadership · Decision · AI · Culture",
  headline: "When everything accelerates, clarity becomes a responsibility.",
  headlineLines: ["When everything accelerates,", "clarity becomes", "a responsibility."],
  subheadline:
    "For leaders, teams and organizations that need to decide with judgment, communicate with depth and build trust in a world too noisy to be run on autopilot.",
  complement:
    "My path runs through audience building, editorial leadership, culture, digital business and decision-making. This space brings together articles, cases, mentoring, talks and executive conversations to turn repertoire into clarity, presence and direction.",
  ctas: {
    primary: { href: "#sobre", label: "Explore the journey" },
    secondary: { href: "#contato", label: "Invite for a conversation" },
    tertiary: { href: "#artigos", label: "Read articles" },
  },
  // Discreet micro-proofs: generic role, without naming the current employer.
  microprovas: [
    CARGO_ATUAL,
    "Founder of WolfLife",
    "Founder of ProliferArte",
    `${FUTMARKETING_ROLE} of ${FUTMARKETING_NAME}, involved in building and selling the operation`,
    "Monthly articles on AI, culture, leadership, content and responsibility",
  ],
};

export const thesis = {
  kicker: "The thesis",
  title: "Strategy begins when the pressure arrives.",
  body: [
    "In a world that produces more content than the capacity to interpret it, the differentiator is not about showing up more. It is about deciding better.",
    "My work starts from that tension: separating urgency from importance, turning noise into clarity and helping leaders, teams and organizations sustain judgment when technology, market and culture push toward the automatic.",
  ],
  closing:
    "Speed can open paths. But it is judgment that determines whether they lead anywhere.",
};

export const about = {
  title: "A journey across audience, culture, content and decision.",
  subtitle:
    "Before talking about authority, it is worth understanding the path that built the repertoire.",
  body: [
    '<a href="https://www.linkedin.com/in/ibson-junior/" target="_blank" rel="noopener">Ibson Junior</a> is a <strong>content, leadership and communication executive</strong>, with a path built across digital media, editorial strategy, culture, digital business and audience building.',
    'His experience spans projects that connect attention, community, narrative and results. He founded <strong><a href="https://wolflife.com.br/" target="_blank" rel="noopener">WolfLife</a></strong>, an ecosystem of digital communities sold in 2025, has led <strong><a href="https://www.facebook.com/ProliferArte/" target="_blank" rel="noopener">ProliferArte</a></strong> since 2008 and served as <strong><a href="https://es-us.finanzas.yahoo.com/noticias/compra-millonaria-gigante-medios-marketing-090600505.html" target="_blank" rel="noopener">CEO of Futmarketing</a></strong>, taking part in the building, positioning and sale of a Brazilian digital sports media operation.',
    'He was also the creator of the site <strong><a href="https://www.antenadosnofutebol.com.br/" target="_blank" rel="noopener">Antenados no Futebol</a></strong>, responsible for the name and the initial conception of the brand, and played a direct role in bringing <strong>Bolavip</strong> to Brazil, in a move started between 2017 and 2018, when the brand already existed in other South American countries but was not yet operating in the Brazilian market.',
    'Today, he works as <strong>Content Director at <a href="https://www.futbolsites.net/pt" target="_blank" rel="noopener">Futbol Sites</a></strong>, leading editorial operations and reflecting publicly on AI, attention, responsibility, culture, leadership and decision-making.',
    "Along this path, a principle took hold that runs through every project: audience is not sustained by volume, but by judgment. By care with framing, by coherence between what is said and what is done and by the responsibility of those who communicate at scale.",
    "The thread running through his journey is the ability to <em>build meaning in highly complex environments</em>: to understand the context, organize the narrative, decide with judgment and turn audience into perceived value. It is that repertoire, formed at the meeting of culture, business and communication, that he now brings to articles, mentoring, talks and board conversations.",
  ],
  microprovas: [
    { k: "WolfLife", v: "large-scale digital community" },
    { k: "ProliferArte", v: "cultural movement active since 2008" },
    { k: FUTMARKETING_NAME, v: `${FUTMARKETING_ROLE} and involvement in the sale of the operation` },
    { k: "Antenados no Futebol", v: "creation, name and initial conception" },
    { k: "Bolavip Brasil", v: "involvement in bringing the brand to the country" },
    { k: "Futbol Sites", v: "Content Director, editorial leadership in Brazil" },
    { k: "Board", v: "advisory work and governance training" },
  ],
};

// Latest posts on LinkedIn: the artwork Ibson creates (renamed ibson-junior-*)
// is hosted HERE, on the site itself, so Google Images can index it (LinkedIn
// is hard to index). Counts are static (LinkedIn does not expose a public API).
// TODO(ibson): replace the examples below with the real posts:
//   - image: the post artwork in /assets/posts/ibson-junior-post-*.webp (Ibson sends it)
//   - url: the link to the specific post on LinkedIn
//   - reactions/comments/shares: the counts (Ibson provides them)
export const linkedinPosts = {
  title: "Latest posts on LinkedIn",
  subtitle:
    "Reflections and artwork I publish on leadership, AI, culture, content and decision. Click to open the post on LinkedIn.",
  profileUrl: "https://www.linkedin.com/in/ibson-junior/recent-activity/all/",
  // Real LinkedIn posts, from most recent to oldest (read from the activity
  // page). Update every 3-4 days through the same flow (logged-in browser).
  // Last update: 2026-07-05.
  posts: [
    {
      image: "/assets/posts/ibson-junior-post-vitoria-postura.webp",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7479149707659825152/",
      alt: "Post artwork by Ibson Junior on LinkedIn: I admire those who grow without turning anyone into a stepping stone, character is also an achievement.",
    },
    {
      image: "/assets/posts/ibson-junior-post-ia-criterio-conteudo.webp",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7478545542411632642/",
      alt: "Post artwork by Ibson Junior on LinkedIn: AI can be the engine, the human must stay at the wheel.",
    },
    {
      image: "/assets/posts/ibson-junior-post-copa-alcance-reputacao.webp",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7477458378286493696/",
      alt: "Post artwork by Ibson Junior on LinkedIn: speed delivers reach, judgment builds relevance.",
    },
    {
      image: "/assets/posts/ibson-junior-post-cansaco-limite.webp",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7476605347814825984/",
      alt: "Post artwork by Ibson Junior on LinkedIn: there are things we only call strength because we have not yet learned to call them a limit, maturity is also care.",
    },
    {
      image: "/assets/posts/ibson-junior-post-noticia-responsabilidade.webp",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7476008937306275840/",
      alt: "Post artwork by Ibson Junior on LinkedIn: being close to the news increases responsibility.",
    },
    {
      image: "/assets/posts/ibson-junior-post-decisao-capital-humano.webp",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7460712281094430721/",
      alt: "Post artwork by Ibson Junior on LinkedIn: the one who decides is not the one who understands the problem.",
    },
    {
      image: "/assets/posts/ibson-junior-post-multitarefa-atencao.webp",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7459923332491001856/",
      alt: "Post artwork by Ibson Junior on LinkedIn: multitasking does not exist, there is a constant switching of attention.",
    },
    {
      image: "/assets/posts/ibson-junior-post-governanca-decisao.webp",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7459628428930105344/",
      alt: "Photo of Ibson Junior at a Board Academy event, on governance, boards and decision-making.",
    },
  ] as Array<{ image: string; url: string; alt: string }>,
};

export const cases = {
  title: "Cases that connect audience, culture and business.",
  subtitle:
    "Projects where community, narrative, distribution and digital strategy turned into real assets.",
  wolflife: {
    name: "WolfLife",
    tag: "Digital communities · Audience · Media",
    body: [
      "WolfLife was born from reading a simple behavior: people connect first through interest, language and belonging.",
      "From that logic, the project grew into an ecosystem of digital communities with nationwide reach, gathering large audiences and delivering campaigns for relevant brands.",
      "Ibson founded the operation and took part in its sale in 2025, consolidating a cycle of building, scale and value realization.",
    ],
    provas: [
      { n: "+150M", t: "followers on the network" },
      { n: "+6B", t: "annual impressions" },
      { n: "+100M", t: "reached per month" },
      { n: "2025", t: "sale of the operation" },
    ],
    aprendizado:
      "Audience is not just volume. It is the ability to understand behavior, build belonging and turn attention into an asset.",
    cta: { href: "https://wolflife.com.br/", label: "See WolfLife" },
  },
  tiktok: {
    name: "TikTok Case in Brazil",
    big: "9B+",
    bigLabel: "views generated in distribution via communities",
    body: "In one of its largest-scale deliveries, WolfLife supported TikTok's growth in Brazil through massive distribution across Facebook communities, generating more than 9 billion views and expanding the brand's recognition nationwide.",
  },
  footmarketing: {
    name: FUTMARKETING_NAME,
    tag: "Sports media · Digital operation · M&A",
    body: [
      `At ${FUTMARKETING_NAME}, Ibson served as ${FUTMARKETING_ROLE} and took part in the building, positioning and sale of a Brazilian digital sports media operation.`,
      "The work involved creating the site Antenados no Futebol, including choosing the name and the initial conception of the project, as well as direct involvement in bringing Bolavip to Brazil, between 2017 and 2018, when the brand already existed in South American countries but had not yet been consolidated in the Brazilian market.",
      "The case shows an important dimension of his journey: turning editorial vision, audience and market opportunity into a strategic asset.",
      "The sale of the operation was reported by Yahoo Finance, serving as external validation of the move's relevance within the sports media and marketing market.",
    ],
    cta: {
      href: "https://es-us.finanzas.yahoo.com/noticias/compra-millonaria-gigante-medios-marketing-090600505.html",
      label: "See the news on Yahoo Finance",
    },
  },
  proliferarte: {
    name: "ProliferArte",
    tag: "Culture · Community · Audience",
    body: [
      "ProliferArte was founded in 2008 to bring art, independent artists and the public closer together.",
      "Before algorithms, creators and the attention economy became common terms, the project was already working with a central question: how to make art circulate beyond traditional spaces?",
      "Over the years, ProliferArte established itself as a digital culture community, giving visibility to artists, broadening access and building bridges between creation and audience.",
      "More than a cultural project, ProliferArte was Ibson's first great laboratory on audience, belonging, communication and social impact.",
    ],
    // Animated counters (they count up when they enter the screen). `static` does not animate.
    provas: [
      { display: "Since 2008", label: "start of the movement", static: true },
      { to: 18, suffix: " years", label: "leading the movement" },
      { to: 1.5, decimals: 1, suffix: "M+", label: "people in the community" },
      { to: 30, suffix: "M+", label: "monthly reach" },
      { to: 1.5, decimals: 1, suffix: "M+", label: "monthly engagement" },
      { to: 12, suffix: "M+", label: "impacted per year" },
    ] as Array<{ display?: string; label: string; static?: boolean; to?: number; decimals?: number; suffix?: string }>,
    // Real covers extracted from Ibson's PDFs (publications and collections).
    // TODO(link): point the `url` of each publication when there is a page/store.
    galeria: [
      { title: "ProliferArte Magazine: Portrait", src: "/assets/capas/revista-retrato.webp" as string | null, url: "#" },
      { title: "ValorizArte: Overflowing Perception", src: "/assets/capas/valorizarte.webp" as string | null, url: "#" },
      { title: "Open Mind: Evolution of Thoughts", src: "/assets/capas/mente-aberta.webp" as string | null, url: "#" },
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
  // When the article already has its own page on the site (src/content/artigos/<slug>.md),
  // the card points to /artigos/<slug> instead of LinkedIn.
  slug?: string;
}

const LINKEDIN = "https://www.linkedin.com/in/ibson-junior/recent-activity/all/";

// Real links for each article on LinkedIn (sent by Ibson).
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
  title: "Articles and essays.",
  subtitle:
    "Original writing on leadership, AI, culture, content, communication and decision-making.",
  intro:
    "The articles are the editorial foundation of my personal brand. In them, I organize longer reflections on themes that cut across work, technology, communication and maturity in complex environments.",
  // Real LinkedIn articles (from the screenshot sent by Ibson).
  // TODO(asset): add the real cover of each article in /assets/artigos and point it in `cover`.
  // TODO(title): some titles appear truncated in the screenshot; confirm their endings.
  list: [
    {
      category: "Content and responsibility",
      date: "2026",
      title: "At the World Cup, content does not compete only for attention. It competes for responsibility.",
      summary: "Between the goal cheer and the narrative, covering the World Cup with consciousness is more than informing.",
      readingTime: "13 min",
      url: ART_URL.copa,
      cover: "/assets/artigos/ibson-junior-artigo-copa.webp",
      slug: "na-copa-do-mundo",
    },
    {
      category: "Career and consciousness",
      date: "2026",
      title: "When the profession becomes identity, the person begins to disappear",
      summary: "Performing well at work is one thing. Being only the work is another.",
      readingTime: "14 min",
      url: ART_URL.identidade,
      cover: "/assets/artigos/ibson-junior-artigo-identidade.webp",
      slug: "profissao-identidade",
    },
    {
      category: "Productivity and attention",
      date: "2026",
      title: "Rotten brain: the invisible pandemic that transforms work",
      summary: "Between placebo meetings and toxic multitasking, wasted human capital comes at a high cost.",
      readingTime: "14 min",
      url: ART_URL.cerebro,
      cover: "/assets/artigos/ibson-junior-artigo-cerebro.webp",
      slug: "cerebro-podre",
    },
    {
      category: "Strategy and decision",
      date: "2026",
      title: "Strategy has never been talked about so much. And so little of it has ever been seen.",
      summary: "The difference between intention and strategy shows up when the environment applies pressure.",
      readingTime: "9 min",
      url: ART_URL.estrategia,
      cover: "/assets/artigos/ibson-junior-artigo-estrategia.webp",
      slug: "estrategia",
    },
    {
      category: "Governance and decision",
      date: "2026",
      title: "The quality of the decision is the core of modern governance",
      summary: "Most crises are not born from a lack of strategy, but from the quality of the decisions.",
      readingTime: "8 min",
      url: ART_URL.governanca,
      cover: "/assets/artigos/ibson-junior-artigo-governanca.webp",
      slug: "governanca",
    },
    {
      category: "Communication and culture",
      date: "2026",
      title: "When communication fails, strategy turns into noise",
      summary: "Communication sustains culture, governance and predictability. But it is often neglected.",
      readingTime: "6 min",
      url: ART_URL.comunicacao,
      cover: "/assets/artigos/ibson-junior-artigo-comunicacao.webp",
      slug: "comunicacao",
    },
    {
      category: "Life and work",
      date: "2026",
      title: "Time is an ocean",
      summary: "Those who never learn to sail become passengers of their own life.",
      readingTime: "10 min",
      url: ART_URL.oceano,
      cover: "/assets/artigos/ibson-junior-artigo-oceano.webp",
      slug: "o-tempo-e-um-oceano",
    },
    {
      category: "AI and discernment",
      date: "2026",
      title: "Fascinated by artificial intelligence, we are ignoring the essential",
      summary: "When we do not assess ourselves with honesty, we cannot make good use of technology.",
      readingTime: "8 min",
      url: ART_URL.ia,
      cover: "/assets/artigos/ibson-junior-artigo-ia.webp",
      slug: "inteligencia-artificial",
    },
    {
      category: "Culture and leadership",
      date: "2026",
      title: "Culture is not PowerPoint, but the vital energy that sustains the organization",
      summary: "When lived at every level, culture transforms relationships, decisions and results.",
      readingTime: "9 min",
      url: ART_URL.cultura,
      cover: "/assets/artigos/ibson-junior-artigo-cultura.webp",
      slug: "cultura",
    },
  ] as Article[],
  allUrl: "https://www.linkedin.com/in/ibson-junior/recent-activity/articles/",
};

export const talks = {
  title: "Talks to provoke clarity where noise has become routine.",
  subtitle:
    "Gatherings for companies, events and leaders who do not just want to fill an agenda, but to set in motion a conversation that continues after the talk ends.",
  intro: [
    "A good talk does not just deliver nice phrases. It <strong>organizes an unease that already exists in the room</strong> and gives language so that people and teams can see more clearly what they are living through.",
    "I bring to corporate gatherings the theses I have been developing in articles, leadership and real experiences: how to <strong>decide under pressure</strong>, <strong>preserve judgment</strong> in fast-paced environments, <strong>use AI without outsourcing judgment</strong> and <strong>build culture</strong> amid the excess of noise.",
    "The aim is to unite <strong>depth and humanity</strong>. Less spectacle, more presence. Less formula, more reflection. Less fleeting motivation, more clarity to keep thinking afterward.",
    "If the company needs to talk about <strong>the future without superficiality, AI without dazzlement, leadership without cliché and culture that is more than a poster on the wall</strong>, this conversation makes sense.",
  ],
  // TODO(asset): the 6th image (theme "When the profession becomes identity") arrives later.
  themes: [
    {
      title: "Content does not compete only for attention. It competes for responsibility.",
      description:
        "A talk about communication, AI, algorithms, journalism, trust and the challenge of informing in an environment where almost everything competes for clicks, retention and reaction.",
      audience: "Marketing, communication, media, leadership, content, reputation and culture.",
      cover: "/assets/palestras/palestra-conteudo.webp",
    },
    {
      title: "AI can be the engine. The human must stay at the wheel.",
      description:
        "A conversation about productivity, discernment and human judgment at a moment when artificial intelligence accelerates processes, but can also lower the bar for decisions.",
      audience: "Leaders, content, technology, HR, education and business teams.",
      cover: "/assets/palestras/palestra-ia.webp",
    },
    {
      title: "Judgment under pressure.",
      description:
        "How to decide better when speed, volume and urgency try to take the place of clarity.",
      audience: "Executives, managers, coordinators, heads and high-demand teams.",
      cover: "/assets/palestras/palestra-criterio.webp",
    },
    {
      title: "Culture is what the organization learns to tolerate.",
      description:
        "A reflection on behavior, trust, coherence and the invisible signals that shape a company long before the official discourse.",
      audience: "HR, culture, leadership, management and organizational development.",
      cover: "/assets/palestras/palestra-cultura.webp",
    },
    {
      title: "Personal governance precedes the seat.",
      description:
        "A talk about maturity, self-awareness, reputation and responsibility before formal power.",
      audience: "Leaders, board members in training, executives and professionals in transition.",
      cover: "/assets/palestras/palestra-governanca.webp",
    },
    {
      title: "When the profession becomes identity.",
      description:
        "About career, repertoire, creativity, exhaustion and the risk of reducing life to the role one holds.",
      audience: "Companies, leaders, HR, corporate education and professionals in transition.",
      cover: "/assets/palestras/palestra-identidade.webp",
    },
  ],
  formats: ["Talk", "Panel", "Executive roundtable", "Workshop", "Special lecture", "Conversation with leaders"],
  durations: ["45 minutes", "60 minutes", "90 minutes"],
  cta: { href: "#contato", label: "Invite for a talk" },
  note: "Available for corporate events, executive gatherings, panels, special lectures, leadership roundtables and conversations with teams.",
};

export const mentorship = {
  title: "Mentoring to turn repertoire into direction.",
  subtitle:
    "For professionals who already have a story, experience and ambition, but need to organize positioning, narrative and next moves with more clarity.",
  intro: [
    "Mentoring does not begin with a formula. It begins with a diagnosis.",
    "There is a moment when accumulating experience is no longer enough. You have to understand what that experience communicates, what territory it sustains and what kind of perception it builds in the market.",
    "Mentoring exists to work on this point: organizing thought, refining positioning, strengthening presence and turning repertoire into practical direction.",
  ],
  whatIs: [
    "An individual executive mentoring to turn experience into clarity: reviewing the journey, identifying the territory, adjusting the professional narrative and defining the next moves with more consciousness and judgment.",
    "It is not a course or a ready-made formula. It is a strategic conversation led from real repertoire in leadership, content, communication and decision-making, so you can see clearly where you are, where you want to go and what needs to change.",
    "Along the way, we work on personal brand, executive communication, positioning, strategic LinkedIn, personal governance and content production, always linking perceived value to concrete decisions.",
    "The goal is not for you to speak more. It is to be understood, remembered and respected for the coherence between what you think, communicate and deliver.",
  ],
  whoFor: [
    "Leaders",
    "Managers",
    "Specialists",
    "Executives in transition",
    "Professionals on the rise",
    "People who want to strengthen their professional presence",
    "Professionals who need to communicate their value better",
    "People who want to turn experience into perceived authority",
  ],
  topics: [
    "Positioning clarity",
    "Decision-making",
    "Executive communication",
    "Personal brand",
    "Strategic LinkedIn",
    "Professional narrative",
    "Personal governance",
    "Repertoire and authority",
    "Career direction",
    "Presence and perceived value",
  ],
  cta: { href: "#contato", label: "Talk about mentoring" },
  note: "There is no generic package. The scope emerges from the diagnosis, the professional moment and the clarity of what needs to change.",
};

export const videos = {
  title: "Videos and reflections.",
  subtitle: "A new front to bring ideas closer to the spoken word.",
  intro:
    "I am starting a video front for LinkedIn, with short reflections on leadership, AI, culture, content, decision and responsibility. This space will be updated with real recordings as they are published.",
  // Assumed placeholders: no video recorded yet.
  cards: [
    "Judgment in times of speed",
    "AI, decision and human responsibility",
    "What still builds trust?",
    "Culture, maturity and leadership",
  ],
  cta: { href: "https://www.linkedin.com/in/ibson-junior/", label: "Follow on LinkedIn" },
};

export const contact = {
  title: "Shall we talk?",
  subtitle:
    "For talks, mentoring, board work, interviews, panels or editorial projects, get in touch.",
  quickButtons: [
    "Invite for a talk",
    "Talk about mentoring",
    "Propose an interview",
    "Talk about board/advisory work",
  ],
  subjects: [
    "Talk",
    "Mentoring",
    "Board / advisory",
    "Interview",
    "Panel or event",
    "Editorial project",
    "Other subject",
  ],
  support: "If the conversation makes sense, I will get back with availability, context and next steps.",
  email: "contato@ibsonjunior.com.br",
  linkedin: "https://www.linkedin.com/in/ibson-junior/",
};

export const footer = {
  name: "Ibson Junior",
  line: "Consciousness, decision and responsibility in complex times.",
  complement:
    "Articles, talks, mentoring and conversations on leadership, AI, culture, communication, content and decision-making.",
};

// Archetypes as layers of editorial background art.
// TODO(asset): generate the final high-resolution artwork and save it in the paths below (webp).
// Until then, the components use a CSS texture fallback.
export const archetypes = {
  wolf: {
    src: "/assets/arquetipos/wolf-editorial.webp",
    alt: "Editorial artwork of a wolf representing territory, strategy and reading of the environment.",
  },
  owl: {
    src: "/assets/arquetipos/owl-editorial.webp",
    alt: "Editorial artwork of an owl representing discernment, vision and wisdom.",
  },
  seahorse: {
    src: "/assets/arquetipos/moon-network.webp",
    alt: "Editorial artwork of a seahorse representing adaptation, care and balance.",
  },
};
