// The Moon Finally Answers Back — make.fun one-line entry.
// Writes a single original line, in the voice of the Moon, to
// $MAKEFUN_OUTPUT_DIR/entry.txt (fallback: /output/entry.txt).
// Node stdlib only. No network, no secrets, no input files.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Four billion years of wishes, howls, and 3 a.m. promises, and the answer is still no. I did move the oceans twice a day, though. You're welcome.";

if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`entry line must be 1-240 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote entry.txt (${LINE.length} chars)`);
