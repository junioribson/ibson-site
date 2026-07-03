// Remove o fundo branco de um PNG/JPG e salva PNG transparente.
// Uso: node scripts/key-white.mjs <input> <output>
import { PNG } from "pngjs";
import fs from "fs";
import { execSync } from "child_process";

const [, , input, output] = process.argv;
// Converte para PNG temporário via sips (garante decodável pelo pngjs)
const tmp = "/private/tmp/claude-501/_key_tmp.png";
execSync(`sips -s format png "${input}" --out "${tmp}"`, { stdio: "ignore" });

const src = PNG.sync.read(fs.readFileSync(tmp));
const { width, height, data } = src;
for (let i = 0; i < data.length; i += 4) {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  const minc = Math.min(r, g, b);
  // distância do branco no canal mais escuro; branco puro -> alpha 0
  const a = Math.max(0, Math.min(1, (255 - minc) / 40));
  data[i + 3] = Math.round(a * 255);
}
fs.writeFileSync(output, PNG.sync.write(src));
console.log(`OK -> ${output} (${width}x${height})`);
