// ESM file, so must use `import()`
import fs from "node:fs";
import path from "node:path";

// Merge all files in the directory that match the pattern
const pattern = /\.css$/;

const files = fs.readdirSync(path.resolve("./"));

const colors = await Promise.all(
  files
    .filter((file) => pattern.test(file))
    .map((file) => {
      return fs.promises.readFile(file);
    }),
);

fs.writeFileSync(path.resolve("./index.css"), colors.join("\n"));
