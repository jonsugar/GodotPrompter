# Installing Codex For Godot

Codex for Godot is installed from your GitHub clone by symlinking its skills and optional Codex personas into Codex's discovery folders.

## Prerequisites

- Git
- Codex

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jonsugar/codex-for-godot.git ~/.codex/codex-for-godot
   ```

2. Create the skills symlink:

   ```bash
   mkdir -p ~/.codex/skills
   ln -s ~/.codex/codex-for-godot/skills ~/.codex/skills/codex-for-godot
   ```

   Windows PowerShell:

   ```powershell
   New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.codex\skills"
   cmd /c mklink /J "$env:USERPROFILE\.codex\skills\codex-for-godot" "$env:USERPROFILE\.codex\codex-for-godot\skills"
   ```

3. Optionally create the Codex persona symlink:

   ```bash
   mkdir -p ~/.codex/agents
   ln -s ~/.codex/codex-for-godot/.codex/agents/codex-for-godot ~/.codex/agents/codex-for-godot
   ```

   Windows PowerShell:

   ```powershell
   New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.codex\agents"
   cmd /c mklink /J "$env:USERPROFILE\.codex\agents\codex-for-godot" "$env:USERPROFILE\.codex\codex-for-godot\.codex\agents\codex-for-godot"
   ```

4. Restart Codex.

## Verify

```bash
ls -la ~/.codex/skills/codex-for-godot
ls -la ~/.codex/agents/codex-for-godot
```

## Updating

```bash
cd ~/.codex/codex-for-godot
git pull
```

## Uninstalling

```bash
rm ~/.codex/skills/codex-for-godot
rm ~/.codex/agents/codex-for-godot
```

Optionally delete the clone:

```bash
rm -rf ~/.codex/codex-for-godot
```
