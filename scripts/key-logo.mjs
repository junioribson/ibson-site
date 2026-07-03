import { PNG } from "pngjs";
import fs from "fs";

const src = PNG.sync.read(fs.readFileSync("/private/tmp/claude-501/logo-extract/horizontal.png"));
const { width, height, data } = src;
const CUT_Y = Math.round(height * 0.60); // ignora o wordmark abaixo da marca

const lum = (r, g, b) => 0.299 * r + 0.587 * g + 0.114 * b;

// bounding box da marca (pixels claros) acima do corte
let minX = width, minY = height, maxX = 0, maxY = 0;
for (let y = 0; y < CUT_Y; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * 4;
    if (lum(data[i], data[i + 1], data[i + 2]) > 150) {
      if (x < minX) minX = x; if (x > maxX) maxX = x;
      if (y < minY) minY = y; if (y > maxY) maxY = y;
    }
  }
}
const pad = Math.round((maxX - minX) * 0.06);
minX -= pad; minY -= pad; maxX += pad; maxY += pad;
// quadrado
const w = maxX - minX, h = maxY - minY;
const side = Math.max(w, h);
const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2;
let ox = Math.round(cx - side / 2), oy = Math.round(cy - side / 2);

function make(color) {
  const out = new PNG({ width: side, height: side });
  for (let y = 0; y < side; y++) {
    for (let x = 0; x < side; x++) {
      const sx = ox + x, sy = oy + y;
      const o = (y * side + x) * 4;
      let a = 0;
      if (sx >= 0 && sx < width && sy >= 0 && sy < CUT_Y) {
        const i = (sy * width + sx) * 4;
        const L = lum(data[i], data[i + 1], data[i + 2]);
        a = Math.max(0, Math.min(1, (L - 60) / 150));
      }
      out.data[o] = color[0];
      out.data[o + 1] = color[1];
      out.data[o + 2] = color[2];
      out.data[o + 3] = Math.round(a * 255);
    }
  }
  return out;
}

fs.writeFileSync("/Users/ibsonjunior/Ibson-site/public/assets/logo/logo-branca.png", PNG.sync.write(make([255, 255, 255])));
fs.writeFileSync("/Users/ibsonjunior/Ibson-site/public/assets/logo/logo-roxa.png", PNG.sync.write(make([60, 9, 108])));
console.log(JSON.stringify({ bbox: { minX, minY, maxX, maxY }, side, ox, oy }));
