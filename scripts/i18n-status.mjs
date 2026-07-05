// Relatório de tradução: aponta o que ainda falta traduzir para ES e EN.
// Uso: node scripts/i18n-status.mjs   (sai com código 1 se houver lacunas)
import fs from "node:fs";
import path from "node:path";

const root = path.join(path.dirname(new URL(import.meta.url).pathname), "..");
const contentDir = path.join(root, "src", "content");
const dataDir = path.join(root, "src", "data");

function mdSlugs(dir) {
  try {
    return fs.readdirSync(path.join(contentDir, dir)).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""));
  } catch {
    return [];
  }
}
function exportsOf(file) {
  try {
    const txt = fs.readFileSync(path.join(dataDir, file), "utf8");
    return [...txt.matchAll(/export const (\w+)/g)].map((m) => m[1]);
  } catch {
    return [];
  }
}

const pt = mdSlugs("artigos");
const es = mdSlugs("artigos-es");
const en = mdSlugs("artigos-en");
const missArtEs = pt.filter((s) => !es.includes(s));
const missArtEn = pt.filter((s) => !en.includes(s));

const ptEx = exportsOf("content.ts");
const missExEs = ptEx.filter((e) => !exportsOf("content.es.ts").includes(e));
const missExEn = ptEx.filter((e) => !exportsOf("content.en.ts").includes(e));

const lines = [];
lines.push(`Artigos: PT=${pt.length}  ES=${es.length}  EN=${en.length}`);
if (missArtEs.length) lines.push(`  ! faltam em ES: ${missArtEs.join(", ")}`);
if (missArtEn.length) lines.push(`  ! faltam em EN: ${missArtEn.join(", ")}`);
lines.push(`Seções (content.ts exports): ${ptEx.length}`);
if (missExEs.length) lines.push(`  ! export sem tradução ES: ${missExEs.join(", ")}`);
if (missExEn.length) lines.push(`  ! export sem tradução EN: ${missExEn.join(", ")}`);

const gaps = missArtEs.length + missArtEn.length + missExEs.length + missExEn.length;
lines.push(gaps === 0 ? "\n✅ Tudo traduzido. Site 100% sincronizado nos 3 idiomas." : `\n⚠️ ${gaps} lacuna(s) de tradução. Ver acima e traduzir (HANDOFF, Frente 3).`);
console.log(lines.join("\n"));
process.exit(gaps === 0 ? 0 : 1);
