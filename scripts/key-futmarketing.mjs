import { PNG } from "pngjs"; import fs from "fs"; import { execSync } from "child_process";
const input="/private/tmp/claude-501/extracted/L01556_user_USERPASTE_3f7f51bf.jpg";
const out="public/assets/logo/futmarketing.png";
const tmp="/private/tmp/claude-501/_kd.png";
execSync(`sips -s format png "${input}" --out "${tmp}"`,{stdio:"ignore"});
const p=PNG.sync.read(fs.readFileSync(tmp));
for(let i=0;i<p.data.length;i+=4){const r=p.data[i],g=p.data[i+1],b=p.data[i+2];
  const L=0.299*r+0.587*g+0.114*b;
  const a=Math.max(0,Math.min(1,(L-46)/50));
  p.data[i+3]=Math.round(a*255);}
fs.writeFileSync(out,PNG.sync.write(p));
console.log("ok");
