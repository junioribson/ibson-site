// Feed RSS dos artigos (PT). Ajuda descoberta/indexação e é lido por vários
// agregadores e rastreadores de IA. Atualiza sozinho com novos artigos.
import { getCollection } from "astro:content";

const SITE = "https://ibsonjunior.com.br";

const esc = (s: string) =>
  (s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function GET() {
  const articles = (await getCollection("artigos")).sort((a, b) =>
    b.data.dateISO.localeCompare(a.data.dateISO)
  );

  const items = articles
    .map((a) => {
      const url = `${SITE}/artigos/${a.id}/`;
      const pub = new Date(a.data.dateISO + "T12:00:00Z").toUTCString();
      const img = `${SITE}${a.data.cover}`;
      return `    <item>
      <title>${esc(a.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pub}</pubDate>
      <category>${esc(a.data.category)}</category>
      <description>${esc(a.data.excerpt || "")}</description>
      <enclosure url="${esc(img)}" type="image/webp" />
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Ibson Junior | Artigos e ensaios</title>
    <link>${SITE}/artigos/</link>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Artigos de Ibson Junior sobre liderança, comunicação, cultura, IA, marca pessoal e tomada de decisão.</description>
    <language>pt-BR</language>
    <ttl>1440</ttl>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
