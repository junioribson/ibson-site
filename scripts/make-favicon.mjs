import { PNG } from 'pngjs';
import fs from 'fs';
const SIZE = 512;
const bg = new PNG({ width: SIZE, height: SIZE });
for (let y=0;y<SIZE;y++) for (let x=0;x<SIZE;x++){ const i=(SIZE*y+x)<<2; bg.data[i]=0x44; bg.data[i+1]=0x02; bg.data[i+2]=0x6F; bg.data[i+3]=255; }
const mark = PNG.sync.read(fs.readFileSync('/tmp/mark.png'));
const ox = Math.round((SIZE-mark.width)/2), oy = Math.round((SIZE-mark.height)/2);
for (let y=0;y<mark.height;y++) for (let x=0;x<mark.width;x++){
  const mi=(mark.width*y+x)<<2; const a=mark.data[mi+3]/255; if(a<=0) continue;
  const bx=ox+x, by=oy+y; if(bx<0||by<0||bx>=SIZE||by>=SIZE) continue;
  const bi=(SIZE*by+bx)<<2;
  bg.data[bi]=Math.round(mark.data[mi]*a+bg.data[bi]*(1-a));
  bg.data[bi+1]=Math.round(mark.data[mi+1]*a+bg.data[bi+1]*(1-a));
  bg.data[bi+2]=Math.round(mark.data[mi+2]*a+bg.data[bi+2]*(1-a));
  bg.data[bi+3]=255;
}
fs.writeFileSync('public/favicon-512.png', PNG.sync.write(bg));
console.log('ok');
