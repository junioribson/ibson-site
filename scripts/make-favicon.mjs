import { PNG } from 'pngjs';
import fs from 'fs';
const SIZE = 512;
const bg = new PNG({ width: SIZE, height: SIZE });
// gradiente neon diagonal: violeta elétrico -> magenta/rosa neon
const A = [106, 46, 230];   // #6a2ee6
const B = [244, 91, 255];   // #f45bff
for (let y=0;y<SIZE;y++) for (let x=0;x<SIZE;x++){
  const t = (x + y) / (2 * (SIZE - 1));
  const i=(SIZE*y+x)<<2;
  bg.data[i]   = Math.round(A[0]*(1-t)+B[0]*t);
  bg.data[i+1] = Math.round(A[1]*(1-t)+B[1]*t);
  bg.data[i+2] = Math.round(A[2]*(1-t)+B[2]*t);
  bg.data[i+3] = 255;
}
const mark = PNG.sync.read(fs.readFileSync('/tmp/mark.png'));
const ox = Math.round((SIZE-mark.width)/2), oy = Math.round((SIZE-mark.height)/2);
for (let y=0;y<mark.height;y++) for (let x=0;x<mark.width;x++){
  const mi=(mark.width*y+x)<<2; const a=mark.data[mi+3]/255; if(a<=0) continue;
  const bx=ox+x, by=oy+y; if(bx<0||by<0||bx>=SIZE||by>=SIZE) continue;
  const bi=(SIZE*by+bx)<<2;
  bg.data[bi]  = Math.round(255*a + bg.data[bi]*(1-a));   // triângulo branco puro
  bg.data[bi+1]= Math.round(255*a + bg.data[bi+1]*(1-a));
  bg.data[bi+2]= Math.round(255*a + bg.data[bi+2]*(1-a));
  bg.data[bi+3]= 255;
}
fs.writeFileSync('public/favicon-512.png', PNG.sync.write(bg));
console.log('ok');
