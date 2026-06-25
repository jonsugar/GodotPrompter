# Changelog

All notable changes to Codex for Godot will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Changed

- Reset documentation and test references around the Codex-only project identity.
- Updated token-budget documentation to use the current `scripts/count-tokens.mjs --markdown` table shape with `skill`, `reference`, and `persona` rows.
- Reframed integration tests around Codex sessions, Codex personas, and the `using-codex-for-godot` bootstrap skill.

## [Codex-only migration] - 2026-06-24

### Changed

- Renamed the project identity to Codex for Godot.
- Made Codex the only supported assistant surface for the repository.
- Replaced legacy bootstrap wording with `using-codex-for-godot`.
- Moved specialist role guidance to Codex personas under `.codex/agents/codex-for-godot/`.

### Removed

- Removed obsolete multi-platform packaging and docs from the active project narrative.
- Removed historical release-note detail that described unsupported assistant platforms or old distribution channels.

### Notes

- Earlier repository history remains available in Git for audit purposes.
- The active documentation now describes the repository as a Codex-only Godot 4.x skill pack.
