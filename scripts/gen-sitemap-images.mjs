// Gera public/sitemap-images.xml mapeando cada imagem à página onde aparece
// (para o Google Images indexar as artes ibson-junior-*). Varre:
//  - artigos: capa (frontmatter) + imagens do corpo  -> /artigos/<slug>/
//  - palestras: public/assets/palestras/*             -> /palestras/
//  - home: public/assets/{retratos,posts,arquetipos}  -> /
// Uso: node scripts/gen-sitemap-images.mjs   (a partir da raiz do repo)
import fs from "node:fs";

const BASE = "https://ibsonjunior.com.br";
const enc = (s) => s.replace(/&/g, "&amp;");
const urls = [];

for (const f of fs.readdirSync("src/content/artigos").filter((x) => x.endsWith(".md"))) {
  const slug = f.replace(/\.md$/, "");
  const md = fs.readFileSync("src/content/artigos/" + f, "utf8");
  const imgs = new Set();
  const cover = (md.match(/^cover:\s*"([^"]+)"/m) || [])[1];
  if (cover) imgs.add(cover);
  for (const m of md.matchAll(/(?:src="|\]\()(\/assets\/[^")\s]+\.(?:webp|jpg|jpeg|png))/g)) imgs.add(m[1]);
  if (imgs.size) urls.push({ loc: BASE + "/artigos/" + slug + "/", imgs: [...imgs] });
}

const pal = fs.existsSync("public/assets/palestras")
  ? fs.readdirSync("public/assets/palestras").filter((x) => /\.(webp|jpg|png)$/.test(x)).map((x) => "/assets/palestras/" + x)
  : [];
if (pal.length) urls.push({ loc: BASE + "/palestras/", imgs: pal });

const home = [];
for (const d of ["retratos", "posts", "arquetipos"]) {
  const p = "public/assets/" + d;
  if (fs.existsSync(p)) for (const x of fs.readdirSync(p)) if (/\.(webp|jpg|png)$/.test(x)) home.push("/assets/" + d + "/" + x);
}
if (home.length) urls.push({ loc: BASE + "/", imgs: home });

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';
for (const u of urls) {
  xml += "  <url>\n    <loc>" + enc(u.loc) + "</loc>\n";
  for (const i of u.imgs) xml += "    <image:image><image:loc>" + enc(BASE + i) + "</image:loc></image:image>\n";
  xml += "  </url>\n";
}
xml += "</urlset>\n";
fs.writeFileSync("public/sitemap-images.xml", xml);
const total = urls.reduce((a, u) => a + u.imgs.length, 0);
console.log("sitemap-images.xml: " + urls.length + " paginas, " + total + " imagens");
