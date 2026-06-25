# Codex Project Grounding

This file is for Codex agents working in this repository. It describes the current project shape and operating rules. It is not a changelog and should not track history.

## Project Identity

This repository is **Codex for Godot**: a Codex-only skill pack for Godot 4.x game development.

It is not a Godot game project. Its product surface is a set of Codex skills, supporting reference files, Codex personas, install guidance, validation scripts, and integration-test docs that help Codex give grounded Godot guidance for GDScript and C# projects.

The package metadata lives in `package.json`:

- Package name: `codex-for-godot`
- Version: `1.10.0`
- Runtime style: Node.js ES modules
- Optional tokenizer dependency: `js-tiktoken`

## Startup Routine

When starting work in this repository:

1. Read `AGENTS.md`.
2. Read this file.
3. Inspect the relevant project files for the task.
4. If the task is about this repository's skill-pack behavior, skill selection, or Codex workflow, read `skills/using-codex-for-godot/SKILL.md` and `skills/using-codex-for-godot/references/codex-tools.md`.
5. If the task touches Godot `res://` path placement, also read `skills/using-codex-for-godot/references/project-structure.md`.
6. If the task matches a domain skill, read that skill's `SKILL.md` before planning or editing.

## Repository Shape

Top-level files and directories:

- `AGENTS.md` is the Codex entrypoint for this repo.
- `README.md` is the public project overview and skill catalog.
- `CONTRIBUTING.md` defines contribution conventions for skills and personas.
- `CHANGELOG.md` contains release notes.
- `docs/token-budget.md` records the generated token/budget table.
- `docs/codex/PROJECT.md` is this current-state grounding file.
- `skills/` contains one folder per Codex skill.
- `.codex/agents/codex-for-godot/` contains Codex persona TOML files.
- `.codex/INSTALL.md` documents local installation through skills and persona symlinks.
- `scripts/` contains repository validation and maintenance helpers.
- `tests/agent-integration/` contains manual Codex session integration tests.

## Skills

Each skill lives at:

```text
skills/<skill-name>/SKILL.md
```

Optional deep-dive guidance lives under:

```text
skills/<skill-name>/references/*.md
```

The bootstrap skill is:

```text
skills/using-codex-for-godot/SKILL.md
```

The bootstrap skill is part of the skill pack, not a standing repository instruction. Read it when working on skill discovery, skill catalog behavior, or Godot development guidance that needs the pack's routing rules.

The GDD workflow skill is:

```text
skills/to-gdd/SKILL.md
```

Use `to-gdd` for engine-agnostic game idea discovery, optional reference research, GDD drafting, and the production-readiness gate before Godot-specific planning.

Before implementing, debugging, reviewing, or planning a Godot system, identify the closest matching skill and read it first. If a skill points to relevant reference files, read only the references needed for the current task.

Skill authoring conventions:

- Use kebab-case skill folder names.
- `SKILL.md` frontmatter must include `name` and `description`.
- The `name` must match the folder name.
- Keep examples grounded in Godot 4.3+ unless a newer version is explicitly called out.
- Prefer GDScript first, then C# where the topic applies to both.
- Keep each `SKILL.md` under the 16 KB budget; move long detail into `references/*.md`.

## Codex Personas

Codex personas live in:

```text
.codex/agents/codex-for-godot/
```

Current personas:

- `godot-game-producer`
- `godot-game-researcher`
- `godot-game-architect`
- `godot-game-dev`
- `godot-code-reviewer`
- `godot-shader-author`
- `godot-performance-profiler`
- `godot-animator`
- `godot-csharp-engineer`
- `godot-ui-designer`
- `godot-tools-engineer`

Use personas when a specialist lens helps. For small scoped edits, direct skill use is usually enough.

Root-level `agents/*.md` files are not part of this Codex-only repository.

## Godot Project Structure Guidance

The source of truth for recommended Godot `res://` layout is:

```text
skills/using-codex-for-godot/references/project-structure.md
```

Read it before creating, recommending, or reviewing Godot file paths.

The shared target layout for generated Godot projects is:

```text
res://
├── addons/
├── global/
├── game/
└── game_menu/
```

Important rules:

- Use `snake_case` for folders and files.
- Use `PascalCase` only for C# class names.
- Keep files in domain-owned paths.
- Co-locate entity-specific scenes, scripts, resources, themes, and assets under the owning entity.
- Create only folders that the current entity or feature needs.

The deterministic starter scaffold lives under:

```text
skills/godot-project-setup/assets/starter-project/
```

## Validation

Use the smallest validation that matches the work. Common repo-level checks:

```bash
node scripts/validate-skills.mjs
node scripts/count-tokens.mjs --markdown
git diff --check
git status --short --untracked-files=all
```

Expected `validate-skills.mjs` baseline:

```text
0 error(s), 13 warning(s).
```

The current warnings are accepted GDScript-only C# parity warnings for:

- `beehave`
- `gdscript-advanced`
- `gdscript-patterns`

If this baseline changes, investigate before treating the repo as clean.

`docs/token-budget.md` should be regenerated from:

```bash
node scripts/count-tokens.mjs --markdown
```

whenever skill, reference, or persona sizes change in a way that affects the table.

## Installation Shape

The documented local install shape is:

```bash
git clone https://github.com/jonsugar/codex-for-godot.git ~/.codex/codex-for-godot
mkdir -p ~/.codex/skills ~/.codex/agents
ln -s ~/.codex/codex-for-godot/skills ~/.codex/skills/codex-for-godot
ln -s ~/.codex/codex-for-godot/.codex/agents/codex-for-godot ~/.codex/agents/codex-for-godot
```

Persona installation is required for the complete Codex for Godot experience, not optional.

## Working Rules

- Keep this repo Codex-only. Do not add compatibility guidance for other assistant platforms.
- Preserve the project identity as `Codex for Godot`.
- Prefer focused edits over broad rewrites unless the user explicitly asks for a repo-wide change.
- Do not change unrelated files in a dirty worktree.
- Use `rg` for search.
- Use `apply_patch` for manual file edits.
- For substantial skill edits, run `node scripts/validate-skills.mjs`.
- For size-sensitive edits, run `node scripts/count-tokens.mjs --markdown`.
- After files are added or changed, check whether this file still accurately describes the current repo. If it does not, update it in the same work session.

## What Belongs In This File

Keep this file limited to current-state grounding that helps Codex start future sessions quickly.

Good additions:

- Current repository identity or scope.
- Current directory layout.
- Current validation expectations.
- Current install shape.
- Current conventions that affect how Codex should work.

Do not add:

- Chronological change history.
- Release notes.
- Completed-task summaries.
- Old project names except where needed to identify paths.
- Temporary plans or todos.
