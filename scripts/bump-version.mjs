#!/usr/bin/env node
// Bumps the package version for the Codex-only repository.
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
const newVersion = process.argv[2];

if (!newVersion || !/^\d+\.\d+\.\d+$/.test(newVersion)) {
  console.error('Usage: node scripts/bump-version.mjs <major.minor.patch>');
  process.exit(1);
}

const packagePath = resolve(ROOT, 'package.json');
const json = JSON.parse(readFileSync(packagePath, 'utf8'));
const previous = json.version;

if (!previous) {
  console.error('package.json has no version field');
  process.exit(1);
}

json.version = newVersion;
writeFileSync(packagePath, JSON.stringify(json, null, 2) + '\n');

console.log(`Bumped package.json ${previous} -> ${newVersion}`);
console.log('Done. Update CHANGELOG.md, then commit and tag.');
