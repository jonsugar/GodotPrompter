# Contributing To Codex For Godot

Codex for Godot is a Codex-only skill repository for Godot 4.x development. Contributions should improve the quality, accuracy, installability, or maintainability of the skill pack for Codex users.

Please review [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before participating.

## Adding A Skill

Create one folder per skill:

```text
skills/<skill-name>/
  SKILL.md
  references/
```

Use kebab-case folder names. Every `SKILL.md` must start with YAML frontmatter:

```yaml
---
name: my-new-skill
description: Use when [specific trigger] - [brief scope]
---
```

The `name` must match the folder. The `description` should make it clear when Codex should load the skill.

## Skill Structure

Use this shape unless the topic calls for a tighter one:

1. Title and short scope.
2. Related skills line.
3. Numbered sections with patterns and examples.
4. GDScript first, then C# where applicable.
5. Implementation checklist at the end.

Use `gdscript` and `csharp` fenced code language tags. Target Godot 4.3+ APIs unless a section explicitly notes a newer version.

## Codex Personas

Codex persona definitions live in `.codex/agents/codex-for-godot/`. Add or update them only when a specialist workflow needs distinct routing or instructions beyond a normal skill.

Root-level `agents/*.md` files are not used in this Codex-only repository.

## Validation

Run:

```bash
node scripts/validate-skills.mjs
```

For substantial changes, also manually exercise the affected skill in a Codex session against a real or sample Godot project.

## Release Notes

Use `CHANGELOG.md` for release notes. Keep entries focused on user-visible skill, install, validation, and Codex persona changes.

## Conventions

- Skills must be self-contained and independently useful.
- Keep cross-references to real skill folders.
- Keep examples compile-ready where possible.
- Preserve GDScript and C# parity unless a skill is intentionally language-specific.
- Avoid non-Codex platform instructions, manifests, or compatibility notes.
