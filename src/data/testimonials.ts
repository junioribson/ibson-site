// Depoimentos reais recortados do LinkedIn (recomendações do perfil e comentários
// do post de encerramento de ciclo, out/2026). Texto e headline são das próprias
// pessoas, não traduzidos (ficam no idioma original em todas as versões do site).
// Curadoria: os mais substantivos, que enaltecem qualidades profissionais e humanas.
// Nunca citar Better Collective (a recomendação que a mencionava ficou de fora).

export type Testimonial = {
  name: string;
  headline: string;
  quote: string;
  kind: "rec" | "comment";
};

export const LINKEDIN_PROFILE = "https://www.linkedin.com/in/ibson-junior/";

export const testimonials: Testimonial[] = [
  {
    name: "Nino Carvalho",
    headline: "Autor best-seller em Marketing · Consultor e Professor Internacional · Fellow CIM",
    quote:
      "O Ibson é uma daquelas raras pessoas que deixam uma impressão positiva duradoura. Possui as habilidades, a mentalidade e a determinação para se destacar em qualquer projeto ou equipe. Qualquer organização seria beneficiada em contar com o Ibson em seu time.",
    kind: "rec",
  },
  {
    name: "Jordan Gnat",
    headline: "CEO, Executive, Board Director",
    quote:
      "From the time Ibson joined, he was an impact player. As the business evolved, Ibson too evolved and continued to grow as a leader by focusing on longer term strategic initiatives rather than short term tactics. A strong leader that worked well with the leadership team.",
    kind: "rec",
  },
  {
    name: "Marcos Ortiz",
    headline: "Mentor de Liderança · Conselheiro · Diretor · Governança · Docente Sênior (PhD)",
    quote:
      "Ibson tem DNA empreendedor. Liderança que inspira foco nas equipes. Combina diálogo e criação de ambiente de alta performance. Essência de pioneiro que constrói, consolida e segue adiante, desbravando novos negócios.",
    kind: "rec",
  },
  {
    name: "Federico Grinberg",
    headline: "Growth Lead · liderou Ibson diretamente",
    quote:
      "Ibson consistently demonstrated a remarkable capacity for learning and a proactive approach. He has a strong ability to run large-scale operations with multiple teams, building solid processes and workflows that are always ready to scale. A firm yet deeply human leader.",
    kind: "rec",
  },
  {
    name: "Ricardo A. Sonnervig",
    headline: "Executivo Sênior · Estratégia Comercial · Board Academy · +35 anos",
    quote:
      "Uma trajetória impressionante, construída com resultados expressivos e, principalmente, com a preocupação de desenvolver pessoas. O verdadeiro legado de um líder não está apenas nos negócios que ajudou a crescer, mas também nas pessoas que preparou para continuar crescendo.",
    kind: "comment",
  },
  {
    name: "Claudio Toledo",
    headline: "Community Coordinator",
    quote:
      "Você é um dos profissionais mais brilhantes com quem tive a oportunidade de trabalhar. Estrategista, escritor, palestrante, visionário, organizado e atento aos mínimos detalhes. Um conjunto de qualidades que se traduz em resultados.",
    kind: "comment",
  },
  {
    name: "Michelle de Mentzingen Gomes",
    headline: "Coordenadora Editorial · Advogada · Gestora de Pessoas e Processos",
    quote:
      "Foi uma honra e um privilégio dividir as trincheiras contigo por quase 8 anos. Obrigada por todas as oportunidades que me deu para crescer. Sou uma pessoa e uma profissional melhor por sua causa.",
    kind: "comment",
  },
  {
    name: "Marcelo Duarte",
    headline: "Advisor · Conselho Administrativo · Mentor Executivo LatAm",
    quote:
      "Sua experiência e visão estratégica certamente trarão contribuições relevantes para um mercado em profunda transformação, especialmente nas áreas de comunicação, marketing e mídia digital.",
    kind: "comment",
  },
  {
    name: "Íris Marini",
    headline: "Jornalista · Social Media · Empreendedora · Cantora",
    quote:
      "Ibson, você é um profissional e empreendedor visionário. Tenho a mais completa certeza de que a semente que você plantar daqui em diante vai germinar e dar lugar a outras florestas. Pra mim, sempre será honra máxima ter trabalhado com você.",
    kind: "comment",
  },
  {
    name: "Beatriz Paparazo",
    headline: "Jornalista · Editora-chefe · Produtora de conteúdo",
    quote:
      "Não tenho palavras para agradecer por esse tempo de trabalho juntos e por você ter apostado no meu potencial quando eu mais precisei. Que você siga brilhando e iluminando novos times. Estarei sempre aqui na torcida por você.",
    kind: "comment",
  },
];
