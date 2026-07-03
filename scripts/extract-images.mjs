import fs from "fs";
import readline from "readline";
import crypto from "crypto";

const JSONL = process.env.HOME + "/.claude/projects/-Users-ibsonjunior-Ibson-site/8144463d-5cdb-409d-b037-005c3c81b862.jsonl";
const OUT = "/private/tmp/claude-501/extracted";
fs.mkdirSync(OUT, { recursive: true });

const rl = readline.createInterface({ input: fs.createReadStream(JSONL), crlfDelay: Infinity });

let lineNo = 0;
const seen = new Set();
const report = [];

function ext(mt) { return mt.includes("png") ? "png" : mt.includes("webp") ? "webp" : "jpg"; }

// Recolhe imagens de um content array, marcando se está dentro de tool_result
function collect(content, role, insideToolResult, out) {
  if (!Array.isArray(content)) return;
  for (const item of content) {
    if (!item || typeof item !== "object") continue;
    if (item.type === "image" && item.source && item.source.type === "base64" && item.source.data) {
      out.push({ mt: item.source.media_type || "image/jpeg", data: item.source.data, role, insideToolResult });
    } else if (item.type === "tool_result") {
      collect(item.content, role, true, out);
    }
  }
}

rl.on("line", (line) => {
  lineNo++;
  let obj;
  try { obj = JSON.parse(line); } catch { return; }
  const msg = obj.message || obj;
  const role = msg.role || obj.type || "?";
  const out = [];
  collect(msg.content, role, false, out);
  for (const img of out) {
    const buf = Buffer.from(img.data, "base64");
    const hash = crypto.createHash("md5").update(buf).digest("hex").slice(0, 8);
    if (seen.has(hash)) continue;
    seen.add(hash);
    const name = `L${String(lineNo).padStart(5, "0")}_${img.role}_${img.insideToolResult ? "toolresult" : "USERPASTE"}_${hash}.${ext(img.mt)}`;
    fs.writeFileSync(`${OUT}/${name}`, buf);
    report.push({ name, kb: Math.round(buf.length / 1024), role: img.role, tr: img.insideToolResult });
  }
});

rl.on("close", () => {
  // Só as coladas pelo usuário (não tool_result / não screenshots)
  const userPaste = report.filter((r) => r.role === "user" && !r.tr);
  console.log("=== USER-PASTE (imagens coladas por você) ===");
  userPaste.forEach((r) => console.log(`${r.name}  ${r.kb}KB`));
  console.log(`\nTotal user-paste: ${userPaste.length} | total imagens únicas: ${report.length}`);
});
