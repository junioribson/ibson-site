// Clusters de tópico (pilares) para internal linking temático.
// A chave é o slug do artigo (igual nos 3 idiomas). O tema agrupa artigos do
// mesmo assunto, para que o bloco "Veja também" priorize links temáticos (sinal
// de autoridade de tópico para o Google), completando com os mais recentes.
//
// REGRA: ao publicar um artigo novo, atribua um tema aqui (ver HANDOFF, Frente 1).
// Quando um tema acumular ~4+ artigos, vale criar uma página-pilar dedicada.

export type Theme = "decisao" | "conteudo" | "lideranca" | "vida";

export const articleTheme: Record<string, Theme> = {
  // Estratégia, decisão e governança
  "estrategia-e-intencao": "decisao",
  "qualidade-da-decisao-governanca": "decisao",
  // Conteúdo, comunicação e responsabilidade
  "conteudo-copa-do-mundo-responsabilidade": "conteudo",
  "comunicacao-falha-estrategia-ruido": "conteudo",
  // Liderança, cultura e IA
  "cultura-organizacional-nao-e-powerpoint": "lideranca",
  "inteligencia-artificial-e-emocional": "lideranca",
  // Vida, carreira e atenção
  "profissao-identidade-carreira": "vida",
  "cerebro-podre-atencao-produtividade": "vida",
  "o-tempo-e-um-oceano": "vida",
};

// Rótulos por idioma (para uso futuro em kickers/páginas-pilar).
export const themeLabel: Record<"pt" | "es" | "en", Record<Theme, string>> = {
  pt: {
    decisao: "Estratégia e decisão",
    conteudo: "Conteúdo e comunicação",
    lideranca: "Liderança e cultura",
    vida: "Vida e trabalho",
  },
  es: {
    decisao: "Estrategia y decisión",
    conteudo: "Contenido y comunicación",
    lideranca: "Liderazgo y cultura",
    vida: "Vida y trabajo",
  },
  en: {
    decisao: "Strategy and decision",
    conteudo: "Content and communication",
    lideranca: "Leadership and culture",
    vida: "Life and work",
  },
};

// Ordem de exibição dos temas (hubs e listas).
export const themeOrder: Theme[] = ["decisao", "lideranca", "conteudo", "vida"];

// Slug do hub de cada tema (igual nos 3 idiomas; muda só o prefixo /es//en/).
export const themeSlug: Record<Theme, string> = {
  decisao: "estrategia-e-decisao",
  conteudo: "conteudo-e-comunicacao",
  lideranca: "lideranca-e-cultura",
  vida: "vida-e-trabalho",
};

export function slugToTheme(slug: string): Theme | null {
  const entry = (Object.entries(themeSlug) as [Theme, string][]).find(([, s]) => s === slug);
  return entry ? entry[0] : null;
}

// Conteúdo dos hubs de tema (páginas-pilar /temas/<slug>/), por idioma.
export const themeHub: Record<"pt" | "es" | "en", Record<Theme, { seoTitle: string; seoDescription: string; intro: string }>> = {
  pt: {
    decisao: {
      seoTitle: "Estratégia e decisão | Artigos de Ibson Junior",
      seoDescription: "Artigos de Ibson Junior sobre estratégia, tomada de decisão, governança e critério sob pressão.",
      intro: "O que faz uma direção se sustentar: a diferença entre intenção e estratégia, a qualidade da decisão e a governança que mantém critério quando a pressão aumenta.",
    },
    conteudo: {
      seoTitle: "Conteúdo e comunicação | Artigos de Ibson Junior",
      seoDescription: "Artigos de Ibson Junior sobre conteúdo, comunicação executiva, responsabilidade editorial e o que sustenta a mensagem em escala.",
      intro: "Comunicar com critério: conteúdo e responsabilidade, a comunicação que sustenta cultura e governança, e o que acontece quando a mensagem falha e vira ruído.",
    },
    lideranca: {
      seoTitle: "Liderança e cultura | Artigos de Ibson Junior",
      seoDescription: "Artigos de Ibson Junior sobre liderança, cultura organizacional e inteligência artificial com julgamento humano.",
      intro: "Liderar e sustentar cultura: a cultura organizacional que é energia vital (não PowerPoint) e a inteligência emocional que a IA não substitui.",
    },
    vida: {
      seoTitle: "Vida e trabalho | Artigos de Ibson Junior",
      seoDescription: "Artigos de Ibson Junior sobre carreira, atenção, produtividade e o equilíbrio entre profissão e identidade.",
      intro: "Viver e trabalhar com mais consciência: a atenção corroída pelo cérebro podre, o risco de a profissão virar identidade, e o tempo como um oceano de prioridades.",
    },
  },
  es: {
    decisao: {
      seoTitle: "Estrategia y decisión | Artículos de Ibson Junior",
      seoDescription: "Artículos de Ibson Junior sobre estrategia, toma de decisiones, gobernanza y criterio bajo presión.",
      intro: "Lo que hace que una dirección se sostenga: la diferencia entre intención y estrategia, la calidad de la decisión y la gobernanza que mantiene criterio cuando la presión aumenta.",
    },
    conteudo: {
      seoTitle: "Contenido y comunicación | Artículos de Ibson Junior",
      seoDescription: "Artículos de Ibson Junior sobre contenido, comunicación ejecutiva, responsabilidad editorial y lo que sostiene el mensaje a escala.",
      intro: "Comunicar con criterio: contenido y responsabilidad, la comunicación que sostiene cultura y gobernanza, y lo que pasa cuando el mensaje falla y se vuelve ruido.",
    },
    lideranca: {
      seoTitle: "Liderazgo y cultura | Artículos de Ibson Junior",
      seoDescription: "Artículos de Ibson Junior sobre liderazgo, cultura organizacional e inteligencia artificial con juicio humano.",
      intro: "Liderar y sostener cultura: la cultura organizacional que es energía vital (no un PowerPoint) y la inteligencia emocional que la IA no reemplaza.",
    },
    vida: {
      seoTitle: "Vida y trabajo | Artículos de Ibson Junior",
      seoDescription: "Artículos de Ibson Junior sobre carrera, atención, productividad y el equilibrio entre profesión e identidad.",
      intro: "Vivir y trabajar con más consciencia: la atención corroída por el cerebro podrido, el riesgo de que la profesión se vuelva identidad, y el tiempo como un océano de prioridades.",
    },
  },
  en: {
    decisao: {
      seoTitle: "Strategy and decision | Ibson Junior articles",
      seoDescription: "Articles by Ibson Junior on strategy, decision-making, governance and judgment under pressure.",
      intro: "What makes a direction hold: the difference between intention and strategy, the quality of the decision and the governance that keeps judgment as pressure rises.",
    },
    conteudo: {
      seoTitle: "Content and communication | Ibson Junior articles",
      seoDescription: "Articles by Ibson Junior on content, executive communication, editorial responsibility and what sustains the message at scale.",
      intro: "Communicating with judgment: content and responsibility, the communication that sustains culture and governance, and what happens when the message fails and becomes noise.",
    },
    lideranca: {
      seoTitle: "Leadership and culture | Ibson Junior articles",
      seoDescription: "Articles by Ibson Junior on leadership, organizational culture and artificial intelligence with human judgment.",
      intro: "Leading and sustaining culture: the organizational culture that is vital energy (not PowerPoint) and the emotional intelligence that AI does not replace.",
    },
    vida: {
      seoTitle: "Life and work | Ibson Junior articles",
      seoDescription: "Articles by Ibson Junior on career, attention, productivity and the balance between profession and identity.",
      intro: "Living and working with more awareness: attention eroded by brain rot, the risk of profession becoming identity, and time as an ocean of priorities.",
    },
  },
};
