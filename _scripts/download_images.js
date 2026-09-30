import fs from 'node:fs/promises';
import path from 'node:path';

const inputPath = path.join(process.cwd(), "..", "_vite-public", "cache.txt");
const items = JSON.parse( await fs.readFile(inputPath, "utf8"));
let ok = true;

for (const { title, image } of items) {
  try {
    const filename = title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + path.extname(image);
    const outputPath = path.join(process.cwd(), "..", "_vite-public", "_images-lfs", filename);
    const res = await fetch(image);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await fs.writeFile(outputPath, Buffer.from(await res.arrayBuffer()));
  } catch (err) {
    ok = false;
    console.error(`Error at: "${title}": ${err.message}`);
  }
}
if (ok) console.log("success");