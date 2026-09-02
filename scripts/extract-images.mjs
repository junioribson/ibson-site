// Extrai as imagens que o Ibson cola no chat (elas não viram arquivo no disco,
// ficam em base64 no transcript da sessão).
// Uso:  node scripts/extract-images.mjs [sessionId]
// Sem argumento, usa o transcript mais recente do projeto.
import fs from "fs";
import path from "path";
import readline from "readline";
import crypto from "crypto";

const DIR = process.env.HOME + "/.claude/projects/-Users-ibsonjunior-Ibson-site";
const arg = process.argv[2];
const JSONL = arg
  ? path.join(DIR, arg.endsWith(".jsonl") ? arg : `${arg}.jsonl`)
  : fs
      .readdirSync(DIR)
      .filter((f) => f.endsWith(".jsonl"))
      .map((f) => ({ f: path.join(DIR, f), t: fs.statSync(path.join(DIR, f)).mtimeMs }))
      .sort((a, b) => b.t - a.t)[0]?.f;

if (!JSONL || !fs.existsSync(JSONL)) {
  console.error("Transcript não encontrado em", DIR);
  process.exit(1);
}
console.log("Transcript:", path.basename(JSONL), "\n");

const OUT = "/private/tmp/claude-501/extracted";
fs.mkdirSync(OUT, { recursive: true });

const rl = readline.createInterface({ input: fs.createReadStream(JSONL), crlfDelay: Infinity });

let lineNo = 0;
const seen = new Set();
const report = [];

function ext(mt) { return mt.includes("png") ? "png" : mt.includes("webp") ? "webp" : "jpg"; }

// Varre o objeto inteiro da linha. O caminho até a imagem diz a origem: se passa
// por tool_result é screenshot meu; o resto (inclusive attachment.prompt, usado
// quando a imagem chega no meio do turno) é imagem colada pelo Ibson.
function walk(node, trail, out) {
  if (!node || typeof node !== "object") return;
  if (node.type === "image" && node.source?.type === "base64" && node.source.data) {
    out.push({ mt: node.source.media_type || "image/jpeg", data: node.source.data, trail });
    return;
  }
  for (const k of Object.keys(node)) walk(node[k], `${trail}.${k}`, out);
}

rl.on("line", (line) => {
  lineNo++;
  let obj;
  try { obj = JSON.parse(line); } catch { return; }
  const role = obj.message?.role || obj.type || "?";
  const out = [];
  walk(obj, "root", out);
  for (const img of out) {
    const buf = Buffer.from(img.data, "base64");
    const hash = crypto.createHash("md5").update(buf).digest("hex").slice(0, 8);
    if (seen.has(hash)) continue;
    seen.add(hash);
    const fromTool = img.trail.includes("tool_result") || img.trail.includes("toolUseResult");
    const name = `L${String(lineNo).padStart(5, "0")}_${role}_${fromTool ? "toolresult" : "USERPASTE"}_${hash}.${ext(img.mt)}`;
    fs.writeFileSync(`${OUT}/${name}`, buf);
    report.push({ name, kb: Math.round(buf.length / 1024), fromTool });
  }
});

rl.on("close", () => {
  const userPaste = report.filter((r) => !r.fromTool);
  console.log("=== USER-PASTE (imagens coladas por você) ===");
  userPaste.forEach((r) => console.log(`${OUT}/${r.name}  ${r.kb}KB`));
  console.log(`\nTotal user-paste: ${userPaste.length} | total imagens únicas: ${report.length}`);
});
