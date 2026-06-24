# scripts/

Local helpers for the Codex for Godot repo. All scripts are Node.js 20+ ES modules with no required external dependencies.

## validate-skills.mjs

Validates `skills/*/SKILL.md` and `.codex/agents/codex-for-godot/*.toml` for required structure and resolvable skill references.

```bash
node scripts/validate-skills.mjs            # human-readable report
node scripts/validate-skills.mjs --json     # machine-readable for CI
```

Exit code: 1 if any errors, 0 otherwise. Warnings do not fail.

## bump-version.mjs

Bumps the version string in `package.json`.

```bash
node scripts/bump-version.mjs 1.5.0
```

Update `CHANGELOG.md`, commit, tag, and push after bumping.

## count-tokens.mjs

Counts byte size and estimated tokens for skills, references, and Codex personas.

```bash
node scripts/count-tokens.mjs
node scripts/count-tokens.mjs --markdown
node scripts/count-tokens.mjs --json
```

`--tokenizer` uses `js-tiktoken` when installed:

```bash
npm install
node scripts/count-tokens.mjs --tokenizer --markdown
```

## Release workflow

`.github/workflows/release.yml` runs automatically on tag pushes matching `v*.*.*`. It:

1. Verifies version consistency between the tag and `package.json`
2. Runs `validate-skills.mjs`
3. Creates the GitHub release using the matching `CHANGELOG.md` section as the body
