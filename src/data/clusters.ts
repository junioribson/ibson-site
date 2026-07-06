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
