import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Waiter Monday took my weekend order, brought back an alarm clock.";

// Self-check the competition gate before writing: UTF-8 text, 1-180 chars,
// not only whitespace, at most 25 words, a single line.
const words = LINE.split(/\s+/).filter(Boolean);
if (
  LINE.length < 1 ||
  LINE.length > 180 ||
  LINE.trim().length === 0 ||
  words.length > 25 ||
  LINE.includes("\n")
) {
  throw new Error("entry violates the competition gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
