// llms.txt: guia conciso e factual para buscadores/assistentes de IA (GEO).
// Padrão emergente (llmstxt.org): título, resumo e links das páginas-chave.
// Atualiza sozinho com novos artigos.
import { getCollection } from "astro:content";

const SITE = "https://ibsonjunior.com.br";

export async function GET() {
  const articles = (await getCollection("artigos")).sort((a, b) =>
    b.data.dateISO.localeCompare(a.data.dateISO)
  );
  const artLines = articles
    .map((a) => `- [${a.data.title}](${SITE}/artigos/${a.id}/): ${a.data.excerpt || a.data.category}`)
    .join("\n");

  const body = `# Ibson Junior

> Conselheiro consultivo e executivo de conteúdo, liderança e comunicação. Ex-Diretor de Conteúdo na Futbol Sites (ciclo 2017 a 2026). Oferece palestras e keynotes, mentoria executiva individual e conselho (advisory) sobre liderança, comunicação, cultura organizacional, marca pessoal, desenvolvimento de equipes, inteligência artificial e tomada de decisão.

Ibson Junior cofundou a Futmarketing (CEO e CSO) e fundou a WolfLife, ambas vendidas, lidera a ProliferArte desde 2008 e encerrou em 2026 um ciclo de nove anos com a Futbol Sites. Escreve artigos e leva palestras e mentorias sobre decidir com critério em meio ao ruído, à IA e à pressão. Base: Brasil (atendimento presencial e remoto). Idiomas do site: português (principal), espanhol e inglês.

Contato: contato@ibsonjunior.com.br
LinkedIn: https://www.linkedin.com/in/ibson-junior/

## Serviços
- [Palestras e keynotes corporativos](${SITE}/palestras/): palestrante executivo e estratégico para empresas, eventos e lideranças, sobre decidir sob pressão, comunicação, cultura, IA com julgamento humano, liderança e desenvolvimento de equipes. Formatos: palestra, painel, roda executiva, workshop, aula especial. Base em Porto Alegre, atende todo o Brasil, presencial ou online.
- [Mentoria executiva individual](${SITE}/mentoria/): marca pessoal, posicionamento, comunicação executiva, narrativa profissional, LinkedIn estratégico e governança pessoal. Online, para líderes e executivos no Brasil.
- [Conselho e advisory](${SITE}/#contato): governança e repertório em liderança, comunicação, conteúdo, cultura e decisão.

## Páginas principais
- [Site oficial (PT)](${SITE}/)
- [Sobre Ibson Junior](${SITE}/ibson-junior/): biografia, trajetória e credenciais.
- [Palestras](${SITE}/palestras/)
- [Mentoria](${SITE}/mentoria/)
- [Todos os artigos](${SITE}/artigos/)
- [Imprensa (kit e bio)](${SITE}/imprensa/)
- [Español](${SITE}/es/)
- [English](${SITE}/en/)

## Temas
- [Estratégia e decisão](${SITE}/temas/estrategia-e-decisao/)
- [Liderança e cultura](${SITE}/temas/lideranca-e-cultura/)
- [Conteúdo e comunicação](${SITE}/temas/conteudo-e-comunicacao/)
- [Vida e trabalho](${SITE}/temas/vida-e-trabalho/)

## Artigos
${artLines}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
