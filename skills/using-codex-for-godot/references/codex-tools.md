# Codex Workflow Reference

Use this reference when a Codex for Godot skill mentions planning, file edits, shell commands, validation, or specialist personas.

## Core Practices

| Need | Codex practice |
|------|----------------|
| Read files | Open the relevant repo files before advising or editing |
| Edit files | Use the available Codex file-editing tools and keep changes scoped |
| Search | Prefer `rg` or another fast repository search |
| Run commands | Use the shell from the project root and report meaningful failures |
| Track multi-step work | Use Codex task planning when the work has several dependent steps |
| Use a skill | Read the matching `skills/<name>/SKILL.md` and follow it directly |
| Use references | Read only the `references/*.md` files the active skill points to |
| Use a persona | Use a `.codex/agents/codex-for-godot/*.toml` persona only when specialist routing helps |

## Working With Skills

Codex for Godot skills are plain Markdown files with YAML frontmatter. The `description` field tells Codex when a skill applies. The body contains the workflow, examples, and implementation checklist.

When a request matches a skill:

1. Read the skill body before acting.
2. Read relevant local project files.
3. Use the skill examples as patterns, adapted to the user's codebase.
4. Run the smallest useful validation command.
5. Summarize which files changed and what was verified.

## Working With Personas

Codex personas live in:

```text
.codex/agents/codex-for-godot/
```

Each persona is a Codex TOML file with a role description and developer instructions. A complete Codex for Godot installation includes these personas alongside the skills. Prefer direct skill use for small tasks, and use a persona when the work clearly benefits from a specialist lens such as architecture, code review, UI, animation, C#, shaders, performance, or editor tooling.

## Repository Install Shape

Recommended local install:

```bash
git clone https://github.com/jonsugar/codex-for-godot.git ~/.codex/codex-for-godot
mkdir -p ~/.codex/skills ~/.codex/agents
ln -s ~/.codex/codex-for-godot/skills ~/.codex/skills/codex-for-godot
ln -s ~/.codex/codex-for-godot/.codex/agents/codex-for-godot ~/.codex/agents/codex-for-godot
```

Restart Codex after installing or changing symlinks.

## Validation

For repository maintenance, run:

```bash
node scripts/validate-skills.mjs
```

For Godot project work, prefer the smallest validation command available in the user's project, such as a Godot build, C# build, GUT/gdUnit4 test, or targeted scene run.
