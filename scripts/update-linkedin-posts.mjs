// Baixa a arte pública (og:image) de cada post do LinkedIn e imprime o array
// pronto para colar em `linkedinPosts.posts` (src/data/content.ts).
//
// Uso:
//   node scripts/update-linkedin-posts.mjs '[{"urn":"7479...","slug":"tema-do-post"}, ...]'
//
// (mais recente primeiro). Depois, VEJA cada arte baixada e escreva o `alt` fiel
// à frase da imagem no content.ts. A arte vem do permalink público, sem login.
import fs from "node:fs";
import path from "node:path";

const arg = process.argv[2];
if (!arg) { console.error("Passe o JSON dos posts: '[{\"urn\":\"...\",\"slug\":\"...\"}]'"); process.exit(1); }
const POSTS = JSON.parse(arg);
const DIR = path.join(path.dirname(new URL(import.meta.url).pathname), "..", "public", "assets", "posts");
fs.mkdirSync(DIR, { recursive: true });

const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36";
const extOf = (b) =>
  b[0] === 0x89 && b[1] === 0x50 ? "png" :
  b[0] === 0xFF && b[1] === 0xD8 ? "jpg" :
  b[0] === 0x47 && b[1] === 0x49 ? "gif" :
  b[0] === 0x52 && b[8] === 0x57 ? "webp" : "jpg";

const lines = [];
for (const p of POSTS) {
  const permalink = `https://www.linkedin.com/feed/update/urn:li:activity:${p.urn}/`;
  try {
    const html = await (await fetch(permalink, { headers: { "User-Agent": UA } })).text();
    const m = html.match(/property="og:image"\s+content="([^"]+)"/i);
    if (!m) { console.error(`! ${p.slug}: sem og:image`); continue; }
    const buf = Buffer.from(await (await fetch(m[1].replace(/&amp;/g, "&"), { headers: { "User-Agent": UA } })).arrayBuffer());
    const fname = `ibson-junior-post-${p.slug}.${extOf(buf)}`;
    fs.writeFileSync(path.join(DIR, fname), buf);
    console.error(`  ok ${fname} (${Math.round(buf.length / 1024)} KB)`);
    lines.push(`    {\n      image: "/assets/posts/${fname}",\n      url: "${permalink}",\n      alt: "TODO: descrever a frase da arte (fiel), associando o nome",\n    },`);
  } catch (e) { console.error(`! ${p.slug}: ${e.message}`); }
}
console.log("\n// cole em linkedinPosts.posts (content.ts) e ajuste os alt:\n" + lines.join("\n"));
