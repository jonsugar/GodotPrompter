#!/usr/bin/env node
// Counts byte size and (optionally) real tokens for skills, references, and Codex personas.
// Modes:
//   default                 byte count + bytes/4 estimate
//   --tokenizer             include GPT token counts (requires optionalDependencies)
//   --markdown              output a Markdown table (for docs/token-budget.md)
//   --json                  output JSON
// Usage: node scripts/count-tokens.mjs [--tokenizer] [--markdown|--json]

import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { resolve, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
const SKILLS_DIR = join(ROOT, 'skills');
const CODEX_PERSONAS_DIR = join(ROOT, '.codex', 'agents', 'codex-for-godot');

const args = process.argv.slice(2);
const useTokenizer = args.includes('--tokenizer');
const markdown = args.includes('--markdown');
const json = args.includes('--json');

const BUDGET_BYTES = 16 * 1024;

let countGpt = null;
if (useTokenizer) {
  try {
    const tiktokenMod = await import('js-tiktoken');
    const gptEnc = tiktokenMod.encodingForModel('gpt-4');
    countGpt = (text) => gptEnc.encode(text).length;
  } catch (err) {
    console.error('Tokenizer mode requires optional dependencies:');
    console.error('  npm install js-tiktoken');
    console.error('Falling back to byte-count estimates.');
    countGpt = null;
  }
}

function listFiles() {
  const files = [];
  for (const skill of readdirSync(SKILLS_DIR)) {
    const skillDir = join(SKILLS_DIR, skill);
    if (!statSync(skillDir).isDirectory()) continue;
    const skillMd = join(skillDir, 'SKILL.md');
    if (existsSync(skillMd)) files.push({ kind: 'skill', name: skill, path: skillMd });
    const refsDir = join(skillDir, 'references');
    if (existsSync(refsDir)) {
      for (const ref of readdirSync(refsDir).filter(n => n.endsWith('.md'))) {
        files.push({ kind: 'reference', name: `${skill}/${ref}`, path: join(refsDir, ref) });
      }
    }
  }
  if (existsSync(CODEX_PERSONAS_DIR)) {
    for (const a of readdirSync(CODEX_PERSONAS_DIR).filter(n => n.endsWith('.toml'))) {
      files.push({ kind: 'persona', name: a.replace(/\.toml$/, ''), path: join(CODEX_PERSONAS_DIR, a) });
    }
  }
  return files;
}

const rows = [];
for (const f of listFiles()) {
  const text = readFileSync(f.path, 'utf8');
  const bytes = Buffer.byteLength(text, 'utf8');
  const estTokens = Math.round(bytes / 4);
  const gpt = countGpt ? countGpt(text) : null;
  const overBudget = f.kind === 'skill' && bytes >= BUDGET_BYTES;
  rows.push({ kind: f.kind, name: f.name, path: relative(ROOT, f.path).replace(/\\/g, '/'), bytes, estTokens, gpt, overBudget });
}

rows.sort((a, b) => b.bytes - a.bytes);

if (json) {
  console.log(JSON.stringify({ rows, budgetBytes: BUDGET_BYTES }, null, 2));
} else if (markdown) {
  console.log('| Kind | Name | Bytes | KB | Est. tokens | GPT | Status |');
  console.log('|---|---|---:|---:|---:|---:|---|');
  for (const r of rows) {
    const status = r.kind !== 'skill' ? '—' : (r.overBudget ? '⚠️ over budget' : '✓ under budget');
    console.log(`| ${r.kind} | ${r.name} | ${r.bytes} | ${(r.bytes/1024).toFixed(1)} | ${r.estTokens} | ${r.gpt ?? '—'} | ${status} |`);
  }
} else {
  const header = useTokenizer
    ? 'Kind        Name                                    Bytes    KB   Est.tok    GPT  Status'
    : 'Kind        Name                                    Bytes    KB   Est.tok  Status';
  console.log(header);
  console.log('-'.repeat(header.length));
  for (const r of rows) {
    const status = r.kind !== 'skill' ? '' : (r.overBudget ? 'OVER' : 'ok');
    const kb = (r.bytes/1024).toFixed(1).padStart(5);
    const name = r.name.padEnd(38);
    const bytes = String(r.bytes).padStart(7);
    const est = String(r.estTokens).padStart(7);
    if (useTokenizer) {
      const gp = String(r.gpt ?? '—').padStart(6);
      console.log(`${r.kind.padEnd(11)} ${name} ${bytes} ${kb} ${est} ${gp}  ${status}`);
    } else {
      console.log(`${r.kind.padEnd(11)} ${name} ${bytes} ${kb} ${est}  ${status}`);
    }
  }
  const overCount = rows.filter(r => r.overBudget).length;
  console.log('-'.repeat(header.length));
  console.log(`Total files: ${rows.length}. Skills over ${BUDGET_BYTES/1024} KB budget: ${overCount}.`);
}
