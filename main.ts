// The Tired Dark Lord: A 100-Word Villain Monologue
// make.fun bounty u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb
// Prints one ~100-word monologue (99 words, 577 chars) and validates the gate.

import { mkdirSync, writeFileSync } from "node:fs";

const monologue = "You stand before me at midnight, hero, sword drawn, and I— I was halfway through the siege ledgers. Thirty years I've taken cities, and tonight the map keeps folding wrong. The eastern gate falls Tuesday, the wells by Thursday, your kingdom by Sunday— if the quartermaster ever answers my letters. He doesn't. He never does. Look, the candle's drowning in its own wax, my tea went cold two hours ago, and the raven brought the same report twice. Take the sword. Take the throne. Just— sign here first, in triplicate. Even tyrants need the paperwork filed before the coronation.";

if (monologue.length < 1 || monologue.length > 600) {
  throw new Error(`monologue must be 1-600 chars, got ${monologue.length}`);
}

const words = monologue.split(/\s+/).filter(Boolean).length;
if (words < 90 || words > 110) {
  throw new Error(`monologue should be about 100 words, got ${words}`);
}

console.log(monologue);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", monologue + "\n");
