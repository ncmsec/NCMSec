import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('site');
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?walk(path.join(dir,entry.name)):[path.join(dir,entry.name)]);}
let failures=[];let count=0;
for(const file of walk(root).filter(file=>file.endsWith('.html')&&!file.endsWith('404.html'))){
 const html=fs.readFileSync(file,'utf8');count++;
 if((html.match(/<h1\b/g)||[]).length!==1)failures.push(`${file}: expected exactly one h1`);
 for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  const url=match[1];if(/^(https?:|mailto:|#)/.test(url))continue;
  let target=path.resolve(path.dirname(file),url.split('#')[0]);
  if(fs.existsSync(target)&&fs.statSync(target).isDirectory())target=path.join(target,'index.html');
  if(!fs.existsSync(target))failures.push(`${file}: missing ${url}`);
 }
 if(/assets\.zyrosite\.com|email@email\.com/.test(html))failures.push(`${file}: unmigrated placeholder or Hostinger dependency`);
}
if(failures.length){console.error(failures.join('\n'));process.exit(1);}
console.log(`Verified ${count} pages: local links and assets resolve, headings present, no Hostinger asset dependencies or placeholder email addresses.`);
