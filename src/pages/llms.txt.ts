// llms.txt — guia conciso e factual para buscadores/assistentes de IA (GEO).
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

> Executivo de conteúdo, liderança e comunicação. Diretor de Conteúdo na Futbol Sites. Oferece palestras e keynotes, mentoria executiva individual e conselho (advisory) sobre liderança, comunicação, cultura organizacional, marca pessoal, desenvolvimento de equipes, inteligência artificial e tomada de decisão.

Ibson Junior fundou a WolfLife (ecossistema de comunidades digitais, vendido em 2025), lidera a ProliferArte desde 2008 e foi CEO da Futmarketing. Escreve artigos e leva palestras e mentorias sobre decidir com critério em meio ao ruído, à IA e à pressão. Base: Brasil (atendimento presencial e remoto). Idiomas do site: português (principal), espanhol e inglês.

Contato: contato@ibsonjunior.com.br
LinkedIn: https://www.linkedin.com/in/ibson-junior/

## Serviços
- [Palestras e keynotes corporativos](${SITE}/#palestras): para empresas, eventos e lideranças, sobre decidir sob pressão, comunicação, cultura, IA com julgamento humano, liderança e desenvolvimento de equipes. Formatos: palestra, painel, roda executiva, workshop, aula especial.
- [Mentoria executiva individual](${SITE}/#mentoria): marca pessoal, posicionamento, comunicação executiva, narrativa profissional, LinkedIn estratégico e governança pessoal.
- [Conselho e advisory](${SITE}/#contato): governança e repertório em liderança, comunicação, conteúdo, cultura e decisão.

## Páginas principais
- [Site oficial (PT)](${SITE}/)
- [Español](${SITE}/es/)
- [English](${SITE}/en/)
- [Todos os artigos](${SITE}/artigos/)

## Artigos
${artLines}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
