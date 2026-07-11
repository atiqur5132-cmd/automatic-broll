import fs from "fs";
import path from "path";

const pubDir = path.resolve("public");
const files = fs.readdirSync(pubDir);
console.log("Files in public:", files);

for (const f of files) {
  const stat = fs.statSync(path.join(pubDir, f));
  console.log(` - ${f}: ${(stat.size / 1024 / 1024).toFixed(2)} MB`);
}
