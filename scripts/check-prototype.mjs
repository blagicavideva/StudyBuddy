import { readFileSync } from 'node:fs';
import { Script } from 'node:vm';

const prototypes = ['prototip/index.html', 'prototip/alternativa.html'];
const required = [
  ['HTML doctype', /<!doctype html/i],
  ['Slovenian language declaration', /<html[^>]*lang="sl"/i],
  ['StudyBuddy page title', /<title>StudyBuddy\b/i],
  ['closing HTML tag', /<\/html>\s*$/i],
];

for (const path of prototypes) {
  const html = readFileSync(path, 'utf8');
  for (const [description, pattern] of required) {
    if (!pattern.test(html)) {
      throw new Error(`${path} is missing ${description}.`);
    }
  }

  const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];
  if (scripts.length === 0) {
    throw new Error(`${path} contains no inline JavaScript.`);
  }
  for (const [index, match] of scripts.entries()) {
    new Script(match[1], { filename: `${path} inline script ${index + 1}` });
  }

  console.log(`${path}: structure and ${scripts.length} inline script(s) are valid.`);
}
