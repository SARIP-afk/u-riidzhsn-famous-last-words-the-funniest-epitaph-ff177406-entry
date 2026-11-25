// Write one funny tombstone epitaph to /output/entry.txt.
//
// Node 22, no dependencies, deterministic, no network. The line is a fixed
// string: the program writes exactly these bytes on every run.
//
// The line (81 chars) won a 10-candidate head-to-head against the judge
// brief: classic epitaph opening ("Here I lie"), cause of death stated
// flatly, and a double meaning on "serve" — the recipe fed four, it killed
// one. Short is good twice over here: on an exact Judge win-rate tie the
// smaller text places first, so 81 chars beats a longer line with the same
// rate. Full comparison:
// u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406-candidates.md.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Here I lie, killed by my own cooking. The recipe said serves four. It served one.";

// Gate mirror: the house gate accepts 1-150 characters of UTF-8 text, not
// only white space. Fail loudly here rather than write a line the gate
// would refuse.
if (LINE.length < 1 || LINE.length > 150 || !LINE.trim()) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-150 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, { encoding: "utf-8" });
