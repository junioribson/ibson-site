// ============================================================================
// Capa de contenido editable del sitio de Ibson Junior.
// Territorio central: conciencia aplicada a la vida, al trabajo, a las relaciones
// y a las decisiones en tiempos complejos. Tesis madre: en un tiempo en que todos
// disputan atención, la diferencia está en quien todavía logra sostener criterio.
//
// Regla de hechos: nada se inventa. Donde hay incertidumbre, hay comentario TODO.
// Regla de lenguaje: nunca usar raya; frases claras, humanas y densas.
// ============================================================================

// Grafía oficial confirmada por Ibson (y en el CLAUDE.md): Futmarketing.
// TODO(fato): reconfirmar la grafía definitiva de la marca (Futmarketing, Footmarketing
// o Foot Marketing) antes de publicar, en caso de que Ibson quiera revisar.
export const FUTMARKETING_NAME = "Futmarketing";

// TODO(fato): confirmar el rol exacto en la operación (usando CEO según el brief).
export const FUTMARKETING_ROLE = "CEO";

// Cargo actual permitido por Ibson (y en el CLAUDE.md): Director de Contenido en
// Futbol Sites, pudiendo hipervincular el sitio oficial. NUNCA mencionar Better Collective.
export const FUTBOL_SITES_URL = "https://www.futbolsites.net/pt";
export const CARGO_ATUAL = "Director de Contenido en Futbol Sites";

// Analytics y Search Console. Completar cuando Ibson cree las cuentas de Google:
// - GA_MEASUREMENT_ID: el ID de Google Analytics 4, en el formato "G-XXXXXXXXXX".
// - GSC_VERIFICATION: el valor "content" de la meta tag de verificación de Search Console.
// Mientras estén vacíos, nada se inyecta (el sitio no se rompe, sin llamadas inútiles).
export const GA_MEASUREMENT_ID = "G-5S4SJGES22";
export const GSC_VERIFICATION = "";

export const seo = {
  title: "Ibson Junior | Criterio, Liderazgo y Decisión",
  description:
    "Ibson Junior: ejecutivo de contenido, liderazgo y comunicación. Charlas, mentoría y consejo sobre marca personal, comunicación, cultura y decisión.",
  ogTitle:
    "Ibson Junior | Criterio, liderazgo y decisión en tiempos complejos",
  ogDescription:
    "Reflexiones, artículos, charlas y conversaciones ejecutivas sobre liderazgo, IA, cultura, contenido, comunicación y toma de decisiones en entornos de presión, exceso de información y transformación.",
  // TODO(asset): generar imagen Open Graph 1200x630 y guardar en public/assets/og/og-ibson.jpg
  ogImage: "/assets/og/og-ibson.jpg",
};

export const nav = {
  links: [
    { href: "/#sobre", label: "Sobre mí", id: "sobre" },
    { href: "/#cases", label: "Casos", id: "cases" },
    { href: "/#artigos", label: "Artículos", id: "artigos" },
    { href: "/mentoria", label: "Mentoría", id: "mentoria" },
    { href: "/palestras", label: "Charlas", id: "palestras" },
    { href: "/#videos", label: "Vídeos", id: "videos" },
    { href: "/#contato", label: "Contacto", id: "contato" },
  ],
  cta: { href: "/#contato", label: "¿Nos conectamos?" },
};

export const hero = {
  topline: "Contenido · Liderazgo · Decisión · IA · Cultura",
  headline: "Cuando todo se acelera, la claridad se vuelve responsabilidad.",
  headlineLines: ["Cuando todo se acelera,", "la claridad se vuelve", "responsabilidad."],
  subheadline:
    "Para líderes, equipos y organizaciones que necesitan decidir con criterio, comunicar con profundidad y construir confianza en un mundo demasiado ruidoso para ser conducido en automático.",
  complement:
    "Mi trayectoria atraviesa la construcción de audiencia, el liderazgo editorial, la cultura, los negocios digitales y la toma de decisiones. Este espacio reúne artículos, casos, mentorías, charlas y conversaciones ejecutivas para transformar repertorio en claridad, presencia y dirección.",
  ctas: {
    primary: { href: "#sobre", label: "Conocer trayectoria" },
    secondary: { href: "#contato", label: "Invitar a una conversación" },
    tertiary: { href: "#artigos", label: "Leer artículos" },
  },
  // Micropruebas discretas: cargo genérico, sin nombrar al empleador actual.
  microprovas: [
    CARGO_ATUAL,
    "Fundador de WolfLife",
    "Fundador de ProliferArte",
    `${FUTMARKETING_ROLE} de ${FUTMARKETING_NAME}, con participación en la construcción y venta de la operación`,
    "Artículos mensuales sobre IA, cultura, liderazgo, contenido y responsabilidad",
  ],
};

export const thesis = {
  kicker: "La tesis",
  title: "La estrategia empieza cuando llega la presión.",
  body: [
    "En un mundo que produce más contenido que capacidad de interpretación, el diferencial no está en aparecer más. Está en decidir mejor.",
    "Mi trabajo parte de esa tensión: separar la urgencia de lo importante, transformar el ruido en claridad y ayudar a líderes, equipos y organizaciones a sostener criterio cuando la tecnología, el mercado y la cultura empujan hacia el automático.",
  ],
  closing:
    "La velocidad puede abrir caminos. Pero es el criterio el que define si llevan a algún lugar.",
};

export const about = {
  title: "Una trayectoria entre audiencia, cultura, contenido y decisión.",
  subtitle:
    "Antes de hablar de autoridad, hay que entender el camino que construyó el repertorio.",
  body: [
    '<strong>Ibson Lima dos Santos Junior</strong>, que firma como <a href="https://www.linkedin.com/in/ibson-junior/" target="_blank" rel="noopener">Ibson Junior</a>, es <strong>ejecutivo de contenido, liderazgo y comunicación</strong>, con una trayectoria construida entre medios digitales, estrategia editorial, cultura, negocios digitales y construcción de audiencia.',
    'Su experiencia abarca proyectos que conectan atención, comunidad, narrativa y resultado. Fundó <strong><a href="https://wolflife.com.br/" target="_blank" rel="noopener">WolfLife</a></strong>, ecosistema de comunidades digitales vendido en 2025, lidera <strong><a href="https://www.facebook.com/ProliferArte/" target="_blank" rel="noopener">ProliferArte</a></strong> desde 2008 y se desempeñó como <strong><a href="https://es-us.finanzas.yahoo.com/noticias/compra-millonaria-gigante-medios-marketing-090600505.html" target="_blank" rel="noopener">CEO de Futmarketing</a></strong>, participando en la construcción, el posicionamiento y la venta de una operación brasileña de medios deportivos digitales.',
    'También fue creador del sitio <strong><a href="https://www.antenadosnofutebol.com.br/" target="_blank" rel="noopener">Antenados no Futebol</a></strong>, responsable del nombre y de la concepción inicial de la marca, y tuvo un papel directo en la llegada de <strong>Bolavip</strong> a Brasil, en un movimiento iniciado entre 2017 y 2018, cuando la marca ya existía en otros países de América del Sur, pero aún no operaba en el mercado brasileño.',
    'Hoy se desempeña como <strong>Director de Contenido en <a href="https://www.futbolsites.net/pt" target="_blank" rel="noopener">Futbol Sites</a></strong>, liderando operaciones editoriales y reflexionando públicamente sobre IA, atención, responsabilidad, cultura, liderazgo y toma de decisiones.',
    "A lo largo de este recorrido se fue afirmando un principio que atraviesa cada proyecto: la audiencia no se sostiene por el volumen, sino por el criterio. Por el cuidado con el encuadre, por la coherencia entre lo que se dice y lo que se hace y por la responsabilidad de quien comunica a escala.",
    "El hilo conductor de su trayectoria es la capacidad de <em>construir sentido en entornos de alta complejidad</em>: entender el contexto, organizar la narrativa, decidir con criterio y transformar la audiencia en percepción de valor. Es ese repertorio, formado en el encuentro entre cultura, negocio y comunicación, el que lleva hoy a artículos, mentorías, charlas y conversaciones de consejo.",
  ],
  microprovas: [
    { k: "WolfLife", v: "comunidad digital de gran escala" },
    { k: "ProliferArte", v: "movimiento cultural activo desde 2008" },
    { k: FUTMARKETING_NAME, v: `${FUTMARKETING_ROLE} y participación en la venta de la operación` },
    { k: "Antenados no Futebol", v: "creación, nombre y concepción inicial" },
    { k: "Bolavip Brasil", v: "participación en la llegada de la marca al país" },
    { k: "Futbol Sites", v: "Director de Contenido, liderazgo editorial en Brasil" },
    { k: "Consejo", v: "actuación administrativa y formación en gobernanza" },
  ],
};

// Últimas publicaciones en LinkedIn: las artes que crea Ibson (renombradas ibson-junior-*)
// quedan alojadas AQUÍ, en el propio sitio, para que Google Images las indexe (LinkedIn
// es difícil de indexar). Los conteos son estáticos (LinkedIn no expone API pública).
// TODO(ibson): reemplazar los ejemplos de abajo por las publicaciones reales:
//   - image: el arte de la publicación en /assets/posts/ibson-junior-post-*.webp (lo envía Ibson)
//   - url: el enlace de la publicación específica en LinkedIn
//   - reactions/comments/shares: los conteos (los informa Ibson)
export const identity = {
  seoTitle: "Ibson Junior | Ejecutivo de Contenido, Liderazgo y Comunicación",
  seoDescription:
    "Ibson Junior, nombre profesional de Ibson Lima dos Santos Junior, es ejecutivo de contenido, liderazgo y comunicación. Trayectoria, repertorio y la arquitectura de decisión, ejecución y gobernanza en entornos digitales complejos.",
  socialTitle: "Ibson Junior: del internet por teléfono a la arquitectura de la decisión",
  kicker: "Quién es",
  h1: "Ibson Junior",
  subtitle: "Ibson Lima dos Santos Junior, conocido profesionalmente como Ibson Junior.",
  portrait: "/assets/retratos/ibson-junior-retrato.webp",
  portraitAlt: "Retrato de Ibson Junior, ejecutivo de contenido, liderazgo y comunicación",
  bio: [
    "Ibson Lima dos Santos Junior, conocido profesionalmente como Ibson Junior, es ejecutivo de contenido, liderazgo y comunicación. Trabaja en la arquitectura de sistemas de decisión, ejecución y gobernanza en entornos digitales de alta velocidad, conectando estrategia editorial, cultura, audiencia, tecnología, inteligencia artificial y responsabilidad pública.",
    "Su relación con la tecnología comenzó antes de cualquier cargo. En 2000 recibió su primer computador, aprendió a navegar por el internet de conexión telefónica y creció junto con la popularización de la red en Brasil. Desde temprano, empezó a observar cómo las personas se conectan, cómo circula la información y cómo las ideas ganan fuerza cuando encuentran el contexto adecuado.",
    "Esa curiosidad nunca se limitó a un área. A lo largo de su trayectoria pasó por formaciones y experiencias en eventos, informática, seguridad laboral, monitoreo ambiental y otros campos que, a primera vista, podrían parecer distantes entre sí. Para Ibson no era dispersión. Era repertorio. Cada área agregaba una capa para entender tecnología, cultura, negocio, comportamiento humano y comunicación como partes de un mismo sistema.",
    "Fue en la cultura donde esa inquietud encontró su primera expresión pública. En 2008 fundó ProliferArte, movimiento creado para acercar a las personas al arte, a la palabra y a la expresión. Antes de trabajar con grandes audiencias digitales, ya experimentaba una convicción que atravesaría toda su carrera: la atención verdadera no nace solo del alcance. Nace del sentido.",
    "En los años siguientes llevó ese aprendizaje a la comunicación digital a escala. En el deporte fue creador de Antenados no Futebol, responsable del nombre y de la concepción de la marca, y tuvo un papel directo en la llegada y el desarrollo de Bolavip en Brasil entre 2017 y 2018. Como CEO de Futmarketing, participó en la construcción, el posicionamiento y la venta de una operación brasileña de medios deportivos. Después fundó WolfLife, ecosistema de comunidades digitales que alcanzó a millones de personas y miles de millones de visualizaciones, vendido en 2025.",
    "Al operar en entornos de crecimiento, audiencia y alta presión por resultado, una percepción se volvió central: el crecimiento rara vez se pierde solo por falta de estrategia. Muchas veces se pierde por la ausencia de coherencia entre decisión, gobernanza y ejecución. Existen direcciones que no se consolidan, estructuras que crecen sin sostenerse y ejecuciones que ocurren, pero no se repiten con consistencia.",
    "Esa lectura pasó a orientar su trabajo. Más que formular dirección, Ibson se dedica a entender la arquitectura que hace viable una dirección: cómo se toman las decisiones, cómo se distribuyen las responsabilidades, cómo se preservan los criterios y cómo se mantiene la ejecución cuando la complejidad aumenta.",
    "Hoy, como Director de Contenido en Brasil en Futbol Sites, lidera una operación que integra editorial, social, datos, audiovisual, BI, negocios y frentes de monetización y alianzas. Su trabajo está menos en la producción aislada de contenido y más en la coordinación de sistemas capaces de sostener claridad, consistencia y responsabilidad en múltiples frentes al mismo tiempo.",
    "De galerías de arte a comunidades de millones, de la comunicación cultural a los medios deportivos digitales, Ibson siempre lidió con la misma pregunta en diferentes escalas: ¿qué hace que una idea, una operación o una decisión se sostenga?",
    "Ese repertorio hoy también se traduce más allá de la operación. Actúa como conferencista, mentor ejecutivo y consejero, es coautor del libro Conselho Diário y escribe públicamente sobre inteligencia artificial, cultura, liderazgo, comunicación, reputación, gobernanza y decisión.",
    "Su marca personal nace de ese encuentro entre experiencia práctica y reflexión pública. Ibson ayuda a personas y organizaciones a decidir, comunicar y crecer con más criterio en medio del exceso. Su convicción es directa: el resultado consistente no nace del esfuerzo puntual. Nace de estructuras claras, responsabilidades bien definidas y decisiones que se sostienen en la ejecución.",
    "En un tiempo en que todo se acelera, la claridad dejó de ser solo una virtud. Se volvió responsabilidad.",
  ],
  factsTitle: "En resumen",
  facts: [
    { k: "Nombre", v: "Ibson Lima dos Santos Junior" },
    { k: "Actuación", v: "Ejecutivo de contenido, liderazgo y comunicación" },
    { k: "Cargo", v: "Director de Contenido en Brasil en Futbol Sites" },
    { k: "Territorios", v: "IA, cultura, liderazgo, comunicación, gobernanza y decisión" },
    { k: "También", v: "Conferencista, mentor ejecutivo y consejero" },
    { k: "Autor", v: 'Coautor del libro "Conselho Diário"' },
    { k: "Formación", v: "Gobernanza (Board Academy), entre otras" },
    { k: "Edad", v: "38 años" },
  ],
  ctaTitle: "¿Conversamos?",
  ctaText: "Para charlas, mentoría, consejo o una conversación profesional.",
  ctaLabel: "Ponerse en contacto",
  exploreTitle: "Explora",
};

export const linkedinPosts = {
  title: "Últimas publicaciones en LinkedIn",
  subtitle:
    "Reflexiones y artes que publico sobre liderazgo, IA, cultura, contenido y decisión. Haz clic para abrir la publicación en LinkedIn.",
  profileUrl: "https://www.linkedin.com/in/ibson-junior/recent-activity/all/",
  // Publicaciones reales de LinkedIn, de la más reciente a la más antigua (leídas de la página
  // de actividad). Actualizar cada 3-4 días con el mismo flujo (navegador con sesión iniciada).
  // Última actualización: 2026-07-05.
  posts: [
    {
      image: "/assets/posts/ibson-junior-post-vitoria-postura.webp",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7479149707659825152/",
      alt: "Arte de publicación de Ibson Junior en LinkedIn: admiro a quien crece sin convertir a nadie en escalón, el carácter también es una conquista.",
    },
    {
      image: "/assets/posts/ibson-junior-post-ia-criterio-conteudo.webp",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7478545542411632642/",
      alt: "Arte de publicación de Ibson Junior en LinkedIn: la IA puede ser motor, el humano necesita seguir al volante.",
    },
    {
      image: "/assets/posts/ibson-junior-post-copa-alcance-reputacao.webp",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7477458378286493696/",
      alt: "Arte de publicación de Ibson Junior en LinkedIn: la velocidad entrega alcance, el criterio construye relevancia.",
    },
    {
      image: "/assets/posts/ibson-junior-post-cansaco-limite.webp",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7476605347814825984/",
      alt: "Arte de publicación de Ibson Junior en LinkedIn: hay cosas que solo llamamos fuerza porque todavía no aprendimos a llamarlas límite, la madurez también es cuidado.",
    },
    {
      image: "/assets/posts/ibson-junior-post-noticia-responsabilidade.webp",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7476008937306275840/",
      alt: "Arte de publicación de Ibson Junior en LinkedIn: estar cerca de la noticia aumenta la responsabilidad.",
    },
    {
      image: "/assets/posts/ibson-junior-post-decisao-capital-humano.webp",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7460712281094430721/",
      alt: "Arte de publicación de Ibson Junior en LinkedIn: quien decide no es quien entiende el problema.",
    },
    {
      image: "/assets/posts/ibson-junior-post-multitarefa-atencao.webp",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7459923332491001856/",
      alt: "Arte de publicación de Ibson Junior en LinkedIn: la multitarea no existe, existe un cambio constante de atención.",
    },
    {
      image: "/assets/posts/ibson-junior-post-governanca-decisao.webp",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7459628428930105344/",
      alt: "Foto de Ibson Junior en un evento de Board Academy, sobre gobernanza, consejo y toma de decisiones.",
    },
  ] as Array<{ image: string; url: string; alt: string }>,
};

export const cases = {
  title: "Casos que conectan audiencia, cultura y negocios.",
  subtitle:
    "Proyectos en los que comunidad, narrativa, distribución y estrategia digital se transformaron en activos reales.",
  wolflife: {
    name: "WolfLife",
    tag: "Comunidades digitales · Audiencia · Medios",
    body: [
      "WolfLife nació de la lectura de un comportamiento simple: las personas se conectan primero por interés, lenguaje y pertenencia.",
      "A partir de esa lógica, el proyecto creció como un ecosistema de comunidades digitales con alcance nacional, reuniendo grandes audiencias y entregando campañas para marcas relevantes.",
      "Ibson fundó la operación y participó en su venta en 2025, consolidando un ciclo de construcción, escala y realización de valor.",
    ],
    provas: [
      { n: "+150 M", t: "seguidores en la red" },
      { n: "+6 MM", t: "impresiones anuales" },
      { n: "+100 M", t: "alcanzados por mes" },
      { n: "2025", t: "venta de la operación" },
    ],
    aprendizado:
      "La audiencia no es solo volumen. Es la capacidad de entender comportamiento, construir pertenencia y transformar la atención en activo.",
    cta: { href: "https://wolflife.com.br/", label: "Ver WolfLife" },
  },
  tiktok: {
    name: "Caso TikTok en Brasil",
    big: "9 MM+",
    bigLabel: "visualizaciones generadas en distribución vía comunidades",
    body: "En una de las entregas de mayor escala, WolfLife apoyó el crecimiento de TikTok en Brasil por medio de una distribución masiva en comunidades de Facebook, generando más de 9 mil millones de visualizaciones y ampliando el reconocimiento de la marca en el territorio nacional.",
  },
  footmarketing: {
    name: FUTMARKETING_NAME,
    tag: "Medios deportivos · Operación digital · M&A",
    body: [
      `En ${FUTMARKETING_NAME}, Ibson se desempeñó como ${FUTMARKETING_ROLE} y participó en la construcción, el posicionamiento y la venta de una operación brasileña de medios deportivos digitales.`,
      "La actuación incluyó la creación del sitio Antenados no Futebol, incluyendo la elección del nombre y la concepción inicial del proyecto, además de la participación directa en la llegada de Bolavip a Brasil, entre 2017 y 2018, cuando la marca ya existía en países de América del Sur, pero aún no se había consolidado en el mercado brasileño.",
      "El caso muestra una dimensión importante de su trayectoria: transformar visión editorial, audiencia y oportunidad de mercado en activo estratégico.",
      "La venta de la operación fue difundida por Yahoo Finance, funcionando como aval externo de la relevancia del movimiento dentro del mercado de medios y marketing deportivo.",
    ],
    cta: {
      href: "https://es-us.finanzas.yahoo.com/noticias/compra-millonaria-gigante-medios-marketing-090600505.html",
      label: "Ver noticia en Yahoo Finance",
    },
  },
  proliferarte: {
    name: "ProliferArte",
    tag: "Cultura · Comunidad · Audiencia",
    body: [
      "ProliferArte fue fundada en 2008 para acercar el arte, los artistas independientes y el público.",
      "Antes de que algoritmos, creators y economía de la atención se volvieran términos comunes, el proyecto ya trabajaba con una pregunta central: ¿cómo hacer que el arte circule más allá de los espacios tradicionales?",
      "A lo largo de la trayectoria, ProliferArte se consolidó como una comunidad digital de cultura, dando visibilidad a artistas, ampliando el acceso y construyendo puentes entre la creación y la audiencia.",
      "Más que un proyecto cultural, ProliferArte fue el primer gran laboratorio de Ibson sobre audiencia, pertenencia, comunicación e impacto social.",
    ],
    // Contadores animados (cuentan al entrar en la pantalla). `static` no anima.
    provas: [
      { display: "Desde 2008", label: "inicio del movimiento", static: true },
      { to: 18, suffix: " años", label: "al frente del movimiento" },
      { to: 1.5, decimals: 1, suffix: " M+", label: "personas en la comunidad" },
      { to: 30, suffix: " M+", label: "alcance mensual" },
      { to: 1.5, decimals: 1, suffix: " M+", label: "engagement mensual" },
      { to: 12, suffix: " M+", label: "impactados por año" },
    ] as Array<{ display?: string; label: string; static?: boolean; to?: number; decimals?: number; suffix?: string }>,
    // Portadas reales extraídas de los PDFs de Ibson (publicaciones y compilaciones).
    // TODO(link): apuntar `url` de cada publicación cuando haya página/tienda.
    galeria: [
      { title: "Revista ProliferArte: Retrato", src: "/assets/capas/revista-retrato.webp" as string | null, url: "#" },
      { title: "ValorizArte: Transbordando Percepción", src: "/assets/capas/valorizarte.webp" as string | null, url: "#" },
      { title: "Mente Abierta: Evolución de los Pensamientos", src: "/assets/capas/mente-aberta.webp" as string | null, url: "#" },
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
  // Cuando el artículo ya tiene página propia en el sitio (src/content/artigos/<slug>.md),
  // la tarjeta apunta a /artigos/<slug> en lugar de LinkedIn.
  slug?: string;
}

const LINKEDIN = "https://www.linkedin.com/in/ibson-junior/recent-activity/all/";

// Enlaces reales de cada artículo en LinkedIn (enviados por Ibson).
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
  title: "Artículos y ensayos.",
  subtitle:
    "Textos de autoría propia sobre liderazgo, IA, cultura, contenido, comunicación y toma de decisiones.",
  intro:
    "Los artículos son la base editorial de mi marca personal. En ellos organizo reflexiones más largas sobre temas que atraviesan el trabajo, la tecnología, la comunicación y la madurez en entornos complejos.",
  // Artículos reales de LinkedIn (de la captura enviada por Ibson).
  // TODO(asset): agregar la portada real de cada artículo en /assets/artigos y apuntar en `cover`.
  // TODO(titulo): algunos títulos aparecen truncados en la captura; confirmar los finales.
  list: [
    {
      category: "Contenido y responsabilidad",
      date: "2026",
      title: "En la Copa del Mundo, el contenido no disputa solo atención. Disputa responsabilidad.",
      summary: "Entre el grito de gol y la narrativa, cubrir la Copa con conciencia es más que informar.",
      readingTime: "13 min",
      url: ART_URL.copa,
      cover: "/assets/artigos/ibson-junior-artigo-copa.webp",
      slug: "na-copa-do-mundo",
    },
    {
      category: "Carrera y conciencia",
      date: "2026",
      title: "Cuando la profesión se vuelve identidad, la persona empieza a desaparecer",
      summary: "Rendir bien en el trabajo es una cosa. Ser solo el trabajo es otra.",
      readingTime: "14 min",
      url: ART_URL.identidade,
      cover: "/assets/artigos/ibson-junior-artigo-identidade.webp",
      slug: "profissao-identidade",
    },
    {
      category: "Productividad y atención",
      date: "2026",
      title: "Cerebro podrido: la pandemia invisible que transforma el trabajo",
      summary: "Entre reuniones placebo y el multitasking tóxico, el desperdicio de capital humano cuesta caro.",
      readingTime: "14 min",
      url: ART_URL.cerebro,
      cover: "/assets/artigos/ibson-junior-artigo-cerebro.webp",
      slug: "cerebro-podre",
    },
    {
      category: "Estrategia y decisión",
      date: "2026",
      title: "Nunca se habló tanto de estrategia. Y nunca se vio tan poca.",
      summary: "La diferencia entre intención y estrategia aparece cuando el entorno presiona.",
      readingTime: "9 min",
      url: ART_URL.estrategia,
      cover: "/assets/artigos/ibson-junior-artigo-estrategia.webp",
      slug: "estrategia",
    },
    {
      category: "Gobernanza y decisión",
      date: "2026",
      title: "La calidad de la decisión es el núcleo de la gobernanza moderna",
      summary: "La mayoría de las crisis no nace de la falta de estrategia, sino de la calidad de las decisiones.",
      readingTime: "8 min",
      url: ART_URL.governanca,
      cover: "/assets/artigos/ibson-junior-artigo-governanca.webp",
      slug: "governanca",
    },
    {
      category: "Comunicación y cultura",
      date: "2026",
      title: "Cuando la comunicación falla, la estrategia se vuelve ruido",
      summary: "La comunicación sostiene cultura, gobernanza y previsibilidad. Pero suele ser descuidada.",
      readingTime: "6 min",
      url: ART_URL.comunicacao,
      cover: "/assets/artigos/ibson-junior-artigo-comunicacao.webp",
      slug: "comunicacao",
    },
    {
      category: "Vida y trabajo",
      date: "2026",
      title: "El tiempo es un océano",
      summary: "Quien no aprende a navegar se vuelve pasajero de su propia vida.",
      readingTime: "10 min",
      url: ART_URL.oceano,
      cover: "/assets/artigos/ibson-junior-artigo-oceano.webp",
      slug: "o-tempo-e-um-oceano",
    },
    {
      category: "IA y discernimiento",
      date: "2026",
      title: "Fascinados por la inteligencia artificial, estamos ignorando lo esencial",
      summary: "Cuando no nos autoevaluamos con franqueza, no logramos usar bien la tecnología.",
      readingTime: "8 min",
      url: ART_URL.ia,
      cover: "/assets/artigos/ibson-junior-artigo-ia.webp",
      slug: "inteligencia-artificial",
    },
    {
      category: "Cultura y liderazgo",
      date: "2026",
      title: "La cultura no es PowerPoint, sino la energía vital que sostiene a la organización",
      summary: "Cuando se vive en todos los niveles, la cultura transforma relaciones, decisiones y resultados.",
      readingTime: "9 min",
      url: ART_URL.cultura,
      cover: "/assets/artigos/ibson-junior-artigo-cultura.webp",
      slug: "cultura",
    },
  ] as Article[],
  allUrl: "https://www.linkedin.com/in/ibson-junior/recent-activity/articles/",
};

export const talks = {
  title: "Charlas para provocar claridad donde el ruido se volvió rutina.",
  subtitle:
    "Encuentros para empresas, eventos y liderazgos que no quieren apenas llenar una agenda, sino instalar una conversación que continúe después de que la charla termina.",
  intro: [
    "Una buena charla no entrega solo frases bonitas. <strong>Organiza una inquietud que ya existe en la sala</strong> y da lenguaje para que personas y equipos vean mejor lo que están viviendo.",
    "Llevo a los encuentros corporativos las tesis que vengo desarrollando en artículos, liderazgo y experiencias reales: cómo <strong>decidir bajo presión</strong>, <strong>preservar criterio</strong> en entornos acelerados, <strong>usar IA sin tercerizar el juicio</strong> y <strong>construir cultura</strong> en medio del exceso de ruido.",
    "La propuesta es unir <strong>densidad y humanidad</strong>. Menos espectáculo, más presencia. Menos fórmula, más reflexión. Menos motivación pasajera, más claridad para seguir pensando después.",
    "Si la empresa necesita hablar de <strong>futuro sin superficialidad, IA sin deslumbramiento, liderazgo sin clichés y cultura sin cartel en la pared</strong>, esta conversación tiene sentido.",
  ],
  // TODO(asset): la 6ª imagen (tema "Cuando la profesión se vuelve identidad") llega después.
  themes: [
    {
      title: "El contenido no disputa solo atención. Disputa responsabilidad.",
      description:
        "Una charla sobre comunicación, IA, algoritmos, periodismo, confianza y el desafío de informar en un entorno donde casi todo compite por clic, retención y reacción.",
      audience: "Marketing, comunicación, medios, liderazgo, contenido, reputación y cultura.",
      cover: "/assets/palestras/palestra-conteudo.webp",
    },
    {
      title: "La IA puede ser motor. El humano necesita seguir al volante.",
      description:
        "Una conversación sobre productividad, discernimiento y juicio humano en un momento en que la inteligencia artificial acelera procesos, pero también puede reducir el nivel de exigencia de las decisiones.",
      audience: "Liderazgos, equipos de contenido, tecnología, RR. HH., educación y negocios.",
      cover: "/assets/palestras/palestra-ia.webp",
    },
    {
      title: "Criterio bajo presión.",
      description:
        "Cómo decidir mejor cuando la velocidad, el volumen y la urgencia intentan ocupar el lugar de la claridad.",
      audience: "Ejecutivos, gestores, coordinadores, heads y equipos de alta demanda.",
      cover: "/assets/palestras/palestra-criterio.webp",
    },
    {
      title: "La cultura es lo que la organización aprende a tolerar.",
      description:
        "Una reflexión sobre comportamiento, confianza, coherencia y las señales invisibles que moldean a una empresa mucho antes del discurso oficial.",
      audience: "RR. HH., cultura, liderazgo, gestión y desarrollo organizacional.",
      cover: "/assets/palestras/palestra-cultura.webp",
    },
    {
      title: "La gobernanza personal precede a la silla.",
      description:
        "Una charla sobre madurez, autoconciencia, reputación y responsabilidad antes del poder formal.",
      audience: "Líderes, consejeros en formación, ejecutivos y profesionales en transición.",
      cover: "/assets/palestras/palestra-governanca.webp",
    },
    {
      title: "Cuando la profesión se vuelve identidad.",
      description:
        "Sobre carrera, repertorio, creatividad, cansancio y el riesgo de reducir la vida al cargo que se ocupa.",
      audience: "Empresas, liderazgos, RR. HH., educación corporativa y profesionales en transición.",
      cover: "/assets/palestras/palestra-identidade.webp",
    },
  ],
  formats: ["Charla", "Panel", "Ronda ejecutiva", "Workshop", "Clase especial", "Conversación con liderazgos"],
  durations: ["45 minutos", "60 minutos", "90 minutos"],
  cta: { href: "#contato", label: "Invitar a una charla" },
  note: "Disponible para eventos corporativos, encuentros ejecutivos, paneles, clases especiales, rondas de liderazgo y conversaciones con equipos.",
};

export const mentorship = {
  title: "Mentoría para transformar repertorio en dirección.",
  subtitle:
    "Para profesionales que ya tienen historia, experiencia y ambición, pero necesitan organizar posicionamiento, narrativa y próximos movimientos con más claridad.",
  intro: [
    "La mentoría no empieza por fórmula. Empieza por diagnóstico.",
    "Existe un momento en que acumular experiencia ya no basta. Hay que entender qué comunica esa experiencia, qué territorio sostiene y qué tipo de percepción construye en el mercado.",
    "La mentoría existe para trabajar ese punto: organizar el pensamiento, pulir el posicionamiento, fortalecer la presencia y transformar el repertorio en dirección práctica.",
  ],
  whatIs: [
    "Una mentoría ejecutiva individual para transformar la experiencia en claridad: revisar la trayectoria, identificar el territorio, ajustar la narrativa profesional y definir los próximos movimientos con más conciencia y criterio.",
    "No es un curso ni una fórmula lista. Es una conversación estratégica conducida a partir de repertorio real en liderazgo, contenido, comunicación y toma de decisiones, para que veas con nitidez dónde estás, hacia dónde quieres ir y qué necesitas cambiar.",
    "En el camino trabajamos marca personal, comunicación ejecutiva, posicionamiento, LinkedIn estratégico, gobernanza personal y producción de contenido, siempre ligando la percepción de valor a decisiones concretas.",
    "El objetivo no es que hables más. Es que seas comprendido, recordado y respetado por la coherencia entre lo que piensas, comunicas y entregas.",
  ],
  whoFor: [
    "Líderes",
    "Gestores",
    "Especialistas",
    "Ejecutivos en transición",
    "Profesionales en crecimiento",
    "Personas que quieren fortalecer su presencia profesional",
    "Profesionales que necesitan comunicar mejor su valor",
    "Personas que desean transformar la experiencia en autoridad percibida",
  ],
  topics: [
    "Claridad de posicionamiento",
    "Toma de decisiones",
    "Comunicación ejecutiva",
    "Marca personal",
    "LinkedIn estratégico",
    "Narrativa profesional",
    "Gobernanza personal",
    "Repertorio y autoridad",
    "Dirección de carrera",
    "Presencia y percepción de valor",
  ],
  cta: { href: "#contato", label: "Hablar sobre mentoría" },
  note: "No existe un paquete genérico. El alcance nace del diagnóstico, del momento profesional y de la claridad de lo que necesita cambiar.",
};

export const videos = {
  title: "Vídeos y reflexiones.",
  subtitle: "Un nuevo frente para acercar las ideas al habla.",
  intro:
    "Estoy iniciando un frente de vídeos para LinkedIn, con reflexiones cortas sobre liderazgo, IA, cultura, contenido, decisión y responsabilidad. Este espacio se actualizará con registros reales a medida que se publiquen.",
  // Placeholders asumidos: ningún vídeo grabado todavía.
  cards: [
    "Criterio en tiempos de velocidad",
    "IA, decisión y responsabilidad humana",
    "¿Qué sigue construyendo confianza?",
    "Cultura, madurez y liderazgo",
  ],
  cta: { href: "https://www.linkedin.com/in/ibson-junior/", label: "Seguir en LinkedIn" },
};

export const contact = {
  title: "¿Conversamos?",
  subtitle:
    "Para charlas, mentorías, consejo, entrevistas, paneles o proyectos editoriales, ponte en contacto.",
  quickButtons: [
    "Invitar a una charla",
    "Hablar sobre mentoría",
    "Proponer entrevista",
    "Hablar sobre consejo/advisory",
  ],
  subjects: [
    "Charla",
    "Mentoría",
    "Consejo / advisory",
    "Entrevista",
    "Panel o evento",
    "Proyecto editorial",
    "Otro asunto",
  ],
  support: "Si la conversación tiene sentido, respondo con disponibilidad, contexto y próximos pasos.",
  email: "contato@ibsonjunior.com.br",
  linkedin: "https://www.linkedin.com/in/ibson-junior/",
};

export const footer = {
  name: "Ibson Junior",
  line: "Conciencia, decisión y responsabilidad en tiempos complejos.",
  complement:
    "Artículos, charlas, mentorías y conversaciones sobre liderazgo, IA, cultura, comunicación, contenido y toma de decisiones.",
};

// Arquetipos como capas de arte editorial de fondo.
// TODO(asset): generar las artes finales en alta y guardarlas en las rutas de abajo (webp).
// Hasta entonces, los componentes usan un fallback de textura en CSS.
export const archetypes = {
  wolf: {
    src: "/assets/arquetipos/wolf-editorial.webp",
    alt: "Arte editorial de lobo que representa territorio, estrategia y lectura de entorno.",
  },
  owl: {
    src: "/assets/arquetipos/owl-editorial.webp",
    alt: "Arte editorial de búho que representa discernimiento, visión y sabiduría.",
  },
  seahorse: {
    src: "/assets/arquetipos/moon-network.webp",
    alt: "Arte editorial de caballito de mar que representa adaptación, cuidado y equilibrio.",
  },
};
